import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'

// Cấu hình i18n
const i18n = createI18n({
  legacy: false, // Sử dụng Composition API
  locale: 'en', // ngôn ngữ mặc định
  fallbackLocale: 'en', // ngôn ngữ dự phòng
  messages: {
    en,
    vi
  }
})

export default i18n
