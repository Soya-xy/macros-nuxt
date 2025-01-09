// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@vue-macros/nuxt"],
  macros: {
    defineProp: {
      edition: "johnsonEdition"
    },

    defineEmit: true
  }
})