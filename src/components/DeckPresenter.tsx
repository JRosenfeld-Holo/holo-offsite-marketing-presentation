'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PersonalizationData } from '@/types'
import { SLIDES, TOTAL_SLIDES } from '@/lib/slides'
import { useLanguage } from '@/lib/i18n'
import PersonalizationModal from './PersonalizationModal'

// Slide components
import SlideCover from './slides/SlideCover'
import SlideWhatIsHologram from './slides/SlideWhatIsHologram'
import SlideProblem1 from './slides/SlideProblem1'
import SlideProblem2 from './slides/SlideProblem2'
import SlideROI from './slides/SlideROI'
import SlidePlatform from './slides/SlidePlatform'
import SlideHyperSIMs from './slides/SlideHyperSIMs'
import SlideOutageProtection from './slides/SlideOutageProtection'
import SlideNativeProfiles from './slides/SlideNativeProfiles'
import SlideSoftwareAPI from './slides/SlideSoftwareAPI'
import SlideSupport from './slides/SlideSupport'
import SlideSecurity from './slides/SlideSecurity'
import SlideGlobe from './slides/SlideGlobe'
import SlideCustomers from './slides/SlideCustomers'
import SlideVerkada from './slides/SlideVerkada'
import SlideFarmersFridge from './slides/SlideFarmersFridge'
import SlideSundayPower from './slides/SlideSundayPower'
import SlideCapabilities1 from './slides/SlideCapabilities1'
import SlideCapabilities2 from './slides/SlideCapabilities2'
import SlideSupercharge from './slides/SlideSupercharge'
import SlideDemo from './slides/SlideDemo'
import SlideCalculator from './slides/SlideCalculator'
import SlideTailored from './slides/SlideTailored'
import SlideContact from './slides/SlideContact'

const SLIDE_COMPONENTS = [
  SlideCover,
  SlideWhatIsHologram,
  SlideProblem1,
  SlideProblem2,
  SlideROI,
  SlidePlatform,
  SlideHyperSIMs,
  SlideOutageProtection,
  SlideNativeProfiles,
  SlideSoftwareAPI,
  SlideSupport,
  SlideSecurity,
  SlideGlobe,
  SlideCustomers,
  SlideVerkada,
  SlideFarmersFridge,
  SlideSundayPower,
  SlideCapabilities1,
  SlideCapabilities2,
  SlideSupercharge,
  SlideDemo,
  SlideTailored,
  SlideCalculator,
  SlideContact,
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

const slideTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
}

