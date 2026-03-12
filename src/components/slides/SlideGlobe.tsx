'use client'

import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import type { SlideProps } from '@/types/slide'
import type { Region } from '../globe/GlobeScene'

// Dynamic import to prevent SSR issues with Three.js
const GlobeScene = dynamic(
  () => import('../globe/GlobeScene').then(mod => ({ default: mod.GlobeScene })),
  { ssr: false }
)

const continentData: Record<string, { count: number; carriers: string[]; tech: string }> = {
  'North America': {
    count: 23,
    carriers: ['AT&T', 'T-Mobile', 'Verizon', 'Rogers', 'Telcel', 'Digicel', 'Claro'],
    tech: '5G, 4G LTE, LTE-M, NB-IoT'
  },
  'South America': {
    count: 12,
    carriers: ['Claro', 'Telefonica', 'TIM', 'Entel', 'Tigo', 'Personal'],
    tech: '4G LTE, CAT-M'
  },
  'Europe': {
    count: 45,
    carriers: ['Vodafone', 'Orange', 'Deutsche Telekom', 'O2', 'Telefonica', 'Telenor', 'Telia', 'Swisscom'],
    tech: '4G LTE, 5G, LTE-M, NB-IoT'
  },
  'Asia': {
    count: 38,
    carriers: ['China Mobile', 'NTT Docomo', 'SoftBank', 'Singtel', 'SK Telecom', 'Airtel'],
    tech: '4G LTE, LTE-M'
  },
  'Africa': {
    count: 32,
    carriers: ['MTN', 'Airtel', 'Orange', 'Vodacom', 'Etisalat'],
    tech: '4G LTE, 3G'
  },
  'Oceania': {
    count: 5,
    carriers: ['Telstra', 'Optus', 'Vodafone', 'Spark', 'Digicel'],
    tech: '4G LTE'
  },
  'Middle East': {
    count: 18,
    carriers: ['Zain', 'Ooredoo', 'STC', 'Etisalat', 'du', 'Mobily'],
    tech: '4G LTE, 5G, NB-IoT'
  }
}

