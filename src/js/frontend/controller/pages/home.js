class Home {

	init() {
		this.container = jQuery('.edx-page');
		this.template();
	}

	template() {
		let container, content, editor;
		container = this.container;
		content = 	`<div class="edx-container edx-editor-container">
						<div class="edx-wrapper edx-editor-wrapper">
							<div class="edx-xs-100 edx-sm-100 edx-md-75 edx-lg-75">
								<div class="edx-editor">
									<pre id="editor"></pre>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		editor = ace.edit("editor");
		editor.setTheme("ace/theme/monokai");
		editor.session.setMode("ace/mode/javascript");
	    editor.session.setUseWrapMode(true);
	    editor.setShowPrintMargin(false);
	    document.getElementById('editor').style.fontSize='11px';
	    editor.focus();
	    jQuery('.edx-editor-btn').on('click', function() {
	    	let data = editor.getValue();
	    	console.log(data);
	    	if(data === "let x = 'test';") {
	    		jQuery('.edx-editor-sidebar-completion').html('Great job, that was correct!');
	    	}
	    	else {
	    		jQuery('.edx-editor-sidebar-completion').html('Nope, not the right answer.');
	    	}
	    });
	    // editor.setReadOnly(true);
	}

}