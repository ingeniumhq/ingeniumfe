<template>
  <div v-if="certificate" id="printarea" class="certificate">
    <div class="header">
      <div class="certified">
        <div>
          <div>Verified</div>
          <div>Certificate</div>
          <div>
            {{
              certificate.created_at && certificate.created_at.substring(0, 4)
            }}
          </div>
        </div>
        <img src="~/assets/images/certified.png" alt="" class="img-fluid" />
      </div>
      <div class="banner text-uppercase text-white h1">
        Certificate of Excellence
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
          <i class="sign">{{ certificate.user.firstname }}</i>
          <hr />
          <div class="text trainer">{{ certificate.user.firstname }}</div>
        </div>
      </div>
    </div>
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
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/best-signature-font");
@media print {
  body * {
    display: none;
  }
  #printarea,
  #printarea * {
    display: block;
  }
}

@page {
  size: A4 landscape;
  margin: 0;
}

.header {
  margin: 50px 0 0;
}
.banner {
  height: 120px;
  background-color: #0043c6;
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
