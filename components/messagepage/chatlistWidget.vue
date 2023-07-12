<template>
  <div
    v-if="chatList !== null"
    v-for="({ heading, recent_message, id }, index) in chatList"
    :key="index"
    class="w-full"
    @click="showDetail(id)"
  >
    <MessagepageListWidget :heading="heading" :recent="recent_message" />
  </div>
  <div
    v-else
    class="flex justify-center text-zinc-700 items-center h-[100px] w-full"
  >
    - no conversation yet -
  </div>

  
  <!-- content -->
</template>

<script>
import { ChatService } from "~/services";
//import { chatStore } from '~/store/chats';
export default {
  props:['showDetail','chatList'],
  data() {
    return {
      isOut: false,
      //chatList: null,
      isChat: false,
      receiverName: "",
      receiverPics: "",
      senderName: "",
      senderPics: "",
      //chatDetail: null,
    };
  },
  mounted() {
    ChatService.getConversations()
      .then((res) => {
        console.log(res.data[0].heading);

       // this.chatList = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
  /**
     showDetail(id) {
      this.isChat = true;

      //  const setchatStore = chatStore()
      ChatService.getConversationDetail(id)
        .then((res) => {
          console.log("list widget....", res.data.data);
          const { data } = res.data;
          this.chatDetail = data.reverse();
          //  setchatStore.setChats(data);
          const { to_user, from_user } = data[0];
          this.receiverName = to_user?.name;
          this.receiverPics = to_user?.profile_pic;
          this.senderName = from_user?.name;
          this.senderPics = from_user?.profile_pic;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteFn(id) {
      this.chatDetail = this.chatDetail.filter((val) => val.id !== id);
    },
    showChat() {
      this.isChat = !this.isChat;
    },
   */
  },
};
</script>

<style scoped></style>
