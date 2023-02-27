import { defineStore } from 'pinia';
import { useAuthStore } from './auth';



export const useEventStore = defineStore('eventStore', {
  state: (): {
    isBusy: Boolean,
  } => ({
    isBusy: false,
  })
});


export {useAuthStore}