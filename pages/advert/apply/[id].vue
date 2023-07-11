<template>
  <section>
    <div class="w-full h-[100vh] text-[#3E3F5E]">
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
        <div class="w-full space-y-3 max-[990px]:py-[40px] py-[20px] min-[990px]:py-[80px] px-[8px] sm:px-[40px]  mx-auto">
        
        <div class="w-full p-3 sm:p-6 shadow-lg mx-auto mt-3 border rounded-lg ">
        <div class="sm:pl-[40px] w-full relative h-full">
     
        <div class="w-full flex flex-col justify-start">
          <div class="form-group space-y-3">
            <div class="text-sm sm:text-[15px]">Resume or CV</div>
            <label
              class="
                overflow-hidden
                gap-3
                grid grid-cols-4
                justify-center
                items-center
                bg-gray-200
                w-[180px]
                text-center
                whitespace-nowrap
                p-4
                rounded-md
              "
              for="upload"
            >
              <span class="w-[22px] h-[22px] rotate-[60deg] transform">
                <img
                  src="/images/attach.svg"
                  alt=""
                  class="w-full h-full rotate-[60deg] transform object-cover"
                />
              </span>
              <span
                class="text-gray-500 col-span-3 whitespace-nowrap text-ellipsis"
                >{{ `${fileName}` || "no attached file" }}</span
              >
            </label>
            <input
              id="upload"
              class="block form__input input-field"
              type="file"
              accept=".pdf,.doc"
              name=""
              hidden
              @change="handleFile($event)"
            />
          </div>
          <div class="form-group space-y-3">
            <label class="block form__label text-sm sm:text-[15px]" for=""
              >Cover letter</label
            >
            <textarea
              v-model.trim="letter"
             
              class="
               cat-field
                h-[160px]
              "
            ></textarea>
          </div>
        </div>

        <div class="w-full h-fit flex justify-end">
          <button
            @click="apply"
            class="
              text-white
              py-2
              px-3
              w-[120px]
              rounded-xl
              border-0
              bg-blue-900
              hover:bg-blue-950
              text-sm
              sm:text-[16px]
              flex
              items-center
              justify-center
            "
          >
          <div v-if="isLoading" class="flex justify-center items-center">
              <div
                class="
                  rounded-full
                  border-2
                  animate-spin
                  border-r-0 border-b-0
                  w-[20px]
                  h-[20px]
                  small-loader
                  border-slate-50
                "
              ></div>
            </div>
            <span v-else>Apply Now</span>
          </button>
        </div>
      </div>
      </div>
        </div>
  
    

      <div :class="isSubmit ? 'fixed let swipeDown inset-0 bg-none w-full h-full':'hidden'">
        <div class="absolute m-auto text-sm sm:text-[16px] flex flex-col justify-center items-center inset-0 bg-blue-900 py-6 rounded-md px-4 w-fit h-fit space-y-4 text-white">
            <div >
              Application successful
            </div>

            <div
            @click="goback"
            class="border rounded-md py-1 px-2 cursor-pointer ">Ok</div>

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
    // console.log(auth)
    return {
      $toast,
      auth,
    };
  },

  data() {
    return {
      jobDetail: "",
      resume: "",
      letter: "",
      fileName: "",
      isLoading:false,
      isSubmit:false,
      accountType:"",
      isPost: false,
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
      this.accountType = authUser.account.account_type;
  },

  methods: {
    goback() {
      this.$router.back();
    },
    togglePost() {
        this.isPost = !this.isPost;
      },
    
    handleFile(event) {
      //console.log(event.target.files[0])
      if (event.target.files[0]) {
        //console.log( event.target.files[0]?.name)
        this.resume = event.target.files[0];
        this.fileName = event.target.files[0]?.name;
      }
      const { authUser } = useAuthStore();
      console.log(authUser);
    },
    apply() {
      const validateData = {
        resume: this.resume,
        letter: this.letter
      }

      for (let i in validateData) {
        if(validateData[i] === '') {
          this.$toast(`${i} is required`)
          return
        }
      }
      const { authUser } = useAuthStore();
      this.isLoading = true
     console.log(this.accountType)
      const formData = new FormData();
     formData.append("job_advert_id", this.$route.params.id);
      formData.append("user_id", authUser.id);
      formData.append("resume_file", this.resume);
      formData.append("cv_document", this.resume);
      formData.append("cover_letter", this.letter);
   
      this.accountType === 2 && HiringService.applyforJob(formData)
        .then((res) => {
          console.log(res);
          this.isLoading =false
          this.isSubmit = true
          this.resume = "";
          this.letter = "";
          this.fileName = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.cat-field {
  @apply border bg-white text-[#3E3F5E] border-zinc-700 rounded-lg focus:outline-none w-full;
}
</style>
