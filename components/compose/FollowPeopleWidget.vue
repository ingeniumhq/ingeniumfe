<template>
    <div class="widget">
        <h4 class="widget-title">Follow People <NuxtLink title="" to="/explore" class="see-all">See All</NuxtLink></h4>
        <ul v-if="people" class="invitepage">
            <li v-for="person in people">
                <figure>
                    <img alt="" :src="person.profile_pic">
                    <a href="">{{ person.name }}</a>
                </figure>
                <button @click="followUser(person)" class="sug-like"><i class="invit">Follow</i><i class="icofont-check-alt"></i></button>
            </li>
        </ul>
       
    </div>
</template>

<script lang="ts">
import { ConnectService } from '~/services';

export default {

    setup() {
        // const { $toast } = useNuxtApp()
        return {
            // $toast
        }
    },
    data() {
        return {
            people: [],
        }
    },

    beforeCreate() {
        ConnectService.getSuggestions({ exclude: 'following' }).then((res) => {
            this.people = res.data
        }).catch((err) => { })
    },

    methods: {

        getSuggestions() {
            ConnectService.getSuggestions({ exclude: 'following' }).then((res) => {
                this.people = res.data
                const { $event } = useNuxtApp()
                $event('dom-updated', {})

            }).catch((err) => { })
        },

        followUser(user: any) {
            ConnectService.followUser({
                user_id: user.id
            }).then((res) => {
                // this.$toast(res.message);
                const { $event } = useNuxtApp()
                $event('connect:follow', {})
                this.getSuggestions()
            }).catch((err) => { })
        }
    }


}


</script>