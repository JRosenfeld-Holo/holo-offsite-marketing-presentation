'use client'

import { motion } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'

export default function SlideContact({ personalization, onNext, onPrev }: SlideProps) {
  const { t } = useLanguage()
  const { aeName, aeEmail, aePhone } = personalization

  return (
    <div className="slide-base" style={{ background: '#00040f', position: 'relative' }}>
      {/* Dramatic lime radial glow — bottom-right */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: '65%',
          height: '75%',
          background:
            'radial-gradient(ellipse at center, rgba(191,253,17,0.14) 0%, rgba(191,253,17,0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Cyan radial glow — top-left */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '60%',
          height: '65%',
          background:
            'radial-gradient(ellipse at center, rgba(83,242,250,0.10) 0%, rgba(83,242,250,0.03) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Large decorative logo mark — bottom-right background */}
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          right: '-60px',
          width: 400,
          height: 400,
          opacity: 0.03,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <img
          src="/logos/logo_mark_lime.svg"
          alt=""
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
      </div>

      {/* Main content — centered */}
      <div
        className="relative z-10 w-full h-full"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="eyebrow"
          style={{ marginBottom: 16, textAlign: 'center' }}
        >
          {t('contact.eyebrow')}
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="font-roobert"
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.0,
            textAlign: 'center',
            marginBottom: 48,
          }}
        >
          {t('contact.headline')}{' '}
          <span style={{ color: 'var(--lime)' }}>{t('contact.headlineAccent')}</span>
        </motion.h2>

        {/* Center card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.35, ease: 'easeOut' }}
          className="glass-card"
          style={{
            borderRadius: 18,
            padding: '36px 40px',
            maxWidth: 480,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            border: '1px solid rgba(191,253,17,0.12)',
          }}
        >
          {/* Logo mark */}
          <img
            src="/logos/logo_mark_lime.svg"
            alt="Hologram"
            width={48}
            style={{ display: 'block', marginBottom: 4 }}
          />

          {/* Contact info */}
          {aeName ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              style={{ textAlign: 'center' }}
            >
              <p
                className="font-roobert"
                style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}
              >
                {aeName}
              </p>
              {aeEmail && (
                <p
                  className="font-mono-brand"
                  style={{ fontSize: 13, color: 'var(--cyan)', marginBottom: 4, letterSpacing: '0.04em' }}
                >
                  {aeEmail}
                </p>
              )}
              {aePhone && (
                <p
                  className="font-mono-brand"
                  style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}
                >
                  {aePhone}
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              style={{ textAlign: 'center' }}
            >
              <p
                className="font-mono-brand"
                style={{ fontSize: 14, color: 'var(--cyan)', marginBottom: 4, letterSpacing: '0.04em' }}
              >
                sales@hologram.io
              </p>
              <p
                className="font-mono-brand"
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}
              >
                hologram.io
              </p>
            </motion.div>
          )}

          {/* Divider */}
          <div
            style={{
              width: '100%',
              height: 1,
              background: 'rgba(255,255,255,0.08)',
            }}
          />

          {/* CTA button */}
          <motion.a
            href="https://hologram.io/get-started"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 }}
            className="font-roobert"
            style={{
              background: 'var(--lime)',
              color: '#00040f',
              fontSize: 15,
              fontWeight: 600,
              padding: '13px 32px',
              borderRadius: 8,
              textDecoration: 'none',
              display: 'inline-block',
              letterSpacing: '0.01em',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {t('contact.cta')}
          </motion.a>
        </motion.div>

        {/* Bottom social/contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            marginTop: 36,
          }}
        >
          {[
            { label: 'hologram.io', href: 'https://hologram.io' },
            { label: 'twitter / @hologram', href: 'https://twitter.com/hologram' },
            { label: 'linkedin / hologram-io', href: 'https://linkedin.com/company/hologram-io' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-brand"
              style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
