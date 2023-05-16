<template>
	<aside class="sidebar static left">
		<!-- <div class="widget whitish low-opacity">
			<img src="/images/time-clock.png" alt="">
			<div class="bg-image" style="background-image: url(/images/resources/time-bg.jpg)"></div>
			<div class="date-time">
				<div class="realtime">
					<span id="hours">00</span>
					<span id="point">:</span>
					<span id="min">00</span>
				</div>
				<span id="date"></span>
			</div>
		</div> -->
		<div class="widget">
			<h4 class="widget-title">Complete Your Profile</h4>
			<span>Your Profile is missing followings!</span>
			<!-- <div data-progress="tip" class="progress__outer" data-value="0.67">
				<div class="progress__inner">82%</div>
			</div> -->
			<ul class="prof-complete">
				<li><i class="icofont-plus-square"></i> <a href="#" title="">Upload Your Picture</a><em>10%</em></li>
				<li><i class="icofont-plus-square"></i> <a href="#" title="">Your University?</a><em>20%</em></li>
				<li><i class="icofont-plus-square"></i> <a href="#" title="">Add Payment Method</a><em>20%</em></li>
				<NuxtLink to="/usr/settings" class="main-btn full-width text-center accent_color" title="" data-ripple="">Setup Profile</NuxtLink>
			</ul>
		</div><!-- complete profile widget -->

		

		<!-- advertisement -->
		<div class="advertisment-box d-none">
			<h4 class=""><i class="icofont-info-circle"></i> advertisment</h4>
			<figure>
				<a href="#" title="Advertisment"><img src="/images/resources/ad-widget2.gif" alt=""></a>
			</figure>
		</div><!-- adversment widget -->

		<div class=" d-none widget d-none">
			<h4 class="widget-title"><i class="icofont-flame-torch"></i> Popular Courses</h4>
			<ul class="premium-course">
				<li>
					<figure>
						<img src="/images/resources/course-5.jpg" alt="">
						<span class="tag">Free</span>
					</figure>
					<div class="vid-course">
						<h5><a href="course-detail.html" title="">Wordpress Online video course</a></h5>
						<ins class="price">$19/M</ins>
					</div>
				</li>
				<li>
					<figure>
						<img src="/images/resources/course-3.jpg" alt="">
						<span class="tag">Premium</span>
					</figure>
					<div class="vid-course">
						<h5><a href="course-detail.html" title="">Node JS Online video course</a></h5>
						<ins class="price">$29/M</ins>
					</div>
				</li>
			</ul>
		</div><!-- popular courses -->
		
		<div class="widget">
			<ComposeRecentBlogWidget></ComposeRecentBlogWidget>
		</div>
		<!-- recent blog -->

		
		<div class="widget">
			<h4 class="widget-title">Your profile has a new Experience section</h4>
			<p>
				Showcase your professional experience and education to help potential employers and collaborators find and
				contact you about career opportunities.
			</p>
			<NuxtLink to="/usr/me" class="main-btn" href="#" title="" data-ripple="">view profile</NuxtLink>
		</div><!-- your profile -->
		<div class="d-none widget web-links stick-widget">
			<h4 class="widget-title">Useful Links <a title="" href="#" class="see-all">See All</a></h4>
			<ul>
				<li><i class="icofont-dotted-right"></i> <a title="" href="#">about</a></li>
				<li><i class="icofont-dotted-right"></i> <a title="" href="#">career</a></li>
				<li><i class="icofont-dotted-right"></i> <a title="" href="#">advertise</a></li>
				<li><i class="icofont-dotted-right"></i> <a title="" href="#">socimo Apps</a></li>
				<li><i class="icofont-dotted-right"></i> <a title="" href="#">socimo Blog</a></li>
				<li><i class="icofont-dotted-right"></i> <a title="" href="#">Help</a></li>
				<li><i class="icofont-dotted-right"></i> <a title="" href="#">socimo Gifts</a></li>
				<li><i class="icofont-dotted-right"></i> <a title="" href="#">content policy</a></li>
				<li><i class="icofont-dotted-right"></i> <a title="" href="#">User Policy</a></li>
			</ul>
			<p>&copy; Ingenium 2023. All Rights Reserved.</p>
		</div><!-- links -->
	</aside>
</template>