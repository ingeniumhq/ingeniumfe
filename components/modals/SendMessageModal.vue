<template>
    <div class="popup-wraper">
				<div class="popup">
					<span class="popup-closed"><i class="icofont-close"></i></span>
					<div class="popup-meta">
						<div class="popup-head">
							<h5><i>
		<svg class="feather feather-message-square" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></i> Send Message</h5>
						</div>
						<div class="send-message">
							<form method="post" class="c-form">
								<input type="text" placeholder="Enter Name..">
								<input type="text" placeholder="Subject">
								<textarea placeholder="Write Message"></textarea>
								<div class="uploadimage">
									<i class="icofont-file-jpg"></i>
									<label class="fileContainer">
										<input type="file">Attach file
									</label>
								</div>
								<button type="submit" class="main-btn">Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
	<!-- send message popup -->
</template>