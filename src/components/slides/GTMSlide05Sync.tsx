'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

const layers = [
  {
    label: 'Intelligence Layer',
    body: 'Autonomous AI engines continuously scan the market for behavioral triggers, structural changes, and intent signals. Prospecting is active 24/7.',
    accent: '#bffd11',
  },
  {
    label: 'Enrichment & Orchestration',
    body: 'No human touches a record until it is algorithmically enriched with deep firmographics, technographics, and verified intent.',
    accent: '#bffd11',
  },
  {
    label: 'Multi-Channel Execution',
    body: 'Intelligent logic dictates the synchronization of email, LinkedIn, and voice channels, triggered strictly by buyer behavior.',
    accent: '#53f2fa',
  },
  {
    label: 'Content Engineering',
    body: 'AI architectures power the rapid creation, deployment, and optimization of content, dominating Answer Engine visibility at scale.',
    accent: '#53f2fa',
  },
  {
    label: 'Conversational Intelligence',
    body: 'Our Gong + Supabase data lake transcribes, analyzes, and extracts competitive intelligence from every client interaction in real time.',
    accent: '#bffd11',
  },
  {
    label: 'Programmatic Nurture',
    body: 'Algorithmic deal nurturing ensures zero opportunity decay. Every follow-up is perfectly timed and contextually flawless.',
    accent: '#bffd11',
  },
]

export default function GTMSlide05Sync({ onNext, onPrev }: SlideProps) {
  return (
    <div className="slide-base phalanx-bg" style={{ background: '#00040f' }}>
      {/* Lime glow top-center */}
      <div style={{ position: 'absolute', top: '-5%', left: '30%', width: '40%', height: '45%', background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '10%', width: '40%', height: '40%', background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '40px 64px 32px' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="category-badge" style={{ marginBottom: 12 }}>▸ The System</div>
          <div className="font-roobert" style={{ fontSize: 'clamp(28px, 3.2vw, 44px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 6 }}>
            THE ALLBOUND SYNCHRONIZATION
          </div>
          <div className="font-roobert" style={{ fontSize: 20, color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>
            Marketing, BDRs, and AEs no longer exist in silos. We operate a single, algorithmic revenue codebase.
          </div>
          <div className="spear-divider" style={{ marginBottom: 20 }} />
        </motion.div>

        {/* Flow layers */}
        <div style={{ display: 'flex', flex: 1, gap: 0, minHeight: 0 }}>
          {/* Left connector line */}
          <div style={{ width: 2, flexShrink: 0, marginRight: 20, background: 'linear-gradient(to bottom, rgba(191,253,17,0.5) 0%, rgba(191,253,17,0.15) 100%)', borderRadius: 2 }} />

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + i * 0.08, ease: 'easeOut' }}
                className="glass-card feature-row-hover"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  padding: '12px 16px',
                  borderRadius: 8,
                  flex: 1,
                  minHeight: 0,
                }}
              >
                {/* Left dot on connector line */}
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: layer.accent, flexShrink: 0, marginTop: 6, boxShadow: `0 0 8px ${layer.accent}66` }} />
                <div style={{ flex: 1 }}>
                  <div className="font-mono-brand" style={{ fontSize: 14, letterSpacing: '0.15em', textTransform: 'uppercase', color: layer.accent, marginBottom: 4 }}>
                    {layer.label}
                  </div>
                  <p className="font-roobert" style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.6)' }}>
                    {layer.body}
                  </p>
                </div>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.12)', flexShrink: 0, marginTop: 4, fontFamily: 'MessinaSansMono' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <img src="/logos/logo_mark_lime.svg" alt="" style={{ width: 16, height: 16 }} />
          <span className="font-mono-brand" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
            One Database. Every Channel. Total Synchronization.
          </span>
        </motion.div>
      </div>
    </div>
  )
}
