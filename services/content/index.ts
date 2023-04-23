import { apiRequest } from '../ofetch'


export default  {

    async postReaction(postId: any, reactionType: any) {
        return await apiRequest(`contents/posts/${postId}/reactions/${reactionType}`, { method: 'POST' })
    },

    async storePost( post: any, files: any) {

        let formData = new FormData();

        // post.forEach((

        Object.entries(post).forEach(entry => {
            const [key, value] :any = entry;
            formData.append(key, value);
        });

        // formData.append("files", post.files);
        // files.forEach(element => {
        //     console.log(element)
        // });

        Object.entries(files).forEach(entry => {
            const [key, value] :any = entry;
            formData.append(key, value);
        });

        console.log(post, files, formData)
       

        return await apiRequest('contents/posts', { 
            method: 'POST', 
            body: formData,
            headers: {
                // "Content-Type": "multipart/form-data"
            }
        })


        // console.log(post)
        // return await apiRequest(`contents/posts`, { body: post,  method: 'POST' })
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


}