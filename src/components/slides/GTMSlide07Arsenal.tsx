'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

const sections = [
  {
    title: 'Advanced AI Models',
    items: [
      'Claude & Gemini for hyper-contextual content, strategic analysis, and code generation.',
      'GPT-4 deployed for complex, multi-modal data processing tasks.',
      'Proprietary prompt chains automating highly repeatable cognitive workflows.',
    ],
  },
  {
    title: 'Orchestration & Enrichment',
    items: [
      'n8n orchestrating logic across 50+ interconnected platforms.',
      'Clay unifying data pipelines to process enrichment signals at massive scale.',
      'Programmatic deal nurture triggered strictly by live behavioral intent.',
    ],
  },
  {
    title: 'Content Engineering & AEO',
    items: [
      'AirOps powering AI-driven content optimization and deployment.',
      'Deep structural alignment for Answer Engine Optimization (AEO).',
      'Dominating "Share-of-Answer" metrics across ChatGPT and Perplexity.',
    ],
  },
  {
    title: 'Proprietary Intelligence',
    items: [
      'Custom GTM Toolbox for unified sales enablement and execution.',
      'Supabase + Gong architecture creating an impenetrable conversational data lake.',
      'Real-time account scoring and intent-signal mapping.',
    ],
  },
]

export default function GTMSlide07Arsenal({ onNext, onPrev }: SlideProps) {
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Lime glow right */}
      <div style={{ position: 'absolute', top: '15%', right: '-5%', width: '45%', height: '70%', background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '35%', height: '40%', background: 'radial-gradient(ellipse at center, rgba(83,242,250,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '44px 64px 36px' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="category-badge" style={{ marginBottom: 12 }}>▸ Weapons</div>
          <div className="font-roobert" style={{ fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 6 }}>
            THE ENGINEERING ARSENAL
          </div>
          <div className="font-roobert" style={{ fontSize: 20, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
            Every team member is equipped with the sharpest algorithmic tooling on the battlefield.
          </div>
          <div className="spear-divider" style={{ marginBottom: 24 }} />
        </motion.div>

        {/* 2x2 section grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 18, flex: 1, minHeight: 0 }}>
          {sections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + si * 0.1, ease: 'easeOut' }}
              className="war-card glass-card-hover"
              style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12, cursor: 'default' }}
            >
              {/* Section header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 6, height: 6, background: '#bffd11', borderRadius: 1, flexShrink: 0, boxShadow: '0 0 8px rgba(191,253,17,0.5)' }} />
                <div className="font-mono-brand" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#bffd11' }}>
                  {section.title}
                </div>
              </div>
              <div style={{ height: 1, background: 'rgba(191,253,17,0.1)' }} />
              {/* Bullet items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1, justifyContent: 'space-around' }}>
                {section.items.map((item, ii) => (
                  <div key={ii} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: 'rgba(191,253,17,0.5)', fontSize: 16, marginTop: 4, flexShrink: 0 }}>▸</span>
                    <span className="font-roobert" style={{ fontSize: 22, lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
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
          <span className="font-mono-brand" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
            Engineered for Asymmetry
          </span>
        </motion.div>
      </div>
    </div>
  )
}
