'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { Variants } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

// ─── Speed gauge helpers ────────────────────────────────────────────────────

const GAUGE_CX = 110
const GAUGE_CY = 110
const GAUGE_R = 88
const GAUGE_START = -135 // degrees from 12-o'clock, clockwise
const GAUGE_END = 135
const GAUGE_MAX = 500

function toXY(deg: number, r = GAUGE_R) {
  const rad = (deg - 90) * (Math.PI / 180)
  return {
    x: GAUGE_CX + r * Math.cos(rad),
    y: GAUGE_CY + r * Math.sin(rad),
  }
}

function arcPath(startDeg: number, endDeg: number, r = GAUGE_R) {
  if (Math.abs(endDeg - startDeg) < 0.2) return ''
  const s = toXY(startDeg, r)
  const e = toXY(endDeg, r)
  const large = endDeg - startDeg > 180 ? 1 : 0
  return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`
}

function valueToDeg(v: number) {
  return GAUGE_START + (Math.min(v, GAUGE_MAX) / GAUGE_MAX) * (GAUGE_END - GAUGE_START)
}

function SpeedGauge() {
  const [speed, setSpeed] = useState(0)
  const [latency, setLatency] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const delay = setTimeout(() => {
      const start = Date.now()
      const speedTarget = 500
      const latTarget = 40
      const dur = 2200

      const tick = () => {
        const t = Math.min((Date.now() - start) / dur, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setSpeed(Math.round(eased * speedTarget))
        setLatency(Math.round(eased * latTarget))
        if (t < 1) rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }, 500)

    return () => {
      clearTimeout(delay)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const valueDeg = valueToDeg(speed)
  const needleTip = toXY(valueDeg, GAUGE_R - 10)
  const needleBase = toXY(valueDeg + 180, 14)

  const majorTicks = [0, 100, 200, 300, 400, 500]
  const minorTicks = Array.from({ length: 51 }, (_, i) => i * 10).filter(
    (v) => !majorTicks.includes(v)
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      {/* Gauge SVG */}
      <div style={{ position: 'relative', width: 220, height: 220 }}>
        <svg width="220" height="220" viewBox="0 0 220 220" style={{ overflow: 'visible' }}>
          {/* Outer glow halo */}
          <path
            d={arcPath(GAUGE_START, GAUGE_END, GAUGE_R + 10)}
            fill="none"
            stroke="rgba(191,253,17,0.05)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          {/* Track (background arc) */}
          <path
            d={arcPath(GAUGE_START, GAUGE_END)}
            fill="none"
            stroke="rgba(191,253,17,0.10)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Filled arc */}
          {speed > 0 && (
            <path
              d={arcPath(GAUGE_START, valueDeg)}
              fill="none"
              stroke="#bffd11"
              strokeWidth="5"
              strokeLinecap="round"
              style={{ filter: 'drop-shadow(0 0 6px rgba(191,253,17,0.55))' }}
            />
          )}
          {/* Minor ticks */}
          {minorTicks.map((v) => {
            const deg = valueToDeg(v)
            const outer = toXY(deg, GAUGE_R + 10)
            const inner = toXY(deg, GAUGE_R + 6)
            return (
              <line
                key={v}
                x1={inner.x.toFixed(2)} y1={inner.y.toFixed(2)}
                x2={outer.x.toFixed(2)} y2={outer.y.toFixed(2)}
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
              />
            )
          })}
          {/* Major ticks */}
          {majorTicks.map((v) => {
            const deg = valueToDeg(v)
            const outer = toXY(deg, GAUGE_R + 14)
            const inner = toXY(deg, GAUGE_R + 7)
            const lit = v <= speed
            return (
              <line
                key={v}
                x1={inner.x.toFixed(2)} y1={inner.y.toFixed(2)}
                x2={outer.x.toFixed(2)} y2={outer.y.toFixed(2)}
                stroke={lit ? 'rgba(191,253,17,0.5)' : 'rgba(255,255,255,0.15)'}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )
          })}
          {/* Tick labels */}
          {[{ v: 0, label: '0' }, { v: 250, label: '250' }, { v: 500, label: '500' }].map(({ v, label }) => {
            const pos = toXY(valueToDeg(v), GAUGE_R + 26)
            return (
              <text
                key={v}
                x={pos.x.toFixed(2)}
                y={pos.y.toFixed(2)}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="8"
                fill="rgba(255,255,255,0.22)"
                fontFamily="monospace"
              >
                {label}
              </text>
            )
          })}
          {/* Needle */}
          <line
            x1={needleBase.x.toFixed(2)} y1={needleBase.y.toFixed(2)}
            x2={needleTip.x.toFixed(2)} y2={needleTip.y.toFixed(2)}
            stroke="#bffd11"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Hub */}
          <circle cx={GAUGE_CX} cy={GAUGE_CY} r={8} fill="rgba(191,253,17,0.12)" />
          <circle cx={GAUGE_CX} cy={GAUGE_CY} r={4.5} fill="#bffd11" />
          <circle cx={GAUGE_CX} cy={GAUGE_CY} r={2} fill="#00040f" />
        </svg>

        {/* Speed readout — positioned inside the gauge opening */}
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pointerEvents: 'none',
          }}
        >
          <span
            className="font-roobert"
            style={{ fontSize: 44, fontWeight: 700, color: '#bffd11', lineHeight: 1, letterSpacing: '-0.03em' }}
          >
            {speed}
          </span>
          <span
            className="font-mono-brand"
            style={{ fontSize: 9, color: 'rgba(191,253,17,0.5)', letterSpacing: '0.16em', marginTop: 2 }}
          >
            MB/S
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: 14 }}>
        <div
          style={{
            background: 'rgba(83,242,250,0.06)',
            border: '1px solid rgba(83,242,250,0.18)',
            borderRadius: 8,
            padding: '10px 18px',
            textAlign: 'center',
          }}
        >
          <div className="font-roobert" style={{ fontSize: 28, fontWeight: 700, color: '#53f2fa', lineHeight: 1, letterSpacing: '-0.02em' }}>
            {latency}ms
          </div>
          <div className="font-mono-brand" style={{ fontSize: 8, color: 'rgba(83,242,250,0.45)', letterSpacing: '0.14em', marginTop: 3, textTransform: 'uppercase' }}>
            Latency
          </div>
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            padding: '10px 18px',
            textAlign: 'center',
          }}
        >
          <div className="font-roobert" style={{ fontSize: 28, fontWeight: 700, color: 'rgba(255,255,255,0.7)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            4
          </div>
          <div className="font-mono-brand" style={{ fontSize: 8, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', marginTop: 3, textTransform: 'uppercase' }}>
            Global PoPs
          </div>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Superior performance',
    description:
      'Speeds up to 500mb/s and latencies as low as 40ms via on-demand native and roaming profiles.',
    stat: '500mb/s',
    statLabel: 'Speed',
  },
  {
    title: 'Global Points of Presence',
    description:
      'Native carrier performance in North America plus PoPs in Asia, South America, and Europe.',
    stat: '4',
    statLabel: 'Regions',
  },
  {
    title: 'Reliable by design',
    description:
      'Native profiles on the primary core for high performance; global roaming as automatic fallback.',
    stat: '40ms',
    statLabel: 'Latency',
  },
]

const useCaseTags = ['Video Monitoring', 'Autonomous Vehicles', 'Data Monitoring', 'Robotics']

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function SlideNativeProfiles(_: SlideProps) {
  const { t } = useLanguage()
  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Cyan radial glow — top left */}
      <div
        className="float-glow-b"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '50%',
          height: '60%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Lime glow — bottom right */}
      <div
        className="float-glow-c"
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-5%',
          width: '45%',
          height: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Right side: Speed gauge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '43%',
          height: '100%',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Left edge fade */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '25%',
            height: '100%',
            background: 'linear-gradient(to right, #00040f 0%, transparent 100%)',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        />
        {/* Lime glow behind gauge */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.06) 0%, transparent 65%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 3 }}>
          <SpeedGauge />
        </div>
      </motion.div>

      {/* Left content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '57%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 40,
          paddingTop: 56,
          paddingBottom: 48,
          zIndex: 5,
        }}
      >
        <motion.div variants={itemVariants} className="eyebrow" style={{ marginBottom: 12 }}>
          {t('native.eyebrow')}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-roobert"
          style={{
            fontSize: 52,
            fontWeight: 600,
            lineHeight: 1.06,
            color: '#ffffff',
            marginBottom: 8,
            maxWidth: 500,
          }}
        >
          High performance,{' '}
          <span style={{ color: 'var(--cyan)' }}>native profiles</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 440,
            marginBottom: 28,
          }}
        >
          Ideal for AI and other high-bandwidth applications
        </motion.p>

        {/* 3-column feature cards — compact for left panel */}
        <motion.div
          variants={containerVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            marginBottom: 24,
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
              className="glass-card shine-hover"
              style={{
                borderRadius: 10,
                padding: '18px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Stat */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span
                  className="font-roobert"
                  style={{ fontSize: 26, fontWeight: 700, color: 'var(--lime)', lineHeight: 1 }}
                >
                  {feature.stat}
                </span>
                <span
                  className="font-mono-brand"
                  style={{
                    fontSize: 8,
                    color: 'rgba(191,253,17,0.55)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                  }}
                >
                  {feature.statLabel}
                </span>
              </div>

              <div
                style={{
                  height: 1,
                  background: 'linear-gradient(to right, rgba(191,253,17,0.25), transparent)',
                  width: '65%',
                }}
              />

              <div
                className="font-roobert"
                style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', lineHeight: 1.3 }}
              >
                {feature.title}
              </div>

              <div
                style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}
              >
                {feature.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Use case tags */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', alignItems: 'center', gap: 14 }}
        >
          <div
            className="eyebrow"
            style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', whiteSpace: 'nowrap' }}
          >
            Use Cases
          </div>
          <div
            style={{
              height: 1,
              width: 20,
              background: 'rgba(255,255,255,0.1)',
              flexShrink: 0,
            }}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {useCaseTags.map((tag) => (
              <span
                key={tag}
                className="glass-card font-mono-brand"
                style={{
                  borderRadius: 20,
                  padding: '4px 11px',
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  display: 'inline-block',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
