import { ofetch } from 'ofetch'

const options = {
    baseURL: 'http://ingeniumbe.test/api/v1'
}

if(process.client){
    const config = useRuntimeConfig()
    options.baseURL = config.NUXT_API_BASE_URL
}


const apiRequest = ofetch.create(options)

export {apiRequest}
// apiRequest('/test') // Same as ofetch('/test', { baseURL: '/api' })