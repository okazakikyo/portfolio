<template>
  <article class="project-row reveal-card" :style="{ '--delay': delay }">
    <div class="project-visual">
      <span>_0{{ index + 1 }}</span>
      <small>{{ stack[0] }}</small>
    </div>
    <div class="project-content">
      <p class="project-meta">{{ category }}</p>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="chip-group compact">
        <span v-for="item in stack" :key="item" class="stack-chip">{{ item }}</span>
      </div>
    </div>
    <div class="project-impact">{{ impact }}</div>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  category: string
  description: string
  impact: string
  stack: string[]
  index: number
  delay?: string
}>()
</script>
