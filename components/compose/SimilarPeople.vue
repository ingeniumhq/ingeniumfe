<template>
    <div class="main-wraper">
        <div class="user-post">
            <div class="friend-info">
                <figure>
                    <i class="icofont-learn"></i>
                </figure>
                <div class="friend-name">
                    <ins><a title="" href="time-line.html">Suggested</a></ins>
                    <span><i class="icofont-runner-alt-1"></i> Follow similar People</span>
                </div>
                <ul ref="suggessted" class="suggested-carso">
                    <!-- suggested-caro -->
                    <li v-for="person in people">
                        <figure><img src="/images/resources/speak-3.jpg" alt=""></figure>
                        <span>{{ person.name }}</span>
                        <!-- <ins>Department of Socilolgy</ins> -->
                        <a @click.prevent="followUser(person)" href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ConnectService } from '~/services';
    
	export default {

        setup(){
            const { $toast } = useNuxtApp()
            return{
                $toast
            }
        },
        data() {
            return {
                people: [],
            }
        },
        
        beforeCreate() {
            ConnectService.getSuggestions({exclude: 'following'}).then((res) => {
                this.people = res.data
                    //    this.$refs.suggessted.$el.classList.add('suggested-caro')
                    this.$refs['suggessted'].classList.add('suggested-caro')

                    const script = document.createElement('script')
                    script.onload = () => {}
                    script.src = '/js/script.js'
                    document.body.appendChild(script)
            }).catch((err) => { })   
        },

        methods: {

            getSuggestions(){
                ConnectService.getSuggestions({exclude: 'following'}).then((res) => {
                this.people = res.data
                    //    this.$refs.suggessted.$el.classList.add('suggested-caro')
                    this.$refs['suggessted'].classList.add('suggested-caro')

                    const script = document.createElement('script')
                    script.onload = () => {}
                    script.src = '/js/script.js'
                    document.body.appendChild(script)
                }).catch((err) => { })    
            },

            followUser(user: any) {
                ConnectService.followUser({
                    user_id: user.id
                }).then((res) => {
                    this.$toast(res.message);
                    this.getSuggestions()
                }).catch((err) => { })   
            }
        }

       
}


</script>