class Sandbox {

	init() {
		this.container = jQuery('.edx-page-full-content');
		this.template();
		this.editor();
	}

	template() {
		let container, content;
		container = this.container;
		content = '<div class="edx-section-editor"></div>';
		container.html(content);
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
			'language':{
				'name':'html',
				'ext':'html'
			},
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

}