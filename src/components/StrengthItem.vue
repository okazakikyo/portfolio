<template>
  <article class="strength-item reveal-card" :style="{ '--delay': delay }">
    <span>0{{ index + 1 }}</span>
    <p>{{ text }}</p>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  text: string
  index: number
  delay?: string
}>()
</script>
