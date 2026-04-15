'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

export default function GTMSlide01Title({ onNext, onPrev }: SlideProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [started, setStarted] = useState(false)

  const handleStart = useCallback(() => {
    if (started) return
    setStarted(true)

    const audio = new Audio('/videos/phalanx.mp3')
    audio.loop = true
    audio.volume = 0
    audioRef.current = audio

    audio.play().then(() => {
      let vol = 0
      const fade = setInterval(() => {
        vol = Math.min(vol + 0.05, 1)
        audio.volume = vol
        if (vol >= 1) clearInterval(fade)
      }, 50)
    }).catch(() => {})
  }, [started])

  // Clean up audio when slide unmounts (navigation away)
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current.src = ''
        audioRef.current = null
      }
    }
  }, [])

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden" style={{ background: '#00040f' }}>
      {/* Click-to-start overlay */}
      <AnimatePresence>
        {!started && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onClick={handleStart}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0,4,15,0.92)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <motion.img
              src="/logos/logo_mark_lime.svg"
              alt="Hologram"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ width: 64, height: 64, marginBottom: 32, filter: 'drop-shadow(0 0 40px rgba(191,253,17,0.35))' }}
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono-brand"
              style={{
                fontSize: 13,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(191,253,17,0.7)',
                padding: '10px 24px',
                border: '1px solid rgba(191,253,17,0.2)',
                borderRadius: 4,
              }}
            >
              Click to Begin
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen video background */}
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
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay — heavier on left for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,4,15,0.82) 0%, rgba(0,4,15,0.60) 45%, rgba(0,4,15,0.30) 70%, rgba(0,4,15,0.10) 100%)',
          zIndex: 1,
        }}
      />

      {/* Bottom fade for footer readability */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, rgba(0,4,15,0.75) 0%, transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* Top-left: Hologram logo */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ position: 'absolute', top: 40, left: 64, zIndex: 10 }}
      >
        <img src="/logos/Hologram Logo White Text.svg" alt="Hologram" style={{ width: 148, display: 'block' }} />
      </motion.div>

      {/* Top-right: eyebrow badge */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ position: 'absolute', top: 44, right: 64, zIndex: 10 }}
      >
        <span
          className="font-mono-brand"
          style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(191,253,17,0.55)',
            background: 'rgba(191,253,17,0.06)',
            border: '1px solid rgba(191,253,17,0.15)',
            borderRadius: 3,
            padding: '5px 12px',
          }}
        >
          GTM Engineering Playbook
        </span>
      </motion.div>

      {/* Center-left main content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '60%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 64,
          paddingRight: 48,
          zIndex: 10,
        }}
      >
        {/* Monospace eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono-brand"
          style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(191,253,17,0.6)', marginBottom: 20 }}
        >
          ▸ The GTM Engineering Playbook
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="font-roobert"
          style={{
            fontSize: 'clamp(52px, 6vw, 88px)',
            fontWeight: 700,
            lineHeight: 1.0,
            color: '#bffd11',
            letterSpacing: '-0.02em',
            marginBottom: 20,
          }}
        >
          THIS IS HOLOGRAM.
        </motion.div>

        {/* Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
          className="font-roobert"
          style={{
            fontSize: 'clamp(20px, 2.4vw, 28px)',
            fontWeight: 600,
            lineHeight: 1.25,
            color: '#ffffff',
            marginBottom: 24,
          }}
        >
          47 Hologrammers.<br />300-Person Output.<br />Unrelenting Execution.
        </motion.div>

        {/* Spear divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
          className="spear-divider"
          style={{ width: 280, transformOrigin: 'left', marginBottom: 24 }}
        />

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          style={{ maxWidth: 460 }}
        >
          <p className="font-roobert" style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.9)' }}>
            How Hologram&apos;s GTM Engineering Infrastructure Delivers a
          </p>
          <p className="font-roobert" style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.9)' }}>
            <span style={{ color: '#bffd11', fontWeight: 700 }}>6x Productivity Multiplier</span>{' '}
            Through AI, Deep Automation, and Systems Thinking.
          </p>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        style={{
          position: 'absolute',
          bottom: 28,
          left: 64,
          right: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logos/logo_mark_lime.svg" alt="" style={{ width: 18, height: 18 }} />
          <span className="font-mono-brand" style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em' }}>
            THE GTM ENGINEERING PLAYBOOK
          </span>
        </div>
        <span className="font-mono-brand" style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}>
          hologram.io
        </span>
      </motion.div>
    </div>
  )
}
