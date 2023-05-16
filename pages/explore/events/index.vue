<template>
	<section>
		<div class="gap">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div id="page-contents" class="row merged20">

							<div class="col-lg-9">
								<div class="main-wraper">
									<div class="main-title">All Events</div>
									
									<div v-for="event in events" class="blog-posts my-4">
										<figure><img :src="event.image" alt=""></figure>
										<div class="blog-post-meta ml-5">
											<h4>{{ event.title }}</h4>
											
											<div style="max-height: 600px; overflow-y: hidden;" v-html="event.description"></div>
											
											<p><i class="icofont-clock-time"></i> <b>Start Date: </b> {{event.start_date}}</p>
											<p><i class="icofont-clock-time"></i><b> End Date: </b> {{event.end_date}}</p>

										
											<div class="mt-2 float-right w-full">
												<!-- <NuxtLink :to=" '/explore/event/' + event.id" title="" class="button primary circle">read more</NuxtLink> -->
												<a target="_blank" :href="event.link" title="" class="button primary circle">Open Link</a>
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
            events: [],
        }
    },

    beforeCreate() {
        ContentService.getEvents({paginate: 30}).then((res) => {
            this.events = res.data.data //paginated
            const { $event } = useNuxtApp()
            $event('dom-updated', {})
        }).catch((err) => { })
    },

    methods: {

       
    }

}


</script>

<style scoped>
</style>