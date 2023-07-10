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
  // View all Jobs- Applicants
  async allJobs() {
    return await apiRequest("/hiring/jobs", {
      method: "GET",
      headers: { Accept: "application/json" },
    });
  },
 
};
