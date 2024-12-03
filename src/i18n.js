import { createI18n } from 'vue-i18n'

export const AVAILABLE_LOCALES = ['en', 'fr']

export function getLocale(i18n) {
  return i18n.global.locale
}

export function setLocale(i18n, locale) {
  i18n.global.locale = locale
}

export function setupI18n(options) {
  // Initializing locales
  const opts = {...options, messages: {}}

  return createI18n(opts)
}

export async function setI18nLanguage(i18n, locale) {
  await loadLocaleMessages(i18n, locale)
  setLocale(i18n, locale)
  document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
  if (!i18n.global.availableLocales.includes(locale)) {
    const messages = (await import(`./locales/${locale}.json`)).default
    i18n.global.setLocaleMessage(locale, messages)
  }
}