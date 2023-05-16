<template>
	<section>
		<div class="gap">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div id="page-contents" class="row merged20">

							<div class="col-lg-9">
								<div class="main-wraper">
									<div class="main-title">Blog Posts</div>
									
									<div v-for="post in posts" class="blog-posts my-4">
										<figure><img :src="post.image" alt=""></figure>
										<div class="blog-post-meta ml-5">
											<ul>
												<li><i class="icofont-read-book"></i><a title="Reads" href="#"> {{ post.impressions }} </a></li>
												<li><i class="icofont-comment"></i><a title="comments" href="#">{{ post?.reactions_summary?.comments }}</a></li>
											</ul>

											<h4>{{ post.title }}</h4>
											<p>
												{{ posts.summary }}
											</p>
											<span><i class="icofont-clock-time"></i> {{post.date}}</span>
											<div class="mt-5 float-right w-full">
												<NuxtLink :to=" '/explore/blog/' + post.slug" title="" class="button primary circle">read more</NuxtLink>
											</div>
										</div>
									</div>
									
								</div>
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

<script lang="ts">
import { ContentService } from '~/services';

export default {

    setup() {

		definePageMeta({
			layout: 'app',
			middleware: ["auth"],
		});
       
        return {}
    },

	
    data() {
        return {
            posts: [],
			next_page_number: null,
            next_page_url: null
        }
    },

    beforeCreate() {
        ContentService.getBlogPosts({}).then((res) => {
            this.posts = res.data.data //paginated

			if(res.data.next_page_url) {
                this.next_page_number = res.data.current_page + 1
            }
            this.next_page_url = res.data.next_page_url

            const { $event } = useNuxtApp()
            $event('dom-updated', {})
        }).catch((err) => { })
    },

	mounted(){
        this.scroll()
    },
   

    methods: {

        scroll () {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(Math.ceil(window.pageYOffset), document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
                // let bottomOfWindow = window.innerHeight + Math.ceil(window.pageYOffset) >= document.documentElement.offsetHeight
                if (bottomOfWindow) {
                    if(this.next_page_number && this.next_page_url){
                        console.log("next_page_number", this.next_page_number)
                        this.loadMore()

                    }
                }
            }
        },

        loadMore(){
			let page = this.next_page_number;
            ContentService.getBlogPosts({page}).then((res) => {
                this.posts =  this.posts.concat(res.data.data)  // paginated results
                if(res.data.next_page_url) {
                    this.next_page_number = res.data.current_page + 1
                }
                this.next_page_url = res.data.next_page_url
                const { $event } = useNuxtApp()
                $event('dom-updated', {})
            }).catch((err) => { })
        },
    }

}


</script>

<style scoped>
</style>