'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

export default function SlideCover({ personalization, onNext, onPrev }: SlideProps) {
  const { t } = useLanguage()
  const words = [t('cover.outage'), t('cover.proof')]
  const line2 = t('cover.line2')
  const line3 = t('cover.line3')

  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Lime radial glow — bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '55%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.12) 0%, rgba(191,253,17,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Cyan radial glow — top-right */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.09) 0%, rgba(83,242,250,0.03) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Cover image — right side, absolute */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Left-fade gradient overlay */}
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
        <img
          src="/images/Cover Slide.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>

      {/* Top-left logo */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          position: 'absolute',
          top: 40,
          left: 80,
          zIndex: 10,
        }}
      >
        <img
          src="/logos/Hologram Logo White Text.svg"
          alt="Hologram"
          style={{ width: 160, display: 'block' }}
        />
      </motion.div>

      {/* Center-left content */}
      <div
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
          paddingRight: 40,
          zIndex: 5,
        }}
      >
        {/* Eyebrow — personalization */}
        {personalization.companyName && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="eyebrow"
            style={{ color: '#53f2fa', marginBottom: 20 }}
          >
            {t('cover.preparedFor')} {personalization.companyName}
          </motion.div>
        )}

        {/* Headline */}
        <div style={{ marginBottom: 24 }}>
          {/* Line 1: "Outage Proof™" — two words staggered */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 16px', marginBottom: 4 }}>
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                className="font-roobert"
                style={{
                  fontSize: 72,
                  fontWeight: 600,
                  lineHeight: 1.05,
                  color: '#bffd11',
                  display: 'inline-block',
                }}
              >
                {word}
                {word === t('cover.proof') && (
                  <sup style={{ fontSize: '0.35em', verticalAlign: 'super', opacity: 0.7, marginLeft: 2 }}>™</sup>
                )}
              </motion.span>
            ))}
          </div>

          {/* Line 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="font-roobert"
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: 4,
            }}
          >
            {line2}
          </motion.div>

          {/* Line 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="font-roobert"
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              color: '#ffffff',
            }}
          >
            {line3}
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 420,
            marginBottom: 28,
          }}
        >
          {t('cover.subtitle')}
        </motion.p>

        {/* Lime horizontal rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
          style={{
            width: 60,
            height: 2,
            background: '#bffd11',
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: 80,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          zIndex: 10,
        }}
      >
        <img
          src="/logos/logo_mark_lime.svg"
          alt=""
          style={{ width: 20, height: 20, display: 'block' }}
        />
        <span
          className="font-mono-brand"
          style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}
        >
          hologram.io
        </span>
      </motion.div>
    </div>
  )
}
