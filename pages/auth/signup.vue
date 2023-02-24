<template>
  <div class="authtication bluesh high-opacity">
		<div class="verticle-center">
			<div class="welcome-note">
				<div class="logo"><img src="/images/logo.png" alt=""><span>Socimo</span></div>
				<h1>Welcome to Socimo</h1>
				<p>
					Socimo is a one and only plateform for the researcheres, students, and Acdamic people. Every one can join this plateform free and share his ideas and research with seniors and juniours comments and openions. 
				</p>
			</div>
			<div class="bg-image" style="background-image: url(/images/resources/login-bg.png)"></div>
		</div>
	</div>
	<div class="auth-login">
		<div class="verticle-center">
			<div class="signup-form">
				<h4><i class="icofont-lock"></i> Singup</h4>
				<form method="post" class="c-form">
					<div class="row merged-10">
						<div class="col-lg-12"><h4>What type of researcher are you?</h4></div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="text" placeholder="First Name">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="text" placeholder="Last Name">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="text" placeholder="Email@">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="password" placeholder="Password">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="radio" id="student" name="acdamic" value="student">
							<label for="student">Academic Or Student</label>
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="radio" id="ngo" name="acdamic" value="ngo">
							<label for="ngo">Corporate, Govt, Or NGO Person</label>
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="radio" id="medical" name="acdamic" value="medical">
							<label for="medical">Medical</label>
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="radio" id="other" name="acdamic" value="other">
							<label for="other">Not a Rsearcher</label>
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="text" placeholder="Institute, Company">
						</div>
						<div class="col-lg-6 col-sm-6 col-md-6">
							<input type="text" placeholder="Department">
						</div>
						<div class="col-lg-12">
							<input type="text" placeholder="Your Position">
						</div>
						<div class="col-lg-12">
							<div class="gender">
							  <input type="radio" id="male" name="gender" value="male">
							  <label for="male">Male</label>
							  <input type="radio" id="female" name="gender" value="female">
							  <label for="female">Female</label>
							</div>	
						</div>
						
						<div class="col-lg-12">
							<div class="checkbox">
								<input type="checkbox" id="checkbox" checked>
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


<script setup>
import { useSampleStore } from '~/store/sample';

const Store = useSampleStore();


function changeSampleStoreData(testString) {
  Store.setSampleData(testString);
}

definePageMeta({
  layout: 'landing',
  middleware: ["guest"],
})

</script>
