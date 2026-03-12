'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const capabilities = [
  {
    id: 'protect',
    color: '#bffd11',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L4 6.5V13C4 18.55 8.4 23.74 14 25C19.6 23.74 24 18.55 24 13V6.5L14 2Z" stroke="#bffd11" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(191,253,17,0.08)" />
        <path d="M10 14l3 3 5-5" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titleKey: 'cap.protect',
    descKey: 'cap.protect.desc',
  },
  {
    id: 'deploy',
    color: '#bffd11',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C14 3 8 9 8 16a6 6 0 0012 0c0-7-6-13-6-13z" stroke="#bffd11" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(191,253,17,0.08)" />
        <path d="M14 21v4M10 25h8" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="15" r="2" fill="#bffd11" />
      </svg>
    ),
    titleKey: 'cap.deploy',
    descKey: 'cap.deploy.desc',
  },
  {
    id: 'manage',
    color: '#bffd11',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.08)" />
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.08)" />
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.08)" />
        <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="#bffd11" strokeWidth="1.5" fill="rgba(191,253,17,0.08)" />
      </svg>
    ),
    titleKey: 'cap.manage',
    descKey: 'cap.manage.desc',
  },
  {
    id: 'optimize',
    color: '#53f2fa',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M5 20L10 14L14 17L19 10L23 13" stroke="#53f2fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 24h18" stroke="#53f2fa" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="23" cy="7" r="3" stroke="#53f2fa" strokeWidth="1.5" fill="rgba(83,242,250,0.1)" />
        <path d="M23 5v2h2" stroke="#53f2fa" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    titleKey: 'cap.optimize',
    descKey: 'cap.optimize.desc',
  },
  {
    id: 'secure',
    color: '#53f2fa',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="12" width="16" height="12" rx="2" stroke="#53f2fa" strokeWidth="1.5" fill="rgba(83,242,250,0.08)" />
        <path d="M10 12V9a4 4 0 018 0v3" stroke="#53f2fa" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="18" r="2" fill="#53f2fa" />
        <path d="M14 20v2" stroke="#53f2fa" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    titleKey: 'cap.secure',
    descKey: 'cap.secure.desc',
  },
  {
    id: 'scale',
    color: '#53f2fa',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="3" stroke="#53f2fa" strokeWidth="1.5" fill="rgba(83,242,250,0.1)" />
        <circle cx="6" cy="8" r="2" stroke="#53f2fa" strokeWidth="1.5" fill="rgba(83,242,250,0.06)" />
        <circle cx="22" cy="8" r="2" stroke="#53f2fa" strokeWidth="1.5" fill="rgba(83,242,250,0.06)" />
        <circle cx="6" cy="20" r="2" stroke="#53f2fa" strokeWidth="1.5" fill="rgba(83,242,250,0.06)" />
        <circle cx="22" cy="20" r="2" stroke="#53f2fa" strokeWidth="1.5" fill="rgba(83,242,250,0.06)" />
        <path d="M8 9.5L11.5 12M16.5 12L20 9.5M8 18.5L11.5 16M16.5 16L20 18.5" stroke="#53f2fa" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    titleKey: 'cap.scale',
    descKey: 'cap.scale.desc',
  },
]

export default function SlideCapabilities(_: SlideProps) {
  const { t } = useLanguage()
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Lime glow — top-right */}
      <div
        className="float-glow"
        style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '50%', height: '60%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, rgba(191,253,17,0.02) 45%, transparent 70%)',
        }}
      />
      {/* Cyan glow — bottom-left */}
      <div
        className="float-glow-delayed"
        style={{
          position: 'absolute', bottom: '-12%', left: '-8%',
          width: '45%', height: '50%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.05) 0%, transparent 70%)',
        }}
      />

      <div
        className="relative z-10 w-full h-full"
        style={{ display: 'flex', flexDirection: 'column', padding: '44px 72px 40px' }}
      >
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="eyebrow"
          style={{ marginBottom: 10 }}
        >
          {t('cap.eyebrow')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
          className="font-roobert"
          style={{ fontSize: 48, fontWeight: 600, color: '#ffffff', lineHeight: 1.06, maxWidth: 760, marginBottom: 28 }}
        >
          {t('cap.headline')}{' '}
          <span style={{ color: 'var(--lime)' }}>{t('cap.headlineAccent')}</span>{' '}
          {t('cap.headlineSuffix')}
        </motion.h2>

        {/* Divider between row 1 (lime) and row 2 (cyan) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px 20px', flex: 1 }}>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 + i * 0.07, ease: 'easeOut' }}
              whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
              className="glass-card"
              style={{
                borderRadius: 12,
                padding: '20px 22px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                borderTop: `2px solid ${cap.color}22`,
                position: 'relative',
              }}
            >
              {/* Accent top bar */}
              <div style={{ width: 28, height: 2, background: cap.color, borderRadius: 1, marginBottom: 2 }} />

              {/* Icon + title row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: `${cap.color}10`,
                    border: `1px solid ${cap.color}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {cap.icon}
                </div>
                <h3
                  className="font-roobert"
                  style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', lineHeight: 1.2 }}
                >
                  {t(cap.titleKey)}
                </h3>
              </div>

              {/* Description */}
              <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: 0 }}>
                {t(cap.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Row label line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#bffd11' }} />
            <span className="font-mono-brand" style={{ fontSize: 9, color: 'rgba(191,253,17,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Core Platform
            </span>
          </div>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="font-mono-brand" style={{ fontSize: 9, color: 'rgba(83,242,250,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Advanced Operations
            </span>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#53f2fa' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
