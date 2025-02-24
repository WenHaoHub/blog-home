export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['clip-path'].includes(tag),
    },
  },
  vite: {
    build: {
      emptyOutDir: true,
    }
  }
})
