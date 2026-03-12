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

export default function SlidePlatform(_: SlideProps) {
  const { t } = useLanguage()
  const features = [
    { title: t('platform.feat1.title'), detail: t('platform.feat1.detail') },
    { title: t('platform.feat2.title'), detail: t('platform.feat2.detail') },
    { title: t('platform.feat3.title'), detail: t('platform.feat3.detail') },
  ]
  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Lime radial glow — center-left */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-5%',
          width: '55%',
          height: '55%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Right side: SIM-page product image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '42%',
          height: '100%',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Left edge fade */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '40%',
            height: '100%',
            background: 'linear-gradient(to right, #00040f 0%, transparent 100%)',
            zIndex: 2,
          }}
        />
        {/* Subtle lime glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(191,253,17,0.05) 0%, transparent 65%)',
            zIndex: 1,
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
          style={{
            width: '86%',
            position: 'relative',
            zIndex: 2,
            borderRadius: 10,
            overflow: 'hidden',
            border: '1px solid rgba(191,253,17,0.15)',
            boxShadow: '0 0 50px rgba(191,253,17,0.08), 0 8px 40px rgba(0,4,15,0.9)',
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              background: 'rgba(8,12,24,0.98)',
              padding: '9px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {['#ff5f57', '#febc2e', '#28c840'].map((color, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 }} />
            ))}
            <div
              style={{
                marginLeft: 10,
                flex: 1,
                height: 18,
                borderRadius: 4,
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 10,
              }}
            >
              <span
                className="font-mono-brand"
                style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em' }}
              >
                dashboard.hologram.io
              </span>
            </div>
          </div>
          <img
            src="https://cdn.sanity.io/images/14xthjfi/prod/68bd8769c8cadcd3a8eb2a994bd13535d2fd5605-2200x2200.png"
            alt="Hologram Dashboard"
            style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top left' }}
          />
        </motion.div>
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
          width: '58%',
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
          {t('platform.eyebrow')}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-roobert"
          style={{
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.05,
            color: '#ffffff',
            marginBottom: 16,
            maxWidth: 580,
          }}
        >
          {t('platform.headline')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 500,
            marginBottom: 40,
          }}
        >
          {t('platform.subtitle')}
        </motion.p>

        {/* Feature callouts with lime checkmarks */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 44 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                paddingTop: 16,
                paddingBottom: 16,
                borderBottom: i < features.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              {/* Lime checkmark */}
              <div
                style={{
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                  marginTop: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                  <path
                    d="M1.5 6.5L5.5 10.5L14.5 1.5"
                    stroke="#bffd11"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="font-roobert"
                  style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 3, lineHeight: 1.3 }}
                >
                  {feature.title}
                </div>
                <div
                  style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}
                >
                  {feature.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SIM image with lime glow */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', alignItems: 'center', gap: 16 }}
        >
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
            }}
          >
            {/* Lime glow shadow */}
            <div
              style={{
                position: 'absolute',
                inset: -8,
                background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <img
              src="https://cdn.sanity.io/images/14xthjfi/prod/355a57f582eedbddd9b75778d9eecc443b45d376-1976x1976.png"
              alt="Hologram Hyper SIM"
              style={{
                width: 150,
                display: 'block',
                position: 'relative',
                filter: 'drop-shadow(0 0 20px rgba(191,253,17,0.25))',
              }}
            />
          </div>
          <div>
            <div
              className="font-mono-brand"
              style={{ fontSize: 10, color: 'rgba(191,253,17,0.7)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}
            >
              {t('platform.simLabel')}
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, maxWidth: 200 }}>
              {t('platform.simDetail')}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
