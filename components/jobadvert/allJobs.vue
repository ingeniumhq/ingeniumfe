<template>
  <div class=" w-full max-[990px]:py-[40px] py-[20px] min-[990px]:py-[80px] px-[8px] sm:px-[40px]">
    <div class="w-full h-full py-2 rounded-md shadow-lg bg-white relative">
     
      <div class="text-[#3E3F5E] relative font-semibold w-[95%] text-sm sm:text-lg border-gray-300 mx-[23px] py-2 border-b">
       <span class="absolute w-[3px] h-[20px] bg-[#184391] left-[-23px] top-[13px]"></span>
        <span><span class="mr-1">All Jobs</span> <span class="text-gray-400">{{ `(${data?.length || 0})` }}</span></span></div>
    
    <div
      class="
        grid grid-cols-1
        gap-5
        sm:grid-cols-2
        text-[#3E3F5E]
        md:grid-cols-3
        xl:grid-cols-4
        w-full
        px-4
        py-4
        items-center
       
      "
    >
      <div v-if="!isLoading"
        v-for="(
          { description, salary, title, type, company_name, updated_at, id },
          index
        ) in data"

        :key="index"
      >
        <NuxtLink
          :to="`/advert/job/${id}`"
          
        >
        <div class="
            w-full
            h-[250px]
            relative
            rounded-xl
            border
            px-2
            py-4
            shadow-sm
            sm:py-6
            sm:px-4
            overflow-hidden
          ">
          <div>
            <div class="text-lg font-semibold capitalize">{{ title }}</div>
            <div class="text-[17px] font-light capitalize">
              {{ company_name }}
            </div>
          </div>

          <div
            class="
              flex
              items-center
              text-sm text-[15px]
              mt-3
              mb-5
              font-semibold
              space-x-2
            "
          >
            <div
              class="
                flex
                items-center
                rounded-sm
                space-x-1
                bg-gray-300 bg-opacity-50
                px-2
                py-1
              "
            >
              <span class="w-[24px] h-[24px]">
                <img
                  src="/images/payment.svg"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </span>
              <span>{{ `₦${salary.toLocaleString()}` }}</span>
            </div>

            <div
              class="
                flex
                items-center
                rounded-sm
                space-x-1
                bg-gray-300 bg-opacity-50
                px-2
                py-1
              "
            >
              <span class="w-[24px] h-[24px]">
                <img
                  src="/images/work.svg"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </span>
              <span>{{ `${type}` }}</span>
            </div>
          </div>

          <div
            class="
            
              text-[12px]
              font-light
              sm:text-[13px]
              text-ellipsis
              whitespace-nowrap
              overflow-hidden
              w-full
            "
          >
            {{
              `${description?.split(".")[0]}` ||
              `${description?.split(",")[0]}` ||
              `${description}`
            }}
          </div>
      
          <div
            class="
              absolute
              bottom-2
              left-2
              font-light
              text-[12px]
              sm:text-[13px]
            "
          >
            {{ `${formatTimeDifference(updated_at)}` }}
          </div>
        </div>
        </NuxtLink>
      </div>
      <div v-else class="flex items-center w-full justify-center h-[300px]">
        <div class="h-[40px] w-[40px] animate-spin rounded-full loader ">

        </div>
</div>
    </div>
    </div>
  </div>

  <!-- content -->
</template>

<script>
import moment from "moment-timezone";

export default {
  props: ["data" , 'isLoading'],
  setup() {},
  
  methods: {
    formatTimeDifference(dateString) {
      //const moment = require('moment-timezone')
      const nigeriaTimezone = "Africa/Lagos";
      const now = moment();
      const date = moment(dateString);
      now.tz(nigeriaTimezone);
      date.tz(nigeriaTimezone);

      const duration = moment.duration(now.diff(date));

      const years = duration.years();
      const months = duration.months();
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();

      if (years > 0) {
        return years === 1 ? "1 year ago" : `${years} years ago`;
      } else if (months > 0) {
        return months === 1 ? "1 month ago" : `${months} months ago`;
      } else if (days > 0) {
        return days === 1 ? "1 day ago" : `${days} days ago`;
      } else if (hours > 0) {
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
      } else if (minutes > 0) {
        return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
      } else {
        return "Just now";
      }
    },
  },
};
</script>

<style scoped></style>
