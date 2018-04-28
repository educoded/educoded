class Editor {
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

		let data, editor, defaults, theme, mode, wrap, margin, code, readonly, template, length;

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
			'template':'single'
		};

		theme = data.theme.length > 0 ? defaults.theme : data.theme; // set theme
		mode = data.mode.length > 0 ? defaults.mode : data.mode; // set mode
		wrap = data.wrap.length > 0 ? defaults.wrap : data.wrap; // set wrap
		margin = data.margin.length > 0 ? defaults.margin : data.margin; // set margin
		code = data.code.length > 0 ? data.code : defaults.code; // set code
		readonly = data.readonly.length > 0 ? defaults.readonly : data.readonly; // set readonly
		template = data.template.length > 0 ? defaults.template : data.template; // set template

		editor = ace.edit(data.id);
		editor.setTheme(theme);
		editor.session.setMode(mode);
		editor.session.setUseWrapMode(wrap);
		editor.setShowPrintMargin(margin);
		editor.setValue(code);
		editor.setReadOnly(readonly);

		if(data.focus) { length = editor.session.getLength(); editor.gotoLine(length); editor.focus(); }
		if(data.shadow) { jQuery('.edx-editor-app').addClass('shadow'); }
		if(data.template === 'multiple') { this.multipleEditor(); }

		this.loadEditor();
		this.saveEditor();

	}

	multipleEditor() {



		this.addEditor();
		this.removeEditor();
		this.switchEditor();

	}

	addEditor() {
		console.log('add editor');
	}

	removeEditor() {
		jQuery('.edx-editor-tab-close').on('click', function() {
			let item, tab, length;
			item = jQuery(this);
			tab = item.closest('.edx-editor-tab');
			length = jQuery('.edx-editor-tab').length;
			if(length > 1) {
				tab.remove();
				if(tab.hasClass('active')) {
					jQuery('.edx-editor-tab:nth-child(1)').addClass('active');
				}
			}
			else {
				console.log('at least one tab must be available');
			}
		});
	}

	loadEditor() {
		console.log('load editor');
	}

	saveEditor() {
		console.log('save editor');
	}

	switchEditor() {
		jQuery('.edx-editor-tab').on('click', function() {
			let item, tab;
			item = jQuery(this);
			tab = item.data('tab');
			jQuery('.edx-editor-tab').removeClass('active');
			item.addClass('active');
			console.log(tab);
		});
	}
}
