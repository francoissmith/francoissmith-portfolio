// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },
  components: true,
  rootDir: "src/"

});
