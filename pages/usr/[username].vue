<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="group-feed">
                        <div class="group-avatar">
                            <img :src="user.cover_pic ?? ' /images/resources/profile-banner.jpg'" alt="">
                            <a v-if="user.is_follower" @click.prevent="unFollowUser(user)" href="#" title=""><i class="icofont-check-circled"></i>Unfollow</a>
                            <a v-else @click.prevent="followUser(user)" href="#" title=""><i class="icofont-check-circled"></i>Follow</a>
                            <figure class="group-dp"><img :src="user.profile_pic" alt=""></figure>
                        </div>
                        <div class="grp-info about">
                            <h4>{{ user.name }} <span>@{{ user.username }}</span></h4>
                            <ul class="joined-info">
                                <li><span>Joined:</span>{{ user.created_at }}</li>
                                <li><span>Following:</span> {{ user?.analytics?.followings_count ?? 0 }}</li>
                                <li><span>Followers:</span>{{ user?.analytics?.followers_count ?? 0 }}</li>
                                <!-- <li><span>Posts:</span> 932</li> -->
                            </ul>
                            <ul class="nav nav-tabs about-btn">
                                <li class="nav-item"><a class="active" href="#timeline" data-toggle="tab">Timeline</a></li>
                                <li class="nav-item"><a class="" href="#connects" data-toggle="tab">Connects</a></li>
                                <li class="nav-item"><a class="" href="#about" data-toggle="tab">About</a></li>
                            </ul>

                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="timeline">
                                        <div class="row merged20">
                                            <div class="col-lg-8">


                                                <div class="main-wraper">
                                                    <div class="user-post">
                                                        <div class="friend-info">
                                                            <figure>
                                                                <img alt="" src="/images/resources/user4.jpg">
                                                            </figure>
                                                            <div class="friend-name">
                                                                <div class="more">
                                                                    <div class="more-post-optns">
                                                                        <i class="">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24" viewBox="0 0 24 24"
                                                                                fill="none" stroke="currentColor"
                                                                                stroke-width="2" stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="feather feather-more-horizontal">
                                                                                <circle cx="12" cy="12" r="1"></circle>
                                                                                <circle cx="19" cy="12" r="1"></circle>
                                                                                <circle cx="5" cy="12" r="1"></circle>
                                                                            </svg></i>
                                                                        <ul>
                                                                            <li>
                                                                                <i class="icofont-pen-alt-1"></i>Edit
                                                                                Post
                                                                                <span>Edit This Post within a
                                                                                    Hour</span>
                                                                            </li>
                                                                            <li>
                                                                                <i class="icofont-ban"></i>Hide Post
                                                                                <span>Hide This Post</span>
                                                                            </li>
                                                                            <li>
                                                                                <i class="icofont-ui-delete"></i>Delete
                                                                                Post
                                                                                <span>If inappropriate Post By
                                                                                    Mistake</span>
                                                                            </li>
                                                                            <li>
                                                                                <i class="icofont-flag"></i>Report
                                                                                <span>Inappropriate content</span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <ins><a title="" href="time-line.html">Jack Carter</a>
                                                                    Share Post</ins>
                                                                <span><i class="icofont-globe"></i> published: Sep,15
                                                                    2020</span>
                                                            </div>
                                                            <div class="post-meta">
                                                                <a href="post-detail.html" class="post-title">Supervision as
                                                                    a Personnel
                                                                    Development Device</a>
                                                                <p>
                                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                                                                    eget condimentum rhoncus, sem quam semper libero.
                                                                </p>
                                                                <div class="we-video-info">
                                                                    <ul>
                                                                        <li>
                                                                            <span title="views" class="views">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16" height="16"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="2"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        class="feather feather-eye">
                                                                                        <path
                                                                                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                        </path>
                                                                                        <circle cx="12" cy="12" r="3">
                                                                                        </circle>
                                                                                    </svg></i>
                                                                                <ins>1.2k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="Comments" class="Recommend">
                                                                                <i>
                                                                                    <svg class="feather feather-message-square"
                                                                                        stroke-linejoin="round"
                                                                                        stroke-linecap="round"
                                                                                        stroke-width="2"
                                                                                        stroke="currentColor" fill="none"
                                                                                        viewBox="0 0 24 24" height="16"
                                                                                        width="16"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                                                                        </path>
                                                                                    </svg></i>
                                                                                <ins>54</ins>
                                                                            </span>

                                                                        </li>
                                                                        <li>
                                                                            <span title="follow" class="Follow">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16" height="16"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="2"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        class="feather feather-star">
                                                                                        <polygon
                                                                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                        </polygon>
                                                                                    </svg></i>
                                                                                <ins>5k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span class="share-pst" title="Share">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16" height="16"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="2"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        class="feather feather-share-2">
                                                                                        <circle cx="18" cy="5" r="3">
                                                                                        </circle>
                                                                                        <circle cx="6" cy="12" r="3">
                                                                                        </circle>
                                                                                        <circle cx="18" cy="19" r="3">
                                                                                        </circle>
                                                                                        <line x1="8.59" y1="13.51"
                                                                                            x2="15.42" y2="17.49">
                                                                                        </line>
                                                                                        <line x1="15.41" y1="6.51" x2="8.59"
                                                                                            y2="10.49"></line>
                                                                                    </svg></i>
                                                                                <ins>205</ins>
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                    <a href="post-detail.html" title="" class="reply">Reply
                                                                        <i class="icofont-reply"></i></a>
                                                                </div>
                                                                <div class="stat-tools">
                                                                    <div class="box">
                                                                        <div class="Like"><a class="Like__link"><i
                                                                                    class="icofont-like"></i> Like</a>
                                                                            <div class="Emojis">
                                                                                <div class="Emoji Emoji--like">
                                                                                    <div class="icon icon--like"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--love">
                                                                                    <div class="icon icon--heart"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--haha">
                                                                                    <div class="icon icon--haha"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--wow">
                                                                                    <div class="icon icon--wow"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--sad">
                                                                                    <div class="icon icon--sad"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--angry">
                                                                                    <div class="icon icon--angry"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="box">
                                                                        <div class="Emojis">
                                                                            <div class="Emoji Emoji--like">
                                                                                <div class="icon icon--like"></div>
                                                                            </div>
                                                                            <div class="Emoji Emoji--love">
                                                                                <div class="icon icon--heart"></div>
                                                                            </div>
                                                                            <div class="Emoji Emoji--haha">
                                                                                <div class="icon icon--haha"></div>
                                                                            </div>
                                                                            <div class="Emoji Emoji--wow">
                                                                                <div class="icon icon--wow"></div>
                                                                            </div>
                                                                            <div class="Emoji Emoji--sad">
                                                                                <div class="icon icon--sad"></div>
                                                                            </div>
                                                                            <div class="Emoji Emoji--angry">
                                                                                <div class="icon icon--angry"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a title="" href="#" class="comment-to"><i
                                                                            class="icofont-comment"></i> Comment</a>
                                                                    <a title="" href="#" class="share-to"><i
                                                                            class="icofont-share-alt"></i> Share</a>
                                                                    <div class="emoji-state">
                                                                        <div class="popover_wrapper">
                                                                            <a class="popover_title" href="#" title=""><img
                                                                                    alt=""
                                                                                    src="/images/smiles/thumb.png"></a>
                                                                            <div class="popover_content">
                                                                                <span><img alt=""
                                                                                        src="/images/smiles/thumb.png">
                                                                                    Likes</span>
                                                                                <ul class="namelist">
                                                                                    <li>Jhon Doe</li>
                                                                                    <li>Amara Sin</li>
                                                                                    <li>Sarah K.</li>
                                                                                    <li><span>20+ more</span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="popover_wrapper">
                                                                            <a class="popover_title" href="#" title=""><img
                                                                                    alt=""
                                                                                    src="/images/smiles/heart.png"></a>
                                                                            <div class="popover_content">
                                                                                <span><img alt=""
                                                                                        src="/images/smiles/heart.png">
                                                                                    Love</span>
                                                                                <ul class="namelist">
                                                                                    <li>Amara Sin</li>
                                                                                    <li>Jhon Doe</li>
                                                                                    <li><span>10+ more</span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="popover_wrapper">
                                                                            <a class="popover_title" href="#" title=""><img
                                                                                    alt=""
                                                                                    src="/images/smiles/smile.png"></a>
                                                                            <div class="popover_content">
                                                                                <span><img alt=""
                                                                                        src="/images/smiles/smile.png">
                                                                                    Happy</span>
                                                                                <ul class="namelist">
                                                                                    <li>Sarah K.</li>
                                                                                    <li>Jhon Doe</li>
                                                                                    <li>Amara Sin</li>
                                                                                    <li><span>100+ more</span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="popover_wrapper">
                                                                            <a class="popover_title" href="#" title=""><img
                                                                                    alt=""
                                                                                    src="/images/smiles/weep.png"></a>
                                                                            <div class="popover_content">
                                                                                <span><img alt=""
                                                                                        src="/images/smiles/weep.png">
                                                                                    Dislike</span>
                                                                                <ul class="namelist">
                                                                                    <li>Danial Carbal</li>
                                                                                    <li>Amara Sin</li>
                                                                                    <li>Sarah K.</li>
                                                                                    <li><span>15+ more</span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>10+</p>
                                                                    </div>
                                                                    <div class="new-comment" style="display: none;">
                                                                        <form method="post">
                                                                            <input type="text" placeholder="write comment">
                                                                            <button type="submit"><i
                                                                                    class="icofont-paper-plane"></i></button>
                                                                        </form>
                                                                        <div class="comments-area">
                                                                            <ul>
                                                                                <li>
                                                                                    <figure><img alt=""
                                                                                            src="/images/resources/user1.jpg">
                                                                                    </figure>
                                                                                    <div class="commenter">
                                                                                        <h5><a title="" href="#">Jack
                                                                                                Carter</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we
                                                                                            learn who we really are and
                                                                                            then live with that
                                                                                            decision, great post!
                                                                                        </p>
                                                                                        <span>you can view the more
                                                                                            detail via link</span>
                                                                                        <a title=""
                                                                                            href="https://www.youtube.com/watch?v=HpZgwHU1GcI"
                                                                                            target="_blank">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i
                                                                                            class="icofont-heart"></i></a>
                                                                                    <a title="Reply" href="#"
                                                                                        class="reply-coment"><i
                                                                                            class="icofont-reply"></i></a>
                                                                                </li>
                                                                                <li>
                                                                                    <figure><img alt=""
                                                                                            src="/images/resources/user2.jpg">
                                                                                    </figure>
                                                                                    <div class="commenter">
                                                                                        <h5><a title="" href="#">Ching
                                                                                                xang</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we
                                                                                            learn who we really are and
                                                                                            then live with that
                                                                                            decision, great post!
                                                                                        </p>
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i
                                                                                            class="icofont-heart"></i></a>
                                                                                    <a title="Reply" href="#"
                                                                                        class="reply-coment"><i
                                                                                            class="icofont-reply"></i></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="sp sp-bars"></div>
                                            </div>
                                            <div class="col-lg-4">
                                                <aside class="sidebar static left">
                                                    <div class="advertisment-box">
                                                        <h4 class=""><i class="icofont-info-circle"></i> advertisment
                                                        </h4>
                                                        <figure>
                                                            <a href="#" title="Advertisment"><img
                                                                    src="/images/resources/ad-widget2.gif" alt=""></a>
                                                        </figure>
                                                    </div>

                                                    <ComposeFollowPeopleWidget></ComposeFollowPeopleWidget>


                                                </aside>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="tab-pane fade" id="connects">
                                        <h5 class="tab-title"></h5>
                                        <ul class="nav nav-tabsn about-btn pix-filter">
                                            <li class="nav-item"> <a title="" href="#connections" class="active" data-toggle="tab">Connects</a></li>
                                            <li class="nav-item"> <a title="" href="#followers" data-toggle="tab">Followers</a></li>
                                            <li class="nav-item"> <a title="" href="#followings" data-toggle="tab">Followings</a></li>

                                        </ul>
                                            
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="tab-content">
                                                    <div class="tab-pane fade show active" id="connections">
                                                        <div class="row merged-10 col-xs-6">
                                                            <div v-for="user in connects" class="col-lg-3 col-md-4 col-sm-6">
                                                                <div class="friendz">
                                                                    <figure><img :src="user.profile_pic" alt=""></figure>
                                                                    <span><NuxtLink :to="{ name: 'usr-username', params: { username: user.username }}" title="">{{ user.name }}</NuxtLink></span>
                                                                    <ins>{{ user.headline }}</ins>
                                                            
                                                                </div>
                                                            </div>
                                                        
                                                            <div class="col-lg-12">
                                                                <div class="sp sp-bars"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade " id="followers">
                                                        <div class="row merged-10 col-xs-6">
                                                            <div v-for="user in followers" class="col-lg-3 col-md-4 col-sm-6">
                                                                <div class="friendz">
                                                                    <figure><img :src="user.profile_pic" alt=""></figure>
                                                                    <span><NuxtLink :to="{ name: 'usr-username', params: { username: user.username }}" title="">{{ user.name }}</NuxtLink></span>
                                                                    <ins>{{ user.headline }}</ins>
                                                                </div>
                                                            </div>
                                                        
                                                            <div class="col-lg-12">
                                                                <div class="sp sp-bars"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade " id="followings">
                                                        <div class="row merged-10 col-xs-6">
                                                            <div v-for="user in followings" class="col-lg-3 col-md-4 col-sm-6">
                                                                <div class="friendz">
                                                                    <figure><img :src="user.profile_pic" alt=""></figure>
                                                                    <span><NuxtLink :to="{ name: 'usr-username', params: { username: user.username }}" title="">{{ user.name }}</NuxtLink></span>
                                                                    <ins>{{ user.headline }}</ins>
                                                                </div>
                                                            </div>
                                                        
                                                            <div class="col-lg-12">
                                                                <div class="sp sp-bars"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="about">
                                        <div class="row merged20">
                                            <div class="col-lg-8">

                                                <div class="main-wraper">
                                                    <h5 class="main-title">About user</h5>
                                                    <div class="grp-about">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">

                                                                <p>{{ user.account?.biography }}</p>
                                                                <ul class="badges">
                                                                    <!-- <li><img src="/images/badges/badge2.png" alt=""></li>
                                                                    <li><img src="/images/badges/badge3.png" alt=""></li>
                                                                    <li><img src="/images/badges/badge4.png" alt=""></li>
                                                                    <li><img src="/images/badges/badge5.png" alt=""></li>
                                                                    <li><img src="/images/badges/badge7.png" alt=""></li>
                                                                    <li><img src="/images/badges/badge8.png" alt=""></li> -->
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                               

                                                <div class="main-wraper">
                                                    <h5 class="main-title">Experiences</h5>
                                                    <div class="info-block-list">
                                                        
                                                        <div v-for="experience in user.experiences" class="exp-col">
                                                            <div class="exp-meta">
                                                                <h5> {{ experience.company }}</h5>
                                                                <p>Position: {{ experience.position }}</p>
                                                                <p>Period: {{ experience.start_date }} - {{ experience.end_date ?? 'Present' }}</p>
                                                            </div>
                                                        </div>
                                                
                                                    </div>
                                                </div>


                                                <div class="main-wraper">
                                                    <h5 class="main-title">Certifications</h5>
                                                    <div class="info-block-list">
                                                        
                                                        <div v-for="certification in user.certifications" class="exp-col">
                                                            <div class="exp-meta">
                                                                <h5><i class="icofont-certificate"></i> {{ certification.name }}</h5>
                                                                <p>{{ certification.issuer }} - {{ certification.date }}</p>
                                                                <span>Note</span>
                                                                <ins>{{ certification.note }}</ins>
                                                            </div>
                                                            
                                                        </div>
                                                
                                                    </div>
                                                </div>


                                               

                                               
                                            </div>

                                            <div class="col-lg-4">
                                                <aside class="sidebar static left">

                                                    <div class="main-wraper">
                                                        <h5 class="main-title">Interests</h5>
                                                        <div class="info-block-list">
                                                            <div class="info-block">
                                                                <span class="d" v-for="interest in user.interests"> {{interest.name}}, </span>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>


                                                    <div class="main-wraper">
                                                        <h5 class="main-title">Skills</h5>
                                                        <div class="info-block-list">
                                                            <div class="info-block">
                                                                <span class="d" v-for="skill in user.skills"> {{skill.name}}, </span>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>


                                                    <div class="advertisment-box">
                                                        <h4 class=""><i class="icofont-info-circle"></i> advertisment
                                                        </h4>
                                                        <figure>
                                                            <a href="#" title="Advertisment"><img
                                                                    src="/images/resources/ad-widget2.gif" alt=""></a>
                                                        </figure>
                                                    </div>

                                                </aside>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script lang="ts">
