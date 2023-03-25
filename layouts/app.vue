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
      <!-- <Link rel="stylesheet" href="~assets/styles/css/tailwind.css" /> -->


     
    </Head>
    <Body class="theme-layout">
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
            
            <!-- The Scrolling Modal image with comment -->

          </main>
        </ClientOnly>
        
    </Body>
</template>


<script setup lang="ts">
  useHead({
    script: [
    
      {
        src: '/js/main.min.js',
        body: true,
      //   defer: true,
      //   async: false
      },
      {
        src: '/js/date-time.js',
        body: true,
      //   async: false
      },
      {
        src: '/js/script.js',
        body: true,
      //   async: false,
      //   defer: true,
      },
    ]
  })

  onMounted(() => {
    useHead({
      script: [
        {
          src: '/js/script.js',
          // body: true,
        },
      ]
    })
  });
</script>

