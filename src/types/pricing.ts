export type NetworkTech = '5G' | '4G LTE' | 'LTE-M' | 'NB-IoT' | '3G' | '2G'
export type Region = string

export interface ConnectivityConfig {
  technologies: NetworkTech[]
  regions: Region[]
  dataUsageMB: number
  deviceCount: number
}

export interface PricingQuote {
  totalMonthlySpend: number
  dataCost: number
  mrcCost: number
  averageRatePerMB: number
  appliedMargin: number
  tierName: string
  regionStats?: {
    medianDataRate: number
    medianCarrierFee: number
  }
  effectiveRatePerMB: number
}
