'use client'

import { useState, useMemo } from 'react'
import { calculatePricing } from '@/lib/pricing'
import { formatCurrency } from '@/lib/formatters'
import type { ConnectivityConfig, NetworkTech } from '@/types/pricing'
import { Check, ChevronDown, X, Search } from 'lucide-react'

interface Props {
  prospectName?: string
}

const TECHS: NetworkTech[] = ['5G', '4G LTE', 'LTE-M', 'NB-IoT', '3G', '2G']
const CONTINENTS = ['Global', 'North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceania']
const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
  'Bahamas', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Bosnia and Herzegovina', 'Brazil', 'Brunei', 'Bulgaria',
  'Cambodia', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Croatia', 'Cyprus', 'Czech Republic',
  'Denmark', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Estonia', 'Ethiopia',
  'Finland', 'France', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Guatemala',
  'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Israel', 'Italy',
  'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Korea (South)', 'Kuwait', 'Kyrgyzstan',
  'Latvia', 'Lebanon', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malaysia', 'Malta', 'Mexico',
  'Moldova', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands',
  'New Zealand', 'Nicaragua', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Paraguay', 'Peru',
  'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Rwanda', 'Saudi Arabia', 'Senegal',
  'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan',
  'Sweden', 'Switzerland', 'Taiwan', 'Tanzania', 'Thailand', 'Tunisia', 'Turkey', 'Uganda',
  'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
  'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
]

