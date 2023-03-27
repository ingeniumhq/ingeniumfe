<template>
    <div class="authtication bluesh high-opacity">
        <div class="bg-image" style="background-image: url(/images/resources/login-bg3.jpg)"></div>
        <ul class="welcome-caro">
            <li class="welcome-box">
                <figure><img src="/images/resources/login-1.png" alt=""></figure>
                <h4>Connect</h4>
                <p>
                    Ingenium Academy is a customer service app that connects trained customer service professionals with HR executives globally.
                </p>
            </li>
            <li class="welcome-box">
                <figure><img src="/images/resources/login-2.png" alt=""></figure>
                <h4>Network</h4>
                <p>
                    The app provides a platform for professionals to connect and network with others in the customer service industry
                </p>
            </li>
           

        </ul>
    </div>
    <div class="auth-login">
        <div class="logo"><img src="/images/logo.png" alt=""><span>Ingenium</span></div>
        <div class="mockup left-bottom"><img src="/images/mockup.png" alt=""></div>
        <div class="verticle-center">
            <div class="login-form">
                <h4><i class="icofont-key-hole"></i> Login</h4>
                <form method="post" @submit="loginUser($event)" class="c-form">
                    <input required v-model="form.email" type="text" placeholder="email@domain.com">
                    <input required v-model="form.password" type="password" placeholder="xxxxxxxxxx">
                    <button type="submit" class="main-btn" value="Save Information"  ><i class="icofont-key"></i> Login</button>
                </form>
                <div>Don't have an account?  <NuxtLink to="/auth/signup"> Sign up</NuxtLink></div>

                <div class="col-lg-12">
                <div class="or-container">
                    <div class="line-separator"></div>
                    <div class="or-label">Signin with</div>
                    <div class="line-separator"></div>
                </div>
            </div>

            <div class="socialbutton-container col-md-12">
                    <a  @click="googleAuth" class=" btn btn-lg btn-socialauth btn-block text-sm btn-outline"><img style="width: 30px" src="/images/google-48.png">Google</a>
                    <a @click="signIn" class=" btn btn-lg btn-socialauth btn-block text-sm  btn-outline" href="#"><img style="width: 30px" src="/images/facebook-48.png">Facebook</a>
                    <a class=" btn btn-lg btn-socialauth btn-block text-sm btn-outline" href="#"><img style="width: 30px" src="/images/linkedin-2-50.png">Linkedin</a>
            </div>
                
            </div>
            
        </div>
        <div class="mockup right"><img src="/images/star-shape.png" alt=""></div>
    </div>
</template>
  
  
<script lang="ts">
import { useAuthStore } from '~/store/auth';
import { AuthService } from '~/services';
import { googleAuthCodeLogin, googleTokenLogin } from "vue3-google-login"

// import { initFacebook, login, logout } from '~/services/auth/facebook-auth';




export default {
    // setup(){
    //     const authStore = useAuthStore();
    //     definePageMeta({
    //         layout: 'landing',
    //         middleware: ["guest"],
    //     })

    //     // const googleAuth = () => {
    //     //     googleTokenLogin().then((response) => {
    //     //         const payload: SocialAuthPayload = {
    //     //             provider: 'google',
    //     //             code: response.access_token
    //     //         }
    //     //         console.log(payload)
    //     //         AuthService.socialAuth(payload).then(res =>{
    //     //             authStore.setAuthUser(res.data)
    //     //             navigateTo('/timeline')
    //     //         });
    //     //     })
    //     // }

    //     // async function signIn() {
    //     //     const result = await login();
    //     // }

    //     // nextTick(() => {
    //     //     if (process.client) {
    //     //         useNuxtApp().$toast.info('notify after nextTick');
    //     //     }
    //     // });

    //     // onMounted(async () => {
    //     //     initFacebook('3349779741932998');
    //     // });


    //     // const { $toast } = useNuxtApp()
    //     return {
    //         // form: {
    //         //     email: '',
    //         //     password: '',
    //         // },
    //         // authStore,
    //         // $toast,
    //         // googleAuth,
    //         // signIn
    //     }
    // },

    data(vm) {
        return {
            form: {
                email: '',
                password: '',
            },
        }
    },

    methods:{
        loginUser(event) {  
            event.preventDefault();
            useState('isBusy').value = true;
            try {
                AuthService.loginUser(this.form).then((res)=>{
                    const authStore = useAuthStore();
                    authStore.setAuthUser(res.data)
                    alert(res.data.user.name);
                    // navigateTo('/timeline')
                    // this.$toast(res.message);
                    useState('isBusy').value = false;
                }).catch( (err) =>{
                    // this.$toast(err.data?.message ?? 'An error occured ');
                    console.log(err)
                    useState('isBusy').value = false;
                })  
            } catch (error) {
                // this.$toast(error);
                useState('isBusy').value = false;
            }
        }
    }
}

</script>
  