import { apiRequest } from '../ofetch'


export default  {

    async updateAccount(payload: Object) {
        return await apiRequest('users/me', { method: 'PATCH', body: payload })
    },

    async uploadMedia(payload: Object) {
        return await apiRequest('users/media', { method: 'POST', body: payload })
    },

    async getMe() {
        return await apiRequest('users/me', { method: 'GET'})
    },

    async deleteExperience(id: number) {
        return await apiRequest(`users/me/experiences/${id}`, { method: 'DELETE'})
    },
    async deleteCertificate(id: number) {
        return await apiRequest(`users/me/certifications/${id}`, { method: 'DELETE'})
    },
    async deleteInterest(id: number) {
        return await apiRequest(`users/me/interests/${id}`, { method: 'DELETE'})
    },


}