<template>
  <div class="theme-layout">

  
    <header class="transparent">
      <div class="topbar">
        <div class="logo"><img src="/images/logo.png" alt=""><span>Ingenium</span></div>
       
        <ul>
          <li>
            <a v-if="isLoggedIn"  class="join-butn" href="/timeline" title="">My Profile</a>
            <a v-else  class="join-butn" href="/timeline" title="">Get Started</a>
          </li>
          <!-- <li><a href="#" title="">help</a></li> -->
          <!-- <li><a href="#" title=""><img src="/images/flags/US.png" alt=""></a></li> -->
          <!-- <li><a href="/auth/signin" title="">Login / Register</a></li> -->
        </ul>
      </div>
    </header>

    <nav class="sidebar">
      <ul class="menu-slide ps-container ps-theme-default ps-active-y" data-ps-id="90b40338-7e88-ab98-e438-513ecd0544db">
        <li class="active menu-item-has-children">
          <a class="" href="#" title="">
            <i><svg id="icon-home" class="feather feather-home" stroke-linejoin="round" stroke-linecap="round"
                stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  style="stroke-dasharray: 66, 86; stroke-dashoffset: 0;"></path>
                <path d="M9,22L9,12L15,12L15,22" style="stroke-dasharray: 26, 46; stroke-dashoffset: 0;"></path>
              </svg></i> Home
          </a>
          <ul class="submenu">
            <li><a href="index.html" title="">Newsfeed</a></li>
            <li><a href="company-home.html" title="">Company Home</a></li>
            <li><a href="profile-page2.html" title="">User Profile</a></li>
            <li><a href="profile.html" title="">Student User Profile</a></li>
            <li><a href="groups.html" title="">Groups</a></li>
            <li><a href="group-detail.html" title="">Group Detail</a></li>
            <li><a href="post-detail.html" title="">Social Post Detail</a></li>
            <li><a href="messages.html" title="">Chat/Messages</a></li>
            <li><a href="notifications.html" title="">Notificatioins</a></li>
            <li><a href="search-result.html" title="">Search Result</a></li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <a class="" href="#" title="">
            <i class=""><svg id="ab7" class="feather feather-zap" stroke-linejoin="round" stroke-linecap="round"
                stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M13,2L3,14L12,14L11,22L21,10L12,10L13,2Z"
                  style="stroke-dasharray: 66, 86; stroke-dashoffset: 0;"></path>
              </svg></i> Features
          </a>
          <ul class="submenu">
            <li><a href="videos.html" title="">Videos</a></li>
            <li><a href="live-stream.html" title="">Live Stream</a></li>
            <li><a href="event-page.html" title="">Events Page</a></li>
            <li><a href="event-detail.html" title="">Event Detail</a></li>
            <li><a href="Q-A.html" title="">QA</a></li>
            <li><a href="Q-detail.html" title="">QA Detail</a></li>
            <li><a href="help-faq.html" title="">Support Help</a></li>
            <li><a href="help-faq-detail.html" title="">Support Detail</a></li>
          </ul>
        </li>

        <li class="menu-item-has-children">
          <a class="" href="#" title="">
            <i class="">
              <svg id="ab5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-shopping-bag">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                  style="stroke-dasharray: 71, 91; stroke-dashoffset: 0;"></path>
                <path d="M3,6L21,6" style="stroke-dasharray: 18, 38; stroke-dashoffset: 0;"></path>
                <path d="M16 10a4 4 0 0 1-8 0" style="stroke-dasharray: 13, 33; stroke-dashoffset: 0;"></path>
              </svg></i> Market Place
          </a>
          <ul class="submenu">
            <li><a href="books.html" title="">Books</a></li>
            <li><a href="book-detail.html" title="">Books Detail</a></li>
            <li><a href="courses.html" title="">Course</a></li>
            <li><a href="course-detail.html" title="">course Detail</a></li>
            <li><a href="add-new-course.html" title="">Add New Course</a></li>
            <li><a href="product-cart.html" title="">Cart Page</a></li>
            <li><a href="product-checkout.html" title="">Checkout</a></li>
            <li><a href="add-credits.html" title="">Add Credit</a></li>
            <li><a href="pay-out.html" title="">Payouts</a></li>
            <li><a href="price-plan.html" title="">Pricing Plans</a></li>
            <li><a href="invoice.html" title="">Invoice</a></li>
            <li><a href="thank-you.html" title="">Thank you Page</a></li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <a class="" href="#" title="">
            <i class=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-coffee">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </i> Blogs
          </a>
          <ul class="submenu">
            <li><a href="blog.html" title="">Blog</a></li>
            <li><a href="blog-detail.html" title="">Blog Detail</a></li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <a class="" href="#" title="">
            <i><svg id="ab8" class="feather feather-file" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"
                stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                  style="stroke-dasharray: 66, 86; stroke-dashoffset: 76;"></path>
                <path d="M13,2L13,9L20,9" style="stroke-dasharray: 14, 34; stroke-dashoffset: 24;"></path>
              </svg></i> Featured Pages
          </a>
          <ul class="submenu">
            <li><a href="404.html" title="">Error 404</a></li>
            <li><a href="coming-soon.html" title="">Coming Soon</a></li>
            <li><a href="send-feedback.html" title="">Send Feedback</a></li>
            <li><a href="badges.html" title="">Badges</a></li>
            <li><a href="thank-you.html" title="">Thank You</a></li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <a class="" href="#" title="">
            <i class="">
              <svg id="ab9" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-lock">
                <path width="18" height="11" d="M3 11 L21 11 L21 22 L3 22 Z"
                  style="stroke-dasharray: 58, 78; stroke-dashoffset: 68;"></path>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" style="stroke-dasharray: 24, 44; stroke-dashoffset: 34;"></path>
              </svg></i> Authentications
          </a>
          <ul class="submenu">
            <li><a href="sign-in.html" title="">Sign In</a></li>
            <li><a href="signup.html" title="">Sign Up</a></li>
            <li><a href="forgot-password.html" title="">Forgot Password</a></li>
          </ul>
        </li>
        <li class="">
          <a class="" href="about-university.html" title="">
            <i><svg id="ab1" class="feather feather-users" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"
                stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                  style="stroke-dasharray: 25, 45; stroke-dashoffset: 35;"></path>
                <path d="M5,7A4,4 0,1,1 13,7A4,4 0,1,1 5,7" style="stroke-dasharray: 26, 46; stroke-dashoffset: 36;">
                </path>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" style="stroke-dasharray: 8, 28; stroke-dashoffset: 18;"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" style="stroke-dasharray: 11, 31; stroke-dashoffset: 21;"></path>
              </svg></i> University Profile
          </a>
        </li>
        <li class="">
          <a class="" href="messages.html" title="">
            <i class="">
              <svg class="feather feather-message-square" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"
                stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14"
                xmlns="http://www.w3.org/2000/svg" id="ab2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  style="stroke-dasharray: 68, 88; stroke-dashoffset: 78;"></path>
              </svg></i> Live Chat
          </a>
        </li>
        <li class="">
          <a class="" href="privacy-n-policy.html" title=""><i class="">
              <svg id="ab4" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-airplay">
                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                  style="stroke-dasharray: 51, 71; stroke-dashoffset: 61;"></path>
                <path d="M12,15L17,21L7,21L12,15Z" style="stroke-dasharray: 26, 46; stroke-dashoffset: 36;"></path>
              </svg></i> Privacy Polices
          </a>
        </li>
        <li class="">
          <a class="" href="settings.html" title=""><i class="">

              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-settings">
                <circle cx="12" cy="12" r="3"></circle>
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                </path>
              </svg></i> Web Settings
          </a>
        </li>
        <li class="menu-item-has-children">
          <a class="#" href="#" title="">
            <i class="">
              <svg id="team" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-smile">
                <path d="M2,12A10,10 0,1,1 22,12A10,10 0,1,1 2,12"
                  style="stroke-dasharray: 63, 83; stroke-dashoffset: 73;"></path>
                <path d="M8 14s1.5 2 4 2 4-2 4-2" style="stroke-dasharray: 10, 30; stroke-dashoffset: 20;"></path>
                <path d="M9,9L9.01,9" style="stroke-dasharray: 1, 21; stroke-dashoffset: 11;"></path>
                <path d="M15,9L15.01,9" style="stroke-dasharray: 1, 21; stroke-dashoffset: 11;"></path>
              </svg></i> Development Tools
          </a>
          <ul class="submenu">
            <li><a href="widgets.html" title="">Widgets Collection</a></li>
            <li><a href="development-component.html" title="">Web Component</a></li>
            <li><a href="development-elements.html" title="">Web Elements</a></li>
            <li><a href="loader-spiners.html" title="">Loader Spiners</a></li>
          </ul>
        </li>

        <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
          <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
        </div>
        <div class="ps-scrollbar-y-rail" style="top: 0px; height: 237px; right: 0px;">
          <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 117px;"></div>
        </div>
      </ul>
    </nav><!-- nav sidebar -->

    <section>
      <div class="gap overlap nogap mate-black low-opacity">
        <div class="bg-image" style="background-image: url(/images/resources/slider3.jpg)"></div>
        <div class="feature-meta">
          
          <h1 style="font-size:40px">You’ve Got The Dream, <span>We’ve Got The Team!</span> </h1>
          <h3><span>Hire the best talents. Discover the perfect job</span><span class="typed-cursor"></span></h3>
       
          <a v-if="isLoggedIn"  title="Goto App" class="main-btn" data-ripple="" href="/timeline" >Goto App</a>
          <a v-else  title="Join Now" class="main-btn" data-ripple="" href="/timeline" >Join Now</a>
        </div>
      </div>
    </section>

    <section class="">
      <div class="gap no-bottom grey-bg nogap">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="info-sec">
                <i class="icofont-checked"></i>
                <div>
                  <h6>Learn from industry experts</h6>
                  <p>Share your research, collaborate with your peers, and get the support you need to advance your
                    career.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="info-sec">
                <i class="icofont-play-alt-1"></i>
                <div>
                  <h6>Find video Course of any topic</h6>
                  <p>Share your research, collaborate with your peers, and get the support you need to advance your
                    career.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="info-sec">
                <i class="icofont-clock-time"></i>
                <div>
                  <h6>Go at your own pace</h6>
                  <p>Share your research, collaborate with your peers, and get the support you need to advance your
                    career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="d-none">
      <div class="gap no-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner-full">
                <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="funfact-counter">
                      <i class="icofont-air-ticket"></i>
                      <span class="counter">599</span>
                      <em>Researchers</em>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="funfact-counter">
                      <i class="icofont-network"></i>
                      <span class="counter">299</span>
                      <em>Registered user</em>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="funfact-counter">
                      <i class="icofont-network-tower"></i>
                      <span class="counter">600</span>
                      <em>Active People</em>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="funfact-counter">
                      <i class="icofont-microphone-alt"></i>
                      <span class="counter">12</span>
                      <em>Post Published</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- funfacts -->

    <section class="d-none">
      <div class="gap no-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-7">
              <div class="verticle-center">
                <div class="measure">
                  <i class="icofont-light-bulb"></i>
                  <h2>Get Matched</h2>
                  <p>
                    Gain visibility and connect based on shared experiences
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-5">
              <figure class="side-image">
                <img src="/images/resources/research-avatar.jpg" alt="">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-5">
              <figure class="side-image">
                <img src="/images/resources/research-avatar2.jpg" alt="">
              </figure>
            </div>
            <div class="col-lg-7 col-md-7">
              <div class="verticle-center">
                <div class="measure right">
                  <i class="icofont-connection"></i>
                  <h2>Africa's Premier Customer Service Learning Platform</h2>
                  <p>
                    Looking to streamline your customer service operations and connect with trained professionals in the industry? Download the Ingenium Academy app to explore new opportunities and gain access to a wealth of resources designed to help you deliver exceptional customer experiences.

                    <!-- <a href="#" title="">Engineering</a>
                    <a href="#" title="">mathamatic</a>
                    <a href="#" title="">biology</a>
                    <a href="#" title="">computer science</a>
                    <a href="#" title="">climate</a>
                    <a href="#" title="">medicine</a>
                    <a href="#" title="">Physics</a>
                    <a href="#" title="">sociology</a>
                    <a href="#" title="">chemistry</a>
                    <a href="#" title="">astrophysics</a> -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="">
      <div class="gap">
        <div class="container">
          <div class="row remove-ext30">
            <div class="col-lg-12">
              <div class="title">
                <h1>Core Values</h1>
                <p>Our Core Values.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="blog-grid">
                <figure><img src="/images/resources/blog.jpg" alt=""></figure>
                <div class="blog-meta">
                  <div class="blog-head">
                    
                    <!-- <a href="#" title="" class="date">06 Aug</a> -->
                    <h4 class="blog-title"><a href="#" title="">Collaboration</a></h4>
                    <p>We believe in the power of collaboration and sharing of knowledge and experiences to achieve our common goal of improving customer service quality in Africa</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="blog-grid">
                <figure><img src="/images/resources/blog2.jpg" alt=""></figure>
                <div class="blog-meta">
                  <div class="blog-head">
                   
                    <h4 class="blog-title"><a href="#" title="">Excellence</a></h4>
                    <p>We strive to provide our users with the highest quality resources, tools, and services. We hold ourselves to the highest standards and are dedicated to exceptional results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="blog-grid">
                <figure><img src="/images/resources/blog3.jpg" alt=""></figure>
                <div class="blog-meta">
                  <div class="blog-head">
                    
                    <h4 class="blog-title"><a href="#" title="">Innovation</a></h4>
                    <p>We encourage creativity and embrace original ideas. We are constantly seeking new and better ways to connect professionals, provide training resources and improve the customer experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- events -->

    <section>
      <div class="gap no-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="newsletter-sec">
                <figure><img src="/images/news-icon.png" alt=""></figure>
                <div class="leter-meta">
                  <span>Join us on our mission to revolutionize Africa's customer service industry.</span>
                  <h3>subscribe now</h3>
                </div>
                <form method="post">
                  <input type="text" placeholder="Email @">
                  <button type="submit" class="main-btn" data-ripple=""><i class="icofont-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <footer>
      <div class="gap">
        <div class="bg-image" style="background-image: url(/images/resources/footer-bg.png)"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="web-info">
                <div class="logo"><img src="/images/logo.png" alt=""><span>Ingenium</span></div>
                <p>Subscribe our newsletter for getting notifications and alerts</p>
                <div class="contact-little">
                  <span><i class="icofont-phone-circle"></i> +234 803 660 4417</span>
                  <span><i class="icofont-email"></i> hello@theingeniumapp.com</span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="widget">
                <div class="widget-title">
                  <h4>Company</h4>
                </div>
                <ul class="quick-links">
                  <li><a href="#" title="">About Us</a></li>
                  <li><a href="#" title="">Career</a></li>
                  <li><a href="#" title="">Privacy</a></li>
                  <li><a href="#" title="">Terms</a></li>
                  <li><a href="#" title="">FAQ</a></li>
                  <li><a href="#" title="">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="widget">
                <div class="widget-title">
                  <h4>Quick Links</h4>
                </div>
                <ul class="quick-links">
                  <li><a href="#" title="">Product</a></li>
                  <li><a href="#" title="">Market</a></li>
                  <li><a href="#" title="">Courses</a></li>
                  <li><a href="#" title="">Services</a></li>
                  <li><a href="#" title="">Enterprise</a></li>
                  <li><a href="#" title="">Sitemap</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6">
              <div class="widget">
                <div class="widget-title">
                  <h4>Follow Us</h4>
                </div>
                <ul class="quick-links">
                  <li><a href="#" title=""><i class="icofont-facebook"></i>facebook</a></li>
                  <li><a href="#" title=""><i class="icofont-twitter"></i>twitter</a></li>
                  <li><a href="#" title=""><i class="icofont-instagram"></i>instagram</a></li>
                  <li><a href="#" title=""><i class="icofont-google-plus"></i>google +</a></li>
                  <li><a href="#" title=""><i class="icofont-whatsapp"></i>whatsapp</a></li>
                  <li><a href="#" title=""><i class="icofont-reddit"></i>reddit</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="widget">
                <div class="widget-title">
                  <h4>Newsletter</h4>
                </div>
                <div class="news-lettr">
                  <form class="newsletter">
                    <input type="text" placeholder="Email Address">
                    <button type="submit"><i class="icofont-paper-plane"></i></button>
                  </form>
                  <p>
                    it is a long established fact that a reader will be distracted by.
                  </p>
                  <h5>Download App</h5>
                  <div class="flex">
                    <a href="#" title=""><img src="/images/android.png" alt=""></a>
                    <a href="#"  class="mx-2" title=""><img src="/images/apple.png" alt=""></a>
                    <a href="#" title=""><img src="/images/windows.png" alt=""></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer><!-- footer -->

    <div class="bottombar">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <span class="">© copyright All rights reserved by theingeniumapp 2023</span>
          </div>
        </div>
      </div>
    </div><!-- bottombar -->

  </div>
</template>


<script setup>
definePageMeta({
  layout: 'landing'
})

</script>


<script >
import { useAuthStore } from '~/store';
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const script = document.createElement('script')
      script.onload = () => { }
      script.src = '/js/script.js'
      document.head.appendChild(script)
    })
  },

  data() {
		return {
			authUser: {},
			isLoggedIn: false
		}
	},
	


  mounted() {
    this.authUser = useAuthStore().authUser
    this.isLoggedIn = useAuthStore().isLoggedIn
  },
}
</script>