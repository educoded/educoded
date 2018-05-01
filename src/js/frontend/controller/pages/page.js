class Page {

	init(data) {
		this.buildTemplate(data);
	}

	buildTemplate(page) {
		let template, container, content;
		container = jQuery('.edx-page');
		content = 	`<!-- Start ~ `+page.name+` page -->
					<div class="edx-`+page.name+`"></div>
					<!-- End ~ `+page.name+` page -->`;
		container.html(content);
		template = jQuery('.edx-'+page.name);
		for (var i = 0; i < page.layout.length; i++) {
			let layout;
			layout = 	`<!-- Start ~ `+page.name+` page `+page.layout[i]+` -->
						<div class="edx-page-`+page.layout[i]+` edx-page-`+page.layout[i]+`-`+page.side+` edx-`+page.name+`-`+page.layout[i]+` edx-25"></div>
						<!-- End ~ `+page.name+` page `+page.layout[i]+` -->`;
			template.append(layout);
			eval('this.build'+page.layout[i].charAt(0).toUpperCase()+page.layout[i].slice(1)+'();');
		}
		this.buildObservers();
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

	buildObservers() {
		jQuery(document).scroll(function() {

			var pos, cover, sidebar, toolbar;
    		pos = jQuery(this).scrollTop();
    		cover = jQuery('.edx-page-cover');
    		sidebar = jQuery('.edx-page-sidebar');
    		toolbar = jQuery('.edx-page-toolbar');

    		if(pos > cover.height()) {
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