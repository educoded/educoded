class Home {

	init() {
		this.container = jQuery('.edx-app');
		this.template();
	}

	template() {
		let container, content, editor;
		container = this.container;
		content = 	`<div class="edx-container">
						<div class="edx-wrapper">
							<div class="edx-xs-100 edx-sm-100 edx-md-75 edx-lg-75">
								<div class="edx-editor">
									<pre id="editor">// lets start coding :-)

</pre>
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
	    editor.gotoLine(3);
	    editor.focus();
	    // editor.setReadOnly(true);
	}

}