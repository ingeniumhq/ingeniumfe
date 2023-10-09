<template>
  <div
    :class="isChat ? 'block' : 'hidden'"
    class="
      fixed
      bottom-[10px]
      h-[450px]
      text-[#3E3F5E]
      right-[342px]
      rounded-lg
      w-[450px]
      z-[300]
    "
  >
    <div
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
      <!--Sth is wrong with the profile pics #profilepics -->
      <div class="flex items-center space-x-1">
        <div v-if="picture" class="h-[22px] w-[22px] rounded-full">
          <img
            :src="picture"
            alt="val"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <div v-else class="h-[22px] w-[22px]">
          <img
            src="/images/curcompany.svg"
            alt="val"
            class="w-full h-full object-cover"
          />
        </div>

        <span>{{ name || "" }}</span>
      </div>

      <div
        @click="showChat"
        class="h-[25px] w-[25px] p-1 bg-[#fec42d] rounded-full"
      >
        <img
          src="/images/closes.svg"
          alt="val"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="w-[450px] h-[250px] bg-white pt-2 overflow-hidden">
      <div class="w-full h-full overflow-y-auto">
        <div class="flex flex-col justify-start w-full">
          <div
            v-if="chats !== null"
            v-for="({ from_user, text, created_at, id }, index) in chats"
            :key="index"
            class="
              flex
              group
              relative
              px-2
              hover:bg-gray-100
              flex-col
              w-full
              py-3
              space-x-2
            "
          >
            <div
              @click="deleteSingleMessage(id)"
              class="
                group-hover:flex
                items-center
                rounded-full
                justify-center
                w-[25px]
                cursor-pointer
                h-[25px]
                absolute
                hidden
                top-2
                right-2
                bg-[#fec42d]
                p-1
              "
            >
              <img
                src="/images/deletes.svg"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex space-x-2 items-center">
              <div class="w-[40px] rounded-full h-[40px]">
                <img
                  :src="from_user?.profile_pic"
                  alt="val"
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
              <div class="font-medium capitalize">{{ from_user?.name }}</div>
              <div class="font-light text-[12px]">{{ created_at }}</div>
            </div>

            <div
              class="pl-[40px] flex text-[13px] flex-wrap leading-6 font-light"
            >
              {{ text }}
            </div>
          </div>
          <div v-else class="w-full h-[100px] flex items-center justify-center">
            - no message yet -
          </div>
        </div>
      </div>
    </div>
    <div v-if="chatloaded" class="w-full h-fit  rounded-b-lg px-2 bg-white py-2">
      <textarea
        v-model.trim="text"
        placeholder="Write a message ..."
        class="textarea-field"
      ></textarea>
      <div class="p-2 w-full flex justify-between items-center">
        <label
          for="upload"
          class="bg-gray-200 h-[40px] w-[40px] px-2 rounded-lg py-1"
        >
          <img
            src="/images/attach.svg"
            alt="val"
            class="w-full h-full object-fill"
          />
          <input
            type="file"
            accept=".pdf,.doc"
            hidden
            id="upload"
            @change="handleFile($event)"
          />
        </label>

        <button
          @click="sendMessage"
          :disabled="!text"
          :class="
            !text ? 'text-gray-500 bg-gray-100' : 'bg-[#172352] text-white'
          "
          class="rounded-xl flex w-16 h-8 items-center justify-center"
        >
          <span
            v-if="isloading"
            class="
              animate-spin
              rounded-full
              h-3
              w-3
              border-l border-b border-white
            "
          ></span>

          <div v-else>Send</div>
        </button>
      </div>
    </div>
  </div>
  <!-- content -->
</template>

<script>
import { ChatService } from "~/services";

export default {
  props: [
    "name",
    "picture",
    "isChat",
    "senderPics",
    "senderName",
    "showChat",
    "userId",
    "chats",
    "deleteFn",
    "messageId",
    "chatloaded",
  ],
  data() {
    return {
      text: "",
      isloading: false,
      attachement: "",
      fileName: "",
      createdAt: "",
    };
  },
  methods: {
    handleFile(event) {
      if (event.target.files[0]) {
        console.log(event.target.files[0]?.name);
        this.attachment = event.target.files[0];
        this.fileName = event.target.files[0]?.name;
      }
    },
    async sendMessage() {
      this.isloading = true;
      const formData = new FormData();
      formData.append("text", this.text);
      formData.append("to_user_id", this.userId);
      formData.append("attachment", this.attachment);

      //if no chat.. initiate chat
      this.chats === null &&
        (await ChatService.startConversation(formData)
          .then((res) => {
            console.log(res);
            this.isloading = false;
            this.createAt = "now";
            this.chats.push({
              from_user: {
                name: this.senderName,
                profile_pic: this.senderPics,
              },
              text: this.text,
              created_at: "now",
            });
            this.text = "";
          })

          .catch((err) => {
            console.log(err);
          }));

      const payload = {
        text: this.text,
      };
      // if there is chat
      this.chats !== null &&
        (await ChatService.sendConversation(this.messageId, payload)
          .then((res) => {
            console.log(res);
            this.isloading = false;
            this.createAt = "now";
            this.chats.push({
              from_user: {
                name: this.senderName,
                profile_pic: this.senderPics,
              },
              text: this.text,
              created_at: "now",
            });
            this.text = "";
          })

          .catch((err) => {
            console.log(err);
          }));
    },
    async deleteSingleMessage(id) {
      await ChatService.deleteMessage(id)
        .then((res) => {
          console.log(res);
          this.deleteFn(id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.textarea-field {
  @apply bg-white text-[#3E3F5E] resize-none border-[#172532] border rounded-lg focus:outline-none w-full p-2 h-[80px];
}
</style>
