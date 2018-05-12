class Page {

	init(data) {
		this.data = data;
		this.buildTemplate();
	}

	buildTemplate() {
		let data, container, content;
		data = this.data;
		container = jQuery('.edx-page');
		content = 	`<!-- Start ~ `+data.name+` page -->
					<div class="edx-`+data.name+`"></div>
					<!-- End ~ `+data.name+` page -->`;
		container.html(content);
		this.buildLayout();
		this.buildObservers();
	}

	buildLayout() {
		let data, template;
		data = this.data;
		template = jQuery('.edx-'+data.name);
		for (var i = 0; i < data.layout.length; i++) {
			let layout, side = '';
			if(data.side) { side = 'edx-page-'+data.layout[i]+'-'+data.side; }
			layout = 	`<!-- Start ~ `+data.name+` page `+data.layout[i]+` -->
						<div class="edx-page-`+data.layout[i]+` `+side+` edx-`+data.name+`-`+data.layout[i]+` edx-25"></div>
						<!-- End ~ `+data.name+` page `+data.layout[i]+` -->`;
			template.append(layout);
			eval('this.build'+data.layout[i].charAt(0).toUpperCase()+data.layout[i].slice(1)+'();');
		}

	}

	buildCover() {
		setTimeout(function() {
			jQuery('.edx-page-cover').addClass('active');
		}, 1500);
	}

	buildSidebar() {
		var container, content;
		container = jQuery('.edx-page-sidebar');
		content = `<div class="edx-page-sidebar-container"></div>`;
		container.append(content);
	}

	buildToolbar() {
		var container, content;
		container = jQuery('.edx-page-toolbar');
		content =	`<div class="edx-page-toolbar-btn">
					    <div class="edx-wrapper">
					        <div class="edx-page-toolbar-line edx-25"></div>
					        <div class="edx-page-toolbar-line edx-25"></div>
					    </div>
					</div>`;
		container.append(content);
	}

	buildGrid() {
		let container, content;
		container = jQuery('.edx-page-grid');
		content = `<div class="edx-page-grid-content edx-wrapper"></div>`;
		container.html(content);
	}

	buildFull() {
		let container, content;
		container = jQuery('.edx-page-full');
		content = `<div class="edx-page-full-content edx-container edx-wrapper"></div>`;
		container.html(content);
	}

	buildObservers() {
		jQuery(document).scroll(function() {

			var pos, cover, sidebar, toolbar, grid;
    		pos = jQuery(this).scrollTop();
    		cover = jQuery('.edx-page-cover');
    		sidebar = jQuery('.edx-page-sidebar');
    		toolbar = jQuery('.edx-page-toolbar');
    		grid = jQuery('.edx-page-grid');

    		if(pos > cover.height() + 36) {
    			sidebar.addClass('active');
    			toolbar.addClass('active');
    		}
    		else {
    			sidebar.removeClass('active');
    			toolbar.removeClass('active');
    		}

    		if( jQuery('.edx-footer').isOnScreen() ) {
                sidebar.hide();
                toolbar.hide();
            }
            else {
                sidebar.css({'display':'flex'});
                toolbar.css({'display':'flex'});
            }

		});

		jQuery('.edx-page-toolbar-btn').on('click', function() {
			var width, sidebar, toolbar, grid;
            
            width = jQuery(window).width();
            sidebar = jQuery('.edx-page-sidebar');
            toolbar = jQuery('.edx-page-toolbar');
            grid = jQuery('.edx-page-grid');

            sidebar.toggleClass('moved');
            toolbar.toggleClass('moved');
            grid.toggleClass('moved');

		});

		function listSetup() {
            var width, sidebar, toolbar, grid;
            
            width = jQuery(window).width();
            sidebar = jQuery('.edx-page-sidebar');
            toolbar = jQuery('.edx-page-toolbar');
            grid = jQuery('.edx-page-grid');

            if(width < 1350) {
                sidebar.addClass('moved');
                toolbar.addClass('moved');
                grid.addClass('moved');
            }
            else {
                sidebar.removeClass('moved');
                toolbar.removeClass('moved');
                grid.removeClass('moved');
            }
        }

        listSetup();

        jQuery(window).resize(function() {
        	listSetup();
        });
	}

}