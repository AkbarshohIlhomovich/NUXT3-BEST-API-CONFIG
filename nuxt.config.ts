// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:false,
  runtimeConfig: {
    public: {
      api: {
        url: "https://api.oshxona.ikramov.uz/"
      }
    }
  },
})
