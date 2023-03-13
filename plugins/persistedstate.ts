// plugins/persistedstate.js
import { createPersistedState } from 'pinia-plugin-persistedstate'
import Cookies from 'js-cookie'
import cookie from 'cookie'



export default  defineNuxtPlugin(nuxtApp => {
  nuxtApp.$pinia.use(
    createPersistedState({
      storage: {
        getItem: (key ) => {
          // See https://nuxtjs.org/guide/plugins/#using-process-flags
          if (process.server) {
            const parsedCookies = cookie.parse(nuxtApp.req.headers.cookie)
            return parsedCookies[key]
          } else {
            return Cookies.get(key) || null
          }
        },
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: false }),
      },


      // storage: {
      //   getItem: (key ) => {
      //     // See https://nuxtjs.org/guide/plugins/#using-process-flags
      //     if (process.server) {
      //       const parsedCookies = cookie.parse(nuxtApp.req.headers.cookie)
      //       return parsedCookies[key]
      //     } else {
      //       return Cookies.get(key) || null
      //     }
      //   },
      //   // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      //   setItem: (key, value) =>
      //     Cookies.set(key, value, { expires: 3, secure: false }),
      // },
     
     
    }),
  )
})