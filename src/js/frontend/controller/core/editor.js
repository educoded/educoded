var editorDebug;

class Editor {
	init(data) {
		//set editorDebug, for testing from console
		editorDebug = this;

		//set editor defaults, if they don't exist.
		//be explicit: don't use logical OR for defining defaults
		this.defaultTheme = data.theme===undefined?'ace/theme/monokai':data.theme;
		this.defaultMode = data.mode===undefined?'ace/mode/html':data.mode;
		this.defaultWrap = data.wrap===undefined?true:data.wrap;
		this.defaultMargin = data.margin===undefined?false:data.margin;
		this.defaultReadOnly = data.readonly===undefined?false:data.readonly;
		this.defaultCode = data.code===undefined?"<!-- Empty File -->":data.code;
		this.firstCode = data.firstCode===undefined?"<!-- Empty File -->":data.firstCode;

		this.container = jQuery("#"+data.id);

		this.tabs = [];
		this.lastTab=0;
		this.newTab();
		if(data.shadow) jQuery('.edx-editor-holder').addClass('shadow');
	}
	newTab(data={'id':'edx-editor-inst-'+this.tabs.length}){
			let content, thisTabId = this.tabs.length;
			data.id = 'edx-editor-inst-'+thisTabId;
			content = `<pre id="`+(data.id)+`" class="edx-editor"></pre>`;
			this.container.append(content);
			this.tabs.push(this.buildInstance(data));
			this.switchTabs(thisTabId);
	}
	killTab(id){
		this.tabs[id].destroy();
		jQuery("#edx-editor-inst-"+id).remove();
	}
	tabIsVisible(id){
		return jQuery("#edx-editor-inst-"+id).is(':visible');
	}
	switchTabs(toTab){
		for(var i=0;i<this.tabs.length;i++){
			if(i===toTab){
				jQuery("#edx-editor-inst-"+i).show();
			}else if(this.tabIsVisible(i)){
				jQuery("#edx-editor-inst-"+i).hide();
				this.lastTab=i;
			}
		}
	}
	switchToLastTab(){
		this.switchTabs(this.lastTab);
	}
	buildInstance(data) {
		let editor,length;

		editor = ace.edit(data.id);
		editor.setTheme(data.theme===undefined?this.defaultTheme:data.theme);
		editor.session.setMode(data.mode===undefined?this.defaultMode:data.mode);
		editor.session.setUseWrapMode(data.wrap===undefined?this.defaultWrap:data.wrap);
		editor.setShowPrintMargin(data.margin===undefined?this.defaultMargin:data.margin);
		editor.setValue(data.code===undefined?this.defaultCode:data.code);
		editor.setReadOnly(data.readonly===undefined?this.defaultReadOnly:data.readonly);
		if(data.focus) {
			length = editor.session.getLength();
			editor.gotoLine(length);
			editor.focus();
		}

		return editor;
	}

}
