<template>
  <div
    @click.self="toggleSidebar"
    :class="
      issidebar
        ? 'text-zinc-700 w-full z-[200] fixed inset-0 bg-black bg-opacity-50 h-full'
        : 'hidden'
    "
  >
    <div
      class="
        absolute
        let
        swipeIn
        right-0
        inset-y-0
        z-[10]
        w-[200px]
        sm:w-[250px]
        h-full
        font-medium
        text-sm
        sm:text-[16px]
      "
    >
      <div class="w-full h-full bg-white overflow-hidden pt-8 pb-2">
        <div
          @click="toggleSidebar"
          class="w-[24px] h-[24px] absolute top-3 right-3"
        >
          <img src="/images/close.png" alt="" class="w-full h-full" />
        </div>
        <div
          v-if="accountType === 1"
          class="w-full h-full overflow-auto p-3 scroll"
        >
          <div
            @click="togglePost"
            class="
              cursor-pointer
              p-2
              hover:bg-gray-100
              flex
              space-x-2
              items-center
            "
          >
            <span class="w-[24px] h-[24px]">
              <img src="/images/add.svg" alt="" class="w-full h-full" />
            </span>
            <span class="text-[#184391]">Post Job </span>
          </div>
          <div
            class="
              cursor-pointer
              p-2
              hover:bg-gray-100
              flex
              space-x-2
              items-center
            "
          >
            <span class="w-[24px] h-[24px]">
              <img src="/images/view.svg" alt="" class="w-full h-full" />
            </span>
            <span class="text-[#184391]"> View Applicants </span>
          </div>
        </div>
        <div v-else class="w-full h-full overflow-auto p-3 scroll">
          <NuxtLink to="/advert/myjobs">
            <div
            class="
              cursor-pointer
              p-2
              hover:bg-gray-100
              flex
              space-x-2
              items-center
            "
          >
            <span class="w-[24px] h-[24px]">
              <img src="/images/view.svg" alt="" class="w-full h-full" />
            </span>
            <span class="text-[#184391]"> My Applications </span>
          </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <!-- content -->
</template>

<script>
import { useAuthStore } from "~/store/auth";

export default {
  props: ["togglePost", "issidebar", "toggleSidebar", "accountType"],
  setup() {
    const { $toast } = useNuxtApp();
    const auth = useAuthStore();
    return {
      $toast,
      auth,
    };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
