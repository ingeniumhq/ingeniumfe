<template>
    <div class="row col-xs-6 merged-10">
        <div class="col-lg-4 col-md-4 col-sm-6" v-for="connect in connects">
            <div class="friendz">
                <figure><img src="/images/resources/no-user-image.jpg" alt=""></figure>
                <span><a href="#" title="">{{ connect.user.name }}</a></span>
                <ins>{{ connect.user?.headline }}</ins>
                <a  href="#" title="" data-ripple="">View Profile</a>
            </div>
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
            connects: [],
        }
    },

    beforeCreate() {
        ConnectService.getConnects({status: 'active'}).then((res) => {
            this.connects = res.data.data
        }).catch((err) => { })
    },

    mounted() {
        const { $listen } = useNuxtApp()
        $listen('connect:follow', (user: any) => {
            this.getConnects()
        })
    },

    methods: {

        getConnects() {
            ConnectService.getConnects({status: 'active'}).then((res) => {
                this.connects = res.data.data
            }).catch((err) => { })
        },

        blockConnect(user: any) {
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