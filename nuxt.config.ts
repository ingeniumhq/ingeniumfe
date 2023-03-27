// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 starter',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/images/fav.png',
        },
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
          type: "text/javascript"
        },
      ]
    },
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  piniaPersistedstate: {
    // cookieOptions: {
    //   sameSite: 'strict',
    // }, // only used when cookie
    storage: 'localStorage', //'sessionStorage' , 'localStorage
    debug: true
    
  },
    
  css: [
    // '~/assets/styles/css/tailwind.css', add in layout
    '~/assets/styles/scss/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      NUXT_API_BASE_URL: process.env.NUXT_API_BASE_URL,
    }
  }

});
