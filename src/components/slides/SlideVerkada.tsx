'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const challenges = [
  "Customers couldn't connect in remote or difficult areas",
  'Customers worldwide',
  'Reliance on unreliable network infrastructure',
  'Poor network speeds',
]

const solutions = [
  'Pre-integrated SIM with immediate connectivity',
  'The same SIM in every device, anywhere in the world',
  'Manage and troubleshoot SIMs remotely',
  'Multi-carrier redundancy',
  'Performance to stream high quality video',
]

const metrics = [
  { value: '33,000+', label: 'CUSTOMERS WORLDWIDE' },
  { value: '28,000+', label: 'DEVICES WITH HOLOGRAM' },
  { value: '85', label: 'COUNTRIES SERVED' },
]

export default function SlideVerkada(_: SlideProps) {
  const { t } = useLanguage()
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Cyan glow — top-left (floating) */}
      <div
        className="float-glow"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '50%',
          height: '60%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.07) 0%, rgba(83,242,250,0.02) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Lime glow — bottom-right (floating) */}
      <div
        className="float-glow-delayed"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '40%',
          height: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="relative z-10 w-full h-full"
        style={{ display: 'flex', flexDirection: 'column', padding: '48px 72px 0 72px' }}
      >
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="eyebrow"
            style={{ marginBottom: 10 }}
          >
            {t('case.eyebrow')}
          </motion.p>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
              className="font-roobert"
              style={{ fontSize: 56, fontWeight: 600, color: '#ffffff', lineHeight: 1.08, maxWidth: 600 }}
            >
              Creating new revenue streams with{' '}
              <span style={{ color: 'var(--lime)' }}>Hologram</span>
            </motion.h2>
            {/* Customer badge */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
              className="glass-card shine-hover"
              style={{
                padding: '12px 20px',
                borderRadius: 8,
                border: '1px solid rgba(191,253,17,0.25)',
                alignSelf: 'flex-start',
                marginTop: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <img
                src="/logos/customers/verkada-logo.png"
                alt="Verkada"
                style={{ height: 26, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Main content row */}
        <div style={{ display: 'flex', gap: 40, flex: 1, minHeight: 0 }}>
          {/* Left: text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ flex: '1 1 55%', display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Verkada has a huge footprint in the physical security industry with video security
              cameras, access control, environmental sensors, and alarm products. To expand their
              reach and create new revenue streams, they needed a connectivity partner that could
              match their global ambition and deliver reliable performance at scale.
            </p>

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="quote-block"
              style={{ paddingTop: 4, paddingBottom: 4 }}
            >
              <p
                className="font-roobert"
                style={{ fontSize: 18, color: 'rgba(255,255,255,0.78)', lineHeight: 1.55, fontStyle: 'italic' }}
              >
                "Partnering with Hologram was definitely the right decision for our team. It allowed us to get to market much faster."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                <img
                  src="/logos/customers/verkada-logo.png"
                  alt="Verkada"
                  style={{ height: 11, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.4 }}
                />
                <span className="font-mono-brand" style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.07em' }}>
                  Max Shen, Sr. Product Marketing Manager
                </span>
              </div>
            </motion.div>

            {/* Two-column challenges / solutions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {/* Challenges */}
              <div>
                <p
                  className="font-mono-brand"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                    marginBottom: 10,
                  }}
                >
                  Previous challenges
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {challenges.map((item) => (
                    <motion.div
                      key={item}
                      className="cs-item-hover"
                      whileHover={{ x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
                    >
                      <span style={{ color: '#ff6b4a', fontSize: 14, marginTop: 1, flexShrink: 0 }}>✕</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p
                  className="font-mono-brand"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                    marginBottom: 10,
                  }}
                >
                  Hologram's solution
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {solutions.map((item) => (
                    <motion.div
                      key={item}
                      className="cs-item-hover"
                      whileHover={{ x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
                    >
                      <span style={{ color: 'var(--lime)', fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            whileHover={{ scale: 1.01, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
            style={{
              flex: '0 0 38%',
              position: 'relative',
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <img
              src="https://cdn.sanity.io/images/14xthjfi/prod/b286a48d2ae9d694112d6bab585f2af5455f5092-1025x650.png"
              alt="Verkada deployment"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center top' }}
            />
            {/* Bottom fade */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '35%',
                background: 'linear-gradient(to top, #00040f 0%, transparent 100%)',
              }}
            />
          </motion.div>
        </div>

        {/* Metrics bar — with hover glow on each metric */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.55 }}
          className="glass-card border-shimmer"
          style={{
            borderRadius: '12px 12px 0 0',
            padding: '18px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 20,
            position: 'relative',
          }}
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
              className="metric-card-hover"
              style={{ textAlign: 'center', padding: '8px 16px', borderRadius: 8 }}
            >
              <div className="stat-number" style={{ fontSize: 32 }}>
                {m.value}
              </div>
              <div
                className="font-mono-brand"
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.12em',
                  marginTop: 4,
                  textTransform: 'uppercase',
                }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
