<template>
    <div class="post-new-popup">
				<div class="popup" style="width: 800px;">
					<span class="popup-closed"><i class="icofont-close"></i></span>
					<div class="popup-meta">
						<div class="popup-head">
							<h5>Create New Post</h5>
						</div>
						<div class="post-new">
							<div class="post-newmetxa">
								<form @submit.prevent="storePost()" enctype="application/x-www-form-urlencoded" method="post" class="c-form" style="width: 100%">
								<textarea ref="contentarea" id="emojionearea1" placeholder="What's On Your Mind?"></textarea>
								
									<select v-model="newpost.visibility" class="custom-select my-5" required  name="visibility" id="visibility">
										<option  class="select-box__option" value="" >Choose visibility</option>
										<option  class="select-box__option"  value="Public">Public</option>
										<!-- <option class="select-box__option" value="Network">Network</option> -->
									</select>   
								
								<div class="fallback">
									<input @change="onFileChange($event)"  name="file" type="file" multiple />
								</div>
							

								<button type="submit" class="main-btn">Publish</button>
							</form>

							<p v-if="postadded" class="text-center text-success text-lg">New post created and awaiting admin moderation</p>	

							</div>
							
						</div>
					</div>
				</div>
			</div>
</template>

<script lang="ts">
import {ContentService } from '~/services';
// import 'jquery-textcomplete';


export default {
    props: ['username'],
    setup() {

    },
    data() {
        return {
            newpost: {
				content: "",
				visibility: ""
			},
			files: [],
			postadded: false
        }
    },

    

    methods: {

		onFileChange(e) {
			const files = e.target.files;
			this.files = files
		},
       
        storePost() {
			this.newpost.content = document.getElementById('newpostcontentarea')?.innerHTML
            ContentService.storePost(this.newpost, this.files).then((res) => {
				this.newpost = {
					content: "",
					visibility: ""
				}
				document.getElementById('newpostcontentarea').innerHTML = ""
                const { $event } = useNuxtApp()
            	$event('newpostadded', {})

				const { $toast } = useNuxtApp()
				$toast('New post awaiting admin moderation');
				this.postadded = true

				window.setTimeout(() => {
					this.postadded = false
				}, 4000)
				
            }).catch((err) => {
                console.log(err)
				
            })

        }

    }

}


</script>