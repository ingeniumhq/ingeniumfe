<template>
	<div class="gap no-gap">
		<div class="top-area mate-black low-opacity">
			<div class="bg-image" style="background-image: url(/images/resources/linkedinheaders-desktop.jpg)"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="post-subject">
							<div class="university-tag">
								<div class="uni-name">
									<h4>Expand your network</h4>
									<span>Connect and grow your audience</span>
								</div>

								<a data-ripple="" title="" href="#" class="invite">Invite Colleagues<span
										class="ripple"><span class="ink"
											style="height: 138px; width: 138px; background-color: rgb(217, 217, 217); "></span></span></a>
							</div>

							<ul class="nav nav-tabs post-detail-btn">
								<li class="nav-item"><a class="active" href="#people" data-toggle="tab">People</a></li>
								<li class="nav-item"><a class="" href="#groups" data-toggle="tab">Groups</a></li>
								<li class="nav-item"><a class="" href="#events" data-toggle="tab">Events</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- top-head -->

	<section>
		<div class="gap">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div id="page-contents" class="row merged20" style="position: relative;">
							<div class="col-lg-12">
								<div class="tab-content">

									<div class="tab-pane fade active show" id="people">
										<div class="main-wraper">
											<ComposeExplorePeople></ComposeExplorePeople>
										</div>
									</div>
									<!-- people -->


									<div class="tab-pane fade " id="groups">
										<div class="main-wraper">
											<h4 class="main-title"><i class=""><svg class="feather feather-users"
														stroke-linejoin="round" stroke-linecap="round" stroke-width="2"
														stroke="currentColor" fill="none" viewBox="0 0 24 24" height="18"
														width="18" xmlns="http://www.w3.org/2000/svg">
														<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
														<circle r="4" cy="7" cx="9"></circle>
														<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
														<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
													</svg></i> Groups</h4>

											<div class="row col-xs-6" v-for="i in 10">
												<div class="col-lg-3 col-md-4 col-sm-4">
													<div class="group-box">
														<figure><img alt="" src="/images/resources/group1.png"></figure>
														<a title="" href="#">Skill Buildup</a>
														<span>125M Members</span>
														<button>join group</button>
													</div>
												</div>
												<div class="col-lg-3 col-md-4 col-sm-4">
													<div class="group-box">
														<figure><img src="/images/resources/group2.png" alt=""></figure>
														<a href="#" title="">IMC Resource Group</a>
														<span>12k Members</span>
														<button>join group</button>
													</div>
												</div>
												<div class="col-lg-3 col-md-4 col-sm-4">
													<div class="group-box">
														<figure><img src="/images/resources/group3.png" alt=""></figure>
														<a href="#" title="">Exams Prep</a>
														<span>125M Members</span>
														<button>join group</button>
													</div>
												</div>
												<div class="col-lg-3 col-md-4 col-sm-4">
													<div class="group-box">
														<figure><img src="/images/resources/group4.png" alt=""></figure>
														<a href="#" title="">General Space</a>
														<span>1M Members</span>
														<button>join group</button>
													</div>
												</div>


											</div>

											<div class="col-lg-12">
												<div class="load mb-4">
													<ul class="pagination">
														<li><a title="" href="#"><i class="icofont-arrow-left"></i></a></li>
														<li><a title="" href="#" class="active">1</a></li>
														<li><a title="" href="#">2</a></li>
														<li><a title="" href="#">3</a></li>

														<li>....</li>
														<li><a title="" href="#">5</a></li>
														<li><a title="" href="#"><i class="icofont-arrow-right"></i></a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<!-- groups -->


									<div class="tab-pane fade" id="events">
											<div class="main-wraper">
												<div class="main-title">Events</div>
												<ComposeEvents></ComposeEvents>
											</div>
									</div>
									<!-- events -->

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
export default {

	setup() {
		definePageMeta({
			layout: 'app',
			middleware: ["auth"],
		});
		const { $toast } = useNuxtApp()
		return {
			$toast,
		}
	},

	data() {
		return {
			key: Math.random().toString(),
		}
	},
	  
	mounted() {
		this.getMe()
	},

	methods: {

		getMe() {
			try {
				// UserService.getMe().then((res) => {
				// 	console.log(res)
				// }).catch((err) => {
				// })
			} catch (error) {
			}
		},

		refreshComponent() {
			this.key = Math.random().toString()
			const { $event } = useNuxtApp()
			$event('connect:follow', {})
		}
	}
}
</script>
  