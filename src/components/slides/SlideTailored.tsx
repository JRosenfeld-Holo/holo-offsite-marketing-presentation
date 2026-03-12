'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const pillars = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#bffd11" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Outage Protection',
    body: 'Multi-core redundancy with automatic carrier switching keeps your fleet online — always.',
    accent: '#bffd11',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#53f2fa" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#53f2fa" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Global Coverage',
    body: '550+ carriers across 190+ countries with a single SIM — no roaming surprises.',
    accent: '#53f2fa',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#bffd11" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="#bffd11" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 8h.01M9 8h.01M12 8h.01" stroke="#bffd11" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Powerful Platform',
    body: 'Enterprise-grade software, REST API, and real-time analytics for full fleet visibility.',
    accent: '#bffd11',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#53f2fa" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#53f2fa" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#53f2fa" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Expert Support',
    body: 'Talk to real engineers — not support reps. Dedicated solutions teams with 24/7 SLAs.',
    accent: '#53f2fa',
  },
]

export default function SlideTailored({ personalization }: SlideProps) {
  const { t } = useLanguage()
  const companyName = personalization.companyName

  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Animated glow — lime, top-right */}
      <div
        className="float-glow"
        style={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: '65%', height: '75%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.10) 0%, rgba(191,253,17,0.03) 40%, transparent 70%)',
        }}
      />
      {/* Animated glow — cyan, bottom-left */}
      <div
        className="float-glow-b"
        style={{
          position: 'absolute', bottom: '-15%', left: '-10%',
          width: '55%', height: '65%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.08) 0%, rgba(83,242,250,0.02) 40%, transparent 70%)',
        }}
      />

      <div
        className="relative z-10 w-full h-full"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '52px 72px' }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="eyebrow"
          style={{ marginBottom: 16, textAlign: 'center' }}
        >
          {t('tailored.eyebrow')}
        </motion.p>

        {/* Big headline — centered, dramatic */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
          className="font-roobert"
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.05,
            textAlign: 'center',
            marginBottom: 10,
            maxWidth: 800,
          }}
        >
          {companyName ? (
            <>
              {t('tailored.headlinePersonalized')}{' '}
              <span style={{ color: 'var(--lime)' }}>{companyName}</span>
            </>
          ) : (
            <>
              {t('tailored.headlineDefault')}{' '}
              <span style={{ color: 'var(--lime)' }}>{t('tailored.headlineDefaultAccent')}</span>
            </>
          )}
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: 560,
            marginBottom: 48,
          }}
        >
          {t('tailored.body')}
        </motion.p>

        {/* 4-column pillar cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            width: '100%',
            maxWidth: 960,
            marginBottom: 40,
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 + i * 0.08, ease: 'easeOut' }}
              whileHover={{
                y: -6,
                transition: { type: 'spring', stiffness: 400, damping: 20 },
              }}
              className="glass-card pillar-card border-shimmer shine-hover"
              style={{
                borderRadius: 14,
                padding: '28px 22px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 12,
                borderTop: `2px solid ${p.accent}`,
                position: 'relative',
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `${p.accent}10`,
                  border: `1px solid ${p.accent}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 4,
                }}
              >
                {p.icon}
              </div>
              <h3
                className="font-roobert"
                style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.3 }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.48)', lineHeight: 1.6 }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA area — glowing divider + message */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.85, ease: 'easeOut' }}
          style={{
            width: 100,
            height: 2,
            background: 'linear-gradient(90deg, transparent, var(--lime), transparent)',
            boxShadow: '0 0 16px rgba(191,253,17,0.3)',
            marginBottom: 20,
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="font-mono-brand"
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          {t('tailored.cta')}
        </motion.p>
      </div>
    </div>
  )
}
