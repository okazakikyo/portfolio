<template>
  <div class="portfolio-layout" :class="{ 'dark-mode': isDarkMode }">
    <aside class="sidebar reveal-section" :class="{ 'is-open': isMenuOpen }">
      <div class="sidebar-header">
        <div class="sidebar-brand">
          <p class="section-kicker">{{ $t('header.portfolio') }}</p>
          <strong>{{ $t('header.name') }}</strong>
        </div>

        <div class="sidebar-controls">
          <button class="theme-toggle" aria-label="toggle theme" @click="toggleTheme">
            <span class="theme-icon" :class="{ 'dark': isDarkMode }">
              <svg v-if="!isDarkMode" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="currentColor"/>
                <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1125 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46548 17.117 3.62594 15.589 3.2539 13.9205C2.88186 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.8875 6.53323 4.84182C7.88562 3.79615 9.50782 3.15731 11.21 3C10.2134 4.34827 9.73385 6.00945 9.85848 7.68141C9.98312 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0169 16.3186 14.1415C17.9906 14.2662 19.6517 13.7866 21 12.79Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>

          <button class="language-toggle" aria-label="toggle language" @click="toggleLanguage">
            <span class="language-icon">{{ currentLanguage === 'en' ? 'EN' : 'VI' }}</span>
          </button>

          <button class="sidebar-toggle" aria-label="toggle menu" @click="isMenuOpen = !isMenuOpen">
            <span class="toggle-line top" :class="{ 'open': isMenuOpen }"></span>
            <span class="toggle-line middle" :class="{ 'open': isMenuOpen }"></span>
            <span class="toggle-line bottom" :class="{ 'open': isMenuOpen }"></span>
          </button>
        </div>
      </div>

      <div class="sidebar-inner">
        <div class="sidebar-block">
          <p class="sidebar-label">{{ $t('sidebar.social') }}</p>
          <ul>
            <li v-for="social in socials" :key="social.label">
              <a :href="social.href" target="_blank" rel="noreferrer">{{ social.label }}</a>
            </li>
          </ul>
        </div>

        <div class="sidebar-block">
          <p class="sidebar-label">{{ $t('sidebar.menu') }}</p>
          <ul>
            <li v-for="item in menuItems" :key="item.label">
              <a :href="item.href" @click="scrollToSection(item.href)">{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <div class="sidebar-contact">
          <p class="sidebar-label">{{ $t('sidebar.getInTouch') }}</p>
          <a :href="`mailto:${mainEmail}`">{{ mainEmail }}</a>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <section id="home" class="hero-grid reveal-section">
        <div class="portrait-card reveal-card" style="--delay: 0.08s">
          <div class="portrait-frame">
            <div class="portrait-glow"></div>
            <div class="portrait-avatar">LP</div>
          </div>
        </div>

        <div class="hero-copy reveal-card" style="--delay: 0.14s">
          <p class="section-kicker">{{ $t('hero.title') }}</p>
          <h1>{{ $t('header.name') }}</h1>
          <p class="lead-text">
            {{ $t('hero.description') }}
          </p>

          <div class="hero-badges">
            <span class="hero-badge">{{ $t('hero.location') }}</span>
            <span class="hero-badge accent">{{ $t('hero.availability') }}</span>
          </div>

          <div class="hero-actions">
            <a class="text-button" :href="`mailto:${mainEmail}`">{{ $t('hero.hireMe') }}</a>
            <a class="text-button muted" href="#projects" @click.prevent="scrollToSection('#projects')">{{ $t('hero.selectedWork') }}</a>
          </div>

          <div class="metric-row">
            <article v-for="(stat, index) in stats" :key="stat.label" class="metric-chip reveal-card" :style="{ '--delay': `${0.2 + index * 0.08}s` }">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </article>
          </div>
        </div>
      </section>

      <section class="quote-panel reveal-section" style="--section-delay: 0.1s">
        <h2>
          {{ $t('quote.text') }}
        </h2>
      </section>

      <section id="about" class="content-section reveal-section" style="--section-delay: 0.18s">
        <p class="section-caption">{{ $t('about.caption') }}</p>
        <div class="section-grid about-grid">
          <div>
            <p class="section-kicker">{{ $t('about.greeting') }}</p>
          </div>
          <div class="section-copy">
            <p v-for="(text, index) in aboutParagraphs" :key="index">{{ text }}</p>
          </div>
        </div>
      </section>

      <section class="content-section reveal-section" style="--section-delay: 0.24s">
        <div class="section-heading-inline">
          <span class="heading-mark"></span>
          <h2>{{ $t('stack.title') }}</h2>
        </div>

        <div class="stack-grid">
          <SkillGroup
            v-for="(group, index) in skillGroups"
            :key="group.title"
            :title="group.title"
            :items="group.items"
            :delay="`${0.14 + index * 0.08}s`"
          />
        </div>
      </section>

      <section id="experience" class="content-section reveal-section" style="--section-delay: 0.3s">
        <div class="section-heading-inline">
          <span class="heading-mark"></span>
          <h2>{{ $t('experience.title') }}</h2>
        </div>

        <div class="experience-list">
          <ExperienceItem
            v-for="(item, index) in experience"
            :key="item.period"
            :company="item.company"
            :role="item.role"
            :period="item.period"
            :summary="item.summary"
            :delay="`${0.14 + index * 0.08}s`"
          />
        </div>
      </section>

      <section id="projects" class="content-section reveal-section" style="--section-delay: 0.36s">
        <div class="section-heading-inline">
          <span class="heading-mark"></span>
          <h2>{{ $t('projects.title') }}</h2>
        </div>

        <div class="project-list">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="project.title"
            :title="project.title"
            :category="project.category"
            :description="project.description"
            :impact="project.impact"
            :stack="project.stack"
            :index="index"
            :delay="`${0.14 + index * 0.08}s`"
          />
        </div>
      </section>

      <section class="content-section reveal-section" style="--section-delay: 0.42s">
        <div class="section-heading-inline">
          <span class="heading-mark"></span>
          <h2>{{ $t('strengths.title') }}</h2>
        </div>

        <div class="strength-list">
          <StrengthItem
            v-for="(service, index) in services"
            :key="service"
            :text="service"
            :index="index"
            :delay="`${0.16 + index * 0.08}s`"
          />
        </div>
      </section>

      <footer class="site-footer reveal-section" style="--section-delay: 0.48s">
        <p>{{ $t('footer.text') }}</p>
        <a :href="`mailto:${mainEmail}`">{{ mainEmail }}</a>
      </footer>
    </main>

    <button 
      :class="{ 'scroll-top-button': true, 'visible': showScrollTop }"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import SkillGroup from './components/SkillGroup.vue'
import ExperienceItem from './components/ExperienceItem.vue'
import ProjectCard from './components/ProjectCard.vue'
import StrengthItem from './components/StrengthItem.vue'

const { t, locale, tm } = useI18n()

const isMenuOpen = ref(false)
const isDarkMode = ref(false)
const mainEmail = ref('lyvinhphu98@gmail.com')
const showScrollTop = ref(false)

let themeMediaQuery: MediaQueryList | null = null
const themeChangeHandler = (e: MediaQueryListEvent) => {
  if (!localStorage.getItem('theme')) {
    isDarkMode.value = e.matches
    if (e.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const currentLanguage = computed(() => locale.value)

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'vi' : 'en'
  localStorage.setItem('language', locale.value)
}

// Get data from translation messages
const socials = computed(() => tm('socials'))
const menuItems = computed(() => tm('menuItems'))
const stats = computed(() => tm('stats'))
const projects = computed(() => tm('projects.items'))
const experience = computed(() => tm('experience.items'))
const skillGroups = computed(() => tm('stack.groups'))
const aboutParagraphs = computed(() => tm('about.paragraphs'))
const services = computed(() => tm('strengths.items'))

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (href: string) => {
  closeMenu()
  if (href.startsWith('#')) {
    const id = href.substring(1)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Load Anton font and theme
onMounted(() => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap'
  link.rel = 'stylesheet'
  document.head.appendChild(link)
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  } else if (savedTheme === 'light') {
    isDarkMode.value = false
    document.documentElement.classList.remove('dark')
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Check system preference
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
  
  // Watch for system theme changes
  themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  themeMediaQuery.addEventListener('change', themeChangeHandler)

  // Check for saved language preference
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage === 'en' || savedLanguage === 'vi') {
    locale.value = savedLanguage
  } else {
    // Default to English
    locale.value = 'en'
  }

  // Scroll to top button
  window.addEventListener('scroll', handleScroll)
  // Initial check
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (themeMediaQuery) {
    themeMediaQuery.removeEventListener('change', themeChangeHandler)
  }
})
</script>

<style>
/* Additional styles for project-meta */
.project-meta {
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 8px;
  font-family: 'Inter', sans-serif;
}

.lowercase {
  text-transform: lowercase;
}

/* Scroll to top button */
.scroll-top-button {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 56px;
  height: 56px;
  border-radius: 999px;
  border: 1px solid var(--border-light);
  background: var(--bg-secondary);
  color: var(--text-primary);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
  z-index: 100;
  box-shadow: var(--shadow-md);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.scroll-top-button.visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.scroll-top-button:hover {
  background: var(--accent-blue);
  color: white;
  border-color: var(--accent-blue);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.scroll-top-button:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .scroll-top-button {
    bottom: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 480px) {
  .scroll-top-button {
    bottom: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
  }
}
</style>
