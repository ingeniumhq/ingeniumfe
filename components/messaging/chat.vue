<template>
  <div
    :class="isChat ? 'block' : 'hidden'"
    class="
      fixed
      bottom-[10px]
      h-[450px]
      text-[#3E3F5E]
      shadow-lg
      right-[342px]
      rounded-lg
      w-[450px]
      z-[20]
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
        <div v-if="picture" class="h-[22px] w-[22px]">
          <img :src="picure" alt="val" class="w-full h-full object-cover" />
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
        class="h-[25px] w-[25px] p-1 bg-red-500 rounded-full"
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
        <div class="flex px-2 flex-col justify-start w-full">
          <div
            v-for="val in [1, 2, 3, 4]"
            class="flex flex-col w-full py-3 space-x-2"
          >
            <div class="flex space-x-1 items-center">
              <div class="w-[25px] h-[25px]">
                <img
                  src="/images/company.svg"
                  alt="val"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="font-medium">Olascom Company</div>
              <div class="font-light text-[12px]">June, 2023</div>
            </div>

            <div class="flex flex-wrap leading-6 font-light">
              Dear Adeoye, Your application was successfully received, we will
              get back to you after your files has been reviewed. Kindly note,
              this message does not determine your employment. Thanks.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-fit rounded-b-lg px-2 bg-white py-2">
      <textarea
        v-model.trim="text"
        placeholder="Write a message ..."
        class="textarea-field"
      ></textarea>
      <div class="p-2 w-full flex justify-between items-center">
        <label for="upload" class="bg-gray-200 h-[40px] w-[40px] px-2 rounded-lg py-1">
          <img
            src="/images/attach.svg"
            alt="val"
            class="w-full h-full object-fill"
          />
          <input type="file"
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
        
          <div  v-else>Send</div>
        </button>
      </div>
    </div>
  </div>
  <!-- content -->
</template>

<script>
import { ChatService } from "~/services";
export default {
  props: ["isChat", "showChat", "name", "picture", "userId"],
  setup() {},

  data() {
    return {
      text: "",
      isloading: false,
      attachement:""
    };
  },
  methods: {
    handleFile(event) {
        if (event.target.files[0]) {
        console.log( event.target.files[0]?.name)
        this.attachment = event.target.files[0];
        //this.fileName = event.target.files[0]?.name;
    }
},
    sendMessage() {
        this.isloading = true
        const formData = new FormData();
        formData.append("text", this.text);
        formData.append("to_user_id", this.userId);
        formData.append("attachment", this.attachment);
      
        /**
       const payload = {
        to_user_id: this.userId,
        text: this.text,
      };
       */
      ChatService.startConversation(formData)
        .then((res) => {
          console.log(res);
          this.isloading = false;
          this.text = "";
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
