import { apiRequest } from '../ofetch'


export default  {

    async getSuggestions(query: any) {
        query = new URLSearchParams (query)
        return await apiRequest(`connect/suggestions?${query}`, { method: 'GET'})
    },

    async followUser(payload: Object) {
        return await apiRequest('connect/follow', { method: 'POST',  body: payload })
    },

    async sendConnectRequest(payload: Object) {
        return await apiRequest('connect/send', { method: 'POST',  body: payload })
    },

   

}