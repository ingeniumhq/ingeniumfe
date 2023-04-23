<template>
	<section>
		<div class="gap no-gap bluesh high-opacity">
			<div style="background-image: url(/images/resources/top-bg.jpg)" class="bg-image"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="post-subject">
							<h1>Account Settings</h1>
							<p> Choose your accounts options and privacy. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="gap">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 mb-4">
						<nav class="responsive-tab">
							<ul class="nav nav-tabs uk-list">
								<li class="nav-item"><a class="active" href="#account" data-toggle="tab">Account</a></li>
								<!-- <li class="nav-item"><a class="" href="#notification" data-toggle="tab">Notification</a></li> -->
								<!-- <li class="nav-item"><a class="" href="#privacy" data-toggle="tab">Privacy</a></li> -->
								<!-- <li class="nav-item"><a class="" href="#billing" data-toggle="tab">Billing and Payout</a></li> -->
								<!-- <li class="nav-item"><a class="" href="#api" data-toggle="tab">API Clients</a></li> -->

								<li class="nav-item"><a class="" href="#experience" data-toggle="tab">Experience</a></li>
								<li class="nav-item"><a class="" href="#certifications" data-toggle="tab">Certifications</a>
								</li>
								<li class="nav-item"><a class="" href="#skills" data-toggle="tab">Skills/Interests</a></li>
								<!-- <li class="nav-item"><a class="" href="#billing" data-toggle="tab">Portfolio</a></li> -->

								<li class="nav-item"><a class="" href="#close" data-toggle="tab">Close Account</a></li>
							</ul>
						</nav>
					</div>
					<div class="col-lg-9">
						<div class="main-wraper">
							<div class="tab-content" id="components-nav">
								<!-- settings -->
								<div class="tab-pane active fade show" id="account">
									<div class="uk-width">
										<div class="setting-card">
											<h2>Account Settings</h2>
											<p class="mb-4">This is your public presence on Ingenium.</p>
											<h6>Basic Profile</h6>
											
											<form method="POST" enctype="multipart/form-data"  @submit.prevent="uploadMedia()">
												
												<div class="row">
													<div class="mb-4 col-md-6">
														<p>Upload profile picture</p>
														<input ref="file"  @change="onFileChange($event)" class="uk-input" type="file">
													</div>
													<div class="col-md-6">
														<img style="height: 70px; border-radius: 10px;" class="figure mb-1" :src="user_account.profile_pic" alt="">
														<button type="submit" class="button secondary  block">Upload</button>
													</div>
												</div>
												
											</form>

											<form @submit.prevent="updateAccount()">
												<fieldset class="row merged-10">
													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.firstname"
															name="firstname" type="text" placeholder="First Name">
													</div>
													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.lastname"
															name="lastname" type="text" placeholder="Last Name">
													</div>

													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.phone1" name="phone1"
															type="text" placeholder="Phone Number">
													</div>

													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.phone2" name="phone2"
															type="text" placeholder="Phone Number">
													</div>


													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.city" name="city"
															type="text" placeholder="City">
													</div>

													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.state" name="state"
															type="text" placeholder="State">
													</div>

													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.country"
															name="country" type="text" placeholder="Country">
													</div>

													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.address_line1"
															name="address_line1" type="text" placeholder="Address Line 1">
													</div>

													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.address_line2"
															name="address_line2" type="text" placeholder="Address Line 2">
													</div>

													<div class="mb-4 col-lg-6">
														<input class="uk-input" v-model="user_account.designation"
															name="designation" type="text" placeholder="Your Designation">
														<em>Add a professional headline like, "Engineer" or
															"Architect."</em>
													</div>
													<div class="mb-4 col-lg-12">
														<textarea class="uk-textarea" v-model="user_account.biography"
															name="biography" rows="4" placeholder="Textarea"></textarea>
													</div>
													<h6 class="mb-4">Social Profile Links</h6>
													<div class="mb-4">
														<div class="social-links">
															<span>http://facebook.com/</span>
															<input type="text" v-model="user_account.facebook"
																name="facebook" placeholder="Facebook Profile">
															<em>Add your Facebook username (e.g. johndoe).</em>
														</div>
													</div>
													<div class="mb-4">
														<div class="social-links">
															<span>http://twitter.com/</span>
															<input type="text" v-model="user_account.twitter" name="twitter"
																placeholder="Twitter Profile">
															<em>Add your Facebook username (e.g. johndoe).</em>
														</div>
													</div>
													<div class="mb-4">
														<div class="social-links">
															<span>http://www.instagram.com/</span>
															<input type="text" v-model="user_account.instagram"
																name="instagram" placeholder="Instagramm Profile">
															<em>Add your Facebook username (e.g. johndoe).</em>
														</div>
													</div>
													<div class="mb-4">
														<div class="social-links">
															<span>http://www.linkedin.com/a/</span>
															<input type="text" v-model="user_account.linkedin"
																name="linkedin" placeholder="Linkedin Profile">
															<em>Add your Facebook username (e.g. johndoe).</em>
														</div>
													</div>
													<div class="mb-0 col-lg-12">
														<button type="submit" class="button primary circle">Save
															Changes</button>
													</div>
												</fieldset>
											</form>


											
										</div>
									</div>
								</div>

								<!-- Experience  -->
								<div class="tab-pane fade" id="experience">

									<h3 class="main-title">Professional Experience</h3>
									<p class="mb-4">Update your professional experience here</p>

									<div class="main-wraper mt-4">
										<!-- <p class="mb-4">Update your professional experience here</p> -->


										<div v-for="experience in experiences" class="exp-col">
											<div class="exp-meta">
												<h5><i class="icofont-university"></i> {{ experience.company }}</h5>
												<p>{{ experience.start_date }} - {{ experience.end_date }}</p>
												<span>Position</span>
												<ins>{{ experience.position }}</ins>
											</div>
											<a @click.prevent="deleteExperience(experience)" href="#">Delete</a>
										</div>

									</div>

									<div class="uk-width">
										<div class="setting-card">

											<div class="set-address">
												<div class="payment-methods mt-4">
													<div class="light-bg pd-20">

														<div class="tab-content">
															<!-- tab 1 -->
															<div class="tab-pane active fade show" id="visa">
																<div class="credit-card billing">
																	<h6><i class="icofont-check-circled"></i> Add New</h6>
																	
																	<form @submit.prevent="saveExperience()">
																		<div class="row merged20">
																			<div class="col-lg-6 mb-4">
																				<input class="uk-input"
																					v-model="new_experience.company"
																					type="text" placeholder="Company"
																					required>
																			</div>

																			<div class="col-lg-6 mb-4">
																				<input class="uk-input"
																					v-model="new_experience.position"
																					type="text" placeholder="Position"
																					required>
																			</div>

																			<div class="col-lg-12 mb-4">
																				<textarea class="uk-textarea"
																					v-model="new_experience.description"
																					name="description" id="description"
																					cols="30" rows="10"
																					placeholder="Description"
																					required></textarea>
																			</div>



																			<div class="col-lg-6">
																				<input class="uk-input"
																					v-model="new_experience.start_date"
																					type="date" placeholder="Start Date"
																					required>
																			</div>

																			<div class="col-lg-6">
																				<input class="uk-input"
																					v-model="new_experience.end_date"
																					type="date" placeholder="End Date">
																			</div>

																			<div class="col-lg-12 mt-4">
																				<label class="mr-4"
																					for="is_present">Currently working here
																					?</label>
																				<input type="checkbox"
																					v-model="new_experience.is_present"
																					name="is_present" id="is_present">

																			</div>

																			<div class="mt-4">
																				<button
																					class="button primary circle">Save</button>
																			</div>
																		</div>
																	</form>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>


										</div>
									</div>

								</div>

								<!-- Certifications  -->
								<div class="tab-pane fade" id="certifications">

									<h3 class="main-title">Professional Certifications</h3>
									<p class="mb-4">Update your professional certifications here</p>
									<div class="main-wraper mt-4">
										<div v-for="certification in certifications" class="exp-col">
											<div class="exp-meta">
												<h5><i class="icofont-certificate"></i> {{ certification.name }}</h5>
												<p>{{ certification.issuer }} - {{ certification.date }}</p>
												<span>Note</span>
												<ins>{{ certification.note }}</ins>
											</div>
											<a @click.prevent="deleteCertificate(certification)" href="#">Delete</a>
										</div>

									</div>

									<div class="uk-width">
										<div class="setting-card">

											<div class="set-address">
												<div class="payment-methods mt-4">
													<div class="light-bg pd-20">

														<div class="tab-content">
															<!-- tab 1 -->
															<div class="tab-pane active fade show" id="visa">
																<div class="credit-card billing">
																	<h6><i class="icofont-check-circled"></i> Add New</h6>
																	
																	<form @submit.prevent="saveCertification()">
																		<div class="row merged20">

																			<div class="col-lg-6 mb-4">
																				<input class="uk-input"
																					v-model="new_certification.name"
																					type="text" placeholder="Name" required>
																			</div>

																			<div class="col-lg-6 mb-4">
																				<input class="uk-input"
																					v-model="new_certification.issuer"
																					type="text" placeholder="Issuer"
																					required>
																			</div>

																			<div class="col-lg-6 mb-4">
																				<input class="uk-input"
																					v-model="new_certification.link"
																					type="text" placeholder="Link" required>
																			</div>

																			<div class="col-lg-6 mb-4">
																				<input class="uk-input"
																					v-model="new_certification.reference"
																					type="text" placeholder="Reference">
																			</div>

																			<div class="col-lg-6 mb-4">
																				<input class="uk-input"
																					v-model="new_certification.date"
																					type="date" placeholder="Date">
																			</div>


																			<div class="col-lg-12 mb-4">
																				<textarea class="uk-textarea"
																					v-model="new_certification.note"
																					name="note" id="note" cols="30"
																					rows="10" placeholder="Note"
																					required></textarea>
																			</div>


																			<div class="mt-4">
																				<button
																					class="button primary circle">Save</button>
																			</div>
																		</div>
																	</form>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>


										</div>
									</div>

								</div>


								<!-- Skills and Interest -->
								<div class="tab-pane fade" id="skills">
									<div class="uk-width">
										<div class="main-wraper">
											<h3 class="main-title">Skills &amp; Interests</h3>
											<!-- <div class="lang">
												<h6>Languages</h6>
												<span>English, Turkish</span>
											</div> -->

											<div class="dis-n-exp">
												<h6>Interests</h6>
												<span v-for="interest in interests">
													{{ interest.name }}
													<button @click="deleteInterest(interest)" class="ml-2" title="Save" style="border: none; background: none; border-radius: 10px; margin: auto; color: gray;">
														<i class="icofont-trash icon-label"></i>
													</button>
												</span>
												
												<span>
													<form @submit.prevent="saveInterest()" class="d-flex">
														<input class="uk-input" v-model="new_interest.name" type="text"
															placeholder="New Interest" required
															style="border: none; border-radius: 50px; padding: 1px;">
														<button type="submit" class="ml-2" title="Save"
															style="border: none; background: #098dcd; border-radius: 10px; margin: auto; color: white;">
															<i class="icofont-plus icon-label"></i>
														</button>
													</form>
												</span>
											</div>
											<div class="dis-n-exp">
												<h6>Skills &amp; Experties </h6>
												<span v-for="skill in skills">
													{{ skill.name }}
													<button @click="deleteSkill(skill)" class="ml-2" title="Save" style="border: none; background: none; border-radius: 10px; margin: auto; color: gray;">
														<i class="icofont-trash icon-label"></i>
													</button>
												</span>
												<span>
													<form @submit.prevent="saveSkill()" class="d-flex">
														<input class="uk-input" v-model="new_skill.name" type="text"
															placeholder="New Skill" required
															style="border: none; border-radius: 50px; padding: 1px;">
														<button type="submit" class="ml-2" title="Save"
															style="border: none; background: #098dcd; border-radius: 10px; margin: auto; color: white;">
															<i class="icofont-plus icon-label"></i>
														</button>
													</form>
												</span>
											</div>
										</div>
									</div>
								</div>


								<!-- Close Account  -->
								<div class="tab-pane fade" id="close">
									<div class="del-account">
										<h2>Close Account</h2>
										<p class="mb-4"><b>Warning:</b> If you close your account, you will be unsubscribed
											from all your followers and friends, and will lose access forever.</p>
										<form method="post">
											<div class="row">
												<div class="mb-4 col-lg-6">
													<input class="uk-input" type="text" placeholder="Enter Your Password">
												</div>
												<div class="mb-0 col-lg-6">
													<a href="#" class="button danger icon-label circle"><i
															class="icofont-trash"></i> Delete Account</a>
												</div>
											</div>
										</form>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { UserService } from '~/services';
