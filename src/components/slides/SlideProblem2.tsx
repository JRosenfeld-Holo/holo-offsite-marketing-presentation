'use client'

import { motion } from 'framer-motion'
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.35 + i * 0.1, ease: 'easeOut' },
  }),
}

export default function SlideProblem2(_: SlideProps) {
  const { t } = useLanguage()

  const risks = [
    { number: '01', text: t('problem2.risk1') },
    { number: '02', text: t('problem2.risk2') },
    { number: '03', text: t('problem2.risk3') },
    { number: '04', text: t('problem2.risk4') },
  ]
  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Very subtle red glow background */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          height: '60%',
          background:
            'radial-gradient(ellipse at center, rgba(200,50,30,0.07) 0%, rgba(220,80,40,0.03) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 80,
          paddingTop: 60,
          paddingBottom: 80,
          zIndex: 5,
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="eyebrow" style={{ marginBottom: 16 }}>
          {t('problem2.eyebrow')}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-roobert"
          style={{
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 1.08,
            color: '#ffffff',
            marginBottom: 44,
            maxWidth: 800,
          }}
        >
          {t('problem2.headline')}
        </motion.h1>

        {/* 2x2 risk cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
          }}
        >
          {risks.map((risk, i) => (
            <motion.div
              key={risk.number}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="glass-card"
              style={{
                borderRadius: 12,
                padding: '28px 32px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle corner glow */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '60%',
                  height: '60%',
                  background:
                    'radial-gradient(ellipse at top left, rgba(191,253,17,0.04) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Large number */}
              <div
                className="font-roobert"
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  lineHeight: 1,
                  color: '#bffd11',
                  marginBottom: 16,
                  letterSpacing: '-0.02em',
                }}
              >
                {risk.number}
              </div>

              {/* Divider */}
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: 'rgba(191,253,17,0.25)',
                  marginBottom: 16,
                }}
              />

              {/* Risk text */}
              <p
                className="font-roobert"
                style={{
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.75)',
                  fontWeight: 400,
                }}
              >
                {risk.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
