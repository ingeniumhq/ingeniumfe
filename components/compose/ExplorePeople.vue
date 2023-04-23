<template>
    <h4 class="main-title">Members <span>( {{ people.length }} )</span> <a href="#" title=""></a></h4>
    <div class="row col-xs-6 merged-10">
        <div class="col-lg-3 col-md-3 col-sm-6" v-for="person in people">
            <NuxtLink :to=" '/usr/' + person.username  " class="members">
                <figure><img alt="" :src="person.profile_pic"></figure>
                <span>{{ person.name }}</span>
                <img class="userbadge-ico" :src="person.badge" alt="">
                <ins>{{ person.headline }}</ins>
                <div>
                    <a @click.prevent="followUser(person)" class="action_btn" data-ripple="" title="" href="#"> Follow</a>
                    <a @click.prevent="sendConnectRequest(person)" class="action_btn" data-ripple="" title="" href="#"> Connect</a>
                </div>
            </NuxtLink>
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
            people: [],
        }
    },

    beforeCreate() {
        ConnectService.getSuggestions({ }).then((res) => {
            this.people = res.data
        }).catch((err) => { })
    },

    methods: {

        getSuggestions() {
            ConnectService.getSuggestions({  }).then((res) => {
                this.people = res.data
            }).catch((err) => { })
        },

        followUser(user: any) {
            ConnectService.followUser({
                user_id: user.id
            }).then((res) => {
                this.$toast(res.message);
                const { $event } = useNuxtApp()
                $event('connect:follow', {})
                this.getSuggestions()
            }).catch((err) => { })
        },

        sendConnectRequest(user: any) {
            ConnectService.sendConnectRequest({
                user_id: user.id
            }).then((res) => {
                this.$toast(res.message);
                this.getSuggestions()
            }).catch((err) => { })
        }
    }
}


</script>

<style scoped>
.action_btn {
    border: 1px solid #184391;
    padding: 4px 6px;
    border-radius: 10px;
    margin: 2px 3px;
}

.members > a {
    background: none;
    border-radius: 5px;
    color: inherit;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    padding: 5px 0;
    width: 100%;
    border: 1px solid transparent;
    transition: all 0.2s linear 0s;
}

</style>