import { useAuthStore } from '~/store';
export default {

	setup() {
		definePageMeta({
			layout: 'app',
			middleware: ["auth"],
		});
		const { $toast } = useNuxtApp()
		const {authUser, setAuthUser} = useAuthStore()
		return {
			$toast,
			authUser,
			setAuthUser,
		}
	},

	data() {
		return {
			user_account: {},
			experiences: [],
			new_experience: { is_present: 0, },
			certifications: [],
			new_certification: {},
			interests: [],
			new_interest: {},
			skills: [],
			new_skill: {},
			file: '',
			selectedFiles: ''


		}
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			const { $event } = useNuxtApp()
            $event('dom-updated', {})

		})
	},

	mounted() {
		this.getMe()
	},

	methods: {
		onFileChange(e) {
			const file = e.target.files[0];
			this.file = file
			this.user_account.profile_pic = URL.createObjectURL(file);
		},

		uploadMedia(){
			UserService.uploadMedia(this.file ).then((res) => {
				this.$toast(res.message);
				this.getMe()
			}).catch((err) => {
				this.$toast(err.data.message);
				useState('isBusy').value = false;
			})
		},
		updateAccount() {
			useState('isBusy').value = true;
			try {
				this.user_account.experiences = this.experiences
				this.user_account.certifications = this.certifications
				this.user_account.interests = this.interests
				this.user_account.skills = this.skills

				UserService.updateAccount(this.user_account).then((res) => {
					this.$toast(res.message);
					this.getMe()
				}).catch((err) => {
					this.$toast(err.data.message);
					useState('isBusy').value = false;
				})
			} catch (error) {
				this.$toast(error);
				useState('isBusy').value = false;
			}
		},

		saveExperience() {
			const experience = this.new_experience
			this.experiences.push(experience)
			this.new_experience = {}
			this.updateAccount()
		},

		deleteExperience(experience: any) {
			UserService.deleteExperience(experience.id).then((res) => {
				this.experiences.splice(this.experiences.indexOf(experience), 1)
				this.$toast(res.message);
			})
		},

		saveCertification() {
			this.certifications.push(this.new_certification)
			this.new_certification = {}
			this.updateAccount()
		},

		deleteCertificate(certification: any) {
			UserService.deleteCertificate(certification.id).then((res) => {
				this.certifications.splice(this.certifications.indexOf(certification), 1)
				this.$toast(res.message);
			})
		},
		

		saveInterest() {
			const interest = this.new_interest
			this.interests.push(interest)
			this.new_interest = {}
			this.updateAccount()
		},

		deleteInterest(interest: any) {
			UserService.deleteInterest(interest.id).then((res) => {
				this.interests.splice(this.interests.indexOf(interest), 1)
				this.$toast(res.message);
			})
		},


		saveSkill() {
			const skill = this.new_skill
			this.skills.push(skill)
			this.new_skill = {}
			this.updateAccount()
		},

		deleteSkill(interest: any) {
			UserService.deleteInterest(interest.id).then((res) => {
				this.interests.splice(this.interests.indexOf(interest), 1)
				this.$toast(res.message);
			})
		},



		getMe() {
			try {
				UserService.getMe(this.user_account).then((res) => {
					this.user_account = res.data
					this.experiences = res.data.experiences ?? []
					this.certifications = res.data.certifications ?? []
					this.interests = res.data.interests ?? []
					this.skills = res.data.skills ?? []
					this.authUser.profile_pic = res.data.profile_pic ?? []
					// console.log(res)
				}).catch((err) => {
				})
			} catch (error) {
			}
		},

		
	}
}
</script>
  