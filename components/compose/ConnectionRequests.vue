<template>

        <h4 class="widget-title">Connection Requests</h4>
        <ul class="followers">
            <li v-for="person in people">
                <figure><img alt="" :src="person.user?.profile_pic"></figure>
                <div class="friend-meta">
                    <h4>
                        <a title="" href="">{{ person.user?.name }}</a>
                    </h4>
                    <a v-if="auth.authUser.id !==  person.from_user_id"  @click.prevent="acceptConnectRequest(person)" class="underline mx-1" title="" href="#">Accept</a>
                    <a v-if="auth.authUser.id !==  person.from_user_id"  @click.prevent="declineConnectRequest(person)" class="underline mx-1" title="" href="#">Decline</a>
                    <a  v-if="auth.authUser.id ==  person.from_user_id" @click.prevent="sendConnectRequest(person)" class="underline mx-1" title="" href="#">Cancel</a>
                </div>
            </li>
           
        </ul>

</template>

<script lang="ts">
import { ConnectService } from '~/services';
import { useAuthStore } from '~/store';

export default {

    setup() {
        const { $toast } = useNuxtApp()
        const auth = useAuthStore()
        return {
            $toast,
            auth
        }
    },
    data() {
        return {
            people: [],
        }
    },

    beforeCreate() {
        ConnectService.getConnects({status: 'pending'}).then((res) => {
            this.people = res.data.data
            console.log(this.people)
        }).catch((err) => { })
    },

    methods: {

        getConnects() {
            ConnectService.getConnects({status: 'pending'}).then((res) => {
                this.people = res.data.data
            }).catch((err) => { })
        },

        sendConnectRequest(user: any) {
            ConnectService.sendConnectRequest({
                user_id: user.id
            }).then((res) => {
                this.$toast(res.message);
                this.getConnects()
            }).catch((err) => { })
        },

        acceptConnectRequest(connect: any) {
            ConnectService.acceptConnectRequest({
                connect_id: connect.id,
            }).then((res) => {
                this.$toast(res.message);
                this.getConnects()
            }).catch((err) => { })
        },

        declineConnectRequest(connect: any) {
            ConnectService.declineConnectRequest({
                connect_id: connect.id
            }).then((res) => {
                this.$toast(res.message);
                this.getConnects()
            }).catch((err) => { })
        }
    }

}


</script>

<style scoped>
.friend-meta > h4 {
    width: auto;
}
</style>