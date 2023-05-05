<template>
  <div class="authtication bluesh high-opacity">
		<div class="verticle-center">
			<div class="welcome-note">
				<div class="logo"><img src="/images/logo.png" alt=""><span>Ingenium</span></div>
				<h1>Welcome to Ingenium</h1>
				<p>
					Ingenium Academy is a customer service app that connects trained customer service professionals with HR executives globally.
				</p>
			</div>
			<div class="bg-image" style="background-image: url(/images/resources/login-bg.png)"></div>
		</div>
	</div>
	<div class="auth-login">
		<div class="verticle-center">
			<div class="signup-form">
				<h4><i class="icofont-lock"></i> Sign Up</h4>
				<form method="post" @submit.prevent="registerUser" class="c-form">
					<div class="row merged-10">
						<div class="col-lg-12"><h4>Create an account on Ingenium</h4></div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input v-model="form.firstname" type="text" placeholder="First Name">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input v-model="form.lastname" type="text" placeholder="Last Name">
						</div>
						<div class="col-lg-12 col-sm-12 col-md-12">
							<input v-model="form.email" type="text" placeholder="Email@">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input v-model="form.password" type="password" placeholder="Password">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input v-model="form.password_confirmation" type="password" placeholder="Confirm Password">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input v-model="form.account_type" type="radio" id="student" name="account_type" value="1">
							<label for="hr">HR Professional</label>
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input v-model="form.account_type" type="radio" id="ngo" name="account_type" value="2">
							<label for="cs">Customer Service Professional</label>
						</div>
						
						<div class="col-lg-12">
							<div class="checkbox">
								<input  v-model="form.accept_terms" type="checkbox" id="checkbox" checked>
								<label for="checkbox"><span>I agree the terms of Services and acknowledge the privacy policy</span></label>
								<div>Already have an account?  <NuxtLink to="/auth/signin"> Sign In</NuxtLink></div>

							</div>
							<!-- <div>Already have an account?  <NuxtLink to="/auth/signin"> Sign In</NuxtLink></div> -->

							<button class="main-btn" type="submit"><i class="icofont-key"></i> Sign Up</button>
						</div>

						<div class="col-lg-12">
							<div class="or-container">
								<div class="line-separator"></div>
								<div class="or-label">Sign Up with</div>
								<div class="line-separator"></div>
							</div>
						</div>

						<div class="socialbutton-container col-md-12">
								<a @click.prevent="googleAuth()" class=" btn btn-lg btn-socialauth btn-block text-sm btn-outline"><img style="width: 30px" src="/images/google-48.png">Google</a>
								<a class=" btn btn-lg btn-socialauth btn-block text-sm btn-outline" href="#"><img style="width: 30px" src="/images/facebook-48.png">Facebook</a>
								<a class=" btn btn-lg btn-socialauth btn-block text-sm btn-outline" href="#"><img style="width: 30px" src="/images/linkedin-2-50.png">Linkedin</a>
						</div>

					</div>
				</form>
			</div>
		</div>
	</div>
</template>


<script lang="ts">
	import { useAuthStore } from '~/store/auth';
	import { AuthService } from '~/services';
	import { googleAuthCodeLogin, googleTokenLogin } from "vue3-google-login"
	


	export default {
		setup(){
			const authStore = useAuthStore();
			definePageMeta({
				layout: 'landing',
				middleware: ["guest"],
			})

			const googleAuth = () => {
				googleTokenLogin().then((response) => {
					const payload: SocialAuthPayload = {
						provider: 'google',
						code: response.access_token
					}
					console.log(payload)
					AuthService.socialAuth(payload).then(res =>{
						authStore.setAuthUser(res.data)
						navigateTo('/timeline')
					});
				})
			}
		
			
			return {
				form: {
					email: '',
					password: '',
					password_confirmation: '',
					firstname: '',
					lastname: '',
					account_type: '',
					institute: '',
					department: '',
					accept_terms: true,
				},
				authStore,
				googleAuth
			}
		},

		methods:{
			registerUser() { 
				const { $toast } = useNuxtApp() 
				useState('isBusy').value = true;
				try {
					AuthService.registerUser(this.form).then((res)=>{
						this.authStore.setAuthUser(res.data)
						navigateTo('/auth/verify-email')
						$toast(res.message);
						useState('isBusy').value = false;
					}).catch( (err) =>{
						$toast(err.data.message);
						useState('isBusy').value = false;
					})  
				} catch (error) {
					$toast(error);
					useState('isBusy').value = false;
				}
			}
		}
	}

</script>
  
