'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

const pillars = [
  {
    num: '01',
    title: 'AI-Powered Micro-Relevance',
    body: 'Exa, MarketBetter and LLM chains replace manual research. We deploy hyper-contextual analysis at scale, not mass templates.',
    icon: '◈',
  },
  {
    num: '02',
    title: 'Orchestration at Scale',
    body: 'n8n, API webhooks, and custom logic eliminate friction. The system autonomously manages repetitive tasks, routing, and engagement across the entire stack.',
    icon: '⬡',
  },
  {
    num: '03',
    title: 'Dynamic Data Enrichment',
    body: 'Real-time pipelines process millions of firmographic and intent signals, ensuring targeted intervention at the exact moment of buyer intent.',
    icon: '◉',
  },
  {
    num: '04',
    title: 'Proprietary Micro-SaaS',
    body: 'We engineer custom internal applications to replace rigid vendor sprawl, securing compounding capabilities that competitors cannot buy.',
    icon: '⬢',
  },
]

export default function GTMSlide04Lever({ onNext, onPrev }: SlideProps) {
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Lime glow center-right */}
      <div style={{ position: 'absolute', top: '20%', right: '-5%', width: '50%', height: '60%', background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '40%', height: '50%', background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '44px 64px 36px' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="category-badge" style={{ marginBottom: 12 }}>▸ The System</div>
          <div className="font-roobert" style={{ fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 6 }}>
            THE CODEBASE OF REVENUE
          </div>
          <div className="font-roobert" style={{ fontSize: 20, color: 'rgba(255,255,255,0.88)', marginBottom: 20 }}>
            Every team member operates with the programmatic leverage of six.
          </div>
          <div className="spear-divider" style={{ marginBottom: 28 }} />
        </motion.div>

        {/* 2x2 Pillar grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 20, flex: 1, minHeight: 0 }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
              className="war-card glass-card-hover shine-hover"
              style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 12, cursor: 'default' }}
            >
              {/* Number + icon row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="font-mono-brand" style={{ fontSize: 28, fontWeight: 700, color: '#bffd11', lineHeight: 1, letterSpacing: '-0.02em', textShadow: '0 0 20px rgba(191,253,17,0.3)' }}>
                  {pillar.num}
                </span>
                <span style={{ fontSize: 22, color: 'rgba(191,253,17,0.25)' }}>{pillar.icon}</span>
              </div>
              {/* Title */}
              <div className="font-roobert" style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.2 }}>
                {pillar.title}
              </div>
              {/* Thin divider */}
              <div style={{ height: 1, background: 'rgba(191,253,17,0.12)' }} />
              {/* Body */}
              <p className="font-roobert" style={{ fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,0.9)', flex: 1 }}>
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <img src="/logos/logo_mark_lime.svg" alt="" style={{ width: 16, height: 16 }} />
          <span className="font-mono-brand" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
            The Four Pillars of GTM Engineering
          </span>
        </motion.div>
      </div>
    </div>
  )
}
