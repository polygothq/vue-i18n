<template>
  <div>
    <div>
      {{ $t('cart.count', count, { count }) }}
    </div>
    <button @click="increment">
      Add 1 item
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>