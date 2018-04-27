class Editor {

	init(data) {
		this.data = data;
		this.build();
	}

	build() {
		let data, editor, length;
		data = this.data;
		if(data.code) {
			let code;
			code = data.code.replace(/\</g,"&lt;");
			code = code.replace(/\>/g,"&gt;");
			jQuery('#'+data.id).html(code);
		}
		editor = ace.edit(data.id);
		editor.setTheme(data.theme);
		editor.session.setMode(data.mode);
		editor.session.setUseWrapMode(data.wrap);
		editor.setShowPrintMargin(data.margin);
		if(data.shadow) {
			jQuery('.edx-editor-holder').addClass('shadow');
		}
		if(data.focus) {
			length = editor.session.getLength();
			editor.gotoLine(length);
			editor.focus();
		}
	}

}