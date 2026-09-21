export type Language = 'fr' | 'ar'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}
