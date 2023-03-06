import { apiRequest } from '../ofetch'


export default  {

    async loginUser(payload: Object) {
        return await apiRequest('auth/login', { method: 'POST', body: payload })
    },

    async forgotPassword(payload: Object) {
        return await apiRequest('auth/password/forgot', { method: 'POST', body: payload })
    },

    async resetPassword(payload: Object) {
        return await apiRequest('auth/password/reset', { method: 'POST', body: payload })
    },

    logoutUser(payload: Object) {
        return apiRequest('auth/logout', payload)
    },

    async registerUser(payload: Object) {
        return await apiRequest('auth/register', { method: 'POST', body: payload })
    },

    async verifyEmail(payload: Object) {
        return await apiRequest('auth/email/verify', { method: 'POST', body: payload })
    },
    async resendCode(payload: Object) {
        return await apiRequest('auth/email/resend-code', { method: 'POST', body: payload })
    },

    async socialAuth(payload: SocialAuthPayload) {
        return await apiRequest('auth/social/login', { method: 'POST', body: payload })
    },

}