<template>
    
  <div
  :class="isOut ? 'bottom-[20px]':'bottom-[-300px]'"
    class="
      fixed
      h-[350px]
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
        <div
         class="h-[22px] w-[22px]">
          <img
            src="/images/chat.svg"
            alt="val"
            class="w-full h-full object-cover"
          />
        </div>

        <span>Messages</span>
      </div>
     
        
      <div
      @click="setOut"
      class="cursor-pointer p-1 rounded-full bg-red-500 h-[28px] w-[28px]">
          <img
            src="/images/expand.svg"
            alt="val"
            class="w-full h-full object-cover"
          />
        </div>
        
   

    </div>

    <div class="w-[280px] h-full bg-white pt-2 overflow-hidden">
      <div class="w-full h-full overflow-y-auto">
        <div class="flex  flex-col justify-start w-full">
          <div
            v-for="val in [1, 2, 3, 4]"
            class="flex w-full border-b hover:bg-gray-100 py-3 px-2 space-x-2"
          >
            <div class="w-[30px] h-[30px]">
              <img
                src="/images/company.svg"
                alt="val"
                class="w-full h-full object-cover"
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
                Olascom Company
              </div>
              <div
                class="
                  w-[120px]
                  text-ellipsis
                  whitespace-nowrap
                  overflow-hidden
                "
              >
                Hi, sir your application has been terminated
              </div>
            </div>
            <div>June, 2023</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- content -->
</template>

<script>
export default {
  setup() {},
  data () {
    return {
        isOut:false,
    }
 }, 
 methods: {
    setOut() {
        this.isOut = !this.isOut
        console.log('yeah')
    },
 }
};
</script>

<style scoped></style>
