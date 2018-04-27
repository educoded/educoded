class Eduide {

/*---
	Presently a clone to home,
	this will be Mark's little playground to update Editor class
	without interfering too much with Mat's frontend.
---*/


	init() {
		this.container = jQuery('.edx-page');
		this.editor();
	}

	editor() {
		let container, content, code, editor = new Editor();
		container = this.container;
		content = 	`<div class="edx-container">
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


}