import { ConnectService, UserService } from '~/services';
import { useAuthStore } from '~/store';
export default {

    setup() {
        definePageMeta({
            layout: 'app',
            middleware: ["auth"],
        });
        const { $toast } = useNuxtApp()

        return {
            $toast,
        }
    },

    data() {
        return {
            authUser: {},
            user: {},
            connects: [],
            followings: [],
            followers: [],
            username: this.$route.params.username
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            const script = document.createElement('script')
            script.onload = () => { }
            script.src = '/js/script.js'
            document.head.appendChild(script)

        })
    },

    mounted() {
        this.authUser = useAuthStore().authUser
        this.getUser(this.username)
        this.getUserConnects(this.username)
        this.getUserFollowers(this.username)
        this.getUserFollowings(this.username)
    },

    methods: {

        getUser(username: any) {
            try {
                UserService.getUser(username).then((res) => {
                    this.user = res.data
                }).catch((err) => {
                })
            } catch (error) {
            }
        },


        getUserConnects(username: any) {
            try {
                UserService.getUserConnects(username).then((res) => {
                    this.connects = res.data
                }).catch((err) => {
                })
            } catch (error) {
            }
        },

        getUserFollowings(username: any) {
            try {
                UserService.getUserFollowings(username).then((res) => {
                    this.followings = res.data
                }).catch((err) => {
                })
            } catch (error) {
            }
        },

        getUserFollowers(username: any) {
            try {
                UserService.getUserFollowers(username).then((res) => {
                    this.followers = res.data
                }).catch((err) => {
                })
            } catch (error) {
            }
        },

        followUser(user: any) {
            ConnectService.followUser({
                user_id: user.id
            }).then((res) => {
                this.$toast(res.message);
                
                //  TODO: 3 extra calls are not needed
                this.getUser(this.username)
                this.getUserFollowers(this.username)
                this.getUserFollowings(this.username)


                const { $event } = useNuxtApp()
                $event('connect:follow', {})
            }).catch((err) => { })   
        },
        unFollowUser(user: any) {
            ConnectService.unFollowUser({
                user_id: user.id
            }).then((res) => {
                this.$toast(res.message);
               
                //  TODO: 3 extra calls are not needed
                this.getUser(this.username)
                this.getUserFollowers(this.username)
                this.getUserFollowings(this.username)

                const { $event } = useNuxtApp()
                $event('connect:unfollow', {}) // emit event for follow
            }).catch((err) => { })
        }

    }
}
</script>
  