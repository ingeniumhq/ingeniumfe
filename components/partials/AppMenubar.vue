<template>
  <section style="margin-top: 50px">
    <div class="white-bg">
      <div class="container-fluid">
        <div class="menu-caro">
          <div class="row">
            <div class="col-lg-2">
              <div class="sidemenu">
                <i>
                  <svg
                    id="side-menu"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-menu"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line></svg
                ></i>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="page-caro">
                <div class="link-item">
                  
                  <NuxtLink class="active" to="/timeline" title="">
                    
                   
                    <i class="">
                    Newsfeed
                      <!-- <svg
                        class="feather feather-zap"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                        />
                      </svg> -->
                    </i>
                    <p>Newsfeed</p>
                  </NuxtLink>
                </div>
                <!-- <div class="link-item">
											<a  href="#"  title="">
												
												<p>Videos</p>
                        <i class="">
													<svg xmlns="#" width="4" height="4"></svg>
												</i>
											</a>
										</div> -->
                <div class="link-item">
                  <NuxtLink class="active" to="/explore" title="">
                    <i class="">
                    Network
                      <!-- <svg
                        class="feather feather-layout"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          ry="2"
                          rx="2"
                          height="18"
                          width="18"
                          y="3"
                          x="3"
                        />
                        <line y2="9" x2="21" y1="9" x1="3" />
                        <line y2="9" x2="9" y1="21" x1="9" /></svg
                    > -->
                  </i>
                    <p>Network</p>
                  </NuxtLink>
                </div>
                <div class="link-item">
                  <NuxtLink class="active" to="/explore/events" title="">
                    <i class="">
                    Events
                      <!-- <svg
                        class="feather feather-layout"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          ry="2"
                          rx="2"
                          height="18"
                          width="18"
                          y="3"
                          x="3"
                        />
                        <line y2="9" x2="21" y1="9" x1="3" />
                        <line y2="9" x2="9" y1="21" x1="9" /></svg
                    > -->
                  </i>
                    <p>Events</p>
                  </NuxtLink>
                </div>
                <div class="link-item">
                  <NuxtLink class="active" to="/advert" title="">
                    <i class="">
                      Job Advert
                      <!-- <svg
                        class="feather feather-airplay"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                        />
                        <polygon points="12 15 17 21 7 21 12 15" /></svg
                    >-->
                  </i> 
                    <p>Job Advert</p>
                  </NuxtLink>
                </div>
                <!-- <div class="link-item">
											<a  href="#" title="">
												<i class="">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></i>
												<p>Books</p>
											</a>
										</div> -->
                <div class="link-item">
                  <NuxtLink class="active" href="/explore/blog" title="">
                    <i class="" >
                    Blogs
                       <!--<svg
                        class="feather feather-layout"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          ry="2"
                          rx="2"
                          height="18"
                          width="18"
                          y="3"
                          x="3"
                        />
                        <line y2="9" x2="21" y1="9" x1="3" />
                        <line y2="9" x2="9" y1="21" x1="9" /></svg
                    >-->
                  </i> 
                    <p>Blogs</p>
                  </NuxtLink>
                </div>
                <div class="link-item">
                  <!-- <a href="#" title="">
                    <i class="">
                      <svg
                        class="feather feather-users"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle r="4" cy="7" cx="9" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </i>
                    <p>Groups</p>
                  </a> -->
                </div>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="user-inf">
                <!-- <div class="folowerz">Followers: 204</div> -->
                <!-- <ul class="stars">
                  <li><i class="icofont-star"></i></li>
                  <li><i class="icofont-star"></i></li>
                  <li><i class="icofont-star"></i></li>
                  <li><i class="icofont-star"></i></li>
                  <li><i class="icofont-star"></i></li>
                </ul> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
