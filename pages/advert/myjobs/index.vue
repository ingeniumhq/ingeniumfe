<template>
    <section>
      <div class="text-[#3E3F5E] w-full bg-white h-full">
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
          <div v-if="accountType === 2" class="absolute bottom-0  sm:text-sm left-[20px] sm:left-[43px] text-white">
            <div v-if="currentPath === '/advert/myjobs'" class="relative bg-white p-1 text-[#184391] rounded-t-md font-semibold">
                My Applications
              <span class="active-border-right"></span>
              <span class="active-border-left"></span>
            </div>
            <div v-else  class=" p-1 text-white font-medium">
                My Applications
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
      
        <div class="w-full max-[990px]:py-[40px] py-[20px] min-[990px]:py-[80px] px-[8px] sm:px-[40px]">
          <div class="w-full h-fit mt-3 rounded-md bg-white shadow-lg  sm:py-4 py-3 ">
            <div class="text-[#3E3F5E] relative font-semibold w-[95%] text-sm sm:text-lg border-gray-300 mx-[23px] py-2 border-b">
       <span class="absolute w-[3px] h-[20px] bg-[#184391] left-[-23px] top-[13px]"></span>
        <span><span class="mr-1">My Applications</span> <span class="text-gray-400">{{ `(${appliedJobs?.length || 0})` }}</span></span></div>
          
            <div v-for="({jobadvert, status}, index) in appliedJobs" :key="index">
                <div class="py-3 px-2 myjob-border flex flex-col">
                   
                    <div>
           
            <div class="flex space-x-2 items-center">
                <div class="text-[16px] sm:text-lg font-semibold capitalize">{{ jobadvert.title }}</div>
                
                <div v-if="status" class="text-green-700 bg-green-700 bg-opacity-20 px-2 py-1 text-[12px] sm:text-sm w-fit rounded-md">accepted</div>
                <div v-else class="text-blue-700 bg-blue-700 bg-opacity-20 px-2 py-1 text-[12px] sm:text-sm w-fit rounded-md">applied</div>
            </div>
            <div class="text-[15px] sm:text-[17px] font-light capitalize">
              {{ jobadvert.company_name }}
            </div>
            <div class="text-[15px] sm:text-[17px] font-light capitalize">
              {{ jobadvert.location }}
            </div>
          </div>
                </div>
            </div>

        </div>
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
        appliedJobs: [],
        isLoading: true,
        accountType: '',
        issidebar: false,
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
     this.accountType === 2 && HiringService.appliedJobs()
        .then((res) => {
          console.log(res);
          const { data } = res.data;
         
            this.appliedJobs = data
            
  
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
      toggleSidebar() {
        this.issidebar = !this.issidebar;
      },
      goback() {
        this.$router.back();
      }
   
    },
  };
  </script>
  