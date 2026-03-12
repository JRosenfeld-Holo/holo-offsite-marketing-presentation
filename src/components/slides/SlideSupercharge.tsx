'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const leftBenefits = [
  {
    title: 'Prevent outages before they impact revenue',
    body: 'Prevent embarrassing service disruptions with multi-core technology that automatically switches networks before outages affect your customers.',
  },
  {
    title: 'Deploy with confidence, not crossed fingers',
    body: 'Validate your device configurations before sending devices into the field. Fix connectivity issues during development, not during expensive rollouts.',
  },
  {
    title: 'Focus on growth, not troubleshooting',
    body: 'Replace connectivity firefighting with strategic innovation by automating routine device management tasks.',
  },
]

const rightBenefits = [
  {
    title: 'Expand globally without the headaches',
    body: 'Enter new markets confidently with a single SIM that works across 190+ countries and 550+ carriers.',
  },
  {
    title: 'Take back control of your IoT spending',
    body: 'Gain unprecedented visibility into your connectivity costs with detailed data usage reporting that prevents budget overruns.',
  },
  {
    title: 'Real-time visibility across your fleet',
    body: 'Monitor every device from a single dashboard — track connectivity health, data usage, and network status across thousands of devices in real time.',
  },
]

export default function SlideSupercharge(_: SlideProps) {
  const { t } = useLanguage()
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Lime glow — top-center */}
      <div
        className="float-glow"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '20%',
          width: '60%',
          height: '55%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, rgba(191,253,17,0.02) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="relative z-10 w-full h-full"
        style={{ display: 'flex', flexDirection: 'column', padding: '52px 72px' }}
      >
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="eyebrow"
          style={{ marginBottom: 12 }}
        >
          {t('super.eyebrow')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
          className="font-roobert"
          style={{
            fontSize: 60,
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: 32,
          }}
        >
          {t('super.headline')}{' '}
          <span style={{ color: 'var(--lime)' }}>{t('super.headlineAccent')}</span>
        </motion.h2>

        {/* Two-column benefits grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: 1 }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {leftBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                className="glass-card shine-hover"
                whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                style={{ borderRadius: 12, padding: '18px 20px' }}
              >
                <h3
                  className="font-roobert"
                  style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 6, lineHeight: 1.35 }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {rightBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                className="glass-card shine-hover"
                whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                style={{ borderRadius: 12, padding: '18px 20px' }}
              >
                <h3
                  className="font-roobert"
                  style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 6, lineHeight: 1.35 }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Large quote at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="quote-block"
          style={{ marginTop: 28 }}
        >
          <p
            className="font-roobert"
            style={{ fontSize: 16, color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, fontStyle: 'italic', maxWidth: 800 }}
          >
            "With Hologram, we get the ability to scale on top of systems that we trust and we get
            to do it in a cost-effective way."
          </p>
          <div style={{ marginTop: 8 }}>
            <img
              src="/logos/customers/Sunday-Power-White.png"
              alt="Sunday Power"
              style={{ height: 13, width: 'auto', display: 'block', opacity: 0.45 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
