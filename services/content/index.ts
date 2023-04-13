import { apiRequest } from '../ofetch'


export default  {

    async getTimeline(username: any) {
        return await apiRequest(`contents/timeline?username=${username}`, { method: 'GET' })
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


}