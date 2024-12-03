<template>
  <RouterLink :to="{ name: to, params: { locale: $i18n.locale } }">
    <slot/>
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  to: String
})
</script>