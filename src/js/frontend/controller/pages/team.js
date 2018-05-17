class Team {

	init() {
		this.template();
	}

	template() {
		this.cover();
		this.page();
	}

	cover() {
		let container, content, data;
		data = this.courseData;
		container = jQuery('.edx-page-cover');
		content = 	`<div class="edx-wrapper">
						<div class="edx-page-cover-titles">
							<div class="edx-page-cover-title">team</div>
							<div class="edx-page-cover-subtitle">we build stuff</div>
						</div>
					</div>`;
		container.html(content);
	}

	page() {
		let container, content;
		container = jQuery('.edx-page-full-content');
		content = 	`<div class="edx-xs-100 edx-sm-100 edx-md-100 edx-lg-100">
						<div class="edx-page-content">
							<div class="edx-team-members edx-wrapper">
								<div class="edx-xs-100 edx-sm-50 edx-md-33 edx-lg-25">
									<div class="edx-team-member">
										<div class="edx-team-member-image"></div>
										<div class="edx-team-member-info">
											<div class="edx-team-member-name edx-wrapper">mathew maione</div>
											<div class="edx-team-member-position edx-wrapper">Founder</div>
											<div class="edx-team-member-socials edx-wrapper">
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-instagram"></span>
												</div>
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-twitter"></span>
												</div>
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-github"></span>
												</div>
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-linkedin"></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="edx-xs-100 edx-sm-50 edx-md-33 edx-lg-25">
									<div class="edx-team-member">
										<div class="edx-team-member-image"></div>
										<div class="edx-team-member-info">
											<div class="edx-team-member-name edx-wrapper">sarah wilson</div>
											<div class="edx-team-member-position edx-wrapper">Director of Marketing</div>
											<div class="edx-team-member-socials edx-wrapper">
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-facebook"></span>
												</div>
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-instagram"></span>
												</div>
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-linkedin"></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="edx-xs-100 edx-sm-50 edx-md-33 edx-lg-25">
									<div class="edx-team-member">
										<div class="edx-team-member-image"></div>
										<div class="edx-team-member-info">
											<div class="edx-team-member-name edx-wrapper">ty</div>
											<div class="edx-team-member-position edx-wrapper">Office Pup</div>
											<div class="edx-team-member-socials edx-wrapper">
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-instagram"></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="edx-xs-100 edx-sm-50 edx-md-33 edx-lg-25">
									<div class="edx-team-member">
										<div class="edx-team-member-image"></div>
										<div class="edx-team-member-info">
											<div class="edx-team-member-name edx-wrapper">anonymous</div>
											<div class="edx-team-member-position edx-wrapper">1337 h4x0r</div>
											<div class="edx-team-member-socials edx-wrapper">
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-instagram"></span>
												</div>
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-twitter"></span>
												</div>
												<div class="edx-team-member-social edx-wrapper">
													<span class="fa fa-github"></span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}