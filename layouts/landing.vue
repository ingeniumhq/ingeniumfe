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
      <!-- <Link rel="stylesheet" href="/css/tailwind.css" /> -->

     
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
          <slot />
          </main>
        </ClientOnly>
      </div>
    <LoadSpinner key="{{useState('isBusy').value}}"/>
</template>


<script setup lang="ts">
  useHead({
    script: [
      {
        src: '/js/main.min.js',
        body: true
      },
      {
        src: '/js/script.js',
        body: true
      },
      // {
      //   src: '/js/counterup.min.js',
      //   body: true
      // },
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