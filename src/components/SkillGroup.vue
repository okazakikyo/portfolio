<template>
  <article class="stack-card reveal-card" :style="{ '--delay': delay }">
    <p class="section-caption lowercase">{{ title }}</p>
    <div class="chip-group">
      <span v-for="item in items" :key="item" class="stack-chip">{{ item }}</span>
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  items: string[]
  delay?: string
}>()
</script>
