'use client'

import DeckPresenter from '@/components/DeckPresenter'
import { LanguageProvider } from '@/lib/i18n'

export default function Home() {
  return (
    <LanguageProvider>
      <DeckPresenter />
    </LanguageProvider>
  )
}
