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

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            d="M6.5 1L7.983 4.928L12.163 5.243L9.075 7.872L10.059 11.957L6.5 9.75L2.941 11.957L3.925 7.872L0.837 5.243L5.017 4.928L6.5 1Z"
            fill={star <= count ? '#bffd11' : 'rgba(191,253,17,0.18)'}
          />
        </svg>
      ))}
    </div>
  )
}

export default function SlideSupport(_: SlideProps) {
  const { t } = useLanguage()
  const expertFeatures = [
    { title: t('support.feat1.title'), description: t('support.feat1.detail') },
    { title: t('support.feat2.title'), description: t('support.feat2.detail') },
    { title: t('support.feat3.title'), description: t('support.feat3.detail') },
  ]
  const reviews = [
    { quote: t('support.review1'), stars: 5 },
    { quote: t('support.review2'), stars: 5 },
    { quote: t('support.review3'), stars: 4 },
    { quote: t('support.review4'), stars: 5 },
  ]
  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Cyan/lime radial glow — left (floating) */}
      <div
        className="float-glow-c"
        style={{
          position: 'absolute',
          top: '15%',
          left: '-8%',
          width: '55%',
          height: '70%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Right side: Luke image with online indicator */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '40%',
          height: '100%',
          zIndex: 2,
          display: 'flex',
          alignItems: 'flex-end',
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
            width: '45%',
            height: '100%',
            background: 'linear-gradient(to right, #00040f 0%, transparent 100%)',
            zIndex: 3,
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '20%',
            background: 'linear-gradient(to top, #00040f 0%, transparent 100%)',
            zIndex: 3,
          }}
        />
        <img
          src="https://cdn.sanity.io/images/14xthjfi/prod/56639120d350094c0f1d76f3ab66394c6de47fb5-840x1260.png"
          alt="IoT Solutions Engineer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            position: 'relative',
            zIndex: 2,
          }}
        />
        {/* Green "online" indicator dot — with pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          style={{
            position: 'absolute',
            bottom: '28%',
            right: '22%',
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(0,4,15,0.8)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)',
            borderRadius: 20,
            padding: '5px 10px',
          }}
        >
          <div
            className="glow-pulse-lime"
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#22c55e',
              flexShrink: 0,
            }}
          />
          <span
            className="font-mono-brand"
            style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}
          >
            {t('support.online')}
          </span>
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
          width: '60%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 48,
          paddingTop: 60,
          paddingBottom: 80,
          zIndex: 5,
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="eyebrow" style={{ marginBottom: 16 }}>
          {t('support.eyebrow')}
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
          {t('support.headline')}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 18,
            lineHeight: 1.5,
            color: '#53f2fa',
            marginBottom: 28,
            maxWidth: 500,
          }}
        >
          {t('support.subtitle')}
        </motion.p>

        {/* Expert feature rows — with hover highlight */}
        <motion.div
          variants={containerVariants}
          style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 32 }}
        >
          {expertFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                x: 4,
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
              className="feature-row-hover"
              style={{
                paddingTop: 14,
                paddingBottom: 14,
                borderBottom:
                  i < expertFeatures.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div
                className="font-roobert"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: 3,
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </div>
              <div
                style={{
                  fontSize: 13,
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

        {/* 2x2 review cards grid — with hover effects */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
          }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.09 }}
              whileHover={{
                y: -2,
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
              className="glass-card review-card-hover shine-hover"
              style={{
                borderRadius: 10,
                padding: '14px 16px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <StarRating count={review.stars} />
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'Roobert, sans-serif',
                  flex: 1,
                }}
              >
                "{review.quote}"
              </p>
              {/* G2 attribution */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 10,
                  opacity: 0.55,
                }}
              >
                <img
                  src="/logos/G2_Crowd_logo.svg"
                  alt="G2"
                  style={{ width: 16, height: 16, display: 'block' }}
                />
                <span
                  className="font-mono-brand"
                  style={{
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.45)',
                    letterSpacing: '0.08em',
                  }}
                >
                  G2 Review
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
