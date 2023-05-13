import { apiRequest } from '../ofetch'


export default  {

    async getSuggestions(query: any) {
        query = new URLSearchParams (query)
        return await apiRequest(`connect/suggestions?${query}`, { method: 'GET'})
    },


    async getFollowers(query: any) {
        query = new URLSearchParams (query)
        return await apiRequest(`connect/followers?${query}`, { method: 'GET'})
    },
   
 
    async getFollowings(query: any) {
        query = new URLSearchParams (query)
        return await apiRequest(`/connect/followings?${query}`, { method: 'GET'})
    },

    async followUser(payload: Object) {
        return await apiRequest('/connect/follow', { method: 'POST',  body: payload })
    },

    async unFollowUser(payload: Object) {
        return await apiRequest('/connect/unfollow', { method: 'POST',  body: payload })
    },

    async getConnects(query: any) {
        query = new URLSearchParams (query)
        return await apiRequest(`/connect?${query}`, { method: 'GET'})
    },

    async sendConnectRequest(payload: Object) {
        return await apiRequest('/connect/send', { method: 'POST',  body: payload })
    },
    async declineConnectRequest(payload: Object) {
        return await apiRequest('/connect/decline', { method: 'POST',  body: payload })
    },

    async acceptConnectRequest(payload: Object) {
        return await apiRequest('/connect/accept', { method: 'POST',  body: payload })
    },

   

}