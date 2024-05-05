<template>
  <button class="btn-print" @click="onPrint()">Print</button>
  <div v-if="certificate">
    <!-- {{ certificate.course && certificate.course.type }} -->
    <template v-if="certificate.course.type != null">
      <div class="template">
        <div class="cert_name">{{ certificate.user.name }}</div>
        <div class="cert_ref">{{ certificate.reference }}</div>
        <div class="cert_date">
          {{ $dayjs(certificate.created_at).format("YYYY-MM-DD") }}
        </div>
        <img src="./cert_1.png" />
      </div>
    </template>
    <template v-else>
      <div id="printarea" class="certificate">
        <div class="header">
          <div class="certified">
            <div>
              <div>Verified</div>
              <div>Certificate</div>
              <div>
                {{
                  certificate.created_at &&
                  certificate.created_at.substring(0, 4)
                }}
              </div>
            </div>
            <img src="~/assets/images/certified.png" alt="" class="img-fluid" />
          </div>
          <div class="banner text-uppercase text-white h1">
            Certificate of Completion
          </div>
        </div>
        <div class="content">
          <img
            src="~/assets/images/ingenium-logo.png"
            alt=""
            class="ingenum-logo"
          />
          <div class="text">This Certificate is awarded to</div>
          <div class="user-name">{{ certificate.user.name }}</div>
          <div class="text">For The Successful Completion Of The</div>
          <div class="course-title">
            {{ certificate.course.title }}
          </div>
          <img src="~/assets/images/qrcode.png" alt="" class="qrcode" />
          <div class="signature py-3">
            <img
              src="~/assets/images/stamp.png"
              alt="Stamp"
              class="stamp"
              height="100"
            />
            <div class="text-center">
              <i class="sign">{{ "Jennifer Orode" }}</i>
              <hr />
              <div class="text trainer">{{ "Jennifer Orode" }}</div>
            </div>
          </div>
          <div class="text"> Ref. No: {{ certificate.reference }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "blank",
});
const { reference } = useRoute().params;
const certificate = ref(null);
import { CertificateService } from "~/services";
CertificateService.getCertificate(reference).then((data) => {
  certificate.value = data.data;
});

const onPrint = () => window.print();
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/best-signature-font");
.btn-print {
  position: fixed;
  top: 10px;
  right: calc(50% - 30px);
  padding: 5px 20px !important;
  background-color: #487be0;
  color: white;
  border-radius: 5px;
}

.template > .cert_name,
.template > .cert_date,
.template > .cert_ref {
  display: none;
}

@media print {
  /* body * {
    display: none;
  } */
  #printarea,
  #printarea * {
    display: block;
  }
  .btn-print {
    display: none !important;
  }

  .template > .cert_name,
  .template > .cert_date,
  .template > .cert_ref {
    display: inline;
  }

  .template > .cert_name {
    width: 100%;
    position: absolute;
    font-size: 40px;
    top: 40%;
    text-align: center;
  }

  .template > .cert_date {
    position: absolute;
    font-size: large;
    left: 20%;
    bottom: 19%;
  }
  
  .template > .cert_ref {
    position: absolute;
    font-size: large;
    left: 20%;
    bottom: 17%;
  }
}

@page {
  /* size: A4 landscape; */
  margin: 0;
}

.header {
  margin: 50px 0 0;
}
.banner {
  height: 120px;
  background-color: #050607;
  padding: 35px 100px !important;
  text-transform: uppercase;
  color: white;
  font-size: 2.5rem;
}
.certificate .content {
  padding: 25px 100px;
}
.certified {
  position: absolute;
  width: 180px;
  right: 100px;
  margin-top: -25px;
}
.certified > div {
  position: absolute;
  width: 180px;
  height: 180px;
  padding: 60px 0;
  align-items: center;
  font-size: 14px;
}
.certified > div > div {
  text-align: center;
  text-transform: uppercase;
  color: #a67f31;
  font-weight: bold;
}

.ingenum-logo {
  height: 100px;
  margin-bottom: 20px;
}
.user-name {
  color: #0043c6;
  font-size: 3.5em;
}
.course-title {
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 700;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 50%;
}
.signature {
  width: 350px;
}
.signature .sign {
  font-family: "Best Signature Font", sans-serif;
  text-decoration: line-through;
  font-size: x-large;
}
.signature hr {
  border-style: dotted;
}
.qrcode {
  position: absolute;
  right: 50px;
  bottom: 50px;
}
.text {
  text-transform: uppercase;
  padding: 1rem 0;
  font-size: 1.5rem;
}
.trainer {
  font-size: 2rem;
}
.stamp {
  padding: 1rem 0;
  margin-left: 1rem;
  float: right;
}
</style>
