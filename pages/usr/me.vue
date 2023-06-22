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
									<li><a title="" href="#" data-toggle="tooltip"
											data-original-title="Invite Colleagues"><i class="icofont-id-card"></i></a>
									</li>
									<li><a title="" href="#" data-toggle="tooltip" data-original-title="Follow"><i
												class="icofont-star"></i></a> </li>
									<li><a title="" href="#" data-toggle="tooltip" data-original-title="Share"><i
												class="icofont-share-alt"></i></a> </li>
								</ul>
								<a data-ripple="" title="" href="#" class="invite">Invite Colleagues<span
										class="ripple"><span class="ink"
											style="height: 138px; width: 138px; background-color: rgb(217, 217, 217); top: -48.3047px; left: -17.9844px;"></span></span></a>
							</div>

							<ul class="nav nav-tabs post-detail-btn">
								<li class="nav-item"><a class="active" href="#timeline" data-toggle="tab">Timeline</a></li>
								<li class="nav-item"><a class="" href="#connects" data-toggle="tab">Connects</a><span>{{
									me.analytics?.connects_count }}</span></li>
								<!-- <li class="nav-item"><a class="" href="#followers" data-toggle="tab">Followers</a><span>{{ me.analytics?.followers_count }}</span></li> -->
								<li class="nav-item"><a class="" href="#follow" data-toggle="tab">Followings</a><span>{{
									me.analytics?.followings_count }}</span></li>
								<li class="nav-item"><a class="" href="#about" data-toggle="tab">About</a></li>
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


				<div class="tab-content">

					<div class="tab-pane fade active show" id="timeline">
						<div class="row merged20">
							<div class="col-lg-8">
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

									<div class="advertisment-box">
										<h4 class=""><i class="icofont-info-circle"></i> Pending Timeline Posts</h4>
										<div v-for="content in pendingPosts" class="main-wraper">
											<div class="user-post">
												<div class="friend-info">
													<figure>
														<img alt="" :src="content.user.profile_pic">

													</figure>
													<div class="friend-name">
														<div class="more">
															<div class="more-post-optns">
																<i class="">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24"
																		height="24" viewBox="0 0 24 24" fill="none"
																		stroke="currentColor" stroke-width="2"
																		stroke-linecap="round" stroke-linejoin="round"
																		class="feather feather-more-horizontal">
																		<circle cx="12" cy="12" r="1"></circle>
																		<circle cx="19" cy="12" r="1"></circle>
																		<circle cx="5" cy="12" r="1"></circle>
																	</svg></i>
																<ul>
																	
																	<li>
																		<i class="icofont-trash"></i>Delete
																	</li>
																</ul>
															</div>
														</div>
														<ins>
															<NuxtLink title="" :to="'/usr/'.content?.user?.username">{{
																content?.user?.name }}</NuxtLink>
															<img class="userbadge-ico" alt="" :src="content.user.badge">
														</ins>
														<span><i class="icofont-globe"></i> published: {{ content.date
														}}</span>
													</div>
													<div class="post-meta">
														<a href="#" class="post-title">{{ content.title }}</a>
														<div class="mb-4" style="max-height: 200px; overflow-y: hidden;"
															v-html="content.content"></div>
													</div>
												</div>
											</div>
										</div>
									</div>



								</aside>
							</div>

						</div>
					</div>


					<div class="tab-pane fade" id="connects">
						<div class="row merged20">
							<div class="col-lg-8">
								<div class="main-wraper">
									<ComposeMyConnects></ComposeMyConnects>
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
					
					<div class="tab-pane row fade" id="follow">
						<div class=" row merged20">
							<div class="col-lg-8">
								<div class="main-wraper">
									<ComposeMyFollowings></ComposeMyFollowings>
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
					<!-- followings  have merged followings and followers together-->


					<div class="tab-pane row fade" id="about">
						<div class="row merged20">
							<div class="col-lg-8">
								<div class="main-wraper">
									<h5 class="main-title">About user</h5>
									<div class="grp-about">
										<div class="row">
											<div class="col-lg-12 col-md-12">

												<p>{{ me.account?.biography }}</p>
												<ul class="badges">
													<p>{{ me.badge }}</p>
													<!-- <li><img src="/images/badges/badge2.png" alt=""></li>
																<li><img src="/images/badges/badge3.png" alt=""></li>
																<li><img src="/images/badges/badge4.png" alt=""></li>
																<li><img src="/images/badges/badge5.png" alt=""></li>
																<li><img src="/images/badges/badge7.png" alt=""></li>
																<li><img src="/images/badges/badge8.png" alt=""></li> -->
												</ul>
											</div>

										</div>
									</div>
								</div>


								<div class="main-wraper">
									<h5 class="main-title">Experiences</h5>
									<div class="info-block-list">

										<div v-for="experience in me.experiences" class="exp-col">
											<div class="exp-meta">
												<h5> {{ experience.company }}</h5>
												<p>Position: {{ experience.position }}</p>
												<p>Period: {{ experience.start_date }} - {{ experience.end_date ?? 'Present'
												}}</p>
											</div>
										</div>

									</div>
								</div>


								<div class="main-wraper">
									<h5 class="main-title">Certifications</h5>
									<div class="info-block-list">

										<div v-for="certification in me.certifications" class="exp-col">
											<div class="exp-meta">
												<h5><i class="icofont-certificate"></i> {{ certification.name }}</h5>
												<p>{{ certification.issuer }} - {{ certification.date }}</p>
												<span>Note</span>
												<ins>{{ certification.note }}</ins>
											</div>

										</div>

									</div>
								</div>
							</div>

							<div class="col-lg-4">
								<aside class="sidebar static left">
									<div class="main-wraper">
										<h5 class="main-title">Interests</h5>
										<div class="info-block-list">
											<div class="info-block">
												<span class="d" v-for="interest in me.interests"> {{ interest.name }}, </span>
											</div>

										</div>
									</div>


									<div class="main-wraper">
										<h5 class="main-title">Skills</h5>
										<div class="info-block-list">
											<div class="info-block">
												<span class="d" v-for="skill in me.skills"> {{ skill.name }}, </span>
											</div>

										</div>
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
import { ContentService, UserService } from '~/services';
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
			pendingPosts: [],
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
		this.getPendingPost()
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

		getPendingPost() {
			try {
				ContentService.getDraftTimeline().then((res) => {
					this.pendingPosts = res.data
				}).catch((err) => {
				})
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
  