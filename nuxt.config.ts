export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/content'
  ],

  css: ['~/assets/css/main.css'],

  // 👇 Add this part
  devServer: {
    port: 4201,
  },
})
