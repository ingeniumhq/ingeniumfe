<template>
    <section>
        <div class="gap">
            <div class="container">
                <div class="row">
                    <div class="offset-lg-1 col-lg-10">
                        <div class="blog-detail">
                            <div class="blog-title">
                                <h2 style="font-size: 30px;">{{ event.title }}</h2>
                                
                            </div>
                            <div class="blog-details-meta">
                                <!-- <figure><img :src="event.image" alt=""></figure> -->
                                <ul>
                                    <li><i class="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg></i> {{ event.impressions }}</li>
                                    <li><i class="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-calendar">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg></i> {{ formatDate(event.start_date) }} </li>
                                </ul>
                                
                                <div v-html="event.description">

                                </div>
                                <div class="mt-2 float-right w-full">
												<!-- <NuxtLink :to=" '/explore/event/' + event.id" title="" class="button primary circle">read more</NuxtLink> -->
												<a target="_blank" :href="event.link" title="" class="button primary circle">Register / Join Now</a>
											</div>  
                            </div>
                            <div class="next-prev-posts d-none">
                                <div class="prev">
                                    <a href="#" title="">
                                        <i class="icofont-curved-double-left"></i>
                                        <div class="translate">
                                            <span>previous</span>
                                            <p>Quisque et bibendum urna, eget consequat sapien.</p>
                                        </div>
                                </a>
                            </div>
                            <div class="next">
                                
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
import { ContentService } from "~/services";

export default {
    setup() {
        definePageMeta({
            layout: "app",
            middleware: ["auth"],
        });

        return {};
    },

    data() {
        return {
            event: [],
        };
    },

    beforeCreate() {
        ContentService.getSingleEvents(this.$route.params.slug)
            .then((res) => {
                this.event = res.data;
                const { $event } = useNuxtApp();
                $event("dom-updated", {});
            })
            .catch((err) => { });
    },

    methods: {
        formatDate(datestring) {
      const date = new Date(datestring);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    },
    },
    
};
</script>

<style scoped></style>
