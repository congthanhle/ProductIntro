export default defineNuxtConfig({
  ssr: true,
  $production: {
    routeRules: {
      "/": { prerender: true },

      "/products/": { swr: 3600 },
    },
  },
  css: ["bootstrap/dist/css/bootstrap.css"],
  modules: ["@nuxt/devtools", "@vee-validate/nuxt",'@nuxtjs/tailwindcss'],
});
