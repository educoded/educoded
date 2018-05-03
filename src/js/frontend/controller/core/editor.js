class Editor {

	init(data) {
		if(data.id) {
			this.data = data;
			this.buildEditor(data);
			switch(data.template) {
				case 'multiple':
					this.multipleEditor();
				break;
				case 'multiple-read-only':
					this.multipleReadEditor();
				break;
				default: 
					// add default stuff
				break;
			}
		}
		else {
			jQuery('.edx-editor').addClass('edx-wrapper').html('<div class="edx-editor-error">ERROR</div>');
		}
	}

	randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }

	buildEditor(data) {
		let editor, defaults, theme, mode, wrap, margin, code, readonly, template, length;
		
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

		theme = data.theme.length > 0 ? data.theme : defaults.theme; // set theme
		mode = data.mode.length > 0 ? data.mode : defaults.mode; // set mode
		wrap = data.wrap.length > 0 ? data.wrap : defaults.wrap; // set wrap
		margin = data.margin.length > 0 ? data.margin : defaults.margin; // set margin
		code = data.code.length > 0 ? data.code : defaults.code; // set code
		readonly = data.readonly.length > 0 ? data.readonly : defaults.readonly; // set readonly
		template = data.template.length > 0 ? data.template : defaults.template; // set template

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

	multipleEditor() {
		this.addOptions();
		this.addToolbar();
		this.addEditor();
		this.removeEditor();
		this.switchEditor();
	}

	multipleReadEditor() {
		this.addToolbar();
		this.buildMultiRead();
		this.switchEditor();
	}

	addToolbar() {
		let container, content, data;
		data = this.data;
		container = jQuery('.edx-editor-app');
		content = 	`<div class="edx-editor-toolbar edx-wrapper">
						<div class="edx-editor-tabs edx-wrapper">
							<div class="edx-editor-tab edx-wrapper active" data-tab="`+data.id+`">
								<svg class="edx-editor-tab-holder" width="110" height="24">
								    <polygon class="edx-editor-tab-svg" points="0 24,110 24,95 0,15 0"></polygon>
								</svg>
								<div class="edx-tab-title">tab.html</div>
								<div class="edx-editor-tab-close edx-25">x</div>
							</div>
						</div>
					</div>`;
		container.prepend(content);
		if(data.template === 'multiple') {
			jQuery('.edx-editor-toolbar').append('<div class="edx-editor-add edx-wrapper"><div>+</div></div>');
		}
	}

	addOptions() {
		let container, content, languages, api = new API();
		container = jQuery('.edx-editor-app');
		languages = api.popularLanguages();
		content = 	`<div class="edx-editor-options">
						<div class="edx-editor-options-close edx-wrapper">close</div>
						<div class="edx-editor-options-container edx-wrapper">
							<div class="edx-xs-100 edx-sm-50 edx-md-50 edx-lg-50">
								<div class="edx-editor-load edx-wrapper">
									<button>load editor</button>
								</div>
							</div>
							<div class="edx-xs-100 edx-sm-50 edx-md-50 edx-lg-50">
								<div class="edx-editor-options-content edx-wrapper">
									<div>
										<select class="edx-editor-option-lang"></select>
										<button class="edx-editor-add-options">add</button>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.prepend(content);
		for (var i = 0; i < languages.length; i++) {
			let option, data;
			data = languages[i];
			option = '<option data-value="'+data.value+'" data-ext="'+data.ext+'" value="'+data.path+'">'+data.name+'</option>';
			jQuery('.edx-editor-option-lang').append(option);
		}
	}

	addEditor() {
		jQuery('.edx-editor-add').on('click', function() {
			jQuery('.edx-editor-options').fadeIn();
		});
		jQuery('.edx-editor-options-close').on('click', function() {
			jQuery('.edx-editor-options').fadeOut();
		});
		jQuery('.edx-editor-add-options').on('click', function() {
			let data, container, content, selected, lang, ext, length, id, editor = new Editor();
			length = jQuery('.edx-editor-tab').length;
			selected = jQuery('.edx-editor-option-lang :selected');
			lang = selected.val();
			ext = selected.data('ext');
			if(length < 5) {
				id = editor.randomString(8, '0123456789abcdefghijklmnopqrstuvwxyz');
				container = jQuery('.edx-editor-tabs');
				content = 	`<div class="edx-editor-tab edx-wrapper active" data-tab="edx-editor-`+id+`">
								<svg class="edx-editor-tab-holder" width="110" height="24">
								    <polygon class="edx-editor-tab-svg" points="0 24,110 24,95 0,15 0"></polygon>
								</svg>
								<div class="edx-tab-title">tab.`+ext+`</div>
								<div class="edx-editor-tab-close edx-25">x</div>
							</div>`;
				data = {
					'id':'edx-editor-'+id,
					'theme':'ace/theme/monokai',
					'mode':lang,
					'code':'',
					'wrap':true,
					'margin':false,
					'focus':true,
					'readonly':false,
					'template':'multiple',
					'shadow':false,
					'style':{
						'font-size':'11px'
					}
				};
				jQuery('.edx-editor-holder, .edx-editor-tab').removeClass('active');
				container.append(content);
				jQuery('.edx-editor-app').append('<div class="edx-editor-holder active"><pre class="edx-editor" id="edx-editor-'+id+'"></pre></div>');
				editor.buildEditor(data);
				editor.removeEditor();
				editor.switchEditor();
				jQuery('.edx-editor-options').fadeOut();
			}
		});
	}

	buildMultiRead() {

	}

	removeEditor() {
		jQuery('.edx-editor-tab-close').on('click', function() {
			let item, tab, id, editor, length;
			item = jQuery(this);
			tab = item.closest('.edx-editor-tab');
			id = tab.data('tab');
			editor = jQuery('#'+id);
			length = jQuery('.edx-editor-tab').length;
			jQuery('.edx-editor-tab, .edx-editor-holder').removeClass('active');
			if(length > 1) {
				tab.remove();
				editor.parent().remove();
			}
			else {
				console.log('at least one tab must be available');
			}
			jQuery('.edx-editor-tab').first().addClass('active');
			jQuery('.edx-editor-holder').first().addClass('active');
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
			let item, tab, id;
			item = jQuery(this);
			tab = item.data('tab');
			jQuery('.edx-editor-tab, .edx-editor-holder').removeClass('active');
			jQuery('#'+tab).parent().addClass('active');
			item.addClass('active');
		});
	}

}