// Countries by region for search
const countriesByRegion: Record<string, string[]> = {
  'North America': ['United States', 'Canada', 'Mexico', 'Costa Rica', 'Panama', 'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua', 'Belize', 'Dominican Republic', 'Haiti', 'Jamaica', 'Trinidad & Tobago', 'Bahamas', 'Barbados', 'Puerto Rico', 'Cuba', 'Bermuda', 'Cayman Islands', 'Aruba', 'Curaçao', 'Martinique'],
  'South America': ['Brazil', 'Argentina', 'Colombia', 'Chile', 'Peru', 'Ecuador', 'Venezuela', 'Bolivia', 'Paraguay', 'Uruguay', 'Guyana', 'Suriname'],
  'Europe': ['United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Ireland', 'Portugal', 'Poland', 'Czech Republic', 'Romania', 'Greece', 'Hungary', 'Croatia', 'Bulgaria', 'Slovakia', 'Slovenia', 'Lithuania', 'Latvia', 'Estonia', 'Luxembourg', 'Malta', 'Cyprus', 'Iceland', 'Serbia', 'Bosnia', 'Montenegro', 'North Macedonia', 'Albania', 'Moldova', 'Ukraine', 'Turkey', 'Georgia'],
  'Asia': ['China', 'Japan', 'South Korea', 'India', 'Indonesia', 'Thailand', 'Vietnam', 'Philippines', 'Malaysia', 'Singapore', 'Taiwan', 'Hong Kong', 'Bangladesh', 'Pakistan', 'Sri Lanka', 'Myanmar', 'Cambodia', 'Laos', 'Nepal', 'Mongolia', 'Maldives', 'Brunei', 'Timor-Leste', 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan', 'Azerbaijan', 'Armenia'],
  'Africa': ['South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Ghana', 'Tanzania', 'Ethiopia', 'Uganda', 'Rwanda', 'Senegal', 'Ivory Coast', 'Cameroon', 'DR Congo', 'Morocco', 'Tunisia', 'Algeria', 'Mozambique', 'Zimbabwe', 'Zambia', 'Botswana', 'Namibia', 'Mauritius', 'Madagascar', 'Mali', 'Burkina Faso', 'Niger', 'Chad', 'Angola', 'Gabon', 'Benin', 'Togo', 'Sierra Leone'],
  'Oceania': ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea', 'Samoa'],
  'Middle East': ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Jordan', 'Lebanon', 'Iraq', 'Iran', 'Israel', 'Palestine', 'Yemen', 'Syria'],
}

const allCountries = Object.entries(countriesByRegion).flatMap(([region, countries]) =>
  countries.map(c => ({ country: c, region }))
)

const ContinentCenters: Record<string, { lat: number; lon: number }> = {
  'North America': { lat: 45, lon: -100 },
  'South America': { lat: -15, lon: -60 },
  'Europe': { lat: 50, lon: 15 },
  'Africa': { lat: 0, lon: 20 },
  'Asia': { lat: 40, lon: 95 },
  'Oceania': { lat: -20, lon: 135 },
  'Middle East': { lat: 25, lon: 45 },
}

const EXCLUDED = new Set(['Unknown Region', 'Antarctica'])

export default function SlideGlobe({ personalization, onNext, onPrev }: SlideProps) {
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([])
  const [rotationSpeed, setRotationSpeed] = useState(0.3)
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<{ country: string; region: string } | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  const handleSelect = useCallback((region: Region) => {
    if (EXCLUDED.has(region.name)) return
    setSelectedRegions(prev => {
      const exists = prev.find(r => r.name === region.name)
      if (exists) return prev.filter(r => r.name !== region.name)
      return [...prev, region]
    })
    setSelectedCountry(null)
  }, [])

  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    return allCountries.filter(c => c.country.toLowerCase().includes(q)).slice(0, 8)
  }, [searchQuery])

  const handleCountrySelect = useCallback((item: { country: string; region: string }) => {
    setSelectedCountry(item)
    setSearchQuery(item.country)
    setIsSearchFocused(false)
    // Also highlight the region on the globe
    const regionData = continentData[item.region]
    if (regionData) {
      const coords = ContinentCenters[item.region] ?? { lat: 0, lon: 0 }
      setSelectedRegions([{ name: item.region, lat: coords.lat, lon: coords.lon }])
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const totalCarriers = selectedRegions.reduce((acc, r) => acc + (continentData[r.name]?.count || 0), 0)
  const singleRegion = selectedRegions.length === 1 ? selectedRegions[0] : null
  const singleData = singleRegion ? continentData[singleRegion.name] : null
  const displayCoords = singleRegion ? (ContinentCenters[singleRegion.name] ?? null) : null

  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Full-screen globe */}
      <div className="absolute inset-0">
        {isLoaded ? null : (
          <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ background: '#00040f' }}>
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-[#bffd11]/20 border-t-[#bffd11] rounded-full animate-spin mx-auto mb-4" />
              <p className="eyebrow" style={{ color: 'var(--lime)', fontSize: '10px' }}>Initializing Network Map</p>
            </div>
          </div>
        )}
        <GlobeScene
          onSelect={handleSelect}
          selectedRegions={selectedRegions}
          rotationSpeed={rotationSpeed}
          onLoaded={() => setIsLoaded(true)}
        />
      </div>

      {/* Header overlay */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-8 left-10 z-20 pointer-events-none"
      >
        <p className="eyebrow mb-2">Global Coverage</p>
        <h2 className="font-roobert" style={{ fontSize: '36px', fontWeight: 600, color: 'white', lineHeight: 1.1 }}>
          <span style={{ color: 'var(--lime)' }}>550+ carriers</span><br />
          in 190+ countries
        </h2>
      </motion.div>

      {/* Country Search — bottom left */}
      <motion.div
        ref={searchRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-12 left-10 z-30"
        style={{ width: '280px' }}
      >
        {/* Search input */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0,4,15,0.9)',
              border: isSearchFocused ? '1px solid var(--lime)' : '1px solid rgba(255,255,255,0.12)',
              borderRadius: selectedCountry ? '8px 8px 0 0' : '8px',
              padding: '10px 14px',
              backdropFilter: 'blur(12px)',
              transition: 'border-color 0.2s',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(191,253,17,0.6)" strokeWidth="2" style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setSelectedCountry(null); setIsSearchFocused(true) }}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search country coverage..."
              className="font-roobert"
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '13px',
                width: '100%',
                padding: 0,
              }}
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setSelectedCountry(null) }}
                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: '14px', padding: '0 2px', lineHeight: 1, flexShrink: 0 }}
              >
                ×
              </button>
            )}
          </div>

          {/* Search results dropdown */}
          <AnimatePresence>
            {isSearchFocused && filteredCountries.length > 0 && !selectedCountry && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'rgba(6,10,24,0.96)',
                  border: '1px solid rgba(191,253,17,0.2)',
                  borderTop: 'none',
                  borderRadius: '0 0 8px 8px',
                  overflow: 'hidden',
                  maxHeight: '200px',
                  overflowY: 'auto',
                  zIndex: 10,
                }}
              >
                {filteredCountries.map((item, i) => (
                  <button
                    key={item.country}
                    onClick={() => handleCountrySelect(item)}
                    className="font-roobert"
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '8px 14px',
                      background: 'none',
                      border: 'none',
                      borderBottom: i < filteredCountries.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      cursor: 'pointer',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'background 0.12s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(191,253,17,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
                  >
                    <span>{item.country}</span>
                    <span className="font-mono-brand" style={{ fontSize: '9px', color: 'rgba(83,242,250,0.6)' }}>{item.region}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Selected country result card */}
        <AnimatePresence>
          {selectedCountry && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'rgba(0,4,15,0.9)',
                border: '1px solid rgba(191,253,17,0.25)',
                borderTop: 'none',
                borderRadius: '0 0 8px 8px',
                padding: '12px 14px',
                backdropFilter: 'blur(12px)',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--lime)', boxShadow: '0 0 8px rgba(191,253,17,0.5)' }} />
                <span className="font-roobert" style={{ color: 'var(--lime)', fontWeight: 600, fontSize: '13px' }}>
                  {selectedCountry.country}
                </span>
                <span className="font-mono-brand" style={{ fontSize: '9px', color: 'rgba(83,242,250,0.7)', marginLeft: 'auto' }}>
                  {selectedCountry.region}
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{
                  background: 'rgba(191,253,17,0.06)',
                  border: '1px solid rgba(191,253,17,0.12)',
                  borderRadius: '4px',
                  padding: '6px 8px',
                }}>
                  <span className="font-mono-brand" style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '2px' }}>Status</span>
                  <span className="font-roobert" style={{ fontSize: '12px', color: 'var(--lime)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Covered
                  </span>
                </div>
                <div style={{
                  background: 'rgba(191,253,17,0.06)',
                  border: '1px solid rgba(191,253,17,0.12)',
                  borderRadius: '4px',
                  padding: '6px 8px',
                }}>
                  <span className="font-mono-brand" style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '2px' }}>Tech</span>
                  <span className="font-mono-brand" style={{ fontSize: '10px', color: 'white', lineHeight: 1.3 }}>
                    {continentData[selectedCountry.region]?.tech || '4G LTE'}
                  </span>
                </div>
              </div>
              {continentData[selectedCountry.region] && (
                <div style={{ marginTop: '6px', display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                  {continentData[selectedCountry.region].carriers.slice(0, 4).map((c, i) => (
                    <span key={i} style={{
                      fontSize: '8px',
                      color: 'var(--lime)',
                      background: 'rgba(191,253,17,0.08)',
                      border: '1px solid rgba(191,253,17,0.15)',
                      padding: '2px 5px',
                      borderRadius: '2px',
                      fontFamily: 'monospace',
                    }}>{c}</span>
                  ))}
                  {continentData[selectedCountry.region].carriers.length > 4 && (
                    <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', padding: '2px 4px', fontFamily: 'monospace' }}>
                      +{continentData[selectedCountry.region].carriers.length - 4} more
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Stats bar top-right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute top-8 right-10 z-20 flex flex-col gap-2"
      >
        {/* Rotation control */}
        <div style={{
          background: 'rgba(0,4,15,0.85)',
          border: '1px solid rgba(191,253,17,0.3)',
          borderRadius: '4px',
          padding: '12px 16px',
          backdropFilter: 'blur(8px)',
          minWidth: '180px'
        }}>
          <div className="flex justify-between items-center mb-2">
            <label className="eyebrow" style={{ fontSize: '9px' }}>Rotation Speed</label>
            <span className="font-mono-brand" style={{ fontSize: '10px', color: 'var(--lime)' }}>{rotationSpeed.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="0" max="5" step="0.1"
            value={rotationSpeed}
            onChange={e => setRotationSpeed(parseFloat(e.target.value))}
            className="w-full cursor-pointer"
            style={{ accentColor: 'var(--lime)', height: '3px' }}
          />
        </div>

        {/* Selected region info */}
        {selectedRegions.length > 0 && (
          <div style={{
            background: 'rgba(0,4,15,0.9)',
            border: '1px solid var(--lime)',
            borderRadius: '4px',
            padding: '16px',
            backdropFilter: 'blur(12px)',
            minWidth: '220px',
            maxWidth: '260px',
          }}>
            <div className="flex justify-between items-start mb-3">
              <div>
                {singleRegion ? (
                  <h3 className="font-roobert" style={{ color: 'var(--lime)', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {singleRegion.name}
                  </h3>
                ) : (
                  <h3 className="font-roobert" style={{ color: 'var(--lime)', fontWeight: 700, fontSize: '14px' }}>
                    Multi-Region
                  </h3>
                )}
                {displayCoords && (
                  <span style={{ fontSize: '9px', color: 'rgba(191,253,17,0.7)', fontFamily: 'monospace', border: '1px solid rgba(191,253,17,0.3)', padding: '1px 5px', borderRadius: '2px', display: 'inline-block', marginTop: '4px' }}>
                    {Math.abs(displayCoords.lat).toFixed(1)}°{displayCoords.lat >= 0 ? 'N' : 'S'}, {Math.abs(displayCoords.lon).toFixed(1)}°{displayCoords.lon >= 0 ? 'E' : 'W'}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedRegions([])}
                style={{ color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', lineHeight: 1, padding: '2px' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >×</button>
            </div>

            <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(191,253,17,0.5), transparent)', marginBottom: '12px' }} />

            {singleData ? (
              <div className="space-y-2">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ background: 'rgba(191,253,17,0.08)', border: '1px solid rgba(191,253,17,0.15)', borderRadius: '4px', padding: '8px' }}>
                    <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '3px' }}>Tech</span>
                    <span style={{ fontSize: '10px', color: 'white', fontFamily: 'monospace', lineHeight: 1.3 }}>{singleData.tech}</span>
                  </div>
                  <div style={{ background: 'rgba(191,253,17,0.08)', border: '1px solid rgba(191,253,17,0.15)', borderRadius: '4px', padding: '8px' }}>
                    <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '3px' }}>Carriers</span>
                    <span style={{ fontSize: '20px', color: 'var(--lime)', fontWeight: 700, lineHeight: 1 }}>{singleData.count}</span>
                  </div>
                </div>
                <div style={{ background: 'rgba(191,253,17,0.06)', border: '1px solid rgba(191,253,17,0.12)', borderRadius: '4px', padding: '8px' }}>
                  <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>Sample Carriers</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {singleData.carriers.map((c, i) => (
                      <span key={i} style={{ fontSize: '9px', color: 'var(--lime)', background: 'rgba(191,253,17,0.1)', border: '1px solid rgba(191,253,17,0.2)', padding: '2px 6px', borderRadius: '2px', fontFamily: 'monospace' }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ background: 'rgba(191,253,17,0.08)', border: '1px solid rgba(191,253,17,0.15)', borderRadius: '4px', padding: '8px', textAlign: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '3px' }}>Total Carriers</span>
                  <span style={{ fontSize: '28px', color: 'var(--lime)', fontWeight: 700 }}>{totalCarriers}</span>
                </div>
                {selectedRegions.map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.6)', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span>{r.name}</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', fontSize: '10px' }}>{continentData[r.name]?.count || 0} carriers</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Bottom instruction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
      >
        <p className="eyebrow" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>
          Click any region to explore carrier coverage
        </p>
      </motion.div>

      {/* Status indicator */}
      <div className="absolute bottom-4 right-8 z-20 pointer-events-none">
        <p className="font-mono-brand" style={{ fontSize: '9px', color: 'rgba(191,253,17,0.5)', letterSpacing: '0.2em' }}>SYSTEM: ONLINE</p>
      </div>
    </div>
  )
}
