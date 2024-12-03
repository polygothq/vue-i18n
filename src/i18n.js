import { createI18n } from 'vue-i18n'

export const AVAILABLE_LOCALES = ['en', 'fr']

export function getLocale(i18n) {
  return i18n.global.locale
}

export function setLocale(i18n, locale) {
  i18n.global.locale = locale
}

export function setupI18n(options) {
  return createI18n({...options, messages: {}})
}

export async function setI18nLanguage(i18n, locale) {
  // Loading messages
  await loadLocaleMessages(i18n, locale)

  setLocale(i18n, locale)
  document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
  // Do not load again if the locale messages have already been loaded
  if (!i18n.global.availableLocales.includes(locale)) {
    const messages = (await import(`./locales/${locale}.json`)).default
    i18n.global.setLocaleMessage(locale, messages)
  }
}