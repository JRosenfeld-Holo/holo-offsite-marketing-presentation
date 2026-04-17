'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

const metrics = [
  {
    num: 55, suffix: ':1',
    label: 'Pipeline-to-Spend Ratio',
    detail: 'Generating exponential leverage on capital deployed.',
    delay: 400,
  },
  {
    num: 86, suffix: '%',
    label: 'Outbound Pipeline Growth',
    detail: 'Powered by intent-based, AI-orchestrated micro-relevance.',
    delay: 550,
  },
  {
    num: 147, suffix: '%',
    label: 'Inbound YoY Growth',
    detail: 'Driven by AEO/SEO dominance and precision targeting.',
    delay: 700,
  },
  {
    num: 79, suffix: '%',
    label: 'Lead Cost Reduction',
    detail: 'Eliminating the inefficient tactics and vendor bloat.',
    delay: 850,
  },
  {
    num: 94, suffix: '%',
    label: 'Marketing-Sourced Pipeline',
    detail: 'A fully synchronized system executing at scale.',
    delay: 1000,
  },
]

function useCountUp(target: number, duration: number, delay: number) {
  const [value, setValue] = useState(0)
  const [done, setDone] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = performance.now()
      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease-out cubic — fast start, dramatic deceleration at the end
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * target))
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          setValue(target)
          setDone(true)
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timer)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, delay])

  return { value, done }
}

function CounterDisplay({
  num, suffix, fontSize, marginBottom, delay,
}: {
  num: number
  suffix: string
  fontSize: string
  marginBottom?: number
  delay: number
}) {
  const { value, done } = useCountUp(num, 1500, delay)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    if (done) {
      setFlash(true)
      const t = setTimeout(() => setFlash(false), 600)
      return () => clearTimeout(t)
    }
  }, [done])

  return (
    <div
      className="battle-counter"
      style={{
        fontSize,
        marginBottom,
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {/* Invisible placeholder reserves the final width */}
      <span style={{ visibility: 'hidden' }}>{num}{suffix}</span>
      {/* Animated value overlaid in the same position */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'text-shadow 0.5s ease',
          textShadow: flash
            ? '0 0 24px rgba(191,253,17,1), 0 0 56px rgba(191,253,17,0.75), 0 0 120px rgba(191,253,17,0.3)'
            : undefined,
        }}
      >
        {value}{suffix}
      </span>
    </div>
  )
}

export default function GTMSlide08Results({ onNext, onPrev }: SlideProps) {
  return (
    <div className="slide-base phalanx-bg" style={{ background: '#00040f' }}>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '55%', height: '65%', background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.10) 0%, rgba(191,253,17,0.03) 40%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '-5%', left: '-5%', width: '40%', height: '45%', background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '44px 64px 36px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="category-badge" style={{ marginBottom: 12 }}>▸ Results</div>
          <div className="font-roobert" style={{ fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 6 }}>
            EMPIRICAL DOMINANCE
          </div>
          <div className="font-roobert" style={{ fontSize: 20, color: 'rgba(255,255,255,0.88)', marginBottom: 20 }}>
            The architecture&apos;s output is verifiable. The unit economics are unassailable.
          </div>
          <div className="spear-divider" style={{ marginBottom: 24 }} />
        </motion.div>

        {/* Metric cards */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 }}>

          {/* Row 1: 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, flex: 1 }}>
            {metrics.slice(0, 3).map((metric) => (
              <div
                key={metric.label}
                className="war-card metric-card-hover"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '24px 28px', cursor: 'default' }}
              >
                <CounterDisplay
                  num={metric.num}
                  suffix={metric.suffix}
                  fontSize="clamp(56px, 6.5vw, 88px)"
                  marginBottom={10}
                  delay={metric.delay}
                />
                <div className="font-roobert" style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 8, lineHeight: 1.2 }}>
                  {metric.label}
                </div>
                <div style={{ height: 1, width: '100%', background: 'rgba(191,253,17,0.12)', marginBottom: 8 }} />
                <p className="font-roobert" style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,0.88)' }}>
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: 2 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>
            {metrics.slice(3).map((metric) => (
              <div
                key={metric.label}
                className="war-card metric-card-hover"
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24, padding: '20px 28px', cursor: 'default' }}
              >
                <CounterDisplay
                  num={metric.num}
                  suffix={metric.suffix}
                  fontSize="clamp(52px, 6vw, 76px)"
                  delay={metric.delay}
                />
                <div>
                  <div className="font-roobert" style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6, lineHeight: 1.2 }}>
                    {metric.label}
                  </div>
                  <p className="font-roobert" style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,0.88)' }}>
                    {metric.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
            The Verifiable Output of 50 Engineers
          </span>
        </motion.div>
      </div>
    </div>
  )
}
