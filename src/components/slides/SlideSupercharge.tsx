'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#bffd11" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Prevent outages before they impact revenue',
    body: 'Multi-core technology automatically switches networks before outages affect your customers.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C12 3 8 8 8 14a4 4 0 008 0c0-6-4-11-4-11z" stroke="#53f2fa" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="1.5" fill="#53f2fa" />
        <path d="M12 18v3M9 21h6" stroke="#53f2fa" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Deploy with confidence, not crossed fingers',
    body: 'Validate device configurations before field deployment. Fix connectivity issues during development.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#bffd11" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#bffd11" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#bffd11" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#bffd11" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Focus on growth, not troubleshooting',
    body: 'Automate routine device management tasks and replace connectivity firefighting with innovation.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#53f2fa" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#53f2fa" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Expand globally without the headaches',
    body: 'Enter new markets with a single SIM that works across 190+ countries and 550+ carriers.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="#bffd11" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Take back control of IoT spending',
    body: 'Gain visibility into connectivity costs with detailed data usage reporting that prevents budget overruns.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 13h4l3-8 4 16 3-8h4" stroke="#53f2fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Real-time visibility across your fleet',
    body: 'Monitor every device from a single dashboard — track connectivity health and data usage in real time.',
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
      {/* Cyan glow — bottom-right */}
      <div
        className="float-glow-delayed"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '40%',
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
          {t('super.eyebrow')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
          className="font-roobert"
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: 32,
          }}
        >
          {t('super.headline')}{' '}
          <span style={{ color: 'var(--lime)' }}>{t('super.headlineAccent')}</span>
        </motion.h2>

        {/* 3×2 benefits grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, flex: 1 }}>
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 + i * 0.07 }}
              whileHover={{
                y: -4,
                transition: { type: 'spring', stiffness: 400, damping: 20 },
              }}
              className="glass-card pillar-card border-shimmer"
              style={{
                borderRadius: 12,
                padding: '20px 20px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                position: 'relative',
                borderTop: `2px solid ${i % 2 === 0 ? '#bffd11' : '#53f2fa'}`,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: i % 2 === 0 ? 'rgba(191,253,17,0.08)' : 'rgba(83,242,250,0.08)',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(191,253,17,0.2)' : 'rgba(83,242,250,0.2)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {b.icon}
              </div>

              <h3
                className="font-roobert"
                style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.35 }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="quote-block"
          style={{ marginTop: 20 }}
        >
          <p
            className="font-roobert"
            style={{ fontSize: 16, color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, fontStyle: 'italic', maxWidth: 800 }}
          >
            &quot;With Hologram, we get the ability to scale on top of systems that we trust and we get
            to do it in a cost-effective way.&quot;
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
