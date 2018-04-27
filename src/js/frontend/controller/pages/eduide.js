class Eduide {

/*---
	Presently a clone to home,
	this will be Mark's little playground to update Editor class
	without interfering too much with Mat's frontend.
---*/


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
	}

	editor() {
		let container, content, code, editor = new Editor();
		container = jQuery('.edx-section-editor');
		content = 	`<div class="edx-angled-section-wrapper edx-container">
						<div class="edx-editor-container">
							<div class="edx-wrapper edx-editor-wrapper">
								<div class="edx-xs-100 edx-sm-100 edx-md-75 edx-lg-75">
									<div class="edx-editor-holder">
										<pre class="edx-editor" id="edx-homepage-editor"></pre>
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
	</head>
	<body class="edx-app">

		<!-- Main CSS -->
		<link rel="stylesheet" type="text/css" href="../src/css/frontend/main.css">

		<!-- RequireJS -->
		<script data-main="../src/js/frontend/config" src="../src/js/frontend/require.js"></script>

		<script>
			requirejs(['libs/jquery.min','libs/ace/ace','controller/app','controller/core/user','controller/core/editor','controller/pages/home'],
			function (app, home) {
				var app = new App(), user = new User(), home = new Home();
				app.init();
				user.init();
		    	home.init();
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
			'read-only':false,
			'shadow':true,
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
							</div>
							<div class="edx-xs-100 edx-sm-50 edx-md-33 edx-lg-33">
								<div class="edx-course-card edx-course-card-javascript">
									<div class="edx-course-card-cover edx-wrapper">
										<div class="edx-course-card-cover-titles">
											<div class="edx-course-card-cover-title">javascript</div>
											<div class="edx-course-card-cover-subtitle">console logging</div>
										</div>
									</div>
									<div class="edx-course-card-content">
										<div class="edx-course-card-description">Lorem ipsum dolor sit amet, no sit sonet corpora indoctum, quo ad fierent insolens. Duo aeterno ancillae ei.</div>
									</div>
								</div>
							</div>
							<div class="edx-xs-100 edx-sm-50 edx-md-33 edx-lg-33">
								<div class="edx-course-card edx-course-card-html">
									<div class="edx-course-card-cover edx-wrapper">
										<div class="edx-course-card-cover-titles">
											<div class="edx-course-card-cover-title">html</div>
											<div class="edx-course-card-cover-subtitle">headings and paragraphs</div>
										</div>
									</div>
									<div class="edx-course-card-content">
										<div class="edx-course-card-description">Lorem ipsum dolor sit amet, no sit sonet corpora indoctum, quo ad fierent insolens. Duo aeterno ancillae ei.</div>
									</div>
								</div>
							</div>
							<div class="edx-xs-100 edx-sm-50 edx-md-33 edx-lg-33">
								<div class="edx-course-card edx-course-card-php">
									<div class="edx-course-card-cover edx-wrapper">
										<div class="edx-course-card-cover-titles">
											<div class="edx-course-card-cover-title">php</div>
											<div class="edx-course-card-cover-subtitle">comparing strings</div>
										</div>
									</div>
									<div class="edx-course-card-content">
										<div class="edx-course-card-description">Lorem ipsum dolor sit amet, no sit sonet corpora indoctum, quo ad fierent insolens. Duo aeterno ancillae ei.</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.html(content);
	}

}