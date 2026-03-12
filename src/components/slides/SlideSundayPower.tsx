'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const challenges = [
  'Connectivity outages caused loss of critical data and revenue',
  'Unreliable APIs from previous provider',
  "Pricing models weren't cost-effective",
]

const solutions = [
  'Superior technical platform',
  'Pay-as-you-go pricing',
  'Powerful device management tools',
]

const metrics = [
  { value: '100+', label: 'SOLAR INSTALLATIONS' },
  { value: '19.5B kWh', label: 'ENERGY PRODUCED ANNUALLY' },
  { value: '4,500 tons', label: 'CARBON OFFSET PER YEAR' },
]

export default function SlideSundayPower(_: SlideProps) {
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
            'radial-gradient(ellipse at center, rgba(191,253,17,0.09) 0%, rgba(191,253,17,0.02) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Cyan glow — bottom-left (floating) */}
      <div
        className="float-glow-c"
        style={{
          position: 'absolute',
          bottom: '-8%',
          left: '-5%',
          width: '40%',
          height: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.06) 0%, transparent 70%)',
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
              style={{ fontSize: 56, fontWeight: 600, color: '#ffffff', lineHeight: 1.08, maxWidth: 620 }}
            >
              Accelerating Norway's{' '}
              <span style={{ color: 'var(--lime)' }}>renewable energy</span> transition
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
                src="/logos/customers/Sunday-Power-White.png"
                alt="Sunday Power"
                style={{ height: 26, width: 'auto', display: 'block', opacity: 0.9 }}
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
              Sunday Power is Norway's largest Solar as a Service provider, operating 100+
              commercial rooftop solar installations. Their monitoring systems require persistent
              connectivity to track energy production, report to grid operators, and ensure maximum
              efficiency from every installation.
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
                "I have a greater deal of trust with Hologram than I had with our previous provider."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                <img
                  src="/logos/customers/Sunday-Power-White.png"
                  alt="Sunday Power"
                  style={{ height: 11, width: 'auto', display: 'block', opacity: 0.4 }}
                />
                <span className="font-mono-brand" style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.07em' }}>
                  Endre Ulberg, Software Engineer
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
              src="https://cdn.sanity.io/images/14xthjfi/prod/9d7a7247c3806733879d7194ad3814731118b39c-1920x1080.jpg"
              alt="Sunday Power solar installation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center' }}
            />
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
