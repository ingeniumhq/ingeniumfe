import { apiRequest } from "../ofetch";

export default {
  //start a conversation- HR/Applicant
  async startConversation(payload) {
    return await apiRequest("/messages", {
      method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    });
  },
   //get messages- HR/Applicant
   async getConversations() {
    return await apiRequest("/messaging/conversations", {
      method: "GET",
      headers: { Accept: "application/json" },
    });
  },
    //get message detail- HR/Applicant
    async getConversationDetail(id) {
      return await apiRequest(`/messaging/conversations/${id}/messages`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
    },
     //get active connects- User
     async getConnections() {
      return await apiRequest(`/connect?status=active`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
    },
  // Delete a message
  async deleteMessage() {
    return await apiRequest(`/messages/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    });
  },
 
};
