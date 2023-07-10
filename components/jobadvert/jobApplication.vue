<template>
    <div
      @click.self="togglePost"
      :class="
        isPost
          ? 'text-[#3E3F5E] w-full z-[300] fixed inset-0 bg-black bg-opacity-70 h-full'
          : 'hidden'
      "
    >
      <div class="absolute inset-0 m-auto z-[10] w-[90%] sm:w-[400px] h-[80%]">
        <div class="w-full h-full bg-white rounded-md overflow-hidden pt-8 pb-2">
          <div
            @click="togglePost"
            class="w-[24px] h-[24px] absolute top-3 right-3"
          >
            <img src="/images/close.png" alt="" class="w-full h-full" />
          </div>
          <div class="w-full h-full overflow-auto p-2 scroll">
            <div class="form-group space-y-3">
              <label class="block form__label text-sm sm:text-[15px]" for=""
                >Title or Role</label
              >
              <input
                @change=""
                class="block form__input input-field"
                type="text"
                name=""
                placeholder=""
                v-model.trim="title"
              />
            </div>
            <div class="form-group space-y-3">
              <label class="block form__label text-sm sm:text-[15px]" for=""
                >Description</label
              >
              <input
                @change=""
                class="block form__input input-field"
                type="text"
                name=""
                placeholder=""
                v-model.trim="description"
              />
            </div>
            <div class="form-group space-y-3">
              <label class="block form__label text-sm sm:text-[15px]" for=""
                >Salary</label
              >
              <input
                @change=""
                class="block form__input input-field"
                type="number"
                name=""
                placeholder=""
                v-model.trim="salary"
              />
            </div>
            <div class="form-group space-y-3">
              <label class="block form__label text-sm sm:text-[15px]" for=""
                >Company Name</label
              >
              <input
                @change=""
                class="block form__input input-field"
                type="text"
                name=""
                placeholder=""
                v-model.trim="company"
              />
            </div>
            <div class="form-group space-y-3">
              <label class="block form__label text-sm sm:text-[15px]" for=""
                >Skills</label
              >
              <textarea
                v-model.trim="skills"
                class="
                  bg-white
                  text-[#3E3F5E]
                  border-zinc-700
                  rounded-lg
                  focus:outline-none
                  w-full
                  p-2
                  h-[130px]
                "
              ></textarea>
            </div>
            <div class="form-group space-y-3">
              <label class="block form__label text-sm sm:text-[15px]" for=""
                >Skills</label
              >
              <div
                class="
                  grid grid-cols-2
                  sm:grid-cols-3
                  gap-2
                  items-center
                  justify-center
                "
              >
                <label
                  v-for="(cat, index) in types"
                  :key="index"
                  class="container text-sm mr-1"
                >
                  {{ cat }}
                  <input
                    type="checkbox"
                    :checked="selectedtype === cat"
                    @change="selectedFn(cat)"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="form-group space-y-3">
              <label class="block form__label text-sm sm:text-[15px]" for=""
                >Experience</label
              >
              <input
                @change=""
                class="block form__input input-field"
                type="text"
                name=""
                placeholder="e.g 3 years"
                v-model.trim="expericence"
              />
            </div>
            <div class="form-group space-y-3">
              <label class="block form__label text-sm sm:text-[15px]" for=""
                >Application due date</label
              >
              <input
                @change=""
                class="block form__input input-field"
                type="date"
                name=""
                placeholder=""
                v-model.trim="duedate"
              />
            </div>
            <div class="form-group space-y-3">
              <label class="block form__label text-sm sm:text-[15px]" for=""
                >Location</label
              >
              <input
                @change=""
                class="block form__input input-field"
                type="text"
                name=""
                placeholder=""
                v-model.trim="location"
              />
            </div>
  
            <button
              @click="getUserInfo"
              class="
                rounded-md
                text-white
                p-2
                w-full
                font-medium
                bg-blue-900
                hover:bg-[#172554]
                border-0
              "
            >
              <span v-if="!isSubmit">Submit</span>
              <div v-else class="flex justify-center items-center">
                <div
                  class="
                    rounded-full
                    border-2
                    animate-spin
                    border-r-0 border-b-0
                    w-6
                    h-6
                    border-slate-50
                  "
                ></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- content -->
  </template>
  
  <script>
  import { HiringService } from "~/services";
  import { useAuthStore } from "~/store/auth";
  
  export default {
    props: ["togglePost", "isPost"],
    setup() {
      const { $toast } = useNuxtApp();
      const auth = useAuthStore();
      return {
        $toast,
        auth,
      };
    },
    data() {
      return {
        isSubmit: false,
        title: "",
        description: "",
        company: "",
        location: "",
        skills: "",
        expericence: "",
        duedate: "",
        salary: "",
        selectedtype: "",
        types: ["Full time", "Remote", "Part time", "Projec based", "Freelance"],
      };
    },
    methods: {
      selectedFn(cat) {
        this.selectedtype = cat;
        console.log(cat);
      },
      getUserInfo() {
        this.isSubmit = true;
        const formData = new FormData();
        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("company_name", this.company);
        formData.append("salary", this.salary);
        formData.append("location", this.location);
        formData.append("type", this.selectedtype);
        formData.append("skills", this.skills);
        formData.append("experience", this.expericence);
        formData.append("timeline", this.duedate);
        formData.append("location", this.location);
        //console.log(payload);
        HiringService.postJob(formData)
          .then((res) => {
            console.log(res);
            this.isSubmit = false;
            this.togglePost();
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .input-field {
    @apply border bg-white text-[#3E3F5E] border-zinc-700 rounded-lg focus:outline-none w-full h-8 sm:h-11 px-2;
  }
  
  label.label input[type="file"] {
    position: absolute;
    top: -1000px;
  }
  .label {
    cursor: pointer;
    margin-left: 3px;
    display: inline-block;
  }
  /* The container */
  .container {
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox rounded-full w-3 h-3 bg-black*/
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 15px;
    width: 15px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
  
  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: white;
  }
  
  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    @apply bg-[#172554];
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  </style>
  