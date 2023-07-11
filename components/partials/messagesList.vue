<template>
  <div
    :class="isOut ? 'bottom-[50px]' : 'bottom-[-350px]'"
    class="
      fixed
      h-[400px]
      text-[#3E3F5E]
      shadow-lg
      right-10
      transition-all
      duartion-300
      rounded-lg
      w-[280px]
      z-[20]
    "
  >
    <div
      @click.self="setOut"
      class="
        bg-[#172554]
        rounded-t-lg
        text-white
        w-full
        py-3
        px-2
        flex
        items-center
        justify-between
      "
    >
      <div class="flex items-center space-x-1">
        <div class="h-[22px] w-[22px]">
          <img
            src="/images/chat.svg"
            alt="val"
            class="w-full h-full object-cover"
          />
        </div>

        <span>Messages</span>
      </div>

      <div class="flex items-center space-x-3">
        <div
          class="cursor-pointer p-1 rounded-full bg-[#fec42d] h-[25px] w-[25px]"
        >
          <img
            src="/images/enlarge.svg"
            alt="val"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          @click="setOut"
          class="cursor-pointer p-1 rounded-full bg-[#fec42d] h-[28px] w-[28px]"
        >
          <img
            src="/images/expand.svg"
            alt="val"
            class="w-full h-full object-cover"
            :class="isOut ? 'rotate-180' : ''"
          />
        </div>
      </div>
    </div>
    <div
      class="
        bg-white
        flex
        text-sm
        font-medium
        justify-around
        border-b
        items-center
        px-2
      "
    >
      <div
        :class="isactive === 0 ? 'border-b-2 border-[172532]' : ''"
        @click="setActive(0)"
        class="py-2 cursor-pointer"
      >
        Conversations
      </div>
      <div
        @click="setActive(1)"
        :class="isactive === 1 ? 'border-b-2 border-[172532]' : ''"
        class="py-2 cursor-pointer"
      >
        Connections
      </div>
    </div>

    <div class="w-[280px] h-full bg-white pt-2 overflow-hidden">
      <div class="w-full h-full overflow-y-auto pb-20">
        <div
          :class="isactive === 0 ? 'block' : 'hidden'"
          class="flex flex-col justify-start w-full"
        >
          <MessagingChatlistWidget />
        </div>
        <div
          :class="isactive === 1 ? 'block' : 'hidden'"
          class="flex flex-col justify-start w-full"
        >
          <MessagingConnectWidget />
        </div>
      </div>
    </div>
  </div>

  <!-- content -->
</template>

<script>
import { ChatService } from "~/services";
//import { chatStore } from '~/store/chats';
export default {
  setup() {},
  data() {
    return {
      isOut: false,
      isactive: 0,
    };
  },
  mounted() {},
  methods: {
    setOut() {
      this.isOut = !this.isOut;
      //console.log('yeah')
    },

    setActive(num) {
      this.isactive = num;
    },
  },
};
</script>

<style scoped></style>
