<template>
    <div class="new-question-popup">
				<div class="popup">
					<span class="popup-closed"><i class="icofont-close"></i></span>
					<div class="popup-meta">
						<div class="popup-head">
							<h5><i>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></i> Ask Question</h5>
						</div>
						<div class="post-new">
							<form method="post" class="c-form">
								
								<input type="text" placeholder="Question Title">
								<textarea placeholder="Write Question"></textarea>
								
								<select>
									<option>Select Your Question Type</option>
									<option>Article</option>
									<option>Book</option>
									<option>Chapter</option>
									<option>Code</option>
									<option>conference Paper</option>
									<option>Cover Page</option>
									<option>Data</option>
									<option>Exprement Finding</option>
									<option>Method</option>
									<option>Poster</option>
									<option>Preprint</option>
									<option>Technicial Report</option>
									<option>Thesis</option>
									<option>Research</option>
								</select>
								<div class="uploadimage">
									<i class="icofont-eye-alt-alt"></i>
									<label class="fileContainer">
										<input type="file">Upload File
									</label>
								</div>
								
								<button type="submit" class="main-btn">Post</button>
							</form>
						</div>
					</div>
				</div>
			</div>
</template>