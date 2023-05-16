<template>

    <h4 class="widget-title">Recent Blogs <NuxtLink class="see-all" to="explore/blog" title="">See All</NuxtLink></h4>
    <ul v-if="posts.length > 0" class="recent-links">
        <li v-for="post in posts" class="my-3">
            <figure><img alt="" :src="post.image"></figure>
            <div class="re-links-meta">
                <h6><NuxtLink :to=" '/explore/blog/' + post.slug " >{{ post.title }}</NuxtLink></h6>
                <span>{{ post.date }}</span>
            </div>
        </li>
       
    </ul>

</template>

<script lang="ts">
import { ContentService } from '~/services';

export default {

    setup() {
       
        return {}
    },
    data() {
        return {
            posts: [],
        }
    },

    beforeCreate() {
        ContentService.getBlogPosts({paginate: 5}).then((res) => {
            this.posts = res.data.data
            const { $event } = useNuxtApp()
            $event('dom-updated', {})
        }).catch((err) => { })
    },

    methods: {

       
    }

}


</script>

<style scoped>
.friend-meta > h4 {
    width: auto;
}
</style>