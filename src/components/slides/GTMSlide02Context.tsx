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

export default function GTMSlide02Context({ onNext, onPrev }: SlideProps) {
  const [flipped, setFlipped] = useState({ left: false, right: false })

  return (
    <div className="slide-base phalanx-bg" style={{ background: '#00040f' }}>
      <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: '50%', height: '65%', background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.09) 0%, rgba(191,253,17,0.03) 40%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45%', height: '55%', background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 64px 20px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="category-badge" style={{ marginBottom: 12 }}>▸ Strategy</div>
          <div className="font-roobert" style={{ fontSize: 'clamp(32px, 3.8vw, 50px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 6 }}>
            THE ASYMMETRIC ADVANTAGE
          </div>
          <div className="font-roobert" style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>
            WE ARE OUTNUMBERED. But strategy dictates that constraints breed lethal innovation.
          </div>
          <div className="spear-divider" style={{ marginBottom: 14 }} />
        </motion.div>

        {/* Flip card columns */}
        <div style={{ display: 'flex', flex: 1, gap: 24, minHeight: 0 }}>

          {/* ── Left card: Traditional Incumbents ── */}
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
                  The Competition
                </div>
                <div>
                  <div className="font-roobert" style={{ fontSize: 'clamp(44px, 5.5vw, 72px)', fontWeight: 700, color: 'rgba(255,255,255,0.38)', letterSpacing: '-0.02em', lineHeight: 1.05, textTransform: 'uppercase' }}>
                    THE<br />TRADITIONAL<br />INCUMBENTS
                  </div>
                  <div className="font-roobert" style={{ marginTop: 16, fontSize: 17, color: 'rgba(255,255,255,0.22)', lineHeight: 1.4 }}>
                    200–500+ person GTM organizations
                  </div>
                </div>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.16)' }}>
                  Tap to reveal →
                </div>
              </div>

              {/* Back */}
              <div style={{ ...DIM_CARD, transform: 'rotateY(180deg)', padding: '24px 28px', justifyContent: 'space-between' }}>
                <div>
                  <div className="font-mono-brand" style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 10 }}>
                    The Traditional Incumbents
                  </div>
                  <div className="spear-divider" style={{ opacity: 0.2 }} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '12px 0' }}>
                  {[
                    'Our competitors field massive, 200–500+ person GTM organizations.',
                    'Bloated architecture. High latency. Prohibitive CAC.',
                    'They rely on manual headcount to mask broken processes.',
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 26, lineHeight: 1.4, flexShrink: 0 }}>—</span>
                      <span className="font-roobert" style={{ fontSize: 28, lineHeight: 1.45, color: 'rgba(255,255,255,0.55)' }}>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.14)', textAlign: 'center' }}>
                  ← Tap to flip back
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vertical spear divider */}
          <div style={{ width: 1, background: 'linear-gradient(to bottom, transparent, rgba(191,253,17,0.4) 30%, rgba(191,253,17,0.7) 50%, rgba(191,253,17,0.4) 70%, transparent)', flexShrink: 0 }} />

          {/* ── Right card: Hologram Architecture ── */}
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
                  The Hologram Way
                </div>
                <div>
                  <div className="font-roobert" style={{ fontSize: 'clamp(44px, 5.5vw, 72px)', fontWeight: 700, color: '#bffd11', letterSpacing: '-0.02em', lineHeight: 1.05, textTransform: 'uppercase', textShadow: '0 0 40px rgba(191,253,17,0.3)' }}>
                    THE<br /><img src="/logos/Logo Lime.svg" alt="Hologram" style={{ height: '1em', display: 'inline-block', verticalAlign: 'baseline' }} /><br />ARCHITECTURE
                  </div>
                  <div className="font-roobert" style={{ marginTop: 16, fontSize: 17, color: 'rgba(191,253,17,0.45)', lineHeight: 1.4 }}>
                    44 engineers · 6× output
                  </div>
                </div>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(191,253,17,0.3)' }}>
                  Tap to reveal →
                </div>
              </div>

              {/* Back */}
              <div style={{ ...LIME_CARD, transform: 'rotateY(180deg)', padding: '24px 28px', justifyContent: 'space-between' }}>
                <div>
                  <div className="font-mono-brand" style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#bffd11', marginBottom: 10 }}>
                    The Hologram Architecture
                  </div>
                  <div className="spear-divider" />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '12px 0' }}>
                  {[
                    { text: 'We field a highly specialized 44-person engineering and revenue team.', lime: false },
                    { text: 'Producing the verifiable output of an organization six times our size.', lime: false },
                    { text: 'Lean. Algorithmic. Highly Leveraged.', lime: true },
                    { text: 'We rely on self-optimizing systems, not human capital bloat.', lime: false },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ color: '#bffd11', fontSize: 26, lineHeight: 1.4, flexShrink: 0 }}>▸</span>
                      <span className="font-roobert" style={{ fontSize: 28, lineHeight: 1.45, color: item.lime ? '#bffd11' : 'rgba(255,255,255,0.88)' }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="font-mono-brand" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(191,253,17,0.22)', textAlign: 'center' }}>
                  ← Tap to flip back
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}
        >
          <div className="font-roobert" style={{ fontSize: 18, fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', borderLeft: '2px solid rgba(191,253,17,0.5)', paddingLeft: 16 }}>
            &ldquo;Then we shall fight in the shade.&rdquo;
          </div>
        </motion.div>
      </div>
    </div>
  )
}
