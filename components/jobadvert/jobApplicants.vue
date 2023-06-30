<template>
  <div class="mt-[2%] w-full px-4">
    <div v-if="!isLoading && data.length > 0">
      <div class="text-zinc-800 font-semibold text-sm sm:text-lg mb-2 sm:mb-3">
        Number of Applicants {{ `(${data.length})` }}
      </div>
      <div
        class="
          grid grid-cols-1
          gap-5
          sm:grid-cols-2
          text-zinc-800
          md:grid-cols-3
          xl:grid-cols-4
          w-full
          items-center
        "
      >
        <div v-for="({ media, user_id }, index) in data" :key="index">
          <div>
            <div
              class="
                w-full
                h-[200px]
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
                  space-y-3
                  text-zinc-800
                  font-semibold
                  text-sm
                  sm:text-[16px]
                "
              >
                <div class="w-full text-center">{{ index + 1 }}</div>
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
                  <button
                    @click="handleStatus"
                    class="
                      border-0
                      rounded-lg
                      px-2
                      py-2
                      w-[60px]
                      text-zinc-800
                      bg-gray-200
                      shadow-xl
                    "
                  >
                    <div
                      v-if="isStatus"
                      class="flex justify-center items-center"
                    >
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
                    <span v-else class="font-semibold">Accept</span>
                  </button>

                  <NuxtLink :to="`/usr/${user_id}`">
                    <span
                      class="
                        text-zinc-800
                        bg-gray-200
                        rounded-lg
                        px-2
                        py-2
                        shadow-xl
                      "
                    >
                      View Profile
                  </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else-if="!isLoading && data.length === 0"
      class="flex items-center w-full justify-center h-[300px]"
    >
      <div class="w-[200px] h-[200px] sm:w-[300px] sm:h-fit">
        <img
          src="/images/empty.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div v-else class="flex items-center w-full justify-center h-[300px]">
      <div class="h-[40px] w-[40px] animate-spin rounded-full loader"></div>
    </div>
    <div
      :class="
        isSubmit
          ? 'fixed let swipeDown inset-0 bg-none w-full h-full'
          : 'hidden'
      "
    >
      <div
        class="
          absolute
          m-auto
          text-sm
          sm:text-[16px]
          flex flex-col
          justify-center
          items-center
          inset-0
          bg-green-600
          py-6
          rounded-md
          px-4
          w-fit
          h-fit
          space-y-4
          text-white
        "
      >
        <div>{{ "Application Accepted" }}</div>
        <div @click="goback" class="border rounded-md py-1 px-2 cursor-pointer">
          Ok
        </div>
      </div>
    </div>
  </div>

  <!-- content -->
</template>

<script>
export default {
  props: ["data", "isLoading", "handleStatus", "isStatus", "isSubmit"],
  setup() {},

  methods: {
    goback() {
      this.$router.back();
    },
  },
};
</script>

<style scoped></style>
