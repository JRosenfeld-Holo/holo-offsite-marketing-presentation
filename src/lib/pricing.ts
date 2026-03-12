import { ConnectivityConfig, PricingQuote } from '@/types/pricing'
import { CSV_SOURCE } from '@/data/pricingData'

const COLUMN_MAPPING = (usageMB: number): { margin: number; index: number; tier: string } => {
  if (usageMB <= 50) return { margin: 0.80, index: 16, tier: '1-50 MB' }
  if (usageMB <= 500) return { margin: 0.70, index: 14, tier: '51-500 MB' }
  if (usageMB <= 1000) return { margin: 0.65, index: 13, tier: '501-1000 MB' }
  if (usageMB <= 5000) return { margin: 0.55, index: 11, tier: '1001-5000 MB' }
  if (usageMB <= 10000) return { margin: 0.50, index: 10, tier: '5001-10000 MB' }
  return { margin: 0.40, index: 8, tier: '10001+ MB' }
}

const parseCSV = (csv: string): string[][] => {
  const rows: string[][] = []
  let current: string[] = []
  let cell = ''
  let inQuotes = false
  for (let i = 0; i < csv.length; i++) {
    const char = csv[i]
    if (inQuotes) {
      if (char === '"' && csv[i + 1] === '"') { cell += '"'; i++ }
      else if (char === '"') inQuotes = false
      else cell += char
    } else {
      if (char === '"') inQuotes = true
      else if (char === ',') { current.push(cell.trim()); cell = '' }
      else if (char === '\n') { current.push(cell.trim()); rows.push(current); current = []; cell = '' }
      else if (char !== '\r') cell += char
    }
  }
  if (cell || current.length) { current.push(cell.trim()); rows.push(current) }
  return rows
}

export const PRICING_DATA: string[][] = parseCSV(CSV_SOURCE).slice(4)

const COUNTRY_NAME_MAPPING: Record<string, string> = {
  'Korea (South)': 'South Korea',
  'South Korea': 'South Korea',
  'Congo (DRC)': 'Congo-Kinshasa',
  'Congo (Republic)': 'Congo-Brazzaville',
  "Antigua & Barbuda": 'Antigua and Barbuda',
  "Bosnia & Herzegovina": 'Bosnia and Herzegovina',
  "Saint Kitts and Nevis": 'Saint Kitts and Nevis',
  "Saint Lucia": 'Saint Lucia',
  "Saint Vincent": 'Saint Vincent and the Grenadines',
  "Trinidad & Tobago": 'Trinidad and Tobago',
  "Turks & Caicos": 'Turks and Caicos Islands',
  "Ivory Coast": 'Ivory Coast',
  "Côte d'Ivoire": 'Ivory Coast'
}

const REGIONAL_MAPPING: Record<string, string[]> = {
  'North America': ['United States', 'Canada', 'Mexico', 'Puerto Rico', 'Bahamas', 'Bermuda'],
  'Europe': ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Netherlands', 'Norway', 'Sweden', 'Switzerland', 'Austria', 'Belgium', 'Denmark', 'Finland', 'Ireland', 'Portugal', 'Greece', 'Poland', 'Czech Republic', 'Hungary', 'Romania', 'Ukraine'],
  'Asia': ['China', 'Japan', 'South Korea', 'India', 'Singapore', 'Vietnam', 'Thailand', 'Israel', 'Saudi Arabia', 'Turkey', 'United Arab Emirates', 'Indonesia', 'Malaysia', 'Hong Kong', 'Taiwan'],
  'Africa': ['South Africa', 'Egypt', 'Nigeria', 'Kenya', 'Morocco', 'Ghana', 'Ethiopia', 'Tanzania', 'Algeria', 'Tunisia'],
  'Oceania': ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea', 'Guam'],
  'South America': ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Ecuador', 'Venezuela']
}

const calculateMedian = (values: number[]): number => {
  if (values.length === 0) return 0
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

export const calculatePricing = (config: ConnectivityConfig): PricingQuote => {
  const { regions, dataUsageMB, deviceCount } = config
  const totalFleetDataMB = dataUsageMB * deviceCount
  const mapping = COLUMN_MAPPING(totalFleetDataMB)

  const getMedianRates = (locationList: string[]) => {
    const countryLowestRates: number[] = []
    const countryFees: number[] = []
    let countriesToScan: string[] = []

    locationList.forEach(loc => {
      if (REGIONAL_MAPPING[loc]) countriesToScan.push(...REGIONAL_MAPPING[loc])
      else if (loc === 'Global') countriesToScan = Array.from(new Set(PRICING_DATA.map(r => r[0])))
      else countriesToScan.push(loc)
    })

    countriesToScan.forEach(countryName => {
      const mappedName = COUNTRY_NAME_MAPPING[countryName] || countryName
      const rows = PRICING_DATA.filter(r => r[0]?.toLowerCase().trim() === mappedName.toLowerCase().trim())
      if (rows.length > 0) {
        const rates = rows.map(r => parseFloat(r[mapping.index])).filter(v => !isNaN(v) && v > 0)
        if (rates.length > 0) countryLowestRates.push(Math.min(...rates))
        const fees = rows.map(r => parseFloat(r[5])).filter(v => !isNaN(v))
        if (fees.length > 0) countryFees.push(calculateMedian(fees))
      }
    })

    const finalMedianRate = calculateMedian(countryLowestRates)
    return {
      medianRate: finalMedianRate > 0 ? finalMedianRate : 0.02,
      medianFee: calculateMedian(countryFees) || 0
    }
  }

  const targetLocations = regions.length > 0 ? regions : ['Global']
  const { medianRate, medianFee } = getMedianRates(targetLocations)

  const platformFee = 1.00 * mapping.margin
  const appliedMRC = platformFee + medianFee
  const dataCost = (medianRate * dataUsageMB) * deviceCount
  const mrcCost = appliedMRC * deviceCount
  const totalMonthlySpend = dataCost + mrcCost
  const totalMB = dataUsageMB * deviceCount
  const effectiveRatePerMB = totalMB > 0 ? totalMonthlySpend / totalMB : 0

  return {
    totalMonthlySpend: Math.max(0, totalMonthlySpend),
    dataCost,
    mrcCost,
    averageRatePerMB: medianRate,
    appliedMargin: mapping.margin,
    tierName: mapping.tier,
    regionStats: { medianDataRate: medianRate, medianCarrierFee: medianFee },
    effectiveRatePerMB
  }
}
