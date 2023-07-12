<template>
    <div
      class="
        flex
        w-full
        border-b
        cursor-pointer
        hover:bg-gray-100
        py-2
        px-2
        justify-between
      
      "
      
    >
    <div class="flex space-x-3">
      <div class="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border border-[#172352] rounded-full">
        <img
          :src="data?.profile_pic"
          alt="val"
          class="w-full h-full object-cover rounded-full"
        />
      </div>
      <div class="w-full">
        <div
          class="
            font-semibold
            w-full
            text-ellipsis
            whitespace-nowrap
            overflow-hidden
          "
        >
          {{ data?.name }}
        </div>
       
      </div>
    </div>
     
      <div class="text-[12px]">{{ data?.created_at }}</div>
    </div>
  
   
    <!-- content -->
  </template>
  
  <script>
  //import { ChatService} from "~/services";
  //import { chatStore } from "~/store/chats";
  export default {
    props: [ "data"],
    setup() {},
    data() {
      return {
      
      };
    },
    mounted() {
  
    },
    methods: {}
  };
  </script>
  
  <style scoped></style>
  