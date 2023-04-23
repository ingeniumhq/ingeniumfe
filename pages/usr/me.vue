<template>
	<div class="gap no-gap">
		<div class="top-area mate-black low-opacity">
			<div class="bg-image" style="background-image: url(/images/resources/linkedinheaders-desktop.jpg)"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="post-subject">
							<div class="university-tag">
								<figure><img :src="authUser.profile_pic" alt=""></figure>
								<div class="uni-name">
									<h4>{{ authUser.name }}</h4>
									<img class="userbadge-ico" alt="" :src="authUser.badge">
									<span>@{{ authUser.headline }}</span>
								</div>
								<ul class="sharing-options">
									<li><a title="" href="#" data-toggle="tooltip" data-original-title="Invite Colleagues"><i class="icofont-id-card"></i></a> </li>
									<li><a title="" href="#" data-toggle="tooltip" data-original-title="Follow"><i class="icofont-star"></i></a> </li>
									<li><a title="" href="#" data-toggle="tooltip" data-original-title="Share"><i class="icofont-share-alt"></i></a> </li>
								</ul>
								<a data-ripple="" title="" href="#" class="invite">Invite Colleagues<span class="ripple"><span class="ink" style="height: 138px; width: 138px; background-color: rgb(217, 217, 217); top: -48.3047px; left: -17.9844px;"></span></span></a>
							</div>

							<ul class="nav nav-tabs post-detail-btn">
								 <li class="nav-item"><a class="active" href="#timeline" data-toggle="tab">Timeline</a></li>
								 <li class="nav-item"><a class="" href="#connects" data-toggle="tab">Connects</a><span>{{ me.analytics?.connects_count }}</span></li>
								 <li class="nav-item"><a class="" href="#followers" data-toggle="tab">Followers</a><span>{{ me.analytics?.followers_count }}</span></li>
								 <li class="nav-item"><a class="" href="#follow" data-toggle="tab">Followings</a><span>{{ me.analytics?.followings_count }}</span></li>
								<!-- <li class="nav-item"><a class="" href="#about" data-toggle="tab">Profile</a></li> -->
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
							<div class="col-lg-8">
								
								<div class="tab-content">
								    <div class="tab-pane fade active show" id="timeline">
										<div class="main-wraper">
											<span class="new-title">Create New Post</span>
											<div class="new-post">
												<form method="post">
													<i class="icofont-pen-alt-1"></i>
													<input type="text" placeholder="Create New Post">
												</form>
												<ul class="upload-media">
													<li>
														<i><img src="/images/image.png" alt=""></i>
														<span>Photo/Video</span>
													</li>
													<li>
														<i><img src="/images/activity.png" alt=""></i>
														<span>Feeling/Activity</span>
													</li>
													
												</ul>
											</div>
										</div><!-- create new post -->

										<ComposeTimeline></ComposeTimeline>
									</div>


									<div class="tab-pane fade" id="connects">
										<div class="main-wraper">
											<ComposeMyConnects></ComposeMyConnects>
										</div>
									</div>
									<!-- connects -->

								  	<div class="tab-pane fade" id="followers">
										<div class="main-wraper">
											<ComposeMyFollowers></ComposeMyFollowers>
										</div>
									</div>
									<!-- followers -->


								  	<div class="tab-pane fade" id="follow">
										<div class="main-wraper">
											<ComposeMyFollowings></ComposeMyFollowings>
										</div>
									</div>
									<!-- followings -->


								  	<div class="tab-pane fade" id="about">
										<div class="main-wraper">
											<h3 class="main-title">About Engin</h3>
											<div class="lang">
												<h6>Languages</h6>
												<span>English, Turkish</span>
											</div>
											
											<div class="dis-n-exp">
												<h6>Discipliens</h6>
												<span>educational leadership</span>
												<span>educational assesment</span>
												<span>educational management</span>
												<span>Social Psychology</span>
												<span>organizational Psychology</span>
												<span>Qualitative social research</span>
												<span>Qualitative Psychology</span>
											</div>
											<div class="dis-n-exp">
												<h6>Skills &amp; Experties </h6>
												<span>educational leadership</span>
												<span>educational assesment</span>
												<span>educational management</span>
												<span>Social Psychology</span>
												<span>organizational Psychology</span>
												<span>Qualitative social research</span>
												<span>Qualitative Psychology</span>
											</div>
										</div>
										<div class="main-wraper">
											<h3 class="main-title">Professional Experience</h3>
											<div class="exp-col">
												<div class="exp-meta">
													<h5><i class="icofont-university"></i> Oxford university</h5>
													<p>Sep-2012 Sep-2013</p>
													<span>Position</span>
													<ins>Professor Associate</ins>
												</div>
												<img src="/images/resources/uni1.jpg" alt="">
											</div>
											<div class="exp-col">
												<div class="exp-meta">
													<h5><i class="icofont-university"></i> university of cambridge</h5>
													<p>Sep-2012 Sep-2013</p>
													<span>Position</span>
													<ins>Professor Associate</ins>
												</div>
												<img src="/images/resources/uni3.jpg" alt="">
											</div>
											<div class="exp-col">
												<div class="exp-meta">
													<h5><i class="icofont-university"></i> university of cambridge</h5>
													<p>Sep-2012 Sep-2013</p>
													<span>Position</span>
													<ins>Professor Associate</ins>
												</div>
												<img src="/images/resources/uni4.jpg" alt="">
											</div>
										</div>
										<div class="main-wraper">
											<h3 class="main-title">Researches Image &amp; PDF</h3>
											<div class="row merged-10">
												<div class="col-lg-4">
													<figure class="research-avatar">
														<a class="uk-inline" href="/images/resources/image1.jpg" data-fancybox="">
															<img src="/images/resources/image1.jpg" alt="">
														</a>
													</figure>
												</div>
												<div class="col-lg-4">
													<figure class="research-avatar">
														<a class="uk-inline" href="/images/resources/image1.jpg" data-fancybox="">
															<img src="/images/resources/image2.jpg" alt="">
														</a>
													</figure>
												</div>
												<div class="col-lg-4">
													<figure class="research-avatar">
														<a class="uk-inline" href="/images/resources/image1.jpg" data-fancybox="">
															<img src="/images/resources/image3.jpg" alt="">
														</a>
													</figure>
												</div>
												<div class="col-lg-4">
													<figure class="research-avatar">
														<a class="uk-inline" href="/images/resources/image1.jpg" data-fancybox="">
															<img src="/images/resources/image4.jpg" alt="">
														</a>
													</figure>
												</div>
												<div class="col-lg-4">
													<figure class="research-avatar">
														<a class="uk-inline" href="/images/resources/image1.jpg" data-fancybox="">
															<img src="/images/resources/image5.jpg" alt="">
														</a>
													</figure>
												</div>
												<div class="col-lg-4">
													<figure class="research-avatar">
														<a class="uk-inline" href="/images/resources/image1.jpg" data-fancybox="">
															<img src="/images/resources/image6.jpg" alt="">
														</a>
													</figure>
												</div>
											</div>
										</div>
										
									</div>
								</div>
								
								

							</div>
							<div class="col-lg-4">
								<aside class="sidebar static right">
									<div class="widget">
										<h4 class="widget-title">Profile Analytics</h4>
										<ul class="widget-analytics">
											<li>Followers <span>{{ me.analytics?.followers_count }}</span></li> 
											<li>Connects <span>{{ me.analytics?.connects_count }}</span></li>
											<li>Profile Views <span>{{ me.analytics?.impressions_count ?? 0 }}</span></li>
										</ul>
									</div>
									<div class="widget">
										<div class="ask-question">
											<h6>Grow your audience.</h6>
											<NuxtLink to="/explore" class="ask-qst" title="">Explore</NuxtLink>
										</div>
									</div>

									<div class="widget" style="max-height: 400px; overflow-y: scroll;">
										<!-- expand network - connect matches widget -->
										<ComposeConnectionRequests></ComposeConnectionRequests>
										<!-- expand network - connect matches widget -->
									</div>
									
									
								</aside>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { matchesPattern } from '@babel/types';
import { UserService } from '~/services';
import { useAuthStore } from '~/store';
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
			authUser: {},
			me: {},
		}
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			const { $event } = useNuxtApp()
            $event('dom-updated', {})

		})
	},

	mounted() {
		this.authUser = useAuthStore().authUser
		console.log(this.authUser)
		this.getMe()
	},

	methods: {

		getMe() {
			try {
				UserService.getMe().then((res) => {
					this.me = res.data
				}).catch((err) => {
				})
			} catch (error) {
			}
		},

		refreshComponent(){
			this.key =  Math.random().toString()
			const { $event } = useNuxtApp()
			$event('connect:follow', {})
		}
	}
}
</script>
  