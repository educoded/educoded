class Eduide {

/*---
	Presently a clone to home,
	this will be Mark's little playground to update Editor class
	without interfering too much with Mat's frontend.
---*/


	init() {
		this.container = jQuery('.edx-page');

		let container, content, code, editor = new Editor();
		container = this.container;
		content = 	`<div class="edx-container">
						<div class="edx-editor-container">
							<div class="edx-wrapper edx-editor-wrapper">
								<div class="edx-xs-100 edx-sm-100 edx-md-75 edx-lg-75">
									<div class="edx-editor-holder">
										<div class="edx-editor" id="edx-course-editor"></div>
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

		<!-- HTML SAMPLE CODE -->

	</body>
</html>`;

		// initiate editor
		// editor.init({
		// 	'id':'edx-homepage-editor',
		// 	'theme':'ace/theme/monokai',
		// 	'mode':'ace/mode/html',
		// 	'code':code,
		// 	'wrap':true,
		// 	'margin':false,
		// 	'focus':true,
		// 	'style':{
		// 		'font-size':'11px'
		// 	}
		// });

		editor.init({
			'id':'edx-course-editor',
			'mode':'ace/mode/html'
		});
	}


}