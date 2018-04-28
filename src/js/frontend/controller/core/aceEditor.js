class aceEditor {
	init(data) {
		this.data = data;
		if(data.id) {
			this.buildEditor();
		}
		else {
			jQuery('.edx-editor').addClass('edx-wrapper').html('<div class="edx-editor-error">ERROR</div>');
		}
	}

	buildEditor() {

		let data, editor, defaults, theme, mode, wrap, margin, code, readonly, shadow, length;

		// Editor Data
		data = this.data;

		// Editor Defaults
		defaults = {
			'theme':'ace/theme/monokai',
			'mode':'ace/mode/html',
			'code': '',
			'wrap':true,
			'margin':false,
			'focus':true,
			'readonly':false,
      'shadow':true
		};

    // data.setting.length will throw if data.setting doesn't exist; use === undefined
    // ternary operators use (conditional)?ifTrue:ifFalse
		theme = data.theme === undefined ? defaults.theme : data.theme; // set theme
		mode = data.mode === undefined ? defaults.mode : data.mode; // set mode
		wrap = data.wrap === undefined ? defaults.wrap : data.wrap; // set wrap
		margin = data.margin === undefined ? defaults.margin : data.margin; // set margin
		code = data.code === undefined ? defaults.code : data.code; // set code
		readonly = data.readonly === undefined ? defaults.readonly : data.readonly; // set readonly
		shadow = data.shadow === undefined ? defaults.shadow : data.shadow; // set template

		editor = ace.edit(data.id);
		editor.setTheme(theme);
		editor.session.setMode(mode);
		editor.session.setUseWrapMode(wrap);
		editor.setShowPrintMargin(margin);
		editor.setValue(code);
		editor.setReadOnly(readonly);

		if(data.focus) { length = editor.session.getLength(); editor.gotoLine(length); editor.focus(); }
		if(data.shadow) { jQuery('.edx-editor-app').addClass('shadow'); }

	}
}
