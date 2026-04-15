'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

const comparisons = [
  {
    category: 'GTM Architecture',
    competitor: '200–500+ Bloated Headcount',
    hologram: '~50 Specialized Engineers',
  },
  {
    category: 'Pipeline Generation',
    competitor: 'Linear Headcount Scaling',
    hologram: 'Algorithmic Systems',
  },
  {
    category: 'Infrastructure Strategy',
    competitor: 'Off-the-shelf Vendor Sprawl',
    hologram: 'Proprietary Micro-SaaS',
  },
  {
    category: 'Content Dominance',
    competitor: 'Manual / Agency SEO',
    hologram: 'AirOps + AI Answer Engine Optimization',
  },
  {
    category: 'Execution Velocity',
    competitor: 'Weeks per campaign',
    hologram: 'Hours per campaign',
  },
  {
    category: 'Capital Efficiency',
    competitor: 'High Burn Rate, High CAC',
    hologram: '55:1 Pipeline-to-Spend Ratio',
  },
]

export default function GTMSlide10Comparison({ onNext, onPrev }: SlideProps) {
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Subtle left half darker overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 50%)', pointerEvents: 'none', zIndex: 0 }} />
      {/* Lime glow right */}
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '50%', height: '80%', background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '44px 64px 36px' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="category-badge" style={{ marginBottom: 12 }}>▸ Results</div>
          <div className="font-roobert" style={{ fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 6 }}>
            THE ASYMMETRIC ADVANTAGE
          </div>
          <div className="font-roobert" style={{ fontSize: 20, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
            We dictated the terrain. They walked blindly into the funnel.
          </div>
          <div className="spear-divider" style={{ marginBottom: 20 }} />
        </motion.div>

        {/* Table */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {/* Table header row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '28% 36% 36%',
              gap: 0,
              marginBottom: 6,
              padding: '0 12px',
            }}
          >
            <div />
            <div style={{ padding: '0 24px' }}>
              <span className="font-mono-brand" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>
                Traditional Incumbents
              </span>
            </div>
            <div style={{ padding: '0 24px' }}>
              <span className="font-mono-brand" style={{ fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#bffd11' }}>
                ▸ Hologram
              </span>
            </div>
          </motion.div>

          {/* Vertical spear dividers */}
          <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'space-between' }}>
            {comparisons.map((row, i) => (
              <motion.div
                key={row.category}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
                className="compare-row-hover"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '28% 36% 36%',
                  gap: 0,
                  flex: 1,
                  borderBottom: i < comparisons.length - 1 ? '1px solid rgba(255,255,255,0.05)' : undefined,
                  alignItems: 'center',
                  padding: '0 12px',
                }}
              >
                {/* Category */}
                <div style={{ padding: '10px 12px 10px 4px' }}>
                  <span className="font-mono-brand" style={{ fontSize: 16, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                    {row.category}
                  </span>
                </div>

                {/* Competitor value */}
                <div style={{ padding: '10px 24px', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="font-roobert compare-row-dim" style={{ fontSize: 19, lineHeight: 1.4 }}>
                    {row.competitor}
                  </span>
                </div>

                {/* Hologram value */}
                <div style={{ padding: '10px 24px', borderLeft: '1px solid rgba(191,253,17,0.12)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="compare-check" style={{ fontSize: 14 }}>✓</span>
                    <span className="font-roobert compare-row-lit" style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.3 }}>
                      {row.hologram}
                    </span>
                  </div>
                </div>
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
            Unfair Terrain
          </span>
        </motion.div>
      </div>
    </div>
  )
}
