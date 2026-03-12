'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

const customers = [
  { name: 'Generac', logo: '/logos/customers/generac.png' },
  { name: 'Verkada', logo: '/logos/customers/verkada-logo.png', scale: 3 },
  { name: 'Sunday Power', logo: '/logos/customers/Sunday-Power-White.png' },
  { name: 'Level', logo: '/logos/customers/level.png' },
  { name: 'Everactive', logo: '/logos/customers/everactive 1.png' },
  { name: 'Fieldin', logo: '/logos/customers/fieldin.png' },
  { name: 'Cowboy', logo: '/logos/customers/cowboy.png' },
  { name: 'GlacierGrid', logo: '/logos/customers/glaciergrid 1.png' },
  { name: "Farmer's Fridge", logo: '/logos/customers/farmers-fridge-logo.avif' },
  { name: 'Ugo Work', logo: 'https://cdn.brandfetch.io/idiUlIi521/w/341/h/150/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1690329808708' },
  { name: 'Briggs & Stratton', logo: '/logos/customers/briggs and stratton.png', filter: 'invert(1)' },
  { name: 'WiseEye', logo: 'https://wiseeyetech.com/wp-content/uploads/WiseEye-Technology-Logo-BLK%E2%84%A2.png' },
  { name: 'Fleetsu', logo: '/logos/customers/Fleetsu 1.png' },
  { name: 'Rand McNally', logo: 'https://cdn.brandfetch.io/idFUdAHnQi/w/820/h/121/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1769808107203' },
]

export default function SlideCustomers({ personalization, onNext, onPrev }: SlideProps) {
  const { t } = useLanguage()
  return (
    <div className="slide-base" style={{ background: '#00040f' }}>
      {/* Lime glow — top-right (floating) */}
      <div
        className="float-glow"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '65%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.10) 0%, rgba(191,253,17,0.03) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Cyan glow — bottom-left (floating, offset cycle) */}
      <div
        className="float-glow-delayed"
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-8%',
          width: '45%',
          height: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="relative z-10 w-full h-full"
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '48px 64px 24px',
        }}
      >
        {/* Top section: Eyebrow + Headline + Subheadline */}
        <div style={{ marginBottom: 12 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="eyebrow"
            style={{ marginBottom: 8 }}
          >
            {t('customers.eyebrow')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
            className="font-roobert"
            style={{
              fontSize: 42,
              fontWeight: 600,
              color: '#ffffff',
              lineHeight: 1.08,
              maxWidth: 720,
              marginBottom: 6,
            }}
          >
            {t('customers.headline')}{' '}
            <span style={{ color: 'var(--lime)' }}>{t('customers.headlineAccent')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            style={{ fontSize: 15, color: 'var(--cyan)', fontWeight: 400 }}
          >
            From early stage startups to Fortune 500s
          </motion.p>
        </div>

        {/* Customer logo grid — fills available space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 8,
            marginBottom: 14,
            flex: '1 1 auto',
            alignContent: 'center',
          }}
        >
          {customers.map((customer, i) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.45 + i * 0.03 }}
              whileHover={{
                y: -3,
                scale: 1.03,
                transition: { type: 'spring', stiffness: 400, damping: 20 },
              }}
              className="glass-card logo-tile-hover shine-hover"
              style={{
                padding: '10px 14px',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 48,
                position: 'relative',
              }}
            >
              {customer.logo ? (
                <img
                  src={customer.logo}
                  alt={customer.name}
                  style={{
                    maxHeight: 24,
                    maxWidth: '85%',
                    objectFit: 'contain',
                    display: 'block',
                    filter: customer.filter || 'brightness(0) invert(1)',
                    opacity: 0.85,
                    transition: 'opacity 0.25s ease',
                    transform: customer.scale ? `scale(${customer.scale})` : undefined,
                  }}
                />
              ) : (
                <span
                  className="font-roobert"
                  style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textAlign: 'center', letterSpacing: '0.03em' }}
                >
                  {customer.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.8 }}
          className="quote-block"
          style={{ marginBottom: 14, maxWidth: 600 }}
        >
          <p
            className="font-roobert"
            style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, fontStyle: 'italic' }}
          >
            "We tested Hologram in one of our problematic gap zones where other providers failed, and their devices worked flawlessly."
          </p>
          <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
            <img
              src="https://cdn.brandfetch.io/idiUlIi521/w/341/h/150/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1690329808708"
              alt="UgoWork"
              style={{ height: 12, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.45 }}
            />
            <span
              className="font-mono-brand"
              style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}
            >
              Jean-François Marchand, UgoWork
            </span>
          </div>
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.9 }}
          className="glass-card border-shimmer"
          style={{
            borderRadius: 12,
            padding: '14px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexShrink: 0,
          }}
        >
          {[
            { value: '6,000+', label: 'Customers' },
            { value: '190+', label: 'Countries' },
            { value: '550+', label: 'Carriers' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              style={{ textAlign: 'center' }}
              whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
            >
              <div
                className="stat-number"
                style={{ fontSize: 28, transition: 'text-shadow 0.3s ease' }}
              >
                {stat.value}
              </div>
              <div
                className="font-mono-brand"
                style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', marginTop: 2, textTransform: 'uppercase' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
