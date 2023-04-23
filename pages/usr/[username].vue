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

                                                <!-- user timeline -->
                                                <ComposeTimeline></ComposeTimeline>
                                                
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
  