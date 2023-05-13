<template>
    <div v-for="(content, index) in timelineContents" class="main-wraper" style="cursor: pointer;">
        <div class="user-post">
            <div class="friend-info">
                <figure>
                    <img alt="" :src="content.user.profile_pic">
                   
                </figure>
                <div class="friend-name">
                    <div class="more">
                        <div class="more-post-optns">
                            <i class="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-more-horizontal">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg></i>
                            <ul>
                                <!-- <li>
                                    <i class="icofont-pen-alt-1"></i>Edit Post
                                    <span>Edit This Post within a Hour</span>
                                </li>
                                <li>
                                    <i class="icofont-ban"></i>Hide Post
                                    <span>Hide This Post</span>
                                </li>
                                <li>
                                    <i class="icofont-ui-delete"></i>Delete Post
                                    <span>If inappropriate Post By Mistake</span>
                                </li> -->
                                <li>
                                    <i class="icofont-flag"></i>Report
                                    <span>Inappropriate content</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ins>
                        <NuxtLink title="" :to="'/usr/'.content?.user?.username">{{ content?.user?.name }}</NuxtLink>
                        <img class="userbadge-ico" alt="" :src="content.user.badge">
                    </ins>
                    <span><i class="icofont-globe"></i> published: {{ content.date }}</span>
                </div>
                <div class="post-meta">

                    <div  @click.prevent="openPost(content)" >
                        <a href="#" class="post-title">{{ content.title }}</a>
                        <div class="mb-4" style="max-height: 200px; overflow-y: hidden;" v-html="content.content"></div>

                        <div class="gallery" :id="index">
                            <img v-for="media in content.media" :src="media.url" alt="">
                        </div>
                    </div>

                    <div class="stat-tools">  
                        <!-- <a title="" href="#" class="comment-to"><i class="icofont-comment"></i> Comment</a> -->
                        <!-- <a title="" href="#" class="share-to"><i class="icofont-share-alt"></i> Share</a> -->
                        <div class="emoji-state">
                            <div class="popover_wrapper">
                                <a class="popover_title" @click.prevent="postReaction(content, 'like')" title="">
                                    <img v-if="content.own_reactions.like" alt="" src="/images/smiles/thumb.png">
                                    <img v-else alt="" src="/images/smiles/unlike.png">

                                </a>
                                <div class="popover_content">
                                    <span><img alt="" src="/images/smiles/thumb.png"> Likes</span>
                                    <ul class="namelist">
                                        <li><span>{{ content.reactions_summary.likes }}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="new-comment" style="display: none;">
                            <form @submit.prevent="postComment(content)" method="post">
                                <input type="text" v-model="newcomment.comment" placeholder="write comment">
                                <button type="submit"><i class="icofont-paper-plane"></i></button>
                            </form>
                            <div class="comments-area">
                                <ul>

                                    <li v-for="comment in content?.recent_comments">
                                        <figure><img alt="" :src="comment?.user?.profile_pic"></figure>
                                        <div class="commenter">
                                            <h5><a title="" href="#">{{ comment.user.name }}</a></h5>
                                            <span>{{ comment.date }}</span>
                                            <p>
                                                {{ comment.comment }}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div><!-- share post without image -->


    <!-- veiw post modal -->
    <ModalsImageModal :key=" Math.random() " :isOpenPostId="isOpenPostId" v-if="isOpenPostId"></ModalsImageModal>
    <div class="sp sp-bars"></div>
</template>

<script lang="ts">
import { ContentService } from '~/services';
import VueLightboxAdvanced from 'vue-lightbox-advanced'
// import jQuery from 'jQuery'
import 'vue-lightbox-advanced/dist/vue-lightbox-advanced.css'
// import '@morioh/v-lightbox/dist/lightbox.css';



export default {
    props: ['username'],
    components: {
        VueLightboxAdvanced,
        // [process.client && 'Lightbox']: () => import('@morioh/v-lightbox')
        // Lightbox: () => import('@morioh/v-lightbox')
    },
    setup() {
        const { $toast } = useNuxtApp()
        return {
            $toast
        }
    },
    data() {
        return {
            connects: [],
            timelineContents: [],
            newcomment: {},
            isOpenPostId: null,
        }
    },

    beforeCreate() {
        ContentService.getTimeline(this.username).then((res) => {
            this.timelineContents = res.data
            const { $event } = useNuxtApp()
            $event('dom-updated', {})
        }).catch((err) => { })
    },

    mounted() {
        const { $listen } = useNuxtApp()
        $listen('newpostadded', (user: any) => {
            ContentService.getTimeline(this.username).then((res) => {
                this.timelineContents = res.data
                const { $event } = useNuxtApp()
            }).catch((err) => { })
        })
        



    },

    methods: {

        postReaction(post: never, reactionType: any) {
            ContentService.postReaction(post.id, reactionType).then((res) => {
                const currentPostIndex = this.timelineContents.indexOf(post)
                this.timelineContents[currentPostIndex] = res.data
            }).catch((err) => {
                console.log(err)
            })
        },
        postComment(post: any) {
            ContentService.postComment(post.id, this.newcomment).then((res) => {
                const currentPostIndex = this.timelineContents.indexOf(post)
                this.timelineContents[currentPostIndex] = res.data
                this.newcomment = {}

            }).catch((err) => {
                console.log(err)
            })
        },

        openPost(content){
            this.isOpenPostId = content.id
            // console.log(content)
            $(".post-modal").addClass("show");
			$(".post-modal").show();
        }
    
    }

}


</script>

<style>
   

    /* .profile .profile-img-list .profile-img-list-item .profile-img-list-link {
        display: block;
        padding-top: 75%;
        overflow: hidden;
        position: relative;
    } */

</style>