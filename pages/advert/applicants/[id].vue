<template>
  <section>
    <div class="text-[#3E3F5E] w-full bg-white h-[100vh]">
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
          v-if="accountType === 1"
          @click="togglePost"
          class="absolute border-2 bottom-4 text-blue-950 right-5 border-blue-950 w-fit px-3 py-2 rounded-3xl bg-white flex items-center justify-center"
        >
          <span>Post Job</span>
        </button>
        <NuxtLink to="/advert/myjobs">
          <div
            v-if="accountType === 2"
            class="absolute bottom-0 sm:text-sm left-[20px] text-white"
          >
            <div
              v-if="currentPath === '/advert/myjobs'"
              class="relative bg-white p-1 text-[#184391] rounded-t-md font-semibold"
            >
              My Applications
              <span class="active-border-right"></span>
              <span class="active-border-left"></span>
            </div>
            <div v-else class="p-1 text-white font-medium">My applications</div>
          </div>
        </NuxtLink>
      </div>

      <!--  <MessagingChat :showChat="showChat" :isChat="isChat" />-->
      <MessagingMessagesList :showChat="showChat" :isChat="isChat" />
      <JobadvertJobPosting :togglePost="togglePost" :isPost="isPost" />
      <div @click="goback" class="pl-2 cursor-pointer absolute top-1 left-2">
        <span class="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]">
          <img
            src="/images/arrows.svg"
            alt=""
            class="w-full h-full object-cover"
          />
        </span>
      </div>
      <div class="w-full p-2 sm:p-4">
        <JobadvertJobApplicants
          :data="applicants"
          :isLoading="isLoading"
          :handleStatus="handleStatus"
          :isStatus="isStatus"
          :isSubmit="isSubmit"
          :showChat="showChat"
          :isChat="isChat"
        />
      </div>
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
      applicants: [],
      isLoading: true,
      accountType: "",
      issidebar: false,
      isSubmit: false,
      isStatus: false,
      isChat: false,
    };
  },
  computed: {
    currentPath() {
      const { path } = useRoute();
      return path;
    },
  },
  mounted() {
    const { authUser } = useAuthStore();
    // console.log(authUser.account.account_type);
    this.accountType = authUser.account.account_type;
    this.accountType === 1 &&
      HiringService.jobApplicants(this.$route.params.id)
        .then(({ data }) => {
          this.applicants = data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  methods: {
    showChat() {
      this.isChat = !this.isChat;
    },
    togglePost() {
      this.isPost = !this.isPost;
    },

    goback() {
      this.$router.back();
    },
    handleStatus() {
      this.isStatus = true;
      HiringService.appliedJobs()
        .then((res) => {
          console.log(res);
          this.isStatus = false;
          this.isSubmit = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
