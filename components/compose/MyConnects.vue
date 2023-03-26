<template>
    <div class="row col-xs-6 merged-10">
        <div class="col-lg-4 col-md-4 col-sm-6" v-for="connect in connects">
            <div class="friendz">
                <figure><img src="/images/resources/no-user-image.jpg" alt=""></figure>
                <span><a href="#" title="">{{ connect.user.name }}</a></span>
                <ins>{{ connect.user.headline }}</ins>
                <a  href="#" title="" data-ripple="">View Profile</a>
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
        <!-- <div class="col-lg-12">
            <div class="load mb-4">
                <ul class="pagination uk-pagination">
                    <li><a title="" href="#" class="active"><i class="icofont-arrow-left"></i></a></li>
                    <li><a title="" href="#"><i class="icofont-arrow-right"></i></a></li>
                </ul>
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
            connects: [],
        }
    },

    beforeCreate() {
        ConnectService.getConnects({}).then((res) => {
            this.connects = res.data
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
                this.connects = res.data
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