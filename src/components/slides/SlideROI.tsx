'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

interface StatDef {
  target: number
  prefix: string
  suffix: string
  label: string
  displayFn?: (val: number) => string
}



function useCountUp(target: number, duration: number = 1500, started: boolean = false) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!started) return
    startTimeRef.current = null
    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, started])

  return value
}

function StatCounter({ stat, started, index }: { stat: StatDef; started: boolean; index: number }) {
  const value = useCountUp(stat.target, 1500, started)

  const displayValue = stat.displayFn ? stat.displayFn(value) : String(value)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: '28px 24px 28px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Large stat number */}
      <div
        className="stat-number font-roobert"
        style={{ fontSize: 88, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em' }}
      >
        {stat.prefix}{displayValue}{stat.suffix}
      </div>
      {/* Label */}
      <div
        className="font-mono-brand"
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: 'rgba(255,255,255,0.5)',
          textTransform: 'uppercase',
          maxWidth: 240,
          lineHeight: 1.5,
        }}
      >
        {stat.label}
      </div>
    </motion.div>
  )
}

export default function SlideROI(_: SlideProps) {
  const { t } = useLanguage()
  const [started, setStarted] = useState(false)

  const stats: StatDef[] = [
    { target: 50, prefix: '', suffix: '%', label: t('roi.stat1.label') },
    { target: 100, prefix: '', suffix: '%', label: t('roi.stat2.label') },
    { target: 3, prefix: '', suffix: 'TB+', label: t('roi.stat3.label') },
    { target: 5000, prefix: '', suffix: '+', label: t('roi.stat4.label'), displayFn: (val) => val >= 1000 ? `${Math.floor(val / 1000)}K` : String(val) },
  ]

  const quotes = [
    { text: t('roi.quote1'), company: "FARMER'S FRIDGE", logo: '/logos/customers/farmers-fridge-logo.avif' },
    { text: t('roi.quote2'), company: 'VERKADA', logo: '/logos/customers/verkada-logo.png' },
  ]

  useEffect(() => {
    // Small delay to let the slide entrance animation settle before counting up
    const timer = setTimeout(() => setStarted(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Central lime radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '70%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.09) 0%, rgba(191,253,17,0.03) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 80,
          paddingTop: 60,
          paddingBottom: 72,
          zIndex: 5,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="eyebrow"
          style={{ marginBottom: 14 }}
        >
          {t('roi.eyebrow')}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          className="font-roobert"
          style={{
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.08,
            color: '#ffffff',
            marginBottom: 12,
            maxWidth: 780,
          }}
        >
          {t('roi.headline')}
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 540,
            marginBottom: 36,
          }}
        >
          {t('roi.body')}
        </motion.p>

        {/* Stats grid — 4 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            marginBottom: 36,
          }}
        >
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} started={started} index={i} />
          ))}
        </div>

        {/* Customer quotes — 2 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
          }}
        >
          {quotes.map((quote, i) => (
            <motion.div
              key={quote.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="quote-block"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <p
                className="font-roobert"
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.75)',
                  fontStyle: 'italic',
                }}
              >
                "{quote.text}"
              </p>
              <div style={{ marginTop: 6 }}>
                <img
                  src={quote.logo}
                  alt={quote.company}
                  style={{
                    height: 13,
                    width: 'auto',
                    display: 'block',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.4,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
