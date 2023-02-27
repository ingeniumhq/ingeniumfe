<template>
    <div class="authtication bluesh high-opacity">
        <div class="bg-image" style="background-image: url(/images/resources/login-bg3.jpg)"></div>
        <ul class="welcome-caro">
            <li class="welcome-box">
                <figure><img src="/images/resources/login-1.png" alt=""></figure>
                <h4>Ask questions with seniors Researchers</h4>
                <p>
                    Ask questions and get the experienced answer by researchers and others fellows.
                </p>
            </li>
            <li class="welcome-box">
                <figure><img src="/images/resources/login-2.png" alt=""></figure>
                <h4>Find New Researchers or Friends</h4>
                <p>
                    Join Socimo and make your network of university or college fellows.
                </p>
            </li>
            <li class="welcome-box">
                <figure><img src="/images/resources/login-3.png" alt=""></figure>
                <h4>Sell Your Online paid Content</h4>
                <p>
                    Sell your online lectures, videos, books and many more with Socimo.
                </p>
            </li>

        </ul>
    </div>
    <div class="auth-login">
        <div class="logo"><img src="/images/logo.png" alt=""><span>Socimo</span></div>
        <div class="mockup left-bottom"><img src="/images/mockup.png" alt=""></div>
        <div class="verticle-center">
            <div class="login-form">
                <h4><i class="icofont-key-hole"></i> Login</h4>
                <form method="post" @submit.prevent="loginUser()" class="c-form">
                    <input required v-model="form.email" type="text" placeholder="User Name @">
                    <input required v-model="form.password" type="password" placeholder="xxxxxxxxxx">
                    <button class="main-btn" type="submit" ><i class="icofont-key"></i> Login</button>
                </form>
                <span>Don't have an account?  <NuxtLink to="/auth/signup"> Sign up</NuxtLink></span>
            </div>
        </div>
        <div class="mockup right"><img src="/images/star-shape.png" alt=""></div>
    </div>
</template>
  
  
<script lang="ts">
import { useAuthStore } from '~/store/auth';
import { AuthService } from '~/services';



export default {
    setup(){
        const authStore = useAuthStore();
        definePageMeta({
            layout: 'landing',
            middleware: ["guest"],
        })
        // nextTick(() => {
        //     if (process.client) {
        //         useNuxtApp().$toast.info('notify after nextTick');
        //     }
        // });
        const { $toast } = useNuxtApp()
        return {
            form: {
                email: '',
                password: '',
            },
            authStore,
            $toast
        }
    },

    methods:{
        loginUser() {  
            useState('isBusy').value = true;
            try {
                AuthService.loginUser(this.form).then((res)=>{
                    this.authStore.setAuthUser(res.data)
                    navigateTo('/timeline')
                    this.$toast(res.message);
                    useState('isBusy').value = false;
                }).catch( (err) =>{
                    this.$toast(err.data.message);
                    useState('isBusy').value = false;
                })  
            } catch (error) {
                this.$toast(error);
                useState('isBusy').value = false;
            }
        }
    }
}

</script>
  