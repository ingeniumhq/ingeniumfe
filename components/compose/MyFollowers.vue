<template>
    <div class="row col-xs-6 merged-10">
        <div class="col-lg-4 col-md-4 col-sm-6" v-for="follower in followers">
            <div class="friendz">
                <figure><img :src="follower.follower?.profile_pic" alt=""></figure>
                <span><a href="#" title="">{{ follower.follower?.name }}</a></span>
                <ins>{{ follower.follower?.headline }}</ins>
                <a @click.prevent="followUser(follower.follower)" href="#" title="" data-ripple=""><i
                        class="icofont-star"></i> Follow</a>
            </div>
        </div>

        <!-- <div class="col-lg-12 empty-state">
            <div class="empty_state mx-auto">
                <div class="sp sp-bars"></div>
                <h3 class="">No content here yet</h3>
                <p>There have been no posts in this section yet</p>
                <a  href="#" class="text-center" title="" data-ripple="">Expand Network</a>
            </div>
        </div> -->
      
    </div>
</template>

<script lang="ts">
import { ConnectService } from '~/services';

export default {

    setup() {
        const { $toast } = useNuxtApp()
        return {
            $toast
        }
    },
    data() {
        return {
            followers: [],
        }
    },

    beforeCreate() {
        ConnectService.getFollowers({}).then((res) => {
            this.followers = res.data
        }).catch((err) => { })
    },

    mounted() {
        const { $listen } = useNuxtApp()
        $listen('connect:follow', (user: any) => {
            this.getFollowers()
        })
    },

    methods: {

        getFollowers() {
            ConnectService.getFollowers({ exclude: 'following' }).then((res) => {
                this.followers = res.data
            }).catch((err) => { })
        },

        followUser(user: any) {
            ConnectService.followUser({
                user_id: user.id
            }).then((res) => {
                this.$toast(res.message);
                this.getFollowers()
            }).catch((err) => { })
        },


    }


}


</script>