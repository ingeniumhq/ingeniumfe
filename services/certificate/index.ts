import { apiRequest } from '../ofetch'


export default  {
    async getCertificate(reference: string) {
        return await apiRequest(`certificate/${reference}`, { method: 'GET'})
    },
}