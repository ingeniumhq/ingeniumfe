
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/

if(process.client){
    const config = useRuntimeConfig()

    firebase.initializeApp({
        apiKey: config.NUXT_FIREBASE_API_KEY,
        authDomain: config.NUXT_FIREBASE_AUTH_DOMAIN,
        projectId: config.NUXT_FIREBASE_PROJECT_ID,
        storageBucket: config.NUXT_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: config.NUXT_FIREBASE_MESSAGING_SENDER_ID,
        appId: config.NUXT_FIREBASE_APPID_KEY,
        measurementId: config.NUXT_FIREBASE_MEASUREMENT_ID,
        databaseURL: config.NUXT_FIREBASE_DATABASE_URL,
     });
     
     
     const messaging = firebase.messaging();
     messaging.setBackgroundMessageHandler(function({data:{title,body,icon,image}}) {
         return self.registration.showNotification(title, {body, icon, image,  requireInteraction: true, actions: {title: 'Click here'}, vibrate: true});
     });

}



