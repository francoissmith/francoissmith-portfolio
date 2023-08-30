// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  srcDir: 'src',
  build: {
    analyze: true,
  },
  generate: {
    routes: '/',
  },
  components: true,

});
