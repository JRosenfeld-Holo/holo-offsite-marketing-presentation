'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}


const STEP_DURATION = 4000

export default function SlideOutageProtection(_: SlideProps) {
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const steps = [
    {
      src: '/images/outage-protection.png',
      label: t('outage.step1'),
      status: t('outage.step1.status'),
      statusColor: '#53f2fa',
    },
    {
      src: '/images/fallback.png',
      label: t('outage.step2'),
      status: t('outage.step2.status'),
      statusColor: '#bffd11',
    },
  ]

  useEffect(() => {
    const startTime = Date.now()
    const tick = setInterval(() => {
      const elapsed = (Date.now() - startTime) % STEP_DURATION
      setProgress(elapsed / STEP_DURATION)
    }, 30)
    const cycle = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, STEP_DURATION)
    return () => {
      clearInterval(tick)
      clearInterval(cycle)
    }
  }, [])

  // Reset progress bar on step change
  useEffect(() => {
    setProgress(0)
  }, [activeStep])

  const step = steps[activeStep]

  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Cyan/teal radial glow — left */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '-8%',
          width: '50%',
          height: '60%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Right side: sequential animated images */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          right: '4%',
          top: 0,
          width: '42%',
          height: '100%',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: 0,
          paddingLeft: 0,
        }}
      >
        {/* Left edge fade */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '35%',
            height: '100%',
            background: 'linear-gradient(to right, #00040f 0%, transparent 100%)',
            zIndex: 3,
          }}
        />

        {/* Status badge */}
        <motion.div
          key={`status-${activeStep}`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{
            position: 'relative',
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 16,
            background: 'rgba(0,4,15,0.7)',
            border: `1px solid ${step.statusColor}33`,
            borderRadius: 20,
            padding: '5px 14px',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Pulsing dot */}
          <motion.div
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: step.statusColor,
              boxShadow: `0 0 8px ${step.statusColor}88`,
              flexShrink: 0,
            }}
          />
          <span
            className="font-mono-brand"
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              color: step.statusColor,
              fontWeight: 600,
            }}
          >
            {step.status}
          </span>
        </motion.div>

        {/* Image crossfade area */}
        <div
          style={{
            position: 'relative',
            zIndex: 4,
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeStep}
              src={step.src}
              alt=""
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                width: '100%',
                objectFit: 'contain',
                display: 'block',
                borderRadius: 10,
                filter: 'drop-shadow(0 8px 32px rgba(0,4,15,0.7))',
              }}
            />
          </AnimatePresence>

          {/* Step label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`label-${activeStep}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                marginTop: 14,
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.04em',
                fontFamily: 'Roobert, sans-serif',
              }}
            >
              {step.label}
            </motion.div>
          </AnimatePresence>

          {/* Step dots + progress */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 14,
            }}
          >
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div
                  style={{
                    width: i === activeStep ? 24 : 6,
                    height: 4,
                    borderRadius: 2,
                    background: i === activeStep ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
                    transition: 'width 0.3s ease, background 0.3s ease',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* Fill sweeps left-to-right as progress increases */}
                  {i === activeStep && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        borderRadius: 2,
                        background: step.statusColor,
                        width: `${progress * 100}%`,
                        transition: 'width 0.03s linear',
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
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
          width: '53%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 48,
          zIndex: 5,
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="eyebrow" style={{ marginBottom: 16 }}>
          {t('outage.eyebrow')}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-roobert"
          style={{
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 1.06,
            color: '#ffffff',
            marginBottom: 10,
          }}
        >
          {t('outage.headline')}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            color: '#53f2fa',
            marginBottom: 32,
          }}
        >
          {t('outage.subtitle')}
        </motion.p>

        {/* Feature section 1 */}
        <motion.div variants={itemVariants} style={{ marginBottom: 24 }}>
          <h3
            className="font-roobert"
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: 8,
              lineHeight: 1.3,
            }}
          >
            {t('outage.feat1.title')}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
              maxWidth: 460,
            }}
          >
            {t('outage.feat1.detail')}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          style={{
            width: '100%',
            maxWidth: 460,
            height: 1,
            background: 'rgba(255,255,255,0.07)',
            marginBottom: 24,
          }}
        />

        {/* Feature section 2 */}
        <motion.div variants={itemVariants} style={{ marginBottom: 24 }}>
          <h3
            className="font-roobert"
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: 8,
              lineHeight: 1.3,
            }}
          >
            {t('outage.feat2.title')}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
              maxWidth: 460,
            }}
          >
            {t('outage.feat2.detail')}
          </p>
        </motion.div>

        {/* Lime-bordered callout box */}
        <motion.div
          variants={itemVariants}
          style={{
            border: '1px solid rgba(191,253,17,0.35)',
            borderRadius: 8,
            padding: '16px 20px',
            maxWidth: 380,
            marginBottom: 24,
            background: 'rgba(191,253,17,0.04)',
          }}
        >
          <div
            className="font-roobert"
            style={{ fontSize: 15, fontWeight: 600, color: '#bffd11', lineHeight: 1.4 }}
          >
            {t('outage.callout')}
          </div>
          <div
            className="font-mono-brand"
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(191,253,17,0.6)',
              marginTop: 4,
            }}
          >
            {t('outage.callout.sub')}
          </div>
        </motion.div>

        {/* Analogy card — Roaming vs. Fallback */}
        <motion.div
          variants={itemVariants}
          className="glass-card"
          style={{
            borderRadius: 10,
            padding: '16px 20px',
            maxWidth: 460,
          }}
        >
          <div
            className="font-mono-brand"
            style={{
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: 10,
              fontWeight: 600,
            }}
          >
            Roaming vs. Fallback
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <div
                style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,80,60,0.8)', marginBottom: 4 }}
              >
                {t('outage.roaming')}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                {t('outage.roaming.detail')}
              </div>
            </div>
            <div>
              <div
                style={{ fontSize: 12, fontWeight: 600, color: '#bffd11', marginBottom: 4 }}
              >
                {t('outage.fallback')}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                {t('outage.fallback.detail')}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
