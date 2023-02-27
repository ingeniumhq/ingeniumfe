<template>
   <div class="theme-layout gray-bg">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-lg-8">
                    <div class="forget-password">
                        <figure class="logo"><img src="/images/logo.png" alt=""><span>Ingenium</span></figure>
                        <div class="pass-form">
                            <h4>Reset password</h4>
                            <form method="post" @submit.prevent="resetPassword">
                                <label><i class="icofont-envelope"></i></label>
                                <input v-model="form.code" type="text" placeholder="Verification Code">
                                <input v-model="form.email" type="text" placeholder="Email Address">
                                <input v-model="form.password" type="password" placeholder="New Password">
                                <input v-model="form.password_confirmation" type="text" placeholder="New Password Confirmation">
                                <button class="main-btn" type="submit">Reset Password</button>
                            </form>
                            <span>Go Back To <NuxtLink to="/auth/signin"> Sign In</NuxtLink></span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <figure class="bottom-mockup"><img alt="" src="/images/footer.png"></figure>
        <div class="bottombar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <span class="">&copy; Copyright All rights reserved by Socimo 2020</span>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
  
  
<script lang="ts">
import { useAuthStore } from '~/store';
import { AuthService } from '~/services';



export default {
    setup(){
        const authStore = useAuthStore();
        const { $toast } = useNuxtApp()

       
        definePageMeta({
            layout: 'landing',
            middleware: ["guest"],
        })
           
        return {
            form: {
                email: '',
                code: '',
                password: '',
                password_confirmation: '',
            },
            authStore,
            $toast,
        }
    },

    methods:{
        resetPassword() {  
            useState('isBusy').value = true;
            try {
                AuthService.resetPassword(this.form).then((res)=>{
                    this.$toast(res.message);
                    setTimeout(() => {
                        useState('isBusy').value = false;
                        navigateTo('/auth/signin') // reset-password 
                    }, 2000);
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
  