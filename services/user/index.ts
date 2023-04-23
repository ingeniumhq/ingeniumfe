import { apiRequest } from '../ofetch'


export default  {

    async updateAccount(payload: any) {
        return await apiRequest('users/me', { method: 'PATCH', body: payload })
    },

    async getTimeline(username: any) {
        return await apiRequest(`users/timeline?username=${username}`, { method: 'GET' })
    },

    async uploadMedia(payload: any) {

        let formData = new FormData();
        formData.append("profile_pic", payload);

        return await apiRequest('users/media', { 
            method: 'POST', 
            body: formData,
            headers: {
                // "Content-Type": "multipart/form-data"
            }
        })


  
    },

    async getMe() {
        return await apiRequest('users/me', { method: 'GET'})
    },
    async getUser(username: any) {
        return await apiRequest(`users/${username}`, { method: 'GET'})
    },


    async getUserConnects(username: any) {
        return await apiRequest(`users/${username}/connects`, { method: 'GET'})
    },

    async getUserFollowings(username: any) {
        return await apiRequest(`users/${username}/followings`, { method: 'GET'})
    },

    async getUserFollowers(username: any) {
        return await apiRequest(`users/${username}/followers`, { method: 'GET'})
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