import { apiRequest } from '../ofetch'


export default  {

    async loginUser(payload: Object) {
        return await apiRequest('auth/login', { method: 'POST', body: payload })
    },

    logoutUser(payload: Object) {
        return apiRequest('auth/logout', payload)
    },

    registerUser(payload: Object) {
        return apiRequest('auth/register', payload)
    }
}