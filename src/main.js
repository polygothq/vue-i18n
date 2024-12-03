import './assets/main.css'

import { createApp } from 'vue'
import { setupI18n } from './i18n'

import App from './App.vue'
import { setupRouter } from './router'

const i18n = setupI18n({
  locale: 'en',
  fallbackLocale: 'en'
})

const router = setupRouter(i18n)

const app = createApp(App)

app.use(router)
app.use(i18n) // Before the mount!

router.isReady().then(() => {
  app.mount('#app')
})
