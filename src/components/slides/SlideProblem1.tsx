'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { SlideProps } from '@/types/slide'
import { useLanguage } from '@/lib/i18n'


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.4 + i * 0.12, ease: 'easeOut' },
  }),
}

export default function SlideProblem1(_: SlideProps) {
  const { t } = useLanguage()

  const cards = [
    {
      title: t('problem1.card1.title'),
      items: t('problem1.card1.items').split('|'),
    },
    {
      title: t('problem1.card2.title'),
      items: t('problem1.card2.items').split('|'),
    },
    {
      title: t('problem1.card3.title'),
      items: t('problem1.card3.items').split('|'),
    },
  ]
  return (
    <div
      className="w-full h-full absolute inset-0 overflow-hidden"
      style={{ background: '#00040f' }}
    >
      {/* Red radial glow — top center, large and prominent */}
      <div
        className="float-glow"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          height: '65%',
          background:
            'radial-gradient(ellipse at center, rgba(255,60,40,0.14) 0%, rgba(255,90,50,0.06) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />


      {/* Red accent glow — bottom right */}
      <div
        className="float-glow-delayed"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '40%',
          height: '45%',
          background:
            'radial-gradient(ellipse at center, rgba(255,80,50,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 80,
          paddingTop: 60,
          paddingBottom: 80,
          zIndex: 5,
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="eyebrow" style={{ marginBottom: 16 }}>
          {t('problem1.eyebrow')}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-roobert"
          style={{
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 1.08,
            color: '#ffffff',
            marginBottom: 44,
            maxWidth: 780,
          }}
        >
          {t('problem1.headline')}
        </motion.h1>

        {/* Cards row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -4,
                boxShadow: '0 0 30px rgba(255,60,40,0.12), 0 0 60px rgba(255,60,40,0.05)',
                borderColor: 'rgba(255,80,50,0.3)',
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
              style={{
                borderRadius: 12,
                padding: '28px 28px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,80,50,0.12)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Icon — warning circle (CSS only, no emoji) */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: '2px solid rgba(255,100,60,0.5)',
                  background: 'rgba(255,80,50,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  flexShrink: 0,
                }}
              >
                {/* Exclamation mark — pure CSS styled span */}
                <span
                  style={{
                    display: 'block',
                    width: 2,
                    height: 12,
                    borderRadius: 1,
                    background: 'rgba(255,100,60,0.8)',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 2,
                      height: 2,
                      borderRadius: '50%',
                      background: 'rgba(255,100,60,0.8)',
                    }}
                  />
                </span>
              </div>

              {/* Card title */}
              <h3
                className="font-roobert"
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: 20,
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </h3>

              {/* Divider */}
              <div
                style={{
                  width: '100%',
                  height: 1,
                  background: 'rgba(255,255,255,0.07)',
                  marginBottom: 16,
                }}
              />

              {/* List items */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {card.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    {/* Red dot */}
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: 'rgba(255,100,60,0.6)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        lineHeight: 1.45,
                        color: 'rgba(255,255,255,0.6)',
                        fontFamily: 'Roobert, sans-serif',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
