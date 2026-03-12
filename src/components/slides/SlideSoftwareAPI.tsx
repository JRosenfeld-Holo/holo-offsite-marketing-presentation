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

export default function SlideSoftwareAPI(_: SlideProps) {
  const { t } = useLanguage()
  const features = [
    { title: t('software.feat1.title'), description: t('software.feat1.detail') },
    { title: t('software.feat2.title'), description: t('software.feat2.detail') },
    { title: t('software.feat3.title'), description: t('software.feat3.detail') },
    { title: t('software.feat4.title'), description: t('software.feat4.detail') },
  ]
  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Cyan radial glow — left (floating) */}
      <div
        className="float-glow-b"
        style={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: '48%',
          height: '65%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Right side: Dashboard screenshot with browser chrome */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.25, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '44%',
          height: '100%',
          zIndex: 2,
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
            width: '30%',
            height: '100%',
            background: 'linear-gradient(to right, #00040f 0%, transparent 100%)',
            zIndex: 4,
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '15%',
            background: 'linear-gradient(to top, #00040f 0%, transparent 100%)',
            zIndex: 4,
          }}
        />

        {/* Browser frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
          style={{
            width: '88%',
            position: 'relative',
            zIndex: 2,
            borderRadius: 10,
            overflow: 'hidden',
            border: '1px solid rgba(191,253,17,0.18)',
            boxShadow: '0 0 60px rgba(191,253,17,0.08), 0 8px 40px rgba(0,4,15,0.9)',
          }}
        >
          {/* Browser chrome bar */}
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
            {(['#ff5f57', '#febc2e', '#28c840'] as const).map((color, i) => (
              <div
                key={i}
                style={{ width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 }}
              />
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
          {/* Dashboard screenshot */}
          <img
            src="https://cdn.sanity.io/images/14xthjfi/prod/68bd8769c8cadcd3a8eb2a994bd13535d2fd5605-2200x2200.png"
            alt="Hologram Dashboard"
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'top left',
            }}
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
          {t('software.eyebrow')}
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
            maxWidth: 520,
          }}
        >
          {t('software.headline')}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            color: '#53f2fa',
            marginBottom: 36,
            maxWidth: 460,
          }}
        >
          {t('software.subtitle')}
        </motion.p>

        {/* Feature rows — now with hover highlight */}
        <motion.div
          variants={containerVariants}
          style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                x: 4,
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
              className="feature-row-hover"
              style={{
                paddingTop: 18,
                paddingBottom: 18,
                borderBottom:
                  i < features.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div
                className="font-roobert"
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: 5,
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.6,
                  maxWidth: 460,
                }}
              >
                {feature.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
