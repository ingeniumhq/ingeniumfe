<template>
  <Head>
    <!-- <Title>{{ 'sdsdsdsd' }}</Title>
      <Meta name="description"  /> -->
    <Meta name="Content-Type" content="text/html; charset=utf-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Meta name="description" content="" />
    <Meta name="keywords" content="" />
    <Title>Ingenium | HR Professionals</Title>
    <link rel="icon" href="/images/fav.png" type="image/png" sizes="16x16">

    <Link rel="stylesheet" href="/css/main.min.css" />
    <Link rel="stylesheet" href="/css/style.css" />
    <Link rel="stylesheet" href="/css/color.css" />
    <Link rel="stylesheet" href="/css/responsive.css" />
    <Link rel="stylesheet" href="/grid/images-grid.css" />
    <!-- <Link rel="stylesheet" href="~assets/styles/css/tailwind.css" /> -->



  </Head>
  <div class="theme-layout">
    <!-- <div class="page-loader" id="page-loader">
            <div class="loader">
                <span class="loader-item"></span>
                <span class="loader-item"></span>
                <span class="loader-item"></span>
                <span class="loader-item"></span>
                <span class="loader-item"></span>
                <span class="loader-item"></span>
                <span class="loader-item"></span>
                <span class="loader-item"></span>
                <span class="loader-item"></span><span class="loader-item"></span>
            </div>
        </div> -->

    <ClientOnly>
      <main>

        <!-- responsive header -->

        <PartialsAppTopbar></PartialsAppTopbar>
        <!-- topbar header -->


        <PartialsAppSidebar></PartialsAppSidebar>
        <!-- nav sidebar -->


        <PartialsAppMenubar></PartialsAppMenubar>
        <!-- nav carousel menubar -->

        <PartialsMessagesList></PartialsMessagesList>


        <div id="allow-push-notification-bar" class="allow-push-notification-bar">
          <div class="content">
            <div class="text">
              Want to get notification from us?
            </div>
            <div class="buttons-more">
              <button @click="requestNotificationsPermissions()" type="button" class="ok-button button-1"
                id="allow-push-notification">
                Yes
              </button>
              <button type="button" class="ok-button button-1" id="close-push-notification">
                No
              </button>
            </div>
          </div>
        </div>

        <slot />

        <PartialsAppFooter></PartialsAppFooter>
        <!-- bottombar footer -->

        <ModalsInviteColleagueModal></ModalsInviteColleagueModal>
        <!-- invite colleague popup -->

        <!-- send message popup -->

        <!-- side slide message & popup -->

        <ModalsNewTimelinePostModal></ModalsNewTimelinePostModal>


        <!-- New post popup -->

        <!-- ask question -->

        <!-- auto popup -->

        <!-- share post -->
        <!--             
            <div class="cart-product">
              <a href="product-cart.html" title="View Cart" data-toggle="tooltip"><i class="icofont-cart-alt"></i></a>
              <span>03</span>
            </div> -->
        <!-- view cart button -->

        <!-- <div class="chat-live">
              <a class="chat-btn" href="#" title="Start Live Chat" data-toggle="tooltip"><i class="icofont-facebook-messenger"></i></a>
              <span>07</span>
            </div> -->
        <!-- chat button -->

        <!-- chat box -->

        <!-- create new room -->

        <!-- <ModalsImageModal></ModalsImageModal> -->
        <!-- The Scrolling Modal image with comment -->

      </main>
    </ClientOnly>


  </div>
</template>


<script setup lang="ts">
  import { nextTick } from "vue";

  import { initializeApp } from "firebase/app";
  import { getMessaging, getToken, onMessage } from "firebase/messaging";
  import { UserService } from "~/services";




  useHead({
    script: [

      {
        src: '/js/main.js',
        // body: true,
        class: 'mainscript'
        //   defer: true,
        //   async: false
      },
      {
        src: '/grid/images-grid.js',
        // body: true,
        class: 'gridscript'
      },
      {
        src: '/js/stickit.js',
        // body: true,
        class: 'stickit'
      },

      {
        src: '/js/date-time.js',
        body: true,
        //   async: false
      },

      {
        src: '/js/script.js',
        body: true,
        class: 'customscript'
        //   async: false,
        //   defer: true,
      },


    ],

    link: [
      { href: '/grid/images-grid.css' }
    ]


  })


  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.NUXT_FIREBASE_API_KEY,
    authDomain: config.NUXT_FIREBASE_AUTH_DOMAIN,
    projectId: config.NUXT_FIREBASE_PROJECT_ID,
    storageBucket: config.NUXT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.NUXT_FIREBASE_MESSAGING_SENDER_ID,
    appId: config.NUXT_FIREBASE_APPID_KEY,
    measurementId: config.NUXT_FIREBASE_MEASUREMENT_ID,
    databaseURL: config.NUXT_FIREBASE_DATABASE_URL,
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  // Saves the messaging device token to Cloud Firestore.
  async function saveMessagingDeviceToken() {
      // if (!auth.currentUser) return;
      const messaging = getMessaging(app);


      try {
        const currentToken = await getToken(messaging);
        if (currentToken) {
          console.log("Got FCM device token:", currentToken);
          // Saving the Device Token to Cloud Firestore.

          await UserService.updateAFCMToken({ fcm_token: currentToken }).then((res) => {
            console.log(res.message)
          })
          // This will fire when a message is received while the app is in the foreground.
          // When the app is in the background, firebase-messaging-sw.js will receive the message instead.

          onMessage(messaging, (message) => {
            console.log(
              "New foreground notification from Firebase Messaging!",
              message.notification
            );
          });
        } else {
          // Need to request permissions to show notifications.
          requestNotificationsPermissions();
        }
      } catch (error) {
        console.error("Unable to get messaging token.", error);
      }
  }



  // Requests permissions to show notifications.
  async function requestNotificationsPermissions() {


    console.log("Requesting notifications permission...");
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("Notification permission granted.");
      // Notification permission granted.
      await saveMessagingDeviceToken();
    } else {
      console.log("Unable to get permission to notify.");
    }
  }




  onMounted(() => {
    useHead({
      script: [
        {
          src: '/js/script.js',
          body: true,
          class: 'customscript'
        },
      ]
    })


    const { $listen } = useNuxtApp()
    $listen('dom-updated', (user: any) => {


      document.querySelectorAll(".customscript").forEach(el => el.remove());
      // document.querySelectorAll(".gridscript").forEach(el => el.remove());
      document.querySelectorAll(".mainscript").forEach(el => el.remove());



      // const gridscript = document.createElement('script')
      // gridscript.onload = () => { }
      // gridscript.src = '/grid/images-grid.js'
      // gridscript.className = 'gridscript'
      // document.body.appendChild(gridscript)

      const customscript = document.createElement('script')
      customscript.onload = () => { }
      customscript.src = '/js/script.js'
      customscript.className = 'customscript'
      document.body.appendChild(customscript)




      const mainscript = document.createElement('script')
      mainscript.onload = () => { }
      mainscript.src = '/js/main.js'
      mainscript.className = 'mainscript'
      document.body.appendChild(mainscript)









      console.log('dom-updated')
    })


    onMessage(function ({ data: { title, body, icon, image } }) {
      new Notification(title, { body, icon, image, requireInteraction: true, actions: [{ action: 'click', title: 'click here' }], vibrate: [200, 100, 200] });
    });


  })



  nextTick(() => {
    console.log('next tick')
    requestNotificationsPermissions()
  })  
</script>





