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
        space-x-2
      "
      
    >
      <div class="w-[30px] h-[30px] border border-[#172352] rounded-full">
        <img
          :src="data?.profile_pic"
          alt="val"
          class="w-full h-full object-cover rounded-full"
        />
      </div>
      <div class="w-[120px]">
        <div
          class="
            font-semibold
            w-[120px]
            text-ellipsis
            whitespace-nowrap
            overflow-hidden
          "
        >
          {{ data?.name }}
        </div>
        <div class="w-[120px] text-ellipsis whitespace-nowrap overflow-hidden">
          {{ `--` }}
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
  