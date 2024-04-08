


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  devServer: {
    // https: {
    //   key: './localhost.key',
    //   cert: './localhost.crt',
    // },
    // port: 443
    // url: 'https://127.0.0.1:3000'
  },

  app: {
    head: {
      title: 'Ingenium Academy',
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

  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['vue-lightbox-advanced', 'lightbox'].includes(tag),
    },
  },

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    }, // only used when cookie
    // storage: 'localStorage', //'sessionStorage' , 'localStorage
    debug: true
    
  },
    
  css: [
     '~/assets/styles/css/tailwind.css',
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
      NUXT_FIREBASE_API_KEY: process.env.NUXT_FIREBASE_API_KEY,
      NUXT_FIREBASE_AUTH_DOMAIN: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      NUXT_FIREBASE_PROJECT_ID: process.env.NUXT_FIREBASE_PROJECT_ID,
      NUXT_FIREBASE_STORAGE_BUCKET: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      NUXT_FIREBASE_MESSAGING_SENDER_ID: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
      NUXT_FIREBASE_APPID_KEY: process.env.NUXT_FIREBASE_APPID_KEY,
      NUXT_FIREBASE_MEASUREMENT_ID: process.env.NUXT_FIREBASE_MEASUREMENT_ID,
      NUXT_FIREBASE_DATABASE_URL: process.env.NUXT_FIREBASE_DATABASE_URL,
    }
  },


});
