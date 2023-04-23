<template>
    <div v-for="(content, index) in timelineContents" class="main-wraper">

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

                    <a href="post-detail.html" class="post-title">{{ content.title }}</a>
                    <div class="mb-4" style="max-height: 200px; overflow-y: hidden;" v-html="content.content"></div>


                    


                    <div class="gallery" :id="index">
                        <img v-for="media in content.media" :src="media.url" alt="">
                    </div>

                    <div class="stat-tools">
                        <!-- <div class="box">
                            <div class="Like"><a class="Like__link"><i class="icofont-like"></i> Like</a></div>
                        </div> -->

                        <a title="" href="#" class="comment-to"><i class="icofont-comment"></i> Comment</a>
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


    <div class="sp sp-bars"></div>
</template>

<script lang="ts">
import { ConnectService, ContentService, UserService } from '~/services';
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
            images: [
                "https://i.wifegeek.com/200426/f9459c52.jpg",
                "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
                "https://i.wifegeek.com/200426/5fa51df3.jpg",
                "https://i.wifegeek.com/200426/663181fe.jpg",
            ]
        }
    },

    beforeCreate() {
        UserService.getTimeline(this.username).then((res) => {
            this.timelineContents = res.data
            const { $event } = useNuxtApp()
            $event('dom-updated', {})
        }).catch((err) => { })
    },

    mounted() {
        const { $listen } = useNuxtApp()
        $listen('newpostadded', (user: any) => {
            UserService.getTimeline(this.username).then((res) => {
                this.timelineContents = res.data
                const { $event } = useNuxtApp()
            }).catch((err) => { })
        })

        // console.log(window.$)

        window.$('#gallery').imagesGrid({
            images: [
                'https://unsplash.it/750/500?image=868',
                'https://unsplash.it/750/500?image=868',
                'https://unsplash.it/750/500?image=868',
                'https://unsplash.it/750/500?image=868',
                'https://unsplash.it/750/500?image=868',
                'https://unsplash.it/750/500?image=868',
                
            ],

        });

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
        getContentMedia(content) {
            let images = []
            content.media.forEach(element => {
                images.push(element.url)
            });


          

            console.log(window)
            

            return images


            

        }

    }

}


</script>

<style>
    /* .profile {
        margin-top: 20px;
        margin-bottom: 60px;
    }

    .profile .profile-img-list {
        list-style-type: none;
        margin: -0.0625rem -1.3125rem;
        padding: 0;
    }

    .profile .profile-img-list:after,
    .profile .profile-img-list:before {
        content: "";
        display: table;
        clear: both;
    }

    .profile .profile-img-list .profile-img-list-item {
        float: left;
        width: 25%;
        padding: 0.0625rem;
    }

    .profile .profile-img-list .profile-img-list-item.main {
        width: 20%;
    }

    .profile .profile-img-list .profile-img-list-item .profile-img-list-link {
        display: block;
        padding-top: 75%;
        overflow: hidden;
        position: relative;
    }

    .profile .profile-img-list .profile-img-list-item .profile-img-list-link .profile-img-content,
    .profile .profile-img-list .profile-img-list-item .profile-img-list-link img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        max-width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .profile .profile-img-list .profile-img-list-item .profile-img-list-link .profile-img-content:before,
    .profile .profile-img-list .profile-img-list-item .profile-img-list-link img:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid rgba(60, 78, 113, 0.15);
    }

    .profile .profile-img-list .profile-img-list-item.with-number .profile-img-number {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        color: #fff;
        font-size: 1.625rem;
        font-weight: 500;
        line-height: 1.625rem;
        margin-top: -0.8125rem;
        text-align: center;
    } */
</style>