export default function PricingCalculator({ prospectName }: Props) {
  const [config, setConfig] = useState<ConnectivityConfig>({
    technologies: ['4G LTE'],
    regions: ['United States'],
    dataUsageMB: 250,
    deviceCount: 1000,
  })
  const [dataUnit, setDataUnit] = useState<'MB' | 'GB'>('MB')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const pricing = useMemo(() => calculatePricing(config), [config])

  const toggleTech = (tech: NetworkTech) => {
    setConfig(prev => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter(t => t !== tech)
        : [...prev.technologies, tech]
    }))
  }

  const toggleRegion = (region: string) => {
    setConfig(prev => ({
      ...prev,
      regions: prev.regions.includes(region)
        ? prev.regions.filter(r => r !== region)
        : [...prev.regions, region]
    }))
  }

  const dataDisplayValue = dataUnit === 'MB' ? config.dataUsageMB : parseFloat((config.dataUsageMB / 1024).toFixed(4))

  const filteredContinents = CONTINENTS.filter(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
  const filteredCountries = COUNTRIES.filter(c => c.toLowerCase().includes(searchQuery.toLowerCase()))

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '6px',
    color: 'white',
    fontFamily: 'Roobert, sans-serif',
    padding: '8px 12px',
    width: '100%',
    outline: 'none',
    fontSize: '13px',
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%' }}>
      {/* LEFT: Configuration */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: '22px',
        minWidth: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <div style={{ width: '32px', height: '32px', background: 'rgba(191,253,17,0.12)', border: '1px solid rgba(191,253,17,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="16" height="16" fill="none" stroke="var(--lime)" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 6l11 11 4-4 7 7" /><path d="M17 6h4v4" /></svg>
          </div>
          <div style={{ minWidth: 0 }}>
            <h3 className="font-roobert" style={{ color: 'white', fontWeight: 600, fontSize: '14px', lineHeight: 1.2 }}>Connectivity Profile</h3>
            <p className="eyebrow" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)' }}>Configure your fleet</p>
          </div>
        </div>

        {/* Network Tech */}
        <div style={{ marginBottom: '16px' }}>
          <label className="eyebrow" style={{ fontSize: '10px', display: 'block', marginBottom: '8px' }}>Network Technology</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {TECHS.map(tech => {
              const active = config.technologies.includes(tech)
              return (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className="cursor-pointer transition-all font-mono-brand"
                  style={{
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    border: active ? '2px solid var(--lime)' : '2px solid rgba(255,255,255,0.1)',
                    background: active ? 'var(--lime)' : 'transparent',
                    color: active ? '#00040f' : 'rgba(255,255,255,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {active && <Check size={10} strokeWidth={3} />}
                  {tech}
                </button>
              )
            })}
          </div>
        </div>

        {/* Coverage Zones */}
        <div style={{ marginBottom: '16px', position: 'relative', zIndex: isDropdownOpen ? 50 : 'auto' }}>
          <label className="eyebrow" style={{ fontSize: '10px', display: 'block', marginBottom: '8px' }}>Coverage Zones</label>
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '6px',
              minHeight: '40px',
              cursor: 'text',
              position: 'relative',
            }}
            onClick={() => setIsDropdownOpen(true)}
          >
            <div style={{ padding: '6px 32px 6px 8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {config.regions.length === 0 && !isDropdownOpen && (
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', padding: '3px' }}>Select regions or countries…</span>
              )}
              {config.regions.map(r => (
                <span key={r} style={{ background: 'rgba(191,253,17,0.1)', border: '1px solid rgba(191,253,17,0.25)', color: 'var(--lime)', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '3px', fontFamily: 'monospace' }}>
                  {r}
                  <button onClick={e => { e.stopPropagation(); toggleRegion(r) }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(191,253,17,0.6)', padding: 0, display: 'flex', alignItems: 'center' }}>
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={e => { e.stopPropagation(); setIsDropdownOpen(!isDropdownOpen) }}
              style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)' }}
            >
              <ChevronDown size={14} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '105%',
                left: 0,
                right: 0,
                background: '#0a0f1e',
                border: '1px solid rgba(83,242,250,0.4)',
                borderRadius: '6px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.8)',
                zIndex: 999,
                maxHeight: '280px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, background: '#0a0f1e' }}>
                  <div style={{ position: 'relative' }}>
                    <Search size={12} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
                    <input
                      type="text"
                      placeholder="Search regions or countries"
                      autoFocus
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      style={{ ...inputStyle, paddingLeft: '30px', fontSize: '11px' }}
                    />
                  </div>
                </div>
                <div style={{ overflowY: 'auto', flex: 1, padding: '6px' }}>
                  {filteredContinents.length > 0 && (
                    <div style={{ marginBottom: '6px' }}>
                      <div style={{ fontSize: '9px', fontFamily: 'monospace', textTransform: 'uppercase', color: 'var(--cyan)', letterSpacing: '0.12em', padding: '4px 8px', marginBottom: '2px', background: 'rgba(83,242,250,0.05)', borderRadius: '4px' }}>Regions</div>
                      {filteredContinents.map(r => {
                        const sel = config.regions.includes(r)
                        return (
                          <button key={r} onClick={() => toggleRegion(r)} style={{ width: '100%', textAlign: 'left', padding: '6px 10px', borderRadius: '4px', background: 'none', border: 'none', cursor: 'pointer', color: sel ? 'var(--lime)' : 'rgba(255,255,255,0.7)', fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            onMouseEnter={e => { if (!sel) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                              {r}
                            </span>
                            {sel && <Check size={12} strokeWidth={2.5} />}
                          </button>
                        )
                      })}
                    </div>
                  )}
                  {filteredCountries.length > 0 && (
                    <div>
                      <div style={{ fontSize: '9px', fontFamily: 'monospace', textTransform: 'uppercase', color: 'var(--cyan)', letterSpacing: '0.12em', padding: '4px 8px', marginBottom: '2px', background: 'rgba(83,242,250,0.05)', borderRadius: '4px' }}>Countries</div>
                      {filteredCountries.map(c => {
                        const sel = config.regions.includes(c)
                        return (
                          <button key={c} onClick={() => toggleRegion(c)} style={{ width: '100%', textAlign: 'left', padding: '5px 10px', borderRadius: '4px', background: 'none', border: 'none', cursor: 'pointer', color: sel ? 'var(--lime)' : 'rgba(255,255,255,0.55)', fontSize: '11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            onMouseEnter={e => { if (!sel) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
                          >
                            <span>{c}</span>
                            {sel && <Check size={11} strokeWidth={2.5} />}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
                <div style={{ padding: '6px 10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <button onClick={() => setIsDropdownOpen(false)} style={{ ...inputStyle, background: 'rgba(191,253,17,0.1)', border: '1px solid rgba(191,253,17,0.2)', color: 'var(--lime)', cursor: 'pointer', textAlign: 'center', padding: '6px', fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Done</button>
                </div>
              </div>
            )}
          </div>
          {isDropdownOpen && <div style={{ position: 'fixed', inset: 0, zIndex: 10 }} onClick={() => setIsDropdownOpen(false)} />}
        </div>

        {/* Device Count & Data Usage */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignItems: 'start' }}>
          <div>
            <label className="eyebrow" style={{ fontSize: '10px', display: 'block', marginBottom: '6px' }}>Devices</label>
            <input
              type="number"
              min="1"
              value={config.deviceCount}
              onChange={e => setConfig(prev => ({ ...prev, deviceCount: parseInt(e.target.value) || 0 }))}
              style={inputStyle}
              placeholder="1000"
            />
          </div>
          <div>
            <label className="eyebrow" style={{ fontSize: '10px', display: 'block', marginBottom: '6px' }}>Data / Device</label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                min="0"
                step={dataUnit === 'GB' ? '0.001' : '1'}
                value={dataDisplayValue}
                onChange={e => {
                  const val = parseFloat(e.target.value) || 0
                  setConfig(prev => ({ ...prev, dataUsageMB: dataUnit === 'GB' ? val * 1024 : val }))
                }}
                style={{ ...inputStyle, paddingRight: '52px' }}
                placeholder={dataUnit === 'MB' ? '250' : '0.244'}
              />
              <button
                onClick={() => {
                  if (dataUnit === 'MB') { setDataUnit('GB') }
                  else { setDataUnit('MB') }
                }}
                className="eyebrow cursor-pointer"
                style={{
                  position: 'absolute',
                  right: '6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '9px',
                  color: 'var(--cyan)',
                  background: 'rgba(83,242,250,0.08)',
                  border: '1px solid rgba(83,242,250,0.3)',
                  padding: '2px 6px',
                  borderRadius: '3px',
                }}
              >{dataUnit === 'MB' ? 'GB' : 'MB'}</button>
            </div>
            {((dataUnit === 'MB' && config.dataUsageMB >= 1024) || dataUnit === 'GB') && (
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', marginTop: '3px', display: 'block' }}>
                {dataUnit === 'MB' ? `≈ ${(config.dataUsageMB / 1024).toFixed(2)} GB` : `≈ ${Math.round(config.dataUsageMB).toLocaleString()} MB`}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT: Results */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(191,253,17,0.2)',
        borderRadius: '12px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '32px', background: 'rgba(191,253,17,0.12)', border: '1px solid rgba(191,253,17,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="16" height="16" fill="none" stroke="var(--lime)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
          </div>
          <div style={{ minWidth: 0 }}>
            <h3 className="font-roobert" style={{ color: 'white', fontWeight: 600, fontSize: '14px', lineHeight: 1.2 }}>
              {prospectName ? `${prospectName} Estimate` : 'Your Estimate'}
            </h3>
            <p className="eyebrow" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)' }}>Tier: {pricing.tierName}</p>
          </div>
        </div>

        {/* Main stat */}
        <div style={{ textAlign: 'center', padding: '18px 14px', background: 'rgba(191,253,17,0.04)', border: '1px solid rgba(191,253,17,0.15)', borderRadius: '10px', marginBottom: '14px' }}>
          <p className="eyebrow" style={{ fontSize: '9px', marginBottom: '6px' }}>Total Monthly Spend</p>
          <p className="font-roobert" style={{ fontSize: '36px', fontWeight: 700, color: 'var(--lime)', lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {formatCurrency(pricing.totalMonthlySpend)}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', marginTop: '6px', fontFamily: 'monospace' }}>
            {config.deviceCount.toLocaleString()} devices × {config.dataUsageMB >= 1024 ? `${(config.dataUsageMB / 1024).toFixed(2)} GB` : `${config.dataUsageMB} MB`}
          </p>
        </div>

        {/* Breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
          {[
            { label: 'Data Cost', value: formatCurrency(pricing.dataCost), sub: 'connectivity' },
            { label: 'Platform MRC', value: formatCurrency(pricing.mrcCost), sub: 'per device/mo' },
            { label: 'Avg Rate / MB', value: `$${pricing.averageRatePerMB.toFixed(4)}`, sub: 'median rate' },
            { label: 'Effective / MB', value: `$${pricing.effectiveRatePerMB.toFixed(4)}`, sub: 'blended rate' },
          ].map(item => (
            <div key={item.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '10px 12px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <p className="eyebrow" style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)' }}>{item.label}</p>
              <p className="font-roobert" style={{ color: 'white', fontWeight: 600, fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: '1 0 auto' }}>{item.value}</p>
              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)', lineHeight: 1.5, marginTop: 'auto' }}>
          Estimates based on median carrier rates for selected regions. Final pricing may vary based on actual device behavior, specific carriers, and negotiated terms.
        </p>

        {/* Coverage note */}
        <div style={{ marginTop: '8px', padding: '8px 10px', background: 'rgba(83,242,250,0.06)', border: '1px solid rgba(83,242,250,0.15)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 }}>
          <svg width="12" height="12" fill="none" stroke="var(--cyan)" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
          <span style={{ fontSize: '10px', color: 'rgba(83,242,250,0.8)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Coverage: {config.regions.join(', ') || 'Global'} · Tech: {config.technologies.join(', ') || 'Any'}
          </span>
        </div>
      </div>
    </div>
  )
}
