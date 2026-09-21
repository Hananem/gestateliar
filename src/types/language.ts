export type Language = 'fr' | 'ar'
export interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  dir: 'ltr' | 'rtl'   // ⭐ سطر جديد
  t: (key: string) => string
}