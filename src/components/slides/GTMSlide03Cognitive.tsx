'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

const FACE: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden' as React.CSSProperties['backfaceVisibility'],
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',
}

const DIM_CARD: React.CSSProperties = {
  ...FACE,
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.10)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)',
}

const LIME_CARD: React.CSSProperties = {
  ...FACE,
  background: 'rgba(191,253,17,0.04)',
  border: '1px solid rgba(191,253,17,0.16)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(191,253,17,0.07)',
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span style={{ color: '#bffd11', fontWeight: 700 }}>{children}</span>
}

export default function GTMSlide03Cognitive({ onNext, onPrev }: SlideProps) {
  const [flipped, setFlipped] = useState({ left: false, right: false })

  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '50%', height: '55%', background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '45%', height: '50%', background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 64px 20px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="category-badge" style={{ marginBottom: 12 }}>▸ Strategy</div>
          <div className="font-roobert" style={{ fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 6 }}>
            THE COGNITIVE ALLOCATION
          </div>
          <div className="font-roobert" style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>
            Why the legacy &ldquo;Thinker vs. Doer&rdquo; model is structurally obsolete.
          </div>
          <div className="spear-divider" style={{ marginBottom: 14 }} />
        </motion.div>

        {/* Flip card columns */}
        <div style={{ display: 'flex', flex: 1, gap: 24, minHeight: 0 }}>

          {/* ── Left card: The Industrial Trap ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            style={{ flex: 1, perspective: '900px', cursor: 'pointer', minHeight: 0 }}
            onClick={() => setFlipped(f => ({ ...f, left: !f.left }))}
          >
            <div style={{
              position: 'relative', width: '100%', height: '100%',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.65s cubic-bezier(0.16,1,0.3,1)',
              transform: flipped.left ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}>

              {/* Front */}
              <div style={{ ...DIM_CARD, alignItems: 'center', justifyContent: 'space-between', padding: '28px 32px', textAlign: 'center' }}>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>
                  Legacy B2B
                </div>
                <div>
                  <div className="font-roobert" style={{ fontSize: 'clamp(44px, 5.5vw, 72px)', fontWeight: 700, color: 'rgba(255,255,255,0.38)', letterSpacing: '-0.02em', lineHeight: 1.05, textTransform: 'uppercase' }}>
                    THE<br />INDUSTRIAL<br />TRAP
                  </div>
                  <div className="font-roobert" style={{ marginTop: 16, fontSize: 17, color: 'rgba(255,255,255,0.22)', lineHeight: 1.4 }}>
                    How incumbents stay stuck
                  </div>
                </div>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.16)' }}>
                  Tap to reveal →
                </div>
              </div>

              {/* Back */}
              <div style={{ ...DIM_CARD, transform: 'rotateY(180deg)', padding: '24px 28px', justifyContent: 'space-between' }}>
                <div>
                  <div className="font-mono-brand" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 8 }}>
                    The Industrial Trap
                  </div>
                  <div className="spear-divider" style={{ opacity: 0.2, marginBottom: 16 }} />
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <p className="font-roobert" style={{ fontSize: 26, lineHeight: 1.5, color: 'rgba(255,255,255,0.62)' }}>
                    Traditional organizations separate work by role, not phase. Management owns strategy (
                    <span style={{ color: '#4da6ff', fontWeight: 600 }}>Blue Work</span>
                    ), while frontline SDRs are trapped in endless, manual execution (
                    <span style={{ color: '#ff4d4d', fontWeight: 600 }}>Red Work</span>
                    ).
                  </p>
                </div>
                <div>
                  <div className="font-mono-brand" style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 8 }}>
                    The Result:
                  </div>
                  <p className="font-roobert" style={{ fontSize: 26, lineHeight: 1.5, color: 'rgba(255,255,255,0.52)' }}>
                    Frontline teams are locked in a &ldquo;heads down&rdquo; state of infinite data entry. Zero authority to pause, analyze, or fix broken processes.
                  </p>
                </div>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.14)', textAlign: 'center', marginTop: 12 }}>
                  ← Tap to flip back
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vertical spear divider */}
          <div style={{ width: 1, background: 'linear-gradient(to bottom, transparent, rgba(191,253,17,0.4) 30%, rgba(191,253,17,0.7) 50%, rgba(191,253,17,0.4) 70%, transparent)', flexShrink: 0 }} />

          {/* ── Right card: The Engineered Rhythm ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            style={{ flex: 1, perspective: '900px', cursor: 'pointer', minHeight: 0 }}
            onClick={() => setFlipped(f => ({ ...f, right: !f.right }))}
          >
            <div style={{
              position: 'relative', width: '100%', height: '100%',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.65s cubic-bezier(0.16,1,0.3,1)',
              transform: flipped.right ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}>

              {/* Front */}
              <div style={{ ...LIME_CARD, alignItems: 'center', justifyContent: 'space-between', padding: '28px 32px', textAlign: 'center' }}>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(191,253,17,0.45)' }}>
                  Hologram
                </div>
                <div>
                  <div className="font-roobert" style={{ fontSize: 'clamp(44px, 5.5vw, 72px)', fontWeight: 700, color: '#bffd11', letterSpacing: '-0.02em', lineHeight: 1.05, textTransform: 'uppercase', textShadow: '0 0 40px rgba(191,253,17,0.3)' }}>
                    THE<br />ENGINEERED<br />RHYTHM
                  </div>
                  <div className="font-roobert" style={{ marginTop: 16, fontSize: 17, color: 'rgba(191,253,17,0.45)', lineHeight: 1.4 }}>
                    How we outproduce the field
                  </div>
                </div>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(191,253,17,0.3)' }}>
                  Tap to reveal →
                </div>
              </div>

              {/* Back */}
              <div style={{ ...LIME_CARD, transform: 'rotateY(180deg)', padding: '24px 28px', justifyContent: 'space-between' }}>
                <div>
                  <div className="font-mono-brand" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#bffd11', marginBottom: 8 }}>
                    The Engineered Rhythm
                  </div>
                  <div className="spear-divider" style={{ marginBottom: 16 }} />
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <p className="font-roobert" style={{ fontSize: 26, lineHeight: 1.5, color: 'rgba(255,255,255,0.85)' }}>
                    We <Highlight>algorithmically automate</Highlight> baseline{' '}
                    <span style={{ color: '#ff4d4d', fontWeight: 700 }}>Red Work</span>{' '}
                    (repetitive execution, data routing, standard outreach) through our AI infrastructure.
                  </p>
                </div>
                <div>
                  <div className="font-mono-brand" style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(191,253,17,0.6)', marginBottom: 8 }}>
                    The Result:
                  </div>
                  <p className="font-roobert" style={{ fontSize: 26, lineHeight: 1.5, color: 'rgba(255,255,255,0.85)' }}>
                    Our engineers cycle rapidly between{' '}
                    <span style={{ color: '#4da6ff', fontWeight: 700 }}>Blue Work</span>{' '}
                    (analysis, intent mapping, strategy) and high-value{' '}
                    <span style={{ color: '#ff4d4d', fontWeight: 700 }}>Red Work</span>{' '}
                    (shipping code, deploying micro-SaaS) to capture the revenue.
                  </p>
                </div>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(191,253,17,0.22)', textAlign: 'center', marginTop: 12 }}>
                  ← Tap to flip back
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}
        >
          <div className="font-mono-brand" style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#bffd11', background: 'rgba(191,253,17,0.06)', border: '1px solid rgba(191,253,17,0.15)', borderRadius: 3, padding: '7px 20px' }}>
            Machines Execute. Humans Architect.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
