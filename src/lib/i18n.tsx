'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Language } from './translations'

interface LanguageContextType {
    lang: Language
    setLang: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'en',
    setLang: () => { },
    t: (key: string) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>('en')

    const t = useCallback(
        (key: string): string => {
            const dict = translations[lang]
            return (dict as any)?.[key] ?? key
        },
        [lang]
    )

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
