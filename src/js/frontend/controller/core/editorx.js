class Editorx {
	init(data) {
		if(data.id) {
			this.data = data;
			this.buildEditor(data);
			if(data.template === 'multiple') { this.multipleEditor(); }
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
								<div class="edx-tab-title">tab</div>
								<div class="edx-editor-tab-close edx-25">x</div>
							</div>
						</div>
						<div class="edx-editor-add edx-wrapper"><div>+</div></div>
					</div>`;
		container.prepend(content);
	}

	addOptions() {
		let container, content;
		container = jQuery('.edx-editor-app');
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
										<select class="edx-editor-option-lang"><option value="ace/mode/abap">ABAP</option><option value="ace/mode/abc">ABC</option><option value="ace/mode/actionscript">ActionScript</option><option value="ace/mode/ada">ADA</option><option value="ace/mode/apache_conf">Apache Conf</option><option value="ace/mode/asciidoc">AsciiDoc</option><option value="ace/mode/asl">ASL</option><option value="ace/mode/assembly_x86">Assembly x86</option><option value="ace/mode/autohotkey">AutoHotKey</option><option value="ace/mode/batchfile">BatchFile</option><option value="ace/mode/bro">Bro</option><option value="ace/mode/c_cpp">C and C++</option><option value="ace/mode/c9search">C9Search</option><option value="ace/mode/cirru">Cirru</option><option value="ace/mode/clojure">Clojure</option><option value="ace/mode/cobol">Cobol</option><option value="ace/mode/coffee">CoffeeScript</option><option value="ace/mode/coldfusion">ColdFusion</option><option value="ace/mode/csharp">C#</option><option value="ace/mode/csound_document">Csound Document</option><option value="ace/mode/csound_orchestra">Csound</option><option value="ace/mode/csound_score">Csound Score</option><option value="ace/mode/css">CSS</option><option value="ace/mode/curly">Curly</option><option value="ace/mode/d">D</option><option value="ace/mode/dart">Dart</option><option value="ace/mode/diff">Diff</option><option value="ace/mode/dockerfile">Dockerfile</option><option value="ace/mode/dot">Dot</option><option value="ace/mode/drools">Drools</option><option value="ace/mode/edifact">Edifact</option><option value="ace/mode/eiffel">Eiffel</option><option value="ace/mode/ejs">EJS</option><option value="ace/mode/elixir">Elixir</option><option value="ace/mode/elm">Elm</option><option value="ace/mode/erlang">Erlang</option><option value="ace/mode/forth">Forth</option><option value="ace/mode/fortran">Fortran</option><option value="ace/mode/ftl">FreeMarker</option><option value="ace/mode/gcode">Gcode</option><option value="ace/mode/gherkin">Gherkin</option><option value="ace/mode/gitignore">Gitignore</option><option value="ace/mode/glsl">Glsl</option><option value="ace/mode/gobstones">Gobstones</option><option value="ace/mode/golang">Go</option><option value="ace/mode/graphqlschema">GraphQLSchema</option><option value="ace/mode/groovy">Groovy</option><option value="ace/mode/haml">HAML</option><option value="ace/mode/handlebars">Handlebars</option><option value="ace/mode/haskell">Haskell</option><option value="ace/mode/haskell_cabal">Haskell Cabal</option><option value="ace/mode/haxe">haXe</option><option value="ace/mode/hjson">Hjson</option><option value="ace/mode/html">HTML</option><option value="ace/mode/html_elixir">HTML (Elixir)</option><option value="ace/mode/html_ruby">HTML (Ruby)</option><option value="ace/mode/ini">INI</option><option value="ace/mode/io">Io</option><option value="ace/mode/jack">Jack</option><option value="ace/mode/jade">Jade</option><option value="ace/mode/java">Java</option><option value="ace/mode/javascript">JavaScript</option><option value="ace/mode/json">JSON</option><option value="ace/mode/jsoniq">JSONiq</option><option value="ace/mode/jsp">JSP</option><option value="ace/mode/jssm">JSSM</option><option value="ace/mode/jsx">JSX</option><option value="ace/mode/julia">Julia</option><option value="ace/mode/kotlin">Kotlin</option><option value="ace/mode/latex">LaTeX</option><option value="ace/mode/less">LESS</option><option value="ace/mode/liquid">Liquid</option><option value="ace/mode/lisp">Lisp</option><option value="ace/mode/livescript">LiveScript</option><option value="ace/mode/logiql">LogiQL</option><option value="ace/mode/lsl">LSL</option><option value="ace/mode/lua">Lua</option><option value="ace/mode/luapage">LuaPage</option><option value="ace/mode/lucene">Lucene</option><option value="ace/mode/makefile">Makefile</option><option value="ace/mode/markdown">Markdown</option><option value="ace/mode/mask">Mask</option><option value="ace/mode/matlab">MATLAB</option><option value="ace/mode/maze">Maze</option><option value="ace/mode/mel">MEL</option><option value="ace/mode/mixal">MIXAL</option><option value="ace/mode/mushcode">MUSHCode</option><option value="ace/mode/mysql">MySQL</option><option value="ace/mode/nix">Nix</option><option value="ace/mode/nsis">NSIS</option><option value="ace/mode/objectivec">Objective-C</option><option value="ace/mode/ocaml">OCaml</option><option value="ace/mode/pascal">Pascal</option><option value="ace/mode/perl">Perl</option><option value="ace/mode/pgsql">pgSQL</option><option value="ace/mode/php">PHP</option><option value="ace/mode/pig">Pig</option><option value="ace/mode/powershell">Powershell</option><option value="ace/mode/praat">Praat</option><option value="ace/mode/prolog">Prolog</option><option value="ace/mode/properties">Properties</option><option value="ace/mode/protobuf">Protobuf</option><option value="ace/mode/python">Python</option><option value="ace/mode/r">R</option><option value="ace/mode/razor">Razor</option><option value="ace/mode/rdoc">RDoc</option><option value="ace/mode/red">Red</option><option value="ace/mode/rhtml">RHTML</option><option value="ace/mode/rst">RST</option><option value="ace/mode/ruby">Ruby</option><option value="ace/mode/rust">Rust</option><option value="ace/mode/sass">SASS</option><option value="ace/mode/scad">SCAD</option><option value="ace/mode/scala">Scala</option><option value="ace/mode/scheme">Scheme</option><option value="ace/mode/scss">SCSS</option><option value="ace/mode/sh">SH</option><option value="ace/mode/sjs">SJS</option><option value="ace/mode/smarty">Smarty</option><option value="ace/mode/snippets">snippets</option><option value="ace/mode/soy_template">Soy Template</option><option value="ace/mode/space">Space</option><option value="ace/mode/sql">SQL</option><option value="ace/mode/sqlserver">SQLServer</option><option value="ace/mode/stylus">Stylus</option><option value="ace/mode/svg">SVG</option><option value="ace/mode/swift">Swift</option><option value="ace/mode/tcl">Tcl</option><option value="ace/mode/tex">Tex</option><option value="ace/mode/text">Text</option><option value="ace/mode/textile">Textile</option><option value="ace/mode/toml">Toml</option><option value="ace/mode/tsx">TSX</option><option value="ace/mode/twig">Twig</option><option value="ace/mode/typescript">Typescript</option><option value="ace/mode/vala">Vala</option><option value="ace/mode/vbscript">VBScript</option><option value="ace/mode/velocity">Velocity</option><option value="ace/mode/verilog">Verilog</option><option value="ace/mode/vhdl">VHDL</option><option value="ace/mode/wollok">Wollok</option><option value="ace/mode/xml">XML</option><option value="ace/mode/xquery">XQuery</option><option value="ace/mode/yaml">YAML</option><option value="ace/mode/django">Django</option></select>
										<button class="edx-editor-add-options">add</button>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.prepend(content);
	}

	addEditor() {
		jQuery('.edx-editor-add').on('click', function() {
			jQuery('.edx-editor-options').fadeIn();
		});
		jQuery('.edx-editor-options-close').on('click', function() {
			jQuery('.edx-editor-options').fadeOut();
		});
		jQuery('.edx-editor-add-options').on('click', function() {
			let data, container, content, selected, lang, ext, length, id, editor = new Editorx();
			length = jQuery('.edx-editor-tab').length;
			selected = jQuery('.edx-editor-option-lang :selected');
			lang = selected.val();
			ext = selected.data('ext');
			console.log(lang);
			if(length < 5) {
				id = editor.randomString(8, '0123456789abcdefghijklmnopqrstuvwxyz');
				container = jQuery('.edx-editor-tabs');
				content = 	`<div class="edx-editor-tab edx-wrapper active" data-tab="edx-editor-`+id+`">
								<svg class="edx-editor-tab-holder" width="110" height="24">
								    <polygon class="edx-editor-tab-svg" points="0 24,110 24,95 0,15 0"></polygon>
								</svg>
								<div class="edx-tab-title">tab</div>
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