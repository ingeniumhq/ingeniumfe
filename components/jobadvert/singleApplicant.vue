<template>
  <div>
    <div
      class="
        w-full
        h-[230px]
        relative
        rounded-xl
        border
        shadow-lg
        px-2
        py-2
        sm:py-4
        sm:px-4
        overflow-hidden
      "
    >
      <div
        class="
          flex flex-col
          justify-start
          space-y-4
          text-[#3E3F5E]
          font-semibold
          text-sm
          sm:text-[16px]
        "
      >
        <div class="w-full text-start">
          {{
            `Name: ${applicantName?.split(" ")[0] || ""} ${
              applicantName?.split(" ")[1] || ""
            }`
          }}
        </div>
        <div class="">Applicant Documents</div>
        <div class="flex items-center space-x-2">
          <span>Resume:</span>
          <a
            class="flex space-x-1 items-center text-blue-700"
            target="_blank"
            :href="media[0].url"
          >
            <span class="font-normal">{{ media[0].identifier }}</span>
            <span class="w-[24px] h-[24px]">
              <img
                src="/images/preview.svg"
                alt=""
                class="w-full h-full object-cover"
              />
            </span>
          </a>
        </div>
        <div class="flex items-center space-x-2">
          <span>CV Document:</span>
          <a
            class="flex space-x-1 items-center text-blue-700"
            target="_blank"
            :href="media[1].url"
          >
            <span class="font-normal">{{ media[1].identifier }}</span>
            <span class="w-[24px] h-[24px]">
              <img
                src="/images/preview.svg"
                alt=""
                class="w-full h-full object-cover"
              />
            </span>
          </a>
        </div>
        <div
          class="
            flex
            justify-between
            text-[13px]
            sm:text-[15px]
            items-center
            w-full
          "
        >
          <button @click="handleStatus" class="">
            <div v-if="isStatus" class="flex justify-center items-center">
              <div
                class="
                  rounded-full
                  border-2
                  animate-spin
                  border-r-0 border-b-0
                  w-[20px]
                  h-[20px]
                  small-loader
                  border-zinc-800
                "
              ></div>
            </div>
            <span v-else class="font-medium text-blue-900">Accept</span>
          </button>
          <button @click="showChat" class="text-red-600">Chat</button>
          <NuxtLink :to="`/usr/${user_id}`">
            <span class="font-medium text-green-700"> View Profile </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <MessagingChat
    :showChat="showChat"
    :isChat="isChat"
    :name="applicantName"
    :picture="applicantPics"
    :userId="user_id"
  />
  <!-- content -->
</template>

<script>
import { UserService } from "~/services";
export default {
  props: [
    "media",
    "user_id",
    "showChat",
    "isChat",
    "handleStatus",
    "isStatus",
    "index",
  ],
  setup() {},
  data() {
    return {
      applicantName: "",
      applicantPics: "",
    };
  },
  mounted() {
    UserService.getUser(this.user_id)
      .then((res) => {
        console.log(res.data);
        const { name, profile_pic } = res.data;
        this.applicantName = name;
        this.applicantPics = profile_pic;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    goback() {
      this.$router.back();
    },
  },
};
</script>

<style scoped></style>
