class App {

	init() {

		this.container = jQuery('.edx-app');
		this.header();
		this.page();
		this.footer();

	}

	header() {

		let container, content;
		container = this.container;
		content = 	`<!-- Start ~ Header -->
					<div class="edx-header">
						<div class="edx-header-top edx-wrapper">
							<div class="edx-header-top-info edx-wrapper">info@educoded.com</div>
							<div class="edx-header-top-cta edx-wrapper">Learn something new</div>
							<div class="edx-header-top-social edx-wrapper">
								<div class="edx-header-top-social-list edx-wrapper">
									<div class="edx-header-top-social-item edx-wrapper">
										<span class="fa fa-facebook"></span>
									</div>
									<div class="edx-header-top-social-item edx-wrapper">
										<span class="fa fa-instagram"></span>
									</div>
									<div class="edx-header-top-social-item edx-wrapper">
										<span class="fa fa-youtube"></span>
									</div>
									<div class="edx-header-top-social-item edx-wrapper">
										<span class="fa fa-twitter"></span>
									</div>
									<div class="edx-header-top-social-item edx-wrapper">
										<span class="fa fa-github"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="edx-header-main edx-wrapper">
							<div class="edx-header-logo">
								<div class="edx-header-logo-container edx-wrapper">
									<div class="edx-logo edx-wrapper">
										<img src="https://s3-us-west-2.amazonaws.com/weed-express/media/educoded-crop.png">
									</div>
								</div>
							</div>
							<div class="edx-header-menu edx-wrapper">
								<div class="edx-header-menu-container">
									<div class="edx-header-menu-list edx-wrapper">
										<div class="edx-header-menu-item">about</div>
										<div class="edx-header-menu-item">courses</div>
										<div class="edx-header-menu-item">blog</div>
									</div>
								</div>
							</div>
							<div class="edx-header-sidebar">
								<div class="edx-header-sidebar-container edx-wrapper">=</div>
							</div>
						</div>
					</div>
					<!-- End ~ Header -->`;
		container.append(content);

	}

	page() {

		let container, content;
		container = this.container;
		content = 	`<!-- Start ~ Page -->
					<div class="edx-page"></div>
					<!-- End ~ Page -->`;
		container.append(content);

	}

	footer() {

		let container, content;
		container = this.container;
		content = 	`<!-- Start ~ Footer -->
					<div class="edx-footer"></div>
					<!-- End ~ Footer -->`;
		container.append(content);

	}

}