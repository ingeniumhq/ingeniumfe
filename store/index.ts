import { defineStore } from 'pinia';
import { useAuthStore } from './auth';
import { chatStore } from './chats';


export const useEventStore = defineStore('eventStore', {
  state: (): {
    isBusy: Boolean,
  } => ({
    isBusy: false,
  })
});


export {useAuthStore, chatStore}