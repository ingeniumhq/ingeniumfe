<template>
    <h4 class="main-title">Members <span>( {{ people.length }} )</span> <a href="#" title=""></a></h4>
    <div class="row col-xs-6 merged-10">
        <div class="col-lg-3 col-md-3 col-sm-6" v-for="person in people">
            <div class="members">
                <figure><img alt="" src="/images/resources/no-user-image.jpg"></figure>
                <span>{{ person.name }}</span>
                <ins>{{person.headline ?? 'Customer Support | Tesla'}}</ins>
                <a @click.prevent="followUser(person)" data-ripple="" title="" href="#"><i class="icofont-star"></i> Follow</a>
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
        }
    }
}


</script>