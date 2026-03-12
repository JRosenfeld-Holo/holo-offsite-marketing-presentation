'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const points = [
  { icon: '🛡', color: '#bffd11', title: 'Devices isolated from the internet', body: 'Network segmentation and multiple firewall layers shield every device from unauthorized traffic.' },
  { icon: '🔒', color: '#53f2fa', title: 'Zero access to your device data', body: 'End-to-end encryption means Hologram and its partners cannot read transmitted data.' },
  { icon: '✓', color: '#bffd11', title: 'All traffic is authenticated', body: 'Only authorized cellular devices connect. Data limits are enforced per line of service.' },
  { icon: '⚕', color: '#53f2fa', title: 'HIPAA and PCI compliant', body: 'Customers deploy Hologram in regulated products. We conform to GSMA SAS quality control standards.' },
  { icon: '◆', color: 'rgba(255,255,255,0.65)', title: 'World-class SIM manufacturing', body: 'SIMs manufactured to strict standards for material integrity, calibration, and environmental protection.' },
  { icon: '🌍', color: 'rgba(255,255,255,0.65)', title: 'Global regulatory compliance', body: 'GDPR-compliant by design, operating across 190+ countries with full international certifications.' },
]

const badges = ['SOC 2', 'HIPAA', 'PCI DSS', 'GDPR', 'GSMA SAS', 'ISO 27001', '190+ Countries']

export default function SlideSecurity(_: SlideProps) {
  const { t } = useLanguage()
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Cyan glow top-right (floating) */}
      <div
        className="float-glow"
        style={{
          position: 'absolute', top: '-15%', right: '-8%',
          width: '50%', height: '65%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.06) 0%, transparent 70%)',
        }}
      />
      {/* Lime glow bottom-left (floating) */}
      <div
        className="float-glow-delayed"
        style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '42%', height: '55%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.05) 0%, transparent 70%)',
        }}
      />

      <div
        className="relative z-10 w-full h-full"
        style={{ display: 'flex', flexDirection: 'column', padding: '52px 80px 44px' }}
      >
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="eyebrow"
            style={{ marginBottom: 14 }}
          >
            {t('security.eyebrow')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
            className="font-roobert"
            style={{ fontSize: 56, fontWeight: 600, color: '#ffffff', lineHeight: 1.06, maxWidth: 620 }}
          >
            Advanced security at the{' '}
            <span style={{ color: '#bffd11' }}>forefront</span>
          </motion.h2>
        </div>

        {/* 3×2 grid of security points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 14,
            flex: 1,
            minHeight: 0,
          }}
        >
          {points.map((pt, i) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 + i * 0.07 }}
              whileHover={{
                y: -3,
                transition: { type: 'spring', stiffness: 400, damping: 20 },
              }}
              className="glass-card pillar-card"
              style={{
                borderRadius: 12,
                padding: '16px 18px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                borderTop: `2px solid ${pt.color}`,
                position: 'relative',
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: `${pt.color}12`,
                  border: `1px solid ${pt.color}33`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  flexShrink: 0,
                  marginBottom: 2,
                }}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  {i === 0 && (
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={pt.color} strokeWidth="1.5" strokeLinejoin="round" />
                  )}
                  {i === 1 && (
                    <>
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke={pt.color} strokeWidth="1.5" />
                      <path d="M7 11V7a5 5 0 0110 0v4" stroke={pt.color} strokeWidth="1.5" />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke={pt.color} strokeWidth="1.5" />
                      <polyline points="22 4 12 14.01 9 11.01" stroke={pt.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={pt.color} strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke={pt.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                  )}
                  {i === 4 && (
                    <>
                      <circle cx="12" cy="12" r="10" stroke={pt.color} strokeWidth="1.5" />
                      <path d="M12 6v6l4 2" stroke={pt.color} strokeWidth="1.5" strokeLinecap="round" />
                    </>
                  )}
                  {i === 5 && (
                    <>
                      <circle cx="12" cy="12" r="10" stroke={pt.color} strokeWidth="1.5" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke={pt.color} strokeWidth="1.5" />
                    </>
                  )}
                </svg>
              </div>

              <p className="font-roobert" style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', lineHeight: 1.35 }}>
                {pt.title}
              </p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.48)', lineHeight: 1.55 }}>
                {pt.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance badges row — bottom */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.75 }}
          style={{
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            flexShrink: 0,
          }}
        >
          <span
            className="font-mono-brand"
            style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginRight: 6 }}
          >
            Certifications
          </span>
          <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
          {badges.map(b => (
            <span key={b} className="tag-badge">{b}</span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
