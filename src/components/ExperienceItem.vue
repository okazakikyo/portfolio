<template>
  <article class="experience-item reveal-card" :style="{ '--delay': delay }">
    <div class="experience-period">
      <span>{{ period }}</span>
    </div>
    <div class="experience-details">
      <h3>{{ role }}</h3>
      <p class="experience-company">{{ company }}</p>
      <p class="experience-summary">{{ summary }}</p>
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  company: string
  role: string
  period: string
  summary: string
  delay?: string
}>()
</script>

<style scoped>
.experience-item {
  display: grid;
  grid-template-columns: 1.2fr 1.6fr;
  gap: 20px;
  align-items: start;
  padding: 28px 32px;
}

.experience-period span {
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: color 0.3s ease;
}

.experience-details h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: 0 0 8px;
  font-weight: 600;
  transition: color 0.3s ease;
}

.experience-company {
  margin: 0 0 12px;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.experience-summary {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
  transition: color 0.3s ease;
}
</style>
