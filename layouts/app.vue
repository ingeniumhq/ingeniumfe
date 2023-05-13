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

    link:[
        {href: '/grid/images-grid.css'}
    ]
   
    
  })




  onMounted(() => {
    useHead({
      script: [
        {
          src: '/js/script.js',
          // body: true,
          class: 'customscript'
        },
    ]})


    const { $listen } = useNuxtApp()
    $listen('dom-updated', (user: any) => {

     
        document.querySelectorAll(".customscript").forEach(el => el.remove());
        // document.querySelectorAll(".mainscript").forEach(el => el.remove());

        const customscript = document.createElement('script')
        customscript.onload = () => { }

        // const mainscript = document.createElement('script')
        // mainscript.onload = () => { }

        // mainscript.src = '/js/main.js'
        // mainscript.className = 'mainscript'
        // document.body.appendChild(mainscript)

        customscript.src = '/js/script.js'
        customscript.className = 'customscript'
        document.body.appendChild(customscript)


        console.log('dom-updated')
    })

    
  })

    

  nextTick( () => {
    console.log('next tick')
  })
</script>

