// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  devServer: {
    port: 3200,
  },
  auth: {
    baseURL: `${process.env.BACKEND_URL}/api/auth`,
    provider: {
      pages: {
        login: "/signin",
      },
      type: "local",
      endpoints: {
        signIn: { path: "login", method: "post" },
        signOut: { path: "logout", method: "post" },
        signUp: { path: "signup", method: "post" },
        getSession: { path: "me", method: "get" },
      },
      token: {
        signInResponseTokenPointer: "/token",
        maxAgeInSeconds: 60 * 60 * 60 * 30, // 30 days token expiration date based on adonisjs access token expiration
      },
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@sidebase/nuxt-auth",
    "@nuxtjs/color-mode",
    "@primevue/nuxt-module",
  ],
});