'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PersonalizationData } from '@/types'

interface Props {
  onComplete: (data: PersonalizationData) => void
  isOpen: boolean
}

export default function PersonalizationModal({ onComplete, isOpen }: Props) {
  const [form, setForm] = useState<PersonalizationData>({
    companyName: '',
    aeName: '',
    aeEmail: '',
    aePhone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onComplete(form)
  }

  const handleSkip = () => {
    onComplete({ companyName: '', aeName: '', aeEmail: '', aePhone: '' })
  }

  const update = (field: keyof PersonalizationData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'rgba(0,4,15,0.95)', backdropFilter: 'blur(20px)' }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 800px 600px at 50% 50%, rgba(191,253,17,0.05) 0%, transparent 70%)'
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md mx-4"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '40px',
            }}
          >
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-8">
              <img src="/logos/logo_mark_lime.svg" alt="Hologram" className="w-8 h-8" />
              <span className="eyebrow" style={{ fontSize: '12px' }}>Hologram Pitch Deck</span>
            </div>

            <h2
              className="font-roobert mb-2"
              style={{ fontSize: '28px', fontWeight: 600, lineHeight: 1.2, color: 'white' }}
            >
              Personalize your<br />
              <span style={{ color: 'var(--lime)' }}>presentation</span>
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.6 }}>
              Enter your prospect&apos;s info to tailor the deck. You can skip this and use generic text.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="eyebrow block mb-2" style={{ fontSize: '10px' }}>
                  Prospect Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp"
                  value={form.companyName}
                  onChange={update('companyName')}
                  className="calc-input"
                  autoFocus
                />
              </div>

              <div
                className="pt-2 pb-1"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="eyebrow mb-3" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)' }}>
                  Your Info (for contact slide)
                </p>
              </div>

              <div>
                <label className="eyebrow block mb-2" style={{ fontSize: '10px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="AE Name"
                  value={form.aeName}
                  onChange={update('aeName')}
                  className="calc-input"
                />
              </div>

              <div>
                <label className="eyebrow block mb-2" style={{ fontSize: '10px' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="you@hologram.io"
                  value={form.aeEmail}
                  onChange={update('aeEmail')}
                  className="calc-input"
                />
              </div>

              <div>
                <label className="eyebrow block mb-2" style={{ fontSize: '10px' }}>
                  Your Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.aePhone}
                  onChange={update('aePhone')}
                  className="calc-input"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 font-roobert font-semibold cursor-pointer transition-all"
                  style={{
                    background: 'var(--lime)',
                    color: '#00040f',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Start Presentation
                </button>
                <button
                  type="button"
                  onClick={handleSkip}
                  className="font-roobert cursor-pointer transition-all"
                  style={{
                    background: 'transparent',
                    color: 'rgba(255,255,255,0.4)',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '14px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  Skip
                </button>
              </div>
            </form>

            <p className="mt-4" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
              Press <kbd style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 5px', borderRadius: '3px', fontFamily: 'monospace' }}>P</kbd> anytime to update personalization
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
