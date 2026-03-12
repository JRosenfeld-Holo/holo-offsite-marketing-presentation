'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'
import VideoLightbox from '../VideoLightbox'

const challenges = [
  'Complex deployments across 22 US markets',
  'Limited expansion to challenging locations',
  'Inconsistent connectivity impacted revenue',
  'High connectivity costs eating margins',
]

const solutions = [
  'One contract with 550+ carriers globally',
  'Reliable connectivity in previously difficult locations',
  'Multi-carrier redundancy',
  '50% reduction in connectivity costs',
]

const metrics = [
  { value: '2,000+', label: 'SMART FRIDGES' },
  { value: '10M+', label: 'MEALS SERVED' },
  { value: '50%', label: 'CONNECTIVITY COST REDUCTION' },
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

export default function SlideFarmersFridge(_: SlideProps) {
  const { t } = useLanguage()
  const [showVideo, setShowVideo] = useState(false)
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      <style>{`.ff-play-overlay:hover { opacity: 1 !important; }`}</style>
      {/* Lime glow — top-left (mirrored from Verkada) */}
      <div
        className="float-glow-b"
        style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: '45%', height: '55%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.08) 0%, rgba(191,253,17,0.02) 45%, transparent 70%)',
        }}
      />
      {/* Cyan glow — bottom-right */}
      <div
        className="float-glow-delayed"
        style={{
          position: 'absolute', bottom: '-10%', right: '-5%',
          width: '40%', height: '50%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.06) 0%, transparent 70%)',
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
              style={{ fontSize: 52, fontWeight: 600, color: '#ffffff', lineHeight: 1.08, maxWidth: 600 }}
            >
              Seamless business operations{' '}
              <span style={{ color: 'var(--lime)' }}>nation-wide</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="glass-card shine-hover"
              style={{
                padding: '12px 20px', borderRadius: 8,
                border: '1px solid rgba(191,253,17,0.25)',
                alignSelf: 'flex-start', marginTop: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <img
                src="/logos/customers/farmers-fridge-logo.avif"
                alt="Farmer's Fridge"
                style={{ height: 26, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Main content row — FLIPPED: LEFT image, RIGHT text */}
        <div style={{ display: 'flex', gap: 40, flex: 1, minHeight: 0 }}>
          {/* Left: image with video play overlay */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            style={{
              flex: '0 0 38%', position: 'relative',
              borderRadius: 12, overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <img
              src="https://cdn.sanity.io/images/14xthjfi/prod/ae585c49569796d222aeb228dedf97347cf2bc2f-1920x1080.jpg"
              alt="Farmer's Fridge smart vending machine"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to top, #00040f 0%, transparent 100%)' }} />
            {/* Play overlay */}
            <button
              onClick={() => setShowVideo(true)}
              aria-label="Watch Farmer's Fridge video testimonial"
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, cursor: 'pointer', opacity: 0,
                transition: 'opacity 0.25s ease',
                background: 'rgba(0,4,15,0.45)',
                border: 'none', padding: 0, width: '100%', height: '100%',
              }}
              className="ff-play-overlay"
            >
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(191,253,17,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px rgba(191,253,17,0.5)' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 4l12 6-12 6V4z" fill="#00040f" /></svg>
              </div>
            </button>
            {/* Watch video badge */}
            <div style={{ position: 'absolute', bottom: 14, right: 14, zIndex: 5, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,4,15,0.75)', border: '1px solid rgba(191,253,17,0.2)', borderRadius: 20, padding: '4px 10px', backdropFilter: 'blur(8px)' }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 1.5l7 3.5-7 3.5V1.5z" fill="#bffd11" /></svg>
              <span className="font-mono-brand" style={{ fontSize: 9, color: 'rgba(191,253,17,0.8)', letterSpacing: '0.1em' }}>WATCH STORY</span>
            </div>
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ flex: '1 1 55%', display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Farmer's Fridge operates 2,000+ smart vending machines across 22 US markets,
              delivering fresh meals 24/7. Their machines depend on always-on connectivity to
              process transactions, manage inventory, and ensure food freshness. Any connectivity
              failure directly impacts revenue and customer satisfaction.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="quote-block"
              style={{ paddingTop: 4, paddingBottom: 4 }}
            >
              <p className="font-roobert" style={{ fontSize: 17, color: 'rgba(255,255,255,0.78)', lineHeight: 1.55, fontStyle: 'italic' }}>
                "When someone's hungry, you don't want to disappoint. Our partnership with Hologram delivered significantly lower costs, better service, and more uptime reliability."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                <img src="/logos/customers/farmers-fridge-logo.avif" alt="Farmer's Fridge" style={{ height: 11, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.4 }} />
                <span className="font-mono-brand" style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.07em' }}>
                  Luke Saunders, Founder &amp; CEO
                </span>
              </div>
            </motion.div>

            {/* Challenges / Solutions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
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
            </div>
          </motion.div>
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.55 }}
          className="glass-card border-shimmer"
          style={{ borderRadius: '12px 12px 0 0', padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: 20, position: 'relative' }}
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
        videoId="QPPWgESttVE"
        onClose={() => setShowVideo(false)}
        title="Farmer's Fridge × Hologram"
      />
    </div>
  )
}
