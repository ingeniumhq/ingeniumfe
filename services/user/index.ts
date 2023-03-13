import { apiRequest } from '../ofetch'


export default  {

    async updateAccount(payload: Object) {
        return await apiRequest('users/me', { method: 'PATCH', body: payload })
    },

    async getMe(payload: Object) {
        return await apiRequest('users/me', { method: 'GET'})
    },

    async deleteExperience(id: number) {
        return await apiRequest(`users/me/experiences/${id}`, { method: 'DELETE'})
    },
    async deleteCertificate(id: number) {
        return await apiRequest(`users/me/certifications/${id}`, { method: 'DELETE'})
    },


}