<template>
  <section>
    <div class="text-black w-full bg-white h-full">
      <div class="h-[185px] inset-x-0 w-full relative">
        <img
          src="/images/resources/linkedinheaders-desktop.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
        <span
          class="absolute w-full h-full inset-0 bg-[#172554] bg-opacity-70"
        ></span>
        <button
          @click="togglePost"
          v-if="accountType === 1"
          class="
            absolute
            border-2
            bottom-4
            text-[#172554]
            right-5
            border-[#172554]
            w-fit
            px-3
            py-2
            rounded-3xl
            bg-white
            flex
            items-center
            justify-center
          "
        >
          <span>Post Job</span>
        </button>
        <NuxtLink to="/advert/myjobs">
          <div v-if="accountType === 2" class="absolute bottom-0  sm:text-sm left-[20px] sm:left-[43px] text-white">
            <div v-if="currentPath === '/advert/myjobs'" class="relative bg-white p-1 text-[#184391] rounded-t-md font-semibold">
              My Applications
              <span class="active-border-right"></span>
              <span class="active-border-left"></span>
            </div>
            <div v-else  class=" p-1 text-white font-medium">
                My applications
            </div>
        </div>
        </NuxtLink>
       

      </div>

     
      <JobadvertJobPosting :togglePost="togglePost" :isPost="isPost" />
      <JobadvertAllJobs :data="availableJobs" :isLoading="isLoading" />
      <MessagingChat  :showChat="showChat" />
      <MessagingMessagesList :showChat="showChat" />
    </div>
  </section>
  <!-- content -->
</template>

<script>
import { HiringService } from "~/services";
import { useAuthStore } from "~/store/auth";
export default {
  setup() {
    definePageMeta({
      layout: "app",
      middleware: ["auth"],
    });
    const { $toast } = useNuxtApp();
    const auth = useAuthStore();
    return {
      $toast,
      auth,
    };
  },

  data() {
    return {
      isPost: false,
      availableJobs: [],
      isLoading: true,
      accountType: '',
      issidebar: false,
      isChat:false,
    };
  },
  computed: {
        currentPath () {
            const {path} = useRoute()
            return path
        }
    },
  mounted() {
    
    const { authUser } = useAuthStore();
    //console.log(authUser.account.account_type)
    this.accountType = authUser.account.account_type;
   this.accountType === 1 && HiringService.allPostedJobs()
      .then((res) => {
        console.log(res);
        const { data } = res.data;
       
          this.availableJobs = data.filter(
            (item) => item.user_id === authUser.id
          );
      

        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });

      this.accountType === 2 && HiringService.allJobs()
      .then((res) => {
        console.log(res);
        const { data } = res.data;
       
          this.availableJobs = data
      

        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    togglePost() {
      this.isPost = !this.isPost;
    },
    showChat() {
      this.isChat = !this.isChat;
    },
    toggleSidebar() {
      this.issidebar = !this.issidebar;
    },
  },
};
</script>
