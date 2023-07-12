<template>
  <section>
    <div
      class="
        relative
        max-[990px]:py-[40px]
        py-[20px]
        min-[990px]:py-[80px]
        px-[8px]
        sm:px-[40px]
        text-[#172352]
        w-full
        bg-white
        h-full
      "
    >
      <div class="flex w-full h-[80vh] min-[800px]:space-x-3">
        <MessagepageChatList
        :chatList="chatList"
        :showDetail="showDetail"
        :connectList="connectList"
        :showChat="showChat"
        :isChat="isChat"
        />
        <MessagepageChatdetail
          :showChat="showChat"
          :isChat="isChat"
          :userId="receiverId"
          :chats="chatDetail"
          :name="receiverName"
          :picture="receiverPics"
          :senderName="senderName"
          :senderPics="senderPics"
          :deleteFn="deleteFn"
          :messageId="messageId"
          :chatloaded="chatloaded"

        />
      </div>
    </div>
  </section>
  <!-- content -->
</template>

<script>
 import { ChatService } from "~/services";
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
        chatList: null,
      isChat: false,
      receiverName: "",
      receiverPics: "",
      senderName: "",
      senderPics: "",
      receiverId:"",
      chatDetail: null,
      connectList: null,
      messageId:0,
      chatloaded:false,
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

      ChatService.getConnections()
        .then((res) => {
         console.log(res.data)
        const {data} = res.data
        this.connectList = data;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  methods: {
    showDetail(id) {
      this.isChat = true;
      this.chatloaded = false;
      this.messageId = id;
      //  const setchatStore = chatStore()
      ChatService.getConversationDetail(id)
        .then((res) => {
          console.log("list widget....", res.data.data);
         
          const { data } = res.data;
          this.chatloaded = true;
          this.chatDetail = data.reverse();
          //  setchatStore.setChats(data);
          const { to_user, from_user, to_user_id } = data[0];
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
    deleteFn(id) {
      this.chatDetail = this.chatDetail.filter((val) => val.id !== id);
    },
    showChat() {
      this.isChat = !this.isChat;
    },
  },
};
</script>
