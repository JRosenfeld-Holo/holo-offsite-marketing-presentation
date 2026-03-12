'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

export default function SlideDemo({ personalization, onNext, onPrev }: SlideProps) {
  const { t } = useLanguage()
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Lime glow — subtle center */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          left: '15%',
          width: '70%',
          height: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.06) 0%, rgba(191,253,17,0.01) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="relative z-10 w-full h-full"
        style={{ display: 'flex', flexDirection: 'column', padding: '40px 60px' }}
      >
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="eyebrow"
          style={{ marginBottom: 10 }}
        >
          {t('demo.eyebrow')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
          className="font-roobert"
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: 8,
          }}
        >
          {t('demo.headline')}{' '}
          <span style={{ color: 'var(--lime)' }}>{t('demo.headlineAccent')}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.6,
            maxWidth: 560,
            marginBottom: 24,
          }}
        >
          {t('demo.body')}
        </motion.p>

        {/* Demo iframe container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38 }}
          style={{
            width: '100%',
            height: '65vh',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(191,253,17,0.2)',
            flex: 1,
          }}
        >
          <iframe
            src="https://capture.navattic.com/cmmkwpcji000a04l46mwg6lfp"
            style={{ border: 'none', width: '100%', height: '100%' }}
            data-navattic-demo-id="cmmkwpcji000a04l46mwg6lfp"
            allow="fullscreen"
            title="Hologram Interactive Demo"
          />
        </motion.div>
      </div>
    </div>
  )
}
