import { ofetch } from 'ofetch'
import { useAuthStore } from '../store/auth';
const authStore = useAuthStore();


let options = {
    baseURL: 'http://ingeniumbe.test/api/v1',
    headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache'
    },
    onRequest: ({request, response, options, error}: any) => {
        // console.log(request, response, options, error);
    },

    onRequestError: (err: any) => {
        console.error(err)
    },

    onResponse: ({ request, options, response }: any) => {
        // console.log(request, options, response);
    },

    onResponseError: ({ request, options, response }: any) =>{
        //if error is 401 - clear local storage and redirect back to the login page
        console.log(request, options, response); 
    },
}

if(process.client){
    const config = useRuntimeConfig()
    options.baseURL = config.NUXT_API_BASE_URL

    // if token is in store
    if ( authStore.isLoggedIn && authStore.bearerToken ){
        console.log(authStore.bearerToken)
        options.headers.Authorization = 'Bearer ' + authStore.bearerToken
    }
}




const apiRequest = ofetch.create(options)

export {apiRequest}
// apiRequest('/test') // Same as ofetch('/test', { baseURL: '/api' })