<template>
  <div class="w-full max-[990px]:py-[40px] py-[80px] px-[16px] sm:px-[40px]">
    <div class="w-full h-full py-2 rounded-md shadow-lg bg-white relative">
      <div
        class="
          text-[#3E3F5E]
          relative
          font-semibold
          w-[95%]
          text-sm
          sm:text-lg
          border-gray-300
          mx-[23px]
          py-2
          border-b
        "
      >
        <span
          class="absolute w-[3px] h-[20px] bg-[#184391] left-[-23px] top-[13px]"
        ></span>
        <span
          ><span class="mr-1">Number of Applicants </span>
          <span class="text-gray-400">{{
            `(${data?.length || 0})`
          }}</span></span
        >
      </div>
      <div v-if="!isLoading && data.length > 0">
        <div
          class="
            grid grid-cols-1
            gap-5
            sm:grid-cols-2
            text-[#3E3F5E]
            md:grid-cols-3
            xl:grid-cols-4
            w-full
            px-4
            py-4
            items-center
          "
        >
          <div v-for="({ media, user_id }, index) in data" :key="index">
           <JobadvertSingleApplicant
           :media="media"
           :user_id="user_id"
           :index="index"
           :showChat="showChat"
           :isChat ="isChat"
           />
          </div>
        </div>
      </div>
      <div
        v-else-if="!isLoading && data.length === 0"
        class="flex items-center w-full justify-center h-[300px]"
      >
        <div class="w-[200px] h-[200px] sm:w-[300px] sm:h-fit">
          <img
            src="/images/empty.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div v-else class="flex items-center w-full justify-center h-[300px]">
        <div class="h-[40px] w-[40px] animate-spin rounded-full loader"></div>
      </div>
      <div
        :class="
          isSubmit
            ? 'fixed let swipeDown inset-0 bg-none w-full h-full'
            : 'hidden'
        "
      >
        <div
          class="
            absolute
            m-auto
            text-sm
            sm:text-[16px]
            flex flex-col
            justify-center
            items-center
            inset-0
            bg-green-600
            py-6
            rounded-md
            px-4
            w-fit
            h-fit
            space-y-4
            text-white
          "
        >
          <div>{{ "Application Accepted" }}</div>
          <div
            @click="goback"
            class="border rounded-md py-1 px-2 cursor-pointer"
          >
            Ok
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  <!-- content <MessagingChat :showChat="showChat" :isChat="isChat" />-->
</template>

<script>
export default {
  props: [
    "data",
    "isLoading",
    "handleStatus",
    "isStatus",
    "isSubmit",
    "showChat",
    "isChat",
  ],
  setup() {},
  data() {
    return {
      
    };
  },
  methods: {
    goback() {
      this.$router.back();
    },
  },
};
</script>

<style scoped></style>
