'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

const bodyLines = [
  '50 Engineers. A Unified Architecture. Relentless Systems Thinking.',
  'This is how we outproduce, outmaneuver, and outlast competitors six times our size.',
  'We do not rely on hope. We rely on the code.',
]

export default function GTMSlide11Conclusion({ onNext, onPrev }: SlideProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const openLightbox = useCallback(() => {
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [])

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden" style={{ background: '#00040f' }}>
      {/* Full-screen video background — spear goes through */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      >
        <source src="/videos/spear_closing.mp4" type="video/mp4" />
      </video>

      {/* Dark radial overlay — centres attention on text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, rgba(0,4,15,0.55) 0%, rgba(0,4,15,0.72) 50%, rgba(0,4,15,0.90) 100%)',
          zIndex: 1,
        }}
      />

      {/* Bottom vignette */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '160px',
          background: 'linear-gradient(to top, rgba(0,4,15,0.85) 0%, transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* Top vignette */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to bottom, rgba(0,4,15,0.60) 0%, transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* Center content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '60px 80px',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-brand"
          style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(191,253,17,0.5)', marginBottom: 32 }}
        >
          Hologram | GTM Engineering Playbook
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          style={{ marginBottom: 32, maxWidth: 800 }}
        >
          <div
            className="font-roobert"
            style={{
              fontSize: 'clamp(44px, 5.5vw, 72px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: 4,
            }}
          >
            COME BACK WITH YOUR SHIELD,
          </div>
          <div
            className="font-roobert"
            style={{
              fontSize: 'clamp(44px, 5.5vw, 72px)',
              fontWeight: 700,
              color: '#bffd11',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              textShadow: '0 0 40px rgba(191,253,17,0.5), 0 0 80px rgba(191,253,17,0.2)',
            }}
          >
            OR ON IT.
          </div>
        </motion.div>

        {/* Spear divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="spear-divider"
          style={{ width: 320, marginBottom: 32 }}
        />

        {/* Body lines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 580, marginBottom: 32 }}>
          {bodyLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
              className="font-roobert"
              style={{ fontSize: 22, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}
            >
              {line}
            </motion.p>
          ))}

          {/* Final bold line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
            className="font-roobert"
            style={{ fontSize: 24, fontWeight: 700, color: '#bffd11', lineHeight: 1.5, marginTop: 4, textShadow: '0 0 24px rgba(191,253,17,0.3)' }}
          >
            This is Hologram. This is how we win.
          </motion.p>
        </div>

        {/* Spear divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="spear-divider"
          style={{ width: 240, marginBottom: 32 }}
        />

        {/* Hologram logo — clickable to open video lightbox */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <button
            onClick={openLightbox}
            aria-label="Play video"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              outline: 'none',
              position: 'relative',
              display: 'block',
            }}
          >
            <motion.img
              src="/logos/Hologram Logo White Text.svg"
              alt="Hologram — click to play video"
              style={{ width: 140, display: 'block', margin: '0 auto' }}
              whileHover={{
                scale: 1.08,
                filter: 'drop-shadow(0 0 20px rgba(191,253,17,0.6)) drop-shadow(0 0 40px rgba(191,253,17,0.25))',
              }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </motion.div>
      </div>

      {/* Bottom footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        style={{
          position: 'absolute',
          bottom: 28,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          zIndex: 10,
        }}
      >
        <img src="/logos/logo_mark_lime.svg" alt="" style={{ width: 14, height: 14 }} />
        <span className="font-mono-brand" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase' }}>
          Hologram | The GTM Engineering Playbook
        </span>
      </motion.div>

      {/* ── Video Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(0,0,0,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close video"
              style={{
                position: 'absolute',
                top: 24,
                right: 32,
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.7)',
                fontSize: 36,
                cursor: 'pointer',
                lineHeight: 1,
                zIndex: 10000,
                fontWeight: 300,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#bffd11')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              ✕
            </button>

            {/* Video container */}
            <motion.div
              key="lightbox-video"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '85vw',
                maxWidth: 1200,
                aspectRatio: '16 / 9',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 0 80px rgba(191,253,17,0.15), 0 0 0 1px rgba(191,253,17,0.12)',
                cursor: 'default',
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                controls
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  background: '#000',
                  display: 'block',
                }}
              >
                <source src="/videos/randy_time.MOV" type="video/quicktime" />
                <source src="/videos/randy_time.MOV" type="video/mp4" />
                Your browser does not support this video format.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
