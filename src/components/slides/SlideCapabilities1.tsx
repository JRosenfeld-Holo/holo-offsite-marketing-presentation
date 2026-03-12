'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const columns = [
  {
    id: 'protect',
    title: 'Protect',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 2L4 6.5V13C4 18.55 8.4 23.74 14 25C19.6 23.74 24 18.55 24 13V6.5L14 2Z"
          stroke="#bffd11"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="rgba(191,253,17,0.08)"
        />
        <path d="M10 14l3 3 5-5" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description:
      'Prevent outages before they impact your bottom line with multi-core technology.',
    features: [
      'Contractually guaranteed uptime',
      'Multi-core redundancy',
      'Automatic carrier switching',
      'Outage detection and prevention',
      'Network performance monitoring',
    ],
  },
  {
    id: 'deploy',
    title: 'Deploy',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 3C14 3 8 9 8 16a6 6 0 0012 0c0-7-6-13-6-13z"
          stroke="#bffd11"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="rgba(191,253,17,0.08)"
        />
        <path d="M14 21v4M10 25h8" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="15" r="2" fill="#bffd11" />
      </svg>
    ),
    description:
      'Launch IoT devices anywhere with a single SIM solution that works across 190+ countries.',
    features: [
      'Global Hyper SIM coverage',
      'eUICC profile management',
      'Remote SIM provisioning',
      'Instant activation',
      'Pre-deployment testing tools',
    ],
  },
  {
    id: 'manage',
    title: 'Manage',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.08)" />
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.08)" />
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.08)" />
        <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.08)" />
      </svg>
    ),
    description:
      'Control your operations through enterprise-grade software with real-time visibility.',
    features: [
      'Real-time connectivity monitoring',
      'Data usage analytics',
      'Automated alerts',
      'Bulk device actions',
      'Detailed session reporting',
    ],
  },
]

export default function SlideCapabilities1({ personalization, onNext, onPrev }: SlideProps) {
  const { t } = useLanguage()
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Lime glow — top-right (floating) */}
      <div
        className="float-glow"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '50%',
          height: '60%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, rgba(191,253,17,0.02) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Cyan glow — bottom-left (floating) */}
      <div
        className="float-glow-delayed"
        style={{
          position: 'absolute',
          bottom: '-12%',
          left: '-8%',
          width: '45%',
          height: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.05) 0%, transparent 70%)',
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
          {t('cap.eyebrow')}
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
            maxWidth: 760,
            marginBottom: 36,
          }}
        >
          {t('cap.headline')}{' '}
          <span style={{ color: 'var(--lime)' }}>{t('cap.headlineAccent')}</span> {t('cap.headlineSuffix')}
        </motion.h2>

        {/* Three columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, flex: 1 }}>
          {columns.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              whileHover={{
                y: -4,
                transition: { type: 'spring', stiffness: 400, damping: 20 },
              }}
              className="glass-card pillar-card border-shimmer"
              style={{
                borderRadius: 14,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                position: 'relative',
              }}
            >
              {/* Icon */}
              <div>{col.icon}</div>

              {/* Title with lime underline */}
              <div>
                <h3
                  className="font-roobert"
                  style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}
                >
                  {col.title}
                </h3>
                <div
                  style={{
                    width: 32,
                    height: 2,
                    background: 'var(--lime)',
                    borderRadius: 1,
                  }}
                />
              </div>

              {/* Description */}
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                {col.description}
              </p>

              {/* Feature list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 'auto' }}>
                {col.features.map((feat) => (
                  <motion.div
                    key={feat}
                    whileHover={{ x: 3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      transition: 'background 0.2s ease',
                      borderRadius: 4,
                      cursor: 'default',
                    }}
                  >
                    <span style={{ color: 'var(--lime)', fontSize: 12, marginTop: 2, flexShrink: 0 }}>●</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.45 }}>
                      {feat}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
