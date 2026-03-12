'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'
import VideoLightbox from '../VideoLightbox'

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

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M11 3L3 11M3 3l8 8" stroke="#ff6b4a" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M2 7l4 4 6-6" stroke="#bffd11" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SlideSundayPower(_: SlideProps) {
  const { t } = useLanguage()
  const [showVideo, setShowVideo] = useState(false)
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      <style>{`.sp-play-overlay:hover { opacity: 1 !important; }`}</style>
      {/* Lime glow — top-right */}
      <div
        className="float-glow"
        style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '50%', height: '60%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.09) 0%, rgba(191,253,17,0.02) 45%, transparent 70%)',
        }}
      />
      {/* Cyan glow — bottom-left */}
      <div
        className="float-glow-c"
        style={{
          position: 'absolute', bottom: '-8%', left: '-5%',
          width: '40%', height: '50%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.06) 0%, transparent 70%)',
        }}
      />

      <div
        className="relative z-10 w-full h-full"
        style={{ display: 'flex', flexDirection: 'column', padding: '40px 72px 0 72px' }}
      >
        {/* Header — compact to leave room for image band */}
        <div style={{ marginBottom: 12 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="eyebrow"
            style={{ marginBottom: 8 }}
          >
            {t('case.eyebrow')}
          </motion.p>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
              className="font-roobert"
              style={{ fontSize: 46, fontWeight: 600, color: '#ffffff', lineHeight: 1.08, maxWidth: 580 }}
            >
              Accelerating Norway's{' '}
              <span style={{ color: 'var(--lime)' }}>renewable energy</span> transition
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="glass-card shine-hover"
              style={{
                padding: '12px 20px', borderRadius: 8,
                border: '1px solid rgba(191,253,17,0.25)',
                alignSelf: 'flex-start', marginTop: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
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

        {/* Full-width image band — cinematic treatment */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{
            flex: '0 0 210px',
            position: 'relative',
            borderRadius: 12,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: 14,
          }}
        >
          <img
            src="https://cdn.sanity.io/images/14xthjfi/prod/9d7a7247c3806733879d7194ad3814731118b39c-1920x1080.jpg"
            alt="Sunday Power solar installation"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center 40%' }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, #00040f 0%, transparent 100%)' }} />
          {/* Play overlay */}
          <button
            onClick={() => setShowVideo(true)}
            aria-label="Watch Sunday Power video testimonial"
            className="sp-play-overlay"
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10, cursor: 'pointer', opacity: 0,
              transition: 'opacity 0.25s ease',
              background: 'rgba(0,4,15,0.45)',
              border: 'none', padding: 0, width: '100%', height: '100%',
            }}
          >
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(191,253,17,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px rgba(191,253,17,0.5)' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 4l12 6-12 6V4z" fill="#00040f" /></svg>
            </div>
          </button>
          {/* WATCH STORY badge */}
          <div style={{ position: 'absolute', bottom: 14, left: 14, zIndex: 5, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,4,15,0.75)', border: '1px solid rgba(191,253,17,0.2)', borderRadius: 20, padding: '4px 10px', backdropFilter: 'blur(8px)' }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 1.5l7 3.5-7 3.5V1.5z" fill="#bffd11" /></svg>
            <span className="font-mono-brand" style={{ fontSize: 9, color: 'rgba(191,253,17,0.8)', letterSpacing: '0.1em' }}>WATCH STORY</span>
          </div>
        </motion.div>

        {/* Bottom split: quote left, challenges/solutions right */}
        <div style={{ display: 'flex', gap: 32, flex: 1, minHeight: 0 }}>
          {/* Left: quote + body */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            style={{ flex: '0 0 42%', display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            <div className="quote-block" style={{ paddingTop: 4, paddingBottom: 4 }}>
              <p className="font-roobert" style={{ fontSize: 16, color: 'rgba(255,255,255,0.78)', lineHeight: 1.55, fontStyle: 'italic' }}>
                "I have a greater deal of trust with Hologram than I had with our previous provider."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                <img src="/logos/customers/Sunday-Power-White.png" alt="Sunday Power" style={{ height: 11, width: 'auto', display: 'block', opacity: 0.4 }} />
                <span className="font-mono-brand" style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.07em' }}>
                  Endre Ulberg, Software Engineer
                </span>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
              Sunday Power is Norway's largest Solar as a Service provider, operating 100+ commercial
              rooftop solar installations. Their monitoring systems require persistent connectivity to
              track energy production and report to grid operators.
            </p>
          </motion.div>

          {/* Right: challenges/solutions */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}
          >
            <div>
              <p className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>
                Previous challenges
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {challenges.map((item) => (
                  <motion.div
                    key={item}
                    className="cs-item-hover"
                    whileHover={{ x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}
                  >
                    <XIcon />
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>
                Hologram's solution
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {solutions.map((item) => (
                  <motion.div
                    key={item}
                    className="cs-item-hover"
                    whileHover={{ x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}
                  >
                    <CheckIcon />
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.55 }}
          className="glass-card border-shimmer"
          style={{ borderRadius: '12px 12px 0 0', padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: 14, position: 'relative' }}
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
              className="metric-card-hover"
              style={{ textAlign: 'center', padding: '8px 16px', borderRadius: 8 }}
            >
              <div className="stat-number" style={{ fontSize: 32 }}>{m.value}</div>
              <div className="font-mono-brand" style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', marginTop: 4, textTransform: 'uppercase' }}>
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <VideoLightbox
        isOpen={showVideo}
        videoId="6FUO4UBT3YU"
        onClose={() => setShowVideo(false)}
        title="Sunday Power × Hologram"
      />
    </div>
  )
}
