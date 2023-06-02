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
       
        return await apiRequest('contents/timeline', { 
            method: 'POST', 
            body: formData,
            headers: {
                // "Content-Type": "multipart/form-data"
            }
        })
    },

    async postComment(postId: any, comment: any) {
        return await apiRequest(`contents/posts/${postId}/comments`, { body: comment,  method: 'POST' })
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


    // USER TIMELINE
    async getTimeline(username: any, page = null ) {
        if(username) return await apiRequest(`contents/timeline?username=${username}&page=${page}`, { method: 'GET' })
        return await apiRequest(`contents/timeline?page=${page}`, { method: 'GET' })
    },


    async getSingleTimelinePost(slug: any) {
        return await apiRequest(`contents/timeline/${slug}`, { method: 'GET' })
    },
    
    async getDraftTimeline() {
        return await apiRequest(`contents/timeline/drafts`, { method: 'GET' })
    },


    async getBlogPosts(query: any) {
        query = new URLSearchParams (query)
        return await apiRequest(`contents/blogs?${query}`, { method: 'GET' })
    },


    async getSingleBlogPost(slug: any) {
        return await apiRequest(`contents/blogs/${slug}`, { method: 'GET' })
    },


    async getEvents(query: any) {
        query = new URLSearchParams (query)
        return await apiRequest(`contents/events?${query}`, { method: 'GET' })
    },
   



}