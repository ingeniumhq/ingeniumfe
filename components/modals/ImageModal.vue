<template>
	<div v-if="post && post?.recent_comments" class="modal post-modal show fade" id="img-comt" aria-modal="true" style="display: block; padding-left: 0px; overflow-y: scroll;">
		<div class="modal-dialog">
			<div class="modal-content" style="width: 70%; right: 0; position: fixed;">

				<!-- Modal Header -->
				<div class="modal-header">
					<button @click="closePostContent()" type="button" class="close close-post-btn" data-dismiss="modal">×</button>
				</div>

				<!-- Modal body -->
				<div class="modal-body">
					<div class="row merged">
						<div class="col-lg-9" style="max-height:95vh; overflow-y: scroll;">
							<div class="pop-image">
								<div class="pop-item">
									
									<!-- <figure><img src="/images/resources/blog-detail.jpg" alt=""></figure> -->
									<div v-html="post?.content"></div>
									<div >
										<img v-for="media in post.media" :src="media.url" alt="">
									</div>
									
								</div>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="commentbar">
								<div class="user">
									<figure><img :src="post?.user?.profile_pic" class="w-10" alt=""></figure>
									<div class="user-information">
										<h4><a href="#" title="">{{ post?.user?.name }}</a></h4>
										<span>{{ post?.date }}</span>
									</div>
									<a href="#" title="Follow" data-ripple="">Follow</a>
								</div>
								<div class="we-video-info mb-5">
									<ul>
										<li @click.prevent="postReaction(post, 'like')" style="cursor: pointer">
											<span title="Comments" class="liked"  >
												<i>
													<img v-if="post?.own_reactions?.like" alt="" class="w-5" src="/images/smiles/thumb.png">
													<img v-else alt="" class="w-5"  src="/images/smiles/unlike.png">
												</i>
												<ins>{{ post?.reactions_summary?.likes }}</ins>
											</span>
										</li>
										<li>
											<span title="Comments" class="comment">
												<i>
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
														class="feather feather-message-square">
														<path
															d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
														</path>
													</svg></i>
												<ins>{{ post?.reactions_summary?.comments }}</ins>
											</span>
										</li>
									</ul>
									
								</div>

								<div class="new-comment" style="display: block;">
									<form @submit.prevent="postComment(post)" method="post">
										<input type="text" v-model="newcomment.comment" placeholder="write comment">
										<button type="submit"><i class="icofont-paper-plane"></i></button>
                           			 </form>
									<div class="comments-area ps-container ps-theme-default"
										data-ps-id="964a6feb-636c-6f80-d043-326f70f1af40">
										<ul>

											

											<li v-for="comment in post?.recent_comments">
												<figure><img alt="" :src="comment?.user?.profile_pic"></figure>
												<div class="commenter">
													<h5><a title="" href="#">{{ comment.user.name }}</a></h5>
													<span>{{ comment.date }}</span>
													<p>
														{{ comment.comment }}
													</p>
												</div>
											</li>


											
									</ul>
									<div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
										<div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
									</div>
									<div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px;">
										<div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script lang="ts">
import { ContentService } from '~/services';

export default {

	props: {
		isOpenPostId: {
			default: null
		}
	},
	setup() {
		// const { $toast } = useNuxtApp()
		return {
			// $toast
		}
	},
	data() {
		return {
			post: [],
			newcomment: {}
		}
	},

	mounted() {
		const { $event } = useNuxtApp()
		$event('dom-updated', {})

		// close post modal
		$(".close-post-btn").on("click", function () {
			$(".post-modal").removeClass("show");
			$(".post-modal").hide();
		});


		ContentService.getSingleTimelinePost(this.isOpenPostId).then((res) => {
            this.post = res.data
			
            const { $event } = useNuxtApp()
            $event('dom-updated', {})
        }).catch((err) => { })

		

	},

	methods: {
		postReaction(post: any, reactionType: any) {
            ContentService.postReaction(post.id, reactionType).then((res) => {
                this.post = res.data
            }).catch((err) => {
                console.log(err)
            })
        },

		postComment(post: any) {
            ContentService.postComment(post.id, this.newcomment).then((res) => {
                this.post = res.data
                this.newcomment = {}

            }).catch((err) => {
                console.log(err)
            })
        },

		closePostContent(){
			$(".close-post-btn").on("click", function () {
				$(".post-modal").removeClass("show");
				$(".post-modal").hide();
			});
		}
	}
}


</script>