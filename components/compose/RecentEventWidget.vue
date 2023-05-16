<template>

    <h4 class="widget-title">Recent Events <NuxtLink class="see-all" to="/explore/events" title="">See All</NuxtLink></h4>
    <ul v-if="events.length > 0" class="recent-links">

        <li v-for="event in events" class="my-3">
            <figure><img alt="" :src="event.image"></figure>
            <div class="re-links-meta">
                <h6><NuxtLink :to=" '/explore/blog/' + event.slug "  href="#">{{ event.title }}</NuxtLink></h6>
                <span>{{ event.date }}</span>
               
                <div style="max-height: 100px; overflow-y: hidden;" v-html="event.description">
                </div>
                <div class="mt-3 ">
                    <a  style=" border-radius: 10px; padding: 3px 10px; border: thin solid rgb(103, 100, 100)" :href="event.link">See More</a>
                </div>
            </div>
        </li>
       
    </ul>

</template>

<script lang="ts">
import { ContentService } from '~/services';

export default {

    setup() {
       
        return {}
    },
    data() {
        return {
            events: [],
        }
    },

    beforeCreate() {
        ContentService.getEvents({paginate: 5}).then((res) => {
            this.events = res.data.data
            const { $event } = useNuxtApp()
            $event('dom-updated', {})
        }).catch((err) => { })
    },

    methods: {

       
    }

}


</script>

<style scoped>
.friend-meta > h4 {
    width: auto;
}
</style>