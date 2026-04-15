'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'

// Ordered top (narrowest/apex) → bottom (widest/base output)
const systemLayers = [
  {
    num: '01',
    label: 'Conversational Intelligence',
    detail: 'Gong + Supabase Data Lake',
    limeAlpha: 0.25,
    borderAlpha: 0.08,
    labelAlpha: 0.55,
  },
  {
    num: '02',
    label: 'Outbound Orchestration',
    detail: 'Clay, MarketBetter + n8n Multi-Channel Logic',
    limeAlpha: 0.35,
    borderAlpha: 0.13,
    labelAlpha: 0.68,
  },
  {
    num: '03',
    label: 'Content Engineering',
    detail: 'AirOps + AI · AEO & SEO Domination',
    limeAlpha: 0.46,
    borderAlpha: 0.18,
    labelAlpha: 0.78,
  },
  {
    num: '04',
    label: 'Signal Enrichment',
    detail: 'Real-Time Account Scoring & Trigger Mapping',
    limeAlpha: 0.58,
    borderAlpha: 0.26,
    labelAlpha: 0.88,
  },
  {
    num: '05',
    label: 'Proprietary Micro-SaaS',
    detail: 'Custom Internal Workflows & Applications',
    limeAlpha: 0.72,
    borderAlpha: 0.35,
    labelAlpha: 0.95,
  },
  {
    num: '06',
    label: 'Pipeline Analytics',
    detail: 'Closed-Loop Attribution & Revenue Science',
    limeAlpha: 1.0,
    borderAlpha: 0.55,
    labelAlpha: 1.0,
    isApex: true,
  },
]

// Regular pyramid: narrowest at top (index 0), widest at bottom (index 5)
const WIDTHS = [34, 48, 62, 76, 88, 100]

export default function GTMSlide06System({ onNext, onPrev }: SlideProps) {
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Lime glow radiating upward from bottom center — apex is base */}
      <div style={{ position: 'absolute', bottom: '0%', left: '15%', width: '70%', height: '65%', background: 'radial-gradient(ellipse at 50% 100%, rgba(191,253,17,0.13) 0%, rgba(191,253,17,0.05) 40%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '5%', left: '35%', width: '30%', height: '30%', background: 'radial-gradient(ellipse at center, rgba(191,253,17,0.03) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '36px 64px 28px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="category-badge" style={{ marginBottom: 12 }}>▸ The System</div>
          <div className="font-roobert" style={{ fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 6 }}>
            COMPOUNDING LEVERAGE
          </div>
          <div className="font-roobert" style={{ fontSize: 18, color: 'rgba(255,255,255,0.88)', marginBottom: 16 }}>
            A system where every component structurally reinforces the whole.
          </div>
          <div className="spear-divider" style={{ marginBottom: 18 }} />
        </motion.div>

        {/* Pyramid — narrows at top, widest (Pipeline Analytics) at base */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          minHeight: 0,
        }}>
          {systemLayers.map((layer, index) => {
            const widthPct = WIDTHS[index]
            const showDetail = widthPct >= 62
            // Stack from top down: top layer (#01, index 0) animates first
            const animDelay = 0.12 + index * 0.11

            return (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, y: 48, scaleX: 0.92 }}
                animate={{ opacity: 1, y: 0, scaleX: 1 }}
                transition={{
                  duration: 0.55,
                  delay: animDelay,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                style={{
                  width: `${widthPct}%`,
                  flex: 1,
                  minHeight: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 20px 0 16px',
                  background: `rgba(191,253,17,${layer.limeAlpha * 0.055})`,
                  border: `1px solid rgba(191,253,17,${layer.borderAlpha})`,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: 4,
                  boxShadow: layer.isApex
                    ? `0 0 32px rgba(191,253,17,0.20), 0 0 70px rgba(191,253,17,0.09), inset 0 1px 0 rgba(191,253,17,0.14)`
                    : `inset 0 1px 0 rgba(255,255,255,0.03)`,
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle inner shine for apex */}
                {layer.isApex && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(191,253,17,0.06) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }} />
                )}

                {/* Left: number + divider + label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                  <span
                    className="font-mono-brand"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: `rgba(191,253,17,${layer.limeAlpha * 0.7})`,
                      letterSpacing: '0.08em',
                      flexShrink: 0,
                    }}
                  >
                    {layer.num}
                  </span>
                  <div style={{
                    width: 1,
                    height: 18,
                    background: `rgba(191,253,17,${layer.borderAlpha * 0.7})`,
                    flexShrink: 0,
                  }} />
                  <span
                    className="font-roobert"
                    style={{
                      fontSize: layer.isApex ? 21 : 19,
                      fontWeight: 700,
                      color: layer.isApex ? '#bffd11' : `rgba(255,255,255,${layer.labelAlpha})`,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      lineHeight: 1.2,
                      textShadow: layer.isApex ? '0 0 20px rgba(191,253,17,0.5)' : undefined,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {layer.label}
                  </span>
                </div>

                {/* Right: detail (only on wide-enough layers) */}
                {showDetail && (
                  <span
                    className="font-mono-brand"
                    style={{
                      fontSize: 13,
                      color: `rgba(255,255,255,${0.18 + index * 0.05})`,
                      letterSpacing: '0.07em',
                      textAlign: 'right',
                      flexShrink: 0,
                      marginLeft: 16,
                    }}
                  >
                    {layer.detail}
                  </span>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
          style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <img src="/logos/logo_mark_lime.svg" alt="" style={{ width: 16, height: 16 }} />
          <span className="font-mono-brand" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
            Each Layer Accelerates the Next
          </span>
        </motion.div>
      </div>
    </div>
  )
}
