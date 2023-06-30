import { apiRequest } from "../ofetch";

export default {
  //post job- HR
  async postJob(payload) {
    return await apiRequest("/hiring/jobadverts", {
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
  //view all posted jobs- HR
  async allPostedJobs() {
    return await apiRequest("/hiring/jobadverts", {
      method: "GET",
      headers: { Accept: "application/json" },
    });
  },
  // get a single posted jobs- HR
  async getSingleJob(id) {
    return await apiRequest(`/hiring/jobadverts/${id}`, {
        method: "GET",
        headers: { Accept: "application/json" },
    });
  },
  // get a single job- Applicants
  async browseSingleJob(id) {
    return await apiRequest(`/hiring/jobs/${id}`, {
        method: "GET",
        headers: { Accept: "application/json" },
    });
  },
  // applicants
  async applyforJob(payload) {
    return await apiRequest(`/hiring/jobapplications`, {
        method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    })
  },
  //single job applicants- HR
  async jobApplicants(jobId) {
    return await apiRequest(`/hiring/jobadverts/${jobId}/applications`, {
        method: "GET",
        headers: { Accept: "application/json" },
    })
  },
  //my jobs- applicants
  async appliedJobs() {
    return await apiRequest("/hiring/jobapplications", {
      method: "GET",
      headers: { Accept: "application/json" },
    })
  },
  //accept or reject applicants- HR
  async toggleStatus (id) {
    return await apiRequest(`/hiring/jobapplications/${id}`, {
      method: "PATCH",
      headers: { Accept: "application/json" },
    })

  }
};
