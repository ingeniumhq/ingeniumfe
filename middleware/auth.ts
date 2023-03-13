import { useAuthStore } from '../store/auth';

export default defineNuxtRouteMiddleware((to, from) => {

    // if (process.server) return
    const authStore = useAuthStore();

    if (!authStore.isLoggedIn) {
      return navigateTo('/auth/signin')
    }
    // if (to.meta.requiresAuth && !authStore.isLoggedIn) return '/login' 
  })

//   export default defineNuxtRouteMiddleware(to => {
//     // skip middleware on server
//     if (process.server) return
//     // skip middleware on client side entirely
//     if (process.client) return
//     // or only skip middleware on initial client load
//     const nuxtApp = useNuxtApp()
//     if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return
//   })
  