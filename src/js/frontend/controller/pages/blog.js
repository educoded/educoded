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
		container = jQuery('.edx-page-full-content');
		for (var i = 0; i < 10; i++) {
			content = 	`<div class="edx-xs-100 edx-sm-100 edx-md-100 edx-lg-100">
							<div class="edx-blog-posts edx-wrapper">
								<div class="edx-xs-100 edx-sm-100 edx-md-50 edx-lg-50">
									<div class="edx-blog-posts-cover" style="background: url(https://picsum.photos/640/480/?image=`+i*10+`); background-size: cover; background-position: center center;">
										<div class="edx-blog-posts-overlay edx-wrapper">
											<div class="edx-blog-posts-cover-info">
												<div class="edx-blog-posts-cover-title">This is a title</div>
												<div class="edx-blog-posts-cover-author">mathew maione</div>
											</div>
										</div>
									</div>
								</div>
								<div class="edx-xs-100 edx-sm-100 edx-md-50 edx-lg-50">
									<div class="edx-blog-posts-content">
										<div class="edx-blog-posts-info">
											<div class="edx-blog-posts-title">This is a title</div>
											<div class="edx-blog-posts-author">Mathew Maione</div>
											<div class="edx-blog-posts-created">January 1, 2019</div>
										</div>
										<div class="edx-blog-posts-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
										</div>
										<a href="post.html">
											<div class="edx-blog-posts-btn edx-wrapper">read more</div>
										</a>
									</div>
								</div>
							</div>
							<div class="edx-blog-posts-break"></div>
						</div>`;
			container.append(content);
		}
	}

}