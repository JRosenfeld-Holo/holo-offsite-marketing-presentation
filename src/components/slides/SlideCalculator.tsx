'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'
import PricingCalculator from '../calculator/PricingCalculator'

export default function SlideCalculator({ personalization }: SlideProps) {
  const { t } = useLanguage()
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 700px 500px at 50% 20%, rgba(191,253,17,0.05) 0%, transparent 70%)'
      }} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full h-full overflow-y-auto deck-scroll"
        style={{
          padding: '52px 72px 28px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header — pinned to top like other slides */}
        <div style={{ flexShrink: 0, marginBottom: 16 }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>{t('calc.eyebrow')}</p>
          <h2 className="font-roobert" style={{ fontSize: '34px', fontWeight: 600, color: 'white', lineHeight: 1.15 }}>
            Build your <span style={{ color: 'var(--lime)' }}>custom plan</span>
          </h2>
        </div>

        {/* Calculator — centered in remaining space */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: 0 }}>
          <div style={{ width: '100%' }}>
            <PricingCalculator prospectName={personalization.companyName} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
