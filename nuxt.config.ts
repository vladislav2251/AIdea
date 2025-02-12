// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-lucide-icons'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
    },
    bodyAttrs: {
        class: 'dark',
    },
    }
  },
  lucide: {
    namePrefix: 'Icon'
  },
  css: ['~/assets/styles/base.scss'],
  runtimeConfig: {
    public: {
      openRouterApiKey: process.env.OPENROUTER_API_KEY,
    },
  },
})

