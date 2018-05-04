class Home {

	init() {
		this.container = jQuery('.edx-page');
		this.template();
		this.editor();
		this.courses();
	}

	template() {
		let container, content;
		container = this.container;
		content = '<div class="edx-angled-sections"></div>'
		container.html(content);
		this.sections();
	}

	sections() {
		let container, content, sections;
		container = jQuery('.edx-angled-sections');
		sections = ['editor','courses'];
	    for (var i = 0; i < sections.length; i++) {
	    	content = `<div class="edx-section edx-angled-section edx-section-`+sections[i]+`"></div>`;
	    	container.append(content);
	    }
	    jQuery('.edx-section').first().addClass('edx-gradient');
	}

	editor() {
		let container, content, code, editor = new Editor();
		container = jQuery('.edx-section-editor');
		content = 	`<div class="edx-angled-section-wrapper edx-container">
						<div class="edx-editor-container">
							<div class="edx-wrapper edx-editor-wrapper">
								<div class="edx-xs-100 edx-sm-100 edx-md-75 edx-lg-75">
									<div class="edx-editor-app">
										<div class="edx-editor-holder active">
											<pre class="edx-editor" id="edx-homepage-editor"></pre>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);

		code = `<!DOCTYPE html>
<html lang="en">
	<head>
		<title>educoded</title>
		
		<!-- Main CSS -->
		<link rel="stylesheet" type="text/css" href="../src/css/frontend/main.css">
		<!-- RequireJS -->
		<script src="../src/js/frontend/require.js"></script>
	</head>
	<body class="edx-app edx-25">
		<script>
			requirejs(['../src/js/frontend/config'],function(){
				requirejs(['jQuery','ace','editor','app','user','home'],
				function (app, home) {
					var app = new App(), user = new User(), home = new Home();
					app.init();
					user.init();
					home.init();
				});
			});
		</script>
	</body>
</html>`;

		// initiate editor
		editor.init({
			'id':'edx-homepage-editor',
			'theme':'ace/theme/monokai',
			'mode':'ace/mode/html',
			'code':code,
			'wrap':true,
			'margin':false,
			'focus':true,
			'readonly':false,
			'template':'multiple',
			'shadow':false,
			'style':{
				'font-size':'11px'
			}
		});
	}

	courses() {
		let container, content;
		container = jQuery('.edx-section-courses');
		content = 	`<div class="edx-angled-section-wrapper edx-container">
						<div class="edx-wrapper">
							<div class="edx-xs-100 edx-sm-100 edx-md-100 edx-lg-100">
								<div class="edx-section-title">Most recent courses</div>
								<div class="edx-course-carousel owl-carousel owl-theme">
									<div class="item">
										<div class="edx-course-card edx-course-card-javascript">
											<div class="edx-course-card-cover edx-wrapper">
												<div class="edx-course-card-cover-titles">
													<div class="edx-course-card-cover-title">javascript</div>
													<div class="edx-course-card-cover-subtitle">console logging</div>
												</div>
											</div>
											<div class="edx-course-card-content">
												<div class="edx-course-card-description">Lorem ipsum dolor sit amet, no sit sonet corpora indoctum, quo ad fierent insolens. Duo aeterno ancillae ei.</div>
												<a href="course.html?id=w776reit">
													<div class="edx-course-card-link">view course</div>
												</a>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="edx-course-card edx-course-card-html">
											<div class="edx-course-card-cover edx-wrapper">
												<div class="edx-course-card-cover-titles">
													<div class="edx-course-card-cover-title">html</div>
													<div class="edx-course-card-cover-subtitle">headings and paragraphs</div>
												</div>
											</div>
											<div class="edx-course-card-content">
												<div class="edx-course-card-description">Lorem ipsum dolor sit amet, no sit sonet corpora indoctum, quo ad fierent insolens. Duo aeterno ancillae ei.</div>
												<a href="course.html?id=y86fr0wb">
													<div class="edx-course-card-link">view course</div>
												</a>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="edx-course-card edx-course-card-php">
											<div class="edx-course-card-cover edx-wrapper">
												<div class="edx-course-card-cover-titles">
													<div class="edx-course-card-cover-title">php</div>
													<div class="edx-course-card-cover-subtitle">comparing strings</div>
												</div>
											</div>
											<div class="edx-course-card-content">
												<div class="edx-course-card-description">Lorem ipsum dolor sit amet, no sit sonet corpora indoctum, quo ad fierent insolens. Duo aeterno ancillae ei.</div>
												<a href="course.html?id=n2zw4h90">
													<div class="edx-course-card-link">view course</div>
												</a>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="edx-course-card edx-course-card-css">
											<div class="edx-course-card-cover edx-wrapper">
												<div class="edx-course-card-cover-titles">
													<div class="edx-course-card-cover-title">css</div>
													<div class="edx-course-card-cover-subtitle">styling a page</div>
												</div>
											</div>
											<div class="edx-course-card-content">
												<div class="edx-course-card-description">Lorem ipsum dolor sit amet, no sit sonet corpora indoctum, quo ad fierent insolens. Duo aeterno ancillae ei.</div>
												<a href="course.html?id=d35k7fav">
													<div class="edx-course-card-link">view course</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.html(content);
		jQuery('.edx-course-carousel').owlCarousel({
		    loop: true,
		    margin: 5,
		    nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		    responsive:{
		        0:{ items:1 },
		        600:{ items:2 },
		        1000:{ items:3 }
		    }
		});
	}

}