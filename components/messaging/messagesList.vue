<template>
  <div
    :class="isOut ? 'bottom-[56px]' : 'bottom-[-360px]'"
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
        <NuxtLink to="/messages" 
        class="cursor-pointer p-1 rounded-full bg-red-500 h-[25px] w-[25px]"
        >
        
      
     
    
      <img
        src="/images/enlarge.svg"
        alt="val"
        class="w-full h-full object-cover"
       
      />
  
        </NuxtLink>
       
        <div
        @click="setOut"
        class="cursor-pointer p-1 rounded-full bg-red-500 h-[28px] w-[28px]"
      >
        <img
          src="/images/expand.svg"
          alt="val"
          class="w-full h-full object-cover"
          :class="isOut ? 'rotate-180': ''"
        />
      </div>
      

      </div>
    </div>

    <div class="w-[280px] h-full bg-white pt-2 overflow-hidden">
      <div class="w-full h-full overflow-y-auto">
        <div class="flex flex-col justify-start w-full">
          <div
            v-if="chatList !== null"
            v-for="({ heading, recent_message, id }, index) in chatList"
            :key="index"
            class="w-full"
            @click="showDetail(id)"
          >
            <MessagingListWidget :heading="heading" :recent="recent_message" />
          </div>
          <div
            v-else
            class="
              flex
              justify-center
              text-zinc-700
              items-center
              h-[100px]
              w-full
            "
          >
            - no conversation yet -
          </div>
        </div>
      </div>
    </div>
  </div>

  <MessagingChat
    :showChat="showChat"
    :isChat="isChat"
    :chats="chatDetail"
    :userId="receiverId"
    :name="receiverName"
    :picture="receiverPics"
    :senderName="senderName"
    :senderPics="senderPics"
    :messageId="messageId"
  />
  <!-- content -->
</template>

<script>
import { ChatService } from "~/services";

export default {
  setup() {},
  data() {
    return {
      isOut: false,
      chatList: null,
      isChat: false,
      receiverName: "",
      receiverPics: "",
      senderName: "",
      senderPics: "",
      chatDetail: null,
      messageId:0,
      receiverId:"",
    };
  },
  mounted() {
    ChatService.getConversations()
      .then((res) => {
        console.log(res.data[0].heading);

        this.chatList = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    setOut() {
      this.isOut = !this.isOut;
      //console.log('yeah')
    },
    showDetail(id) {
        this.isChat = true
        this.messageId = id;

      // const setchatStore = chatStore()
      ChatService.getConversationDetail(id)
        .then((res) => {
          console.log("list widget....", res.data.data);
          const { data } = res.data;
          this.chatDetail = data.reverse();
          //setchatStore.setChats(data);
          const { to_user, from_user } = data[0];
          this.receiverName = to_user?.name;
          this.receiverPics = to_user?.profile_pic;
          this.senderName = from_user?.name;
          this.senderPics = from_user?.profile_pic;
          this.receiverId = to_user_id;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showChat() {
      this.isChat = !this.isChat;
    },
  },
};
</script>

<style scoped></style>
