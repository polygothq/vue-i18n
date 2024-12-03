<template>
  <div>
    <select v-model="currentLocale">
      <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">{{ localeToText(locale) }}</option>
    </select>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { AVAILABLE_LOCALES } from '@/i18n'

const router = useRouter()
const i18n = useI18n()

const currentLocale = ref(i18n.locale.value)
const availableLocales = AVAILABLE_LOCALES

watch(currentLocale, () => {
  if (router.currentRoute.value.name) {
    router.push({
      name: router.currentRoute.value.name,
      params: { locale: currentLocale.value }
    })
  }
})

watch(router.currentRoute, (route) => {
  currentLocale.value = route.params.locale
})

const localeToText = (locale) => {
  switch (locale) {
    case 'en':
      return 'English'
    case 'fr':
      return 'Français'
    default:
      throw 'Unknow language'
  }
}
</script>
