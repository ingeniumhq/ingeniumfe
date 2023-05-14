<template>
    <div class="row">
        <div v-for="event in events" class="col-lg-4 col-md-4 col-sm-6">
            <div class="event-post mb-3">
                <figure>
                    <a href="#" title=""><img :src="event.image" alt="" /></a>
                </figure>
                <div class="event-meta">
                    <span>{{ event.start_date }}</span>
                    <h6><NuxtLink :to="event.url" :title="event.title">{{ event.title }}</NuxtLink></h6>
                    <div v-html="event.description"></div>
                    <p>{{ event.type?.toUpperCase() }}</p>
                    <a class="classic-btn" target="_blank" blank :href="event.link" >Browse</a>
                    <!-- <div class="more">
                        <div class="more-post-optns">
                            <i class="">
                                <svg class="feather feather-more-horizontal" stroke-linejoin="round" stroke-linecap="round"
                                    stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24"
                                    width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle r="1" cy="12" cx="12"></circle>
                                    <circle r="1" cy="12" cx="19"></circle>
                                    <circle r="1" cy="12" cx="5"></circle>
                                </svg></i>
                            <ul>
                                <li>
                                    <i class="icofont-share-alt"></i>Share to Feed
                                    <span>Share This Post to Friends</span>
                                </li>
                                <li>
                                    <i class="icofont-ui-text-chat"></i>Send Message
                                    <span>Send This in messages, groups</span>
                                </li>
                                <li>
                                    <i class="icofont-ui-delete"></i>Delete Post
                                    <span>If inappropriate Post By Mistake</span>
                                </li>
                                <li>
                                    <i class="icofont-flag"></i>Report
                                    <span>Inappropriate content</span>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ContentService } from "~/services";

export default {
    setup() {
        const { $toast } = useNuxtApp();
        return {
            $toast,
        };
    },
    
    data() {
        return {
            events: [],
        };
    },

    beforeCreate() {
        ContentService.getEvents()
            .then((res) => {
                this.events = res.data;
            })
            .catch((err) => { });
    },

    methods: {},
};
</script>

<style scoped>
.action_btn {
    border: 1px solid #184391;
    padding: 4px 6px;
    border-radius: 10px;
    margin: 2px 3px;
}

.members>a {
    background: none;
    border-radius: 5px;
    color: inherit;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    padding: 5px 0;
    width: 100%;
    border: 1px solid transparent;
    transition: all 0.2s linear 0s;
}
</style>
