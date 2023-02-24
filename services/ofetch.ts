import { ofetch } from 'ofetch'

const options = {
    baseURL: 'http://ingeniumbe.test/api/v1'
}
const apiRequest = ofetch.create(options)

export {apiRequest}
// apiRequest('/test') // Same as ofetch('/test', { baseURL: '/api' })