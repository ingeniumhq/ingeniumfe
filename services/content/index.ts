import { apiRequest } from '../ofetch'


export default  {

    async postReaction(postId: any, reactionType: any) {
        return await apiRequest(`contents/posts/${postId}/reactions/${reactionType}`, { method: 'POST' })
    },

    async storePost( post: any, files: any) {
        let formData = new FormData();
        Object.entries(post).forEach(entry => {
            const [key, value] :any = entry;
            formData.append(key, value);
        });
        Object.entries(files).forEach(entry => {
            const [key, value] :any = entry;
            formData.append(key, value);
        });
       
        return await apiRequest('contents/posts', { 
            method: 'POST', 
            body: formData,
            headers: {
                // "Content-Type": "multipart/form-data"
            }
        })
    },

    async postComment(postId: any, comment: any) {
        return await apiRequest(`contents/posts/${postId}/comments/`, { body: comment,  method: 'POST' })
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


    async getRecentBlogPost() {
        return await apiRequest(`contents/posts?limit=5`, { method: 'GET' })
    },


    async getEvents() {
        return await apiRequest(`contents/events`, { method: 'GET' })
    },

    async getBlogPost(slug: any) {
        return await apiRequest(`contents/posts/${slug}`, { method: 'GET' })
    },

}