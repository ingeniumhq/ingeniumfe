import vue3GoogleLogin from 'vue3-google-login'


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vue3GoogleLogin, { 
    clientId: "305284931517-92582c730d80549iplub5ke3qej7lbea.apps.googleusercontent.com",
    // popupType: 'CODE'
});

  return {
    provide: { vue3GoogleLogin },
  };
});