export default function DeckPresenter() {
  const { lang, setLang, t } = useLanguage()
  const [showModal, setShowModal] = useState(true)
  const [personalization, setPersonalization] = useState<PersonalizationData>({
    companyName: '',
    aeName: '',
    aeEmail: '',
    aePhone: '',
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isTocOpen, setIsTocOpen] = useState(false)
  const [navVisible, setNavVisible] = useState(false)
  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES) return
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    setIsTocOpen(false)
  }, [currentSlide])

  const goNext = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo])
  const goPrev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (showModal) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          goNext()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          goPrev()
          break
        case 'p':
        case 'P':
          setShowModal(true)
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen()
          }
          break
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [showModal, goNext, goPrev])

  // Touch/swipe navigation
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (showModal) return
      const dx = touchStartX.current - e.changedTouches[0].clientX
      const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY)
      if (Math.abs(dx) > 50 && Math.abs(dx) > dy) {
        dx > 0 ? goNext() : goPrev()
      }
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [showModal, goNext, goPrev])

  // Fullscreen change listener
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const handlePersonalizationComplete = (data: PersonalizationData) => {
    setPersonalization(data)
    setShowModal(false)
  }

  const CurrentSlide = SLIDE_COMPONENTS[currentSlide]
  const progress = ((currentSlide + 1) / TOTAL_SLIDES) * 100

  return (
    <>
      <PersonalizationModal isOpen={showModal} onComplete={handlePersonalizationComplete} />

      <div className="relative w-screen h-screen overflow-hidden bg-deep-space" style={{ background: '#00040f' }}>
        {/* Slides */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="absolute inset-0 w-full h-full"
            style={{ willChange: 'transform' }}
          >
            <CurrentSlide personalization={personalization} onNext={goNext} onPrev={goPrev} />
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        />

        {/* Navigation toggle — circle logomark → expanding pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="fixed z-50"
          style={{ bottom: '24px', right: '24px' }}
        >
          <motion.div
            className="flex items-center nav-pill"
            style={{
              background: 'rgba(0,4,15,0.85)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(180%)',
              borderRadius: '40px',
              padding: navVisible ? '8px 16px' : '8px',
              boxShadow: navVisible
                ? '0 4px 24px rgba(0,0,0,0.5)'
                : '0 4px 20px rgba(0,0,0,0.4), 0 0 16px rgba(191,253,17,0.08)',
              gap: navVisible ? '8px' : '0px',
              overflow: 'hidden',
              cursor: navVisible ? 'default' : 'pointer',
              transition: 'padding 0.25s ease, gap 0.25s ease, box-shadow 0.25s ease',
            }}
            onClick={() => { if (!navVisible) setNavVisible(true) }}
          >
            {/* Logomark toggle button — always visible */}
            <motion.button
              onClick={(e) => { e.stopPropagation(); setNavVisible(!navVisible) }}
              className="cursor-pointer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                flexShrink: 0,
              }}
              title={navVisible ? 'Hide navigation' : 'Show navigation'}
            >
              <img
                src="/logos/logo_mark_lime.svg"
                alt="Hologram"
                style={{ width: '18px', height: '18px' }}
              />
            </motion.button>

            {/* Expanded nav controls */}
            <AnimatePresence>
              {navVisible && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-center"
                  style={{ gap: '4px', overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  {/* Divider after logo */}
                  <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)', flexShrink: 0, marginRight: '4px' }} />

                  {/* Prev — SVG chevron */}
                  <motion.button
                    onClick={goPrev}
                    disabled={currentSlide === 0}
                    className="cursor-pointer nav-btn"
                    whileHover={currentSlide > 0 ? { scale: 1.12 } : {}}
                    whileTap={currentSlide > 0 ? { scale: 0.9 } : {}}
                    style={{
                      color: currentSlide === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.6)',
                      padding: '6px 8px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                    aria-label="Previous slide"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>

                  {/* Slide counter / TOC toggle */}
                  <button
                    onClick={() => setIsTocOpen(!isTocOpen)}
                    className="font-mono-brand cursor-pointer"
                    style={{
                      fontSize: '11px',
                      color: isTocOpen ? 'var(--lime)' : 'rgba(255,255,255,0.4)',
                      minWidth: '52px',
                      textAlign: 'center',
                      background: 'none',
                      border: 'none',
                      padding: '4px 6px',
                      transition: 'color 0.2s',
                      flexShrink: 0,
                    }}
                    title="Table of Contents"
                  >
                    {String(currentSlide + 1).padStart(2, '0')} / {String(TOTAL_SLIDES).padStart(2, '0')}
                  </button>

                  {/* Next — SVG chevron */}
                  <motion.button
                    onClick={goNext}
                    disabled={currentSlide === TOTAL_SLIDES - 1}
                    className="cursor-pointer nav-btn"
                    whileHover={currentSlide < TOTAL_SLIDES - 1 ? { scale: 1.12 } : {}}
                    whileTap={currentSlide < TOTAL_SLIDES - 1 ? { scale: 0.9 } : {}}
                    style={{
                      color: currentSlide === TOTAL_SLIDES - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.6)',
                      padding: '6px 8px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                    aria-label="Next slide"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>

                  {/* Divider */}
                  <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

                  {/* Language toggle */}
                  <motion.button
                    onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                    className="cursor-pointer font-mono-brand"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      background: 'rgba(191,253,17,0.08)',
                      border: '1px solid rgba(191,253,17,0.2)',
                      borderRadius: '6px',
                      fontSize: '9px',
                      letterSpacing: '0.08em',
                      padding: '3px 8px',
                      color: 'var(--lime)',
                      flexShrink: 0,
                      fontWeight: 600,
                    }}
                    title={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
                  >
                    {lang === 'en' ? 'ES' : 'EN'}
                  </motion.button>

                  {/* Personalize */}
                  <motion.button
                    onClick={() => setShowModal(true)}
                    className="cursor-pointer eyebrow"
                    whileHover={{ scale: 1.06, color: '#bffd11' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      color: 'rgba(191,253,17,0.6)',
                      background: 'none',
                      border: 'none',
                      fontSize: '9px',
                      padding: '4px 6px',
                      flexShrink: 0,
                    }}
                    title="Personalize (P)"
                  >
                    ✦ Edit
                  </motion.button>

                  {/* Fullscreen */}
                  <motion.button
                    onClick={toggleFullscreen}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.1, color: 'rgba(255,255,255,0.7)' }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      color: 'rgba(255,255,255,0.3)',
                      background: 'none',
                      border: 'none',
                      fontSize: '13px',
                      padding: '4px 6px',
                      flexShrink: 0,
                    }}
                    title="Fullscreen (F)"
                  >
                    {isFullscreen ? '⊡' : '⊞'}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* TOC Dropdown */}
        <AnimatePresence>
          {isTocOpen && (
            <>
              <div
                style={{ position: 'fixed', inset: 0, zIndex: 45 }}
                onClick={() => setIsTocOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="fixed z-50"
                style={{
                  bottom: '72px',
                  right: '24px',
                  background: 'rgba(6,10,24,0.96)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  borderRadius: '14px',
                  padding: '12px',
                  boxShadow: '0 -8px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(191,253,17,0.06)',
                  width: '420px',
                  maxHeight: '60vh',
                  overflowY: 'auto',
                }}
              >
                {(() => {
                  const SECTION_LABELS_EN: Record<string, string> = {
                    intro: 'Introduction',
                    problem: 'The Problem',
                    solution: 'Solution',
                    features: 'Features',
                    coverage: 'Coverage',
                    'social-proof': 'Customer Stories',
                    capabilities: 'Capabilities',
                    demo: 'Demo',
                    pricing: 'Pricing',
                    cta: 'Next Steps',
                  }
                  const SECTION_LABELS_ES: Record<string, string> = {
                    intro: 'Introducción',
                    problem: 'El Problema',
                    solution: 'Solución',
                    features: 'Características',
                    coverage: 'Cobertura',
                    'social-proof': 'Historias de Clientes',
                    capabilities: 'Capacidades',
                    demo: 'Demo',
                    pricing: 'Precios',
                    cta: 'Próximos Pasos',
                  }
                  const SECTION_LABELS = lang === 'es' ? SECTION_LABELS_ES : SECTION_LABELS_EN
                  const sections: { key: string; label: string; slides: typeof SLIDES }[] = []
                  SLIDES.forEach(slide => {
                    const last = sections[sections.length - 1]
                    if (last && last.key === slide.section) {
                      last.slides.push(slide)
                    } else {
                      sections.push({ key: slide.section, label: SECTION_LABELS[slide.section] || slide.section, slides: [slide] })
                    }
                  })
                  return sections.map((section, si) => (
                    <div key={section.key} style={{ marginBottom: si < sections.length - 1 ? '6px' : 0 }}>
                      <div
                        className="font-mono-brand"
                        style={{
                          fontSize: '9px',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--cyan)',
                          padding: '4px 10px',
                          background: 'rgba(83,242,250,0.05)',
                          borderRadius: '6px',
                          marginBottom: '2px',
                        }}
                      >
                        {section.label}
                      </div>
                      {section.slides.map(slide => {
                        const isActive = slide.id === currentSlide
                        return (
                          <button
                            key={slide.id}
                            onClick={() => { goTo(slide.id); setIsTocOpen(false) }}
                            className="font-roobert"
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              padding: '7px 10px 7px 20px',
                              borderRadius: '6px',
                              background: isActive ? 'rgba(191,253,17,0.08)' : 'none',
                              border: 'none',
                              cursor: 'pointer',
                              color: isActive ? 'var(--lime)' : 'rgba(255,255,255,0.65)',
                              fontSize: '12px',
                              fontWeight: isActive ? 600 : 400,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              transition: 'background 0.15s, color 0.15s',
                            }}
                            onMouseEnter={e => {
                              if (!isActive) {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                                e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
                              }
                            }}
                            onMouseLeave={e => {
                              if (!isActive) {
                                e.currentTarget.style.background = 'none'
                                e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
                              }
                            }}
                          >
                            <span
                              className="font-mono-brand"
                              style={{ fontSize: '9px', color: isActive ? 'var(--lime)' : 'rgba(255,255,255,0.25)', minWidth: '18px' }}
                            >
                              {String(slide.id + 1).padStart(2, '0')}
                            </span>
                            {t(slide.labelKey)}
                            {isActive && (
                              <span style={{ marginLeft: 'auto', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--lime)', boxShadow: '0 0 8px rgba(191,253,17,0.5)' }} />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  ))
                })()}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Slide dots (top right) — hidden when nav collapsed */}
        <AnimatePresence>
          {navVisible && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-4 right-4 z-50 flex flex-col gap-1"
              style={{ maxHeight: '80vh', overflow: 'hidden' }}
            >
              {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`cursor-pointer ${i === currentSlide ? 'dot-active' : ''}`}
                  whileHover={{ scaleX: 2.5, scaleY: 1.3 }}
                  whileTap={{ scale: 0.85 }}
                  animate={{
                    width: i === currentSlide ? 20 : 6,
                    background: i === currentSlide ? 'var(--lime)' : 'rgba(255,255,255,0.15)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  style={{
                    height: '4px',
                    borderRadius: '2px',
                    border: 'none',
                    padding: 0,
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
