class Blog {

	init() {
		this.template();
	}

	template() {
		this.cover();
		this.grid();
	}

	cover() {
		let container, content, data;
		data = this.courseData;
		container = jQuery('.edx-page-cover');
		content = 	`<div class="edx-wrapper">
						<div class="edx-page-cover-titles">
							<div class="edx-page-cover-title">blog</div>
							<div class="edx-page-cover-subtitle">stuff we write</div>
						</div>
					</div>`;
		container.html(content);
	}

	grid() {
		let container, content;
		container = jQuery('.edx-page-grid-content');
		for (var i = 0; i < 10; i++) {
			content = 	`<div class="edx-xs-100 edx-sm-100 edx-md-50 edx-lg-50">
							<div class="edx-blog-post">
								<div class="edx-blog-post-cover">
									<div class="edx-blog-post-overlay edx-wrapper edx-15">
										<div class="edx-blog-post-title edx-15">This is a title</div>
									</div>
								</div>
							</div>
						</div>`;
			container.append(content);
		}
	}

}