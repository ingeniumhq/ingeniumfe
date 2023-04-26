<template>
   
			
	<section>
		<div class="gap">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div id="page-contents" class="row merged20">
							<div class="col-lg-3">
								<TimelineLeftSidebar></TimelineLeftSidebar>
							</div>
							<div class="col-lg-6">
								<!-- <ul class="filtr-tabs">
									<li><a class="active" href="#" title="">Home</a></li>
									<li><a href="#" title="">Recent</a></li>
									<li><a href="#" title="">Favourit</a></li>
								</ul> -->
								<!-- tab buttons -->
								<div class="main-wraper">
									<span class="new-title">Create New Post</span>
									<div class="new-post">
										<form method="post">
											<i class="icofont-pen-alt-1"></i>
											<input type="text" placeholder="Create New Post">
										</form>
										<ul class="upload-media">
											<li>
												<a href="#" title="">
													<i><img src="/images/image.png" alt=""></i>
													<span>Photo/Video</span>
												</a>	
											</li>
											<li>
												<a href="#" title="">
													<i><img src="/images/activity.png" alt=""></i>
													<span>Feeling/Activity</span>
												</a>	
											</li>
											
										</ul>
									</div>
								</div><!-- create new post -->
								
																	
						
								
								<ComposeTimeline></ComposeTimeline>
								<!-- share audio post -->
								
								
								
								<div class="loadmore">
									<!-- <div class="sp sp-bars"></div> -->
									<!-- <a href="#" title="" data-ripple="">Load More..</a> -->
								</div>
								<!-- loadmore buttons -->
							</div>
							<div class="col-lg-3">
								<TimelineRightSidebar></TimelineRightSidebar>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- content -->
			
			
</template>
  
  
<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

	onMounted(() => {
		// 
	});

	definePageMeta({
		layout: 'app',
		middleware: ["auth"],
	});

</script>


<script lang="ts">
	export default {
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				const script = document.createElement('script')
				script.onload = () => {}
				script.src = '/js/script.js'
				document.body.appendChild(script)
			})
		},

		mounted() {
			const script = document.createElement('script')
			script.onload = () => {}
			script.src = '/js/script.js'
			document.body.appendChild(script)
		},
	}
</script>
  