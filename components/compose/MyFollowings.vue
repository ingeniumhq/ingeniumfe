<template>
    <div class="row col-xs-6 merged-10">
        <div class="col-lg-4 col-md-4 col-sm-6" v-for="following in followings">
            <div class="friendz">
                <figure><img :src="following.followee?.profile_pic" alt=""></figure>
                <span><NuxtLink :to="'/usr/' + following.followee?.username" title="">{{ following.followee?.name }}</NuxtLink></span>
                <ins>{{ following.followee?.headline }}</ins>
                <a @click.prevent="unFollowUser(following.followee)" href="#" title="" data-ripple=""><i
                        class="icofont-star"></i> Unfollow</a>
            </div>
        </div>

        <div class="col-lg-12">
            <!-- <div class="sp sp-bars"></div> -->
        </div>

        <div class="col-lg-12">
           
        </div>
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
            followings: [],
        }
    },

    beforeCreate() {
        ConnectService.getFollowings({}).then((res) => {
            this.followings = res.data
        }).catch((err) => { })
    },

    mounted() {
        const { $listen } = useNuxtApp()
        $listen('connect:follow', (user: any) => {
            this.getFollowings()
        })

        $listen('connect:unfollow', (user: any) => {
            this.getFollowings()
        })
    },

    methods: {

        getFollowings() {
            ConnectService.getFollowings({}).then((res) => {
                this.followings = res.data
            }).catch((err) => { })
        },

        unFollowUser(user: any) {
            ConnectService.unFollowUser({
                user_id: user.id
            }).then((res) => {
                this.$toast(res.message);
                const { $event } = useNuxtApp()
                $event('connect:unfollow', {}) // emit event for follow
            }).catch((err) => { })
        }
    }


}


</script>