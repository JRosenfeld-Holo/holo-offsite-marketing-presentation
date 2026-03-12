'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 6v8l7 4 7-4V6l-7-4z" stroke="#bffd11" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M10 10v8M3 6l7 4 7-4" stroke="#bffd11" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Hyper SIMs',
    detail: 'Multi-core eUICC SIMs with on-demand profile switching and built-in fallback technology.',
    stat: '550+',
    statLabel: 'Carriers',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#53f2fa" strokeWidth="1.3" />
        <path d="M3.5 7.5h13M3.5 12.5h13M10 2.5c-2.5 2.5-2.5 6 0 7.5s2.5 5 0 7.5M10 2.5c2.5 2.5 2.5 6 0 7.5s-2.5 5 0 7.5" stroke="#53f2fa" strokeWidth="1.3" />
      </svg>
    ),
    label: 'Global Coverage',
    detail: 'Multi-carrier redundancy across 190+ countries, keeping devices connected everywhere.',
    stat: '190+',
    statLabel: 'Countries',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v5l3.5 2.5-3.5 2.5v4" stroke="#bffd11" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 7L10 3l6 4M4 13l6 4 6-4" stroke="#bffd11" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Outage Protection',
    detail: 'Patented fallback technology with separate hardware cores that switch instantly on failure.',
    stat: '99.99%',
    statLabel: 'Uptime',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4.5" width="14" height="11" rx="2" stroke="#53f2fa" strokeWidth="1.3" />
        <path d="M6.5 8.5h7M6.5 12h4.5" stroke="#53f2fa" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: 'Dashboard & API',
    detail: 'Full fleet management with real-time monitoring, usage analytics, and a powerful REST API.',
    stat: 'REST',
    statLabel: 'API',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function SlideWhatIsHologram(_: SlideProps) {
  const { t } = useLanguage()
  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Lime glow — top right */}
      <div
        className="float-glow"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '65%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, rgba(191,253,17,0.02) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Cyan glow — bottom left */}
      <div
        className="float-glow-delayed"
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-8%',
          width: '45%',
          height: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 80,
          paddingRight: 80,
          paddingTop: 56,
          paddingBottom: 40,
          zIndex: 5,
        }}
      >
        {/* Top: Eyebrow + Headline + Body */}
        <div style={{ marginBottom: 'auto' }}>
          <motion.div variants={itemVariants} className="eyebrow" style={{ marginBottom: 12 }}>
            {t('what.eyebrow')}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-roobert"
            style={{
              fontSize: 52,
              fontWeight: 600,
              lineHeight: 1.06,
              color: '#ffffff',
              marginBottom: 14,
              maxWidth: 700,
            }}
          >
            {t('what.headline')}{' '}
            <span style={{ color: 'var(--lime)' }}>{t('what.headlineAccent')}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: 640,
            }}
          >
            {t('what.body')}
          </motion.p>
        </div>

        {/* Middle: 4-column feature cards */}
        <motion.div
          variants={containerVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            marginBottom: 'auto',
          }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.label}
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
              className="glass-card shine-hover"
              style={{
                borderRadius: 12,
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Icon + stat row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'rgba(191,253,17,0.06)',
                    border: '1px solid rgba(191,253,17,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {pillar.icon}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span
                    className="font-roobert"
                    style={{ fontSize: 22, fontWeight: 700, color: 'var(--lime)', lineHeight: 1 }}
                  >
                    {pillar.stat}
                  </span>
                  <div
                    className="font-mono-brand"
                    style={{
                      fontSize: 8,
                      color: 'rgba(191,253,17,0.5)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      marginTop: 2,
                    }}
                  >
                    {pillar.statLabel}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: 'linear-gradient(to right, rgba(191,253,17,0.25), transparent)',
                  width: '65%',
                }}
              />

              {/* Title */}
              <div
                className="font-roobert"
                style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', lineHeight: 1.3 }}
              >
                {pillar.label}
              </div>

              {/* Description */}
              <div
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}
              >
                {pillar.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom: Stats bar */}
        <motion.div
          variants={itemVariants}
          className="glass-card border-shimmer"
          style={{
            borderRadius: 12,
            padding: '14px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexShrink: 0,
          }}
        >
          {[
            { value: '6,000+', label: 'Customers' },
            { value: '190+', label: 'Countries' },
            { value: '550+', label: 'Carriers' },
            { value: '99.99%', label: 'Uptime' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              style={{ textAlign: 'center' }}
              whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
            >
              <div
                className="stat-number"
                style={{ fontSize: 26, transition: 'text-shadow 0.3s ease' }}
              >
                {stat.value}
              </div>
              <div
                className="font-mono-brand"
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.12em',
                  marginTop: 2,
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
