class Editor {
	init(data) {
		this.data = data;
		//set editor defaults, if they don't exist.
		//be explicit: don't use logical OR for defining defaults
		this.defaultTheme = data.theme===undefined?'ace/theme/monokai':data.theme;
		this.defaultMode = data.mode===undefined?'ace/mode/html':data.mode;
		this.defaultWrap = data.wrap===undefined?true:data.wrap;
		this.defaultMargin = data.margin===undefined?false:data.margin;
		this.defaultReadonly = data.readonly===undefined?false:data.readonly;

		let container = jQuery("#"+data.id);

		this.tabs = [];
		// this.build();
		if($.trim(container.html())==''){
			this.newTab();
			if(data.shadow) jQuery('.edx-editor-holder').addClass('shadow');
		}else{
			container.empty();
			if(data.shadow) jQuery('.edx-editor-holder').removeClass('shadow');
		}
	}

	build(data) {

		let editor, length;
		if(data.id===){}else{
		editor = ace.edit(data.id);
		editor.setTheme(data.theme===undefined?this.defaultTheme:data.theme);
		editor.session.setMode(data.mode===undefined?this.defaultMode:data.mode);
		editor.session.setUseWrapMode(data.wrap===undefined?this.defaultWrap:data.wrap);
		editor.setShowPrintMargin(data.margin===undefined?this.defaultMargin:data.margin);
		editor.setReadonly(data.margin===undefined?this.defaultMargin:data.margin);
		if(data.focus) {
			length = editor.session.getLength();
			editor.gotoLine(length);
			editor.focus();
		}
		document.aces = editor;
		}
	}

	newTab(){
		this.build();
	}

}