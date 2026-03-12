'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const columns = [
  {
    id: 'optimize',
    title: 'Optimize',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 20L10 14L14 17L19 10L23 13"
          stroke="#bffd11"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 24h18"
          stroke="#bffd11"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="23" cy="7" r="3" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.1)" />
        <path d="M23 5v2h2" stroke="#bffd11" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    description: 'Maximize ROI and minimize costs with intelligent tools.',
    features: [
      'Transparent usage-based pricing',
      'Configurable data limits',
      'Automated usage alerts',
      'Battery-saving network settings',
      'Performance optimization tools',
    ],
  },
  {
    id: 'secure',
    title: 'Secure',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="16" height="12" rx="2" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.08)" />
        <path d="M10 12V9a4 4 0 018 0v3" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="18" r="2" fill="#bffd11" />
        <path d="M14 20v2" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description:
      'Protect your devices and data with enterprise-grade security features.',
    features: [
      'Private APNs',
      'VPN tunnels',
      'Remote device access',
      'End-to-end encryption',
      'Access controls and authentication',
      'Compliance with industry standards',
    ],
  },
  {
    id: 'scale',
    title: 'Scale',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="3" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.1)" />
        <circle cx="6" cy="8" r="2" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.06)" />
        <circle cx="22" cy="8" r="2" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.06)" />
        <circle cx="6" cy="20" r="2" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.06)" />
        <circle cx="22" cy="20" r="2" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.06)" />
        <path d="M8 9.5L11.5 12M16.5 12L20 9.5M8 18.5L11.5 16M16.5 16L20 18.5" stroke="#bffd11" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    description:
      'Grow your IoT deployment from pilot to production without changing infrastructure.',
    features: [
      'Seamless scaling from 1 to millions of devices',
      'Developer-friendly APIs',
      'Automated provisioning',
      'Future-proof eUICC technology',
      'Robust integration options',
    ],
  },
]

export default function SlideCapabilities2(_: SlideProps) {
  const { t } = useLanguage()
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Cyan glow — top-left */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '50%',
          height: '60%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.07) 0%, rgba(83,242,250,0.02) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Lime glow — bottom-right */}
      <div
        style={{
          position: 'absolute',
          bottom: '-8%',
          right: '-5%',
          width: '45%',
          height: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, transparent 70%)',
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
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" style={{ flexShrink: 0, marginTop: 4 }}><circle cx="3" cy="3" r="2.5" fill="#bffd11" /></svg>
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
