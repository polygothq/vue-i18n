<template>
  <RouterLink :to="{ name: to, params: { locale: currentLocale } }">
    <slot/>
  </RouterLink>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const props = defineProps({
  to: String
})

const currentLocale = ref(i18n.locale)
</script>
