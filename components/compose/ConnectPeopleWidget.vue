<template>
    <div class="widget stick-widget ">
        <h4 class="widget-title">Expand your network</h4>
        <ul class="followers">
            <li v-for="person in people">
                <figure><img alt="" src="/images/resources/friend-avatar.jpg"></figure>
                <div class="friend-meta">
                    <h4>
                        <a title="" href="time-line.html">{{ person.name }}</a>
                        <!-- <span>Dept colleague</span> -->
                    </h4>
                    <a @click.prevent="sendConnectRequest(person)" class="underline" title="" href="#">Connect</a>
                </div>
            </li>
           
        </ul>
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
        ConnectService.getSuggestions({exclude: 'connected'}).then((res) => {
            this.people = res.data
            const script = document.createElement('script')
            script.onload = () => { }
            script.src = '/js/script.js'
            document.body.appendChild(script)
        }).catch((err) => { })
    },

    methods: {

        getSuggestions() {
            ConnectService.getSuggestions({exclude: 'connected'}).then((res) => {
                this.people = res.data
                //    this.$refs.suggessted.$el.classList.add('suggested-caro')
                this.$refs['suggessted'].classList.add('suggested-caro')

                const script = document.createElement('script')
                script.onload = () => { }
                script.src = '/js/script.js'
                document.body.appendChild(script)
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