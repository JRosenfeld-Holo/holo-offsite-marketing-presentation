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

export default function SlideHyperSIMs(_: SlideProps) {
  const { t } = useLanguage()
  const featureRows = [
    { title: t('hyper.feat1.title'), description: t('hyper.feat1.detail') },
    { title: t('hyper.feat2.title'), description: t('hyper.feat2.detail') },
    { title: t('hyper.feat3.title'), description: t('hyper.feat3.detail') },
    { title: t('hyper.feat4.title'), description: t('hyper.feat4.detail') },
  ]
  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Lime radial glow — left */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '50%',
          height: '65%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Right side: SIM card image floating with glow */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: 40,
          top: 0,
          width: '45%',
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
            width: '30%',
            height: '100%',
            background: 'linear-gradient(to right, #00040f 0%, transparent 100%)',
            zIndex: 3,
          }}
        />
        {/* Lime glow aura */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 55% 50%, rgba(191,253,17,0.14) 0%, rgba(191,253,17,0.04) 40%, transparent 65%)',
            zIndex: 1,
          }}
        />
        <motion.img
          src="https://cdn.sanity.io/images/14xthjfi/prod/355a57f582eedbddd9b75778d9eecc443b45d376-1976x1976.png"
          alt="Hologram Hyper SIM"
          whileHover={{ scale: 1.04, rotate: 2, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
          style={{
            width: '75%',
            objectFit: 'contain',
            display: 'block',
            position: 'relative',
            zIndex: 2,
            filter: 'drop-shadow(0 0 50px rgba(191,253,17,0.35)) drop-shadow(0 20px 60px rgba(0,4,15,0.8))',
          }}
        />
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
          width: '55%',
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
          {t('hyper.eyebrow')}
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
            marginBottom: 12,
          }}
        >
          {t('hyper.headline')}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-roobert"
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            color: '#53f2fa',
            marginBottom: 36,
            maxWidth: 480,
          }}
        >
          {t('hyper.subtitle')}
        </motion.p>

        {/* Feature rows */}
        <motion.div
          variants={containerVariants}
          style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
        >
          {featureRows.map((row, i) => (
            <motion.div
              key={row.title}
              variants={itemVariants}
              whileHover={{ x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
              className="feature-row-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                paddingTop: 18,
                paddingBottom: 18,
                borderBottom:
                  i < featureRows.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div
                className="font-roobert"
                style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', lineHeight: 1.3 }}
              >
                {row.title}
              </div>
              <div
                style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}
              >
                {row.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
