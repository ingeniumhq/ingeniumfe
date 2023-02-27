<template>
  <div class="authtication bluesh high-opacity">
		<div class="verticle-center">
			<div class="welcome-note">
				<div class="logo"><img src="/images/logo.png" alt=""><span>Ingenium</span></div>
				<h1>Welcome to Ingenium</h1>
				<p>
					Ingenium Academy is a customer service app that connects trained customer service professionals with HR executives.
				</p>
			</div>
			<div class="bg-image" style="background-image: url(/images/resources/login-bg.png)"></div>
		</div>
	</div>
	<div class="auth-login">
		<div class="verticle-center">
			<div class="signup-form">
				<h4><i class="icofont-lock"></i> Singup</h4>
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
							<input v-model="form.account_type" type="radio" id="ngo" name="acdamic" value="2">
							<label for="cs">Customer Service Professional</label>
						</div>
						<!-- <div class="col-lg-6 col-sm-6 col-md-6">
							<input type="radio" id="medical" name="acdamic" value="medical">
							<label for="medical">Medical</label>
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="radio" id="other" name="acdamic" value="other">
							<label for="other">Not a Rsearcher</label>
						</div> -->
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input v-model="form.institute" type="text" placeholder="Institute, Company">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input v-model="form.department" type="text" placeholder="Department">
						</div>
						<!-- <div class="col-lg-12">
							<input type="text" placeholder="Your Position">
						</div> -->
						<!-- <div class="col-lg-12">
							<div class="gender">
							  <input type="radio" id="male" name="gender" value="male">
							  <label for="male">Male</label>
							  <input type="radio" id="female" name="gender" value="female">
							  <label for="female">Female</label>
							</div>	
						</div>
						 -->
						<div class="col-lg-12">
							<div class="checkbox">
								<input  v-model="form.accept_terms" type="checkbox" id="checkbox" checked>
								<label for="checkbox"><span>I agree the terms of Services and acknowledge the privacy policy</span></label>
							</div>
							<button class="main-btn" type="submit"><i class="icofont-key"></i> Signup</button>
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



	export default {
		setup(){
			const authStore = useAuthStore();
			definePageMeta({
				layout: 'landing',
				middleware: ["guest"],
			})
		
			const { $toast } = useNuxtApp()
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
				$toast
			}
		},

		methods:{
			registerUser() {  
				useState('isBusy').value = true;
				try {
					AuthService.registerUser(this.form).then((res)=>{
						this.authStore.setAuthUser(res.data)
						navigateTo('/auth/verify-email')
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
  
