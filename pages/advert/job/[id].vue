<template>
  <section>
    <div class="w-full h-[100vh]  text-zinc-800">
      <div class="h-[185px] inset-x-0 w-full relative">
          <img
            src="/images/resources/linkedinheaders-desktop.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
          <span
            class="absolute w-full h-full inset-0 bg-blue-950 bg-opacity-70"
          ></span>
          <button
          v-if="accountType === 1"
            @click="togglePost"
            
            class="
              absolute
              border-2
              bottom-4
              text-blue-950
              right-5
              border-blue-950
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
          <div v-if="accountType === 2" class="absolute bottom-0  sm:text-sm left-[20px] text-white">
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
        <div @click="goback" class="pl-2 cursor-pointer absolute top-1 left-2">
          <span class="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]">
            <img
              src="/images/arrows.svg"
              alt=""
              class="w-full h-full object-cover"
            />
          </span>
        </div>
        <div  v-if="!isLoading" class="w-full space-y-3  mx-auto">
        
      
        <div class="w-[95%] h-fit bg-white shadow-lg p-3 sm:p-6 mx-auto mt-3 border rounded-lg sm:w-[70%]">
               
      <div  class="sm:pl-[40px] w-full relative h-full">
     
        <div class="w-full flex flex-col pl-[20px] sm:pl-0 justify-start">
          <div class="text-lg font-semibold capitalize">
            {{ jobDetail.title || "--" }}
          </div>
          <div class="text-[17px] font-light capitalize">
            {{ jobDetail.company_name || "--" }}
            {{ `(${jobDetail.location})` || "--" }}
          </div>
        </div>

        <div
          class="
            flex
            items-center
            text-sm text-[15px]
            mt-3
            mb-5
            font-semibold
            space-x-2
          "
        >
          <div
            class="
              flex
              items-center
              space-x-1
              bg-gray-300 bg-opacity-50
              px-2
              py-1
            "
          >
            <span class="w-[24px] h-[24px]">
              <img
                src="/images/payment.svg"
                alt=""
                class="w-full h-full object-cover"
              />
            </span>
            <span>{{ `₦${jobDetail.salary?.toLocaleString()}` || "--" }}</span>
          </div>

          <div
            class="
              flex
              items-center
              space-x-1
              bg-gray-300 bg-opacity-50
              px-2
              py-1
            "
          >
            <span class="w-[24px] h-[24px]">
              <img
                src="/images/work.svg"
                alt=""
                class="w-full h-full object-cover"
              />
            </span>
            <span>{{ `${jobDetail.type}` || "--" }}</span>
          </div>
        </div>

        <div class="w-full space-y-4">
          <div class="space-y-2">
            <div class="text-[13px] sm:text-[15px] font-medium underline">
              Skills
            </div>
            <div class="text-[13px] sm:text-[15px]">
              {{ jobDetail.skills || "--" }}
            </div>
          </div>

          <div class="space-y-2">
            <div class="text-[13px] sm:text-[15px] font-medium underline">
              Description
            </div>
            <div class="text-[13px] sm:text-[15px]">
              {{ jobDetail.description || "--" }}
            </div>
          </div>

          <div class="flex space-x-2 text-[13px] sm:text-[15px] items-center">
            <span class="font-medium">Application Deadline:</span>
            <span> {{ formatDate(jobDetail.timeline) }}</span>
          </div>

          <div v-if="accountType === 1" class="w-full h-fit flex justify-end">
            <NuxtLink
              :to="`/advert/applicants/${id}`"
              class="
                text-white
                py-2
                px-3
                rounded-xl
                border-0
                bg-blue-900
                text-sm
                sm:text-[16px]
              "
            >
              View Applicants
            </NuxtLink>
          </div>
          <div v-else class="w-full h-fit flex justify-end">
            <NuxtLink
              :to="`/advert/apply/${id}`"
              class="
                text-white
                py-2
                px-3
                rounded-xl
                border-0
                bg-blue-900
                text-sm
                sm:text-[16px]
              "
            >
              Apply Now
            </NuxtLink>
          </div>
        </div>
      </div>
      </div>
    </div>
      <div v-else class="flex items-center w-full justify-center h-[200px]">
        <div class="h-[40px] w-[40px] animate-spin rounded-full loader"></div>
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
      jobDetail: "",
      id: this.$route.params.id,
      isLoading: true,
      accountType: "",
      isPost:false,
      issidebar:false,
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
    console.log(authUser.account.account_type);
    this.accountType = authUser.account.account_type;
    this.accountType === 1 &&
      HiringService.getSingleJob(this.$route.params.id)

        .then((res) => {
          console.log(res);
          this.isLoading = false;

          this.jobDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    this.accountType === 2 &&
      HiringService.browseSingleJob(this.$route.params.id)

        .then((res) => {
          console.log(res);
          this.isLoading = false;

          this.jobDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
  },

  methods: {
    goback() {
      this.$router.back();
    },
    togglePost() {
        this.isPost = !this.isPost;
      },
      toggleSidebar() {
        this.issidebar = !this.issidebar;
      },
    formatDate(datestring) {
      const date = new Date(datestring);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    },
  },
};
</script>
