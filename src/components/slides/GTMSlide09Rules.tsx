'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

function VBackground() {
  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Left arm of V */}
      <motion.line
        x1="120" y1="-20"
        x2="500" y2="720"
        stroke="rgba(191,253,17,0.10)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
      />
      {/* Right arm of V */}
      <motion.line
        x1="880" y1="-20"
        x2="500" y2="720"
        stroke="rgba(191,253,17,0.10)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.55, ease: 'easeInOut' }}
      />
      {/* Inner V — slightly narrower, dimmer */}
      <motion.line
        x1="260" y1="-20"
        x2="500" y2="680"
        stroke="rgba(191,253,17,0.055)"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.7, ease: 'easeInOut' }}
      />
      <motion.line
        x1="740" y1="-20"
        x2="500" y2="680"
        stroke="rgba(191,253,17,0.055)"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.85, ease: 'easeInOut' }}
      />
      {/* Apex glow dot */}
      <motion.circle
        cx="500" cy="720"
        r="4"
        fill="rgba(191,253,17,0.25)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.9, ease: 'easeOut' }}
        style={{ transformOrigin: '500px 720px' }}
      />
      <motion.circle
        cx="500" cy="720"
        r="12"
        fill="none"
        stroke="rgba(191,253,17,0.10)"
        strokeWidth="1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.0, ease: 'easeOut' }}
        style={{ transformOrigin: '500px 720px' }}
      />
    </svg>
  )
}

const laws = [
  {
    numeral: 'I.',
    title: 'Systems Over Headcount',
    body: 'Scale through code, not payroll. If a task requires human intervention more than twice, it is systematically engineered out of existence.',
  },
  {
    numeral: 'II.',
    title: 'Compound, Don\'t Add',
    body: 'We reject linear growth. Every new dataset, workflow, and model mathematically compounds the intelligence and velocity of the overarching engine.',
  },
  {
    numeral: 'III.',
    title: 'Build, Don\'t Buy',
    body: 'We treat revenue infrastructure as proprietary IP. Custom micro-SaaS replaces rigid vendor contracts, establishing an operational moat competitors cannot replicate.',
  },
  {
    numeral: 'IV.',
    title: 'Data Is the Spear',
    body: 'Outreach without intent is friction. Big data enrichment and real-time account scoring ensure every action is a precision strike.',
  },
  {
    numeral: 'V.',
    title: 'Velocity Dictates Victory',
    body: 'Algorithm-driven workflows reduce research from hours to milliseconds, and campaign execution from weeks to days.',
  },
]

export default function GTMSlide09Rules({ onNext, onPrev }: SlideProps) {
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Animated V background */}
      <VBackground />
      {/* Subtle ambient glows */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '50%', background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-5%', left: '30%', width: '40%', height: '35%', background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '44px 64px 36px' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="category-badge" style={{ marginBottom: 12 }}>▸ Principles</div>
          <div className="font-roobert" style={{ fontSize: 'clamp(28px, 3.2vw, 44px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 6 }}>
            THE FIVE LAWS OF ARCHITECTURE
          </div>
          <div className="font-roobert" style={{ fontSize: 20, color: 'rgba(255,255,255,0.88)', marginBottom: 20 }}>
            The non-negotiable principles that sustain the 6x multiplier.
          </div>
          <div className="spear-divider" style={{ marginBottom: 24 }} />
        </motion.div>

        {/* Laws list */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'space-between' }}>
          {laws.map((law, i) => (
            <motion.div key={law.numeral}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.1, ease: 'easeOut' }}
                className="law-row-hover"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '12px 16px 12px 0',
                }}
              >
                {/* Roman numeral */}
                <div style={{ minWidth: 44, flexShrink: 0 }}>
                  <span className="law-numeral" style={{ fontSize: 16 }}>{law.numeral}</span>
                </div>

                {/* Vertical separator */}
                <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(191,253,17,0.2)', flexShrink: 0 }} />

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div className="font-roobert" style={{ fontSize: 19, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 5, lineHeight: 1.2 }}>
                    {law.title}
                  </div>
                  <p className="font-roobert" style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                    {law.body}
                  </p>
                </div>
              </motion.div>

              {/* Spear divider between laws */}
              {i < laws.length - 1 && (
                <div className="spear-divider" style={{ opacity: 0.25 }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <img src="/logos/logo_mark_lime.svg" alt="" style={{ width: 16, height: 16 }} />
          <span className="font-mono-brand" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
            The Laws of GTM Engineering
          </span>
        </motion.div>
      </div>
    </div>
  )
}
