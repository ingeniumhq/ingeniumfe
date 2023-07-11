import { defineStore } from "pinia";
export const chatStore = defineStore("chatStore", {
  state: () => ({
    chats: null,
  }),

  getters: {
    getChats: (state) => state.chats,
  },

  actions: {
    // get a single chat detail
    setChats(data) {
      this.chats = data.reverse();
      console.log("from store", this.chats);
    },
  },

  persist: {
    beforeRestore: (ctx) => {
      console.log(`about to restore '${ctx.store.$id}'`);
    },

    afterRestore: (ctx) => {
      console.log(`just restored '${ctx.store.$id}'`);
    },

    paths: ["chats"],
  },
});
