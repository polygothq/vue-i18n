import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getLocale, setI18nLanguage, AVAILABLE_LOCALES } from '../i18n'

export function setupRouter(i18n) {
  const locale = getLocale(i18n)

  // create router instance
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/:locale',
        name: 'home',
        component: HomeView
      },
      {
        path: '/:locale/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  })

  // navigation guards
  router.beforeEach(async (to) => {
    const paramsLocale = to.params.locale

    if (!AVAILABLE_LOCALES.includes(paramsLocale)) {
      return { name: 'home', params: { locale }}
    }

    // set i18n language
    await setI18nLanguage(i18n, paramsLocale)
  })

  return router
}
