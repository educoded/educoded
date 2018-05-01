class App {

	init() {

		this.app = jQuery('.edx-app');
		this.header();
		this.sidebar();
		this.page();
		this.footer();
		this.checkApp();
		this.onScreen();

	}

	header() {

		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Header -->
					<div class="edx-header"></div>
					<!-- End ~ Header -->`;
		container.append(content);
		this.head = jQuery('.edx-header');
		this.headerTop();
		this.headerMain();

	}

	headerTop() {
		let container, content;
		container = this.head;
		content = 	`<div class="edx-header-top edx-wrapper">
						<div class="edx-header-top-info edx-wrapper">info@educoded.com</div>
						<div class="edx-header-top-cta edx-wrapper">Learn something new</div>
						<div class="edx-header-top-social edx-wrapper">
							<div class="edx-header-top-social-list edx-wrapper">
								<div class="edx-header-top-social-item edx-wrapper">
									<span class="fa fa-facebook"></span>
								</div>
								<div class="edx-header-top-social-item edx-wrapper">
									<span class="fa fa-instagram"></span>
								</div>
								<div class="edx-header-top-social-item edx-wrapper">
									<span class="fa fa-youtube"></span>
								</div>
								<div class="edx-header-top-social-item edx-wrapper">
									<span class="fa fa-twitter"></span>
								</div>
								<div class="edx-header-top-social-item edx-wrapper">
									<span class="fa fa-github"></span>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	headerMain() {
		let container, content;
		container = this.head;
		content = 	`<div class="edx-header-main edx-wrapper">
						<div class="edx-header-logo">
							<a href="home.html">
								<div class="edx-header-logo-container edx-wrapper">
									<div class="edx-logo edx-wrapper">
										<img src="https://s3-us-west-2.amazonaws.com/weed-express/media/educoded-crop.png">
									</div>
								</div>
							</a>
						</div>
						<div class="edx-header-menu edx-wrapper"></div>
						<div class="edx-header-sidebar">
							<div class="edx-header-sidebar-container edx-wrapper">
								<div class="edx-header-sidebar-lines edx-wrapper">
								    <div class="edx-header-sidebar-line"></div>
								    <div class="edx-header-sidebar-line"></div>
								    <div class="edx-header-sidebar-line"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		this.headerMenu();
	}

	headerMenu() {
		let container, content, list;
		list = [
			{'title':'about','path':'about'},
			{'title':'courses','path':'courses'},
			{'title':'blog','path':'blog'}
		];
		container = jQuery('.edx-header-menu');
		content = 	`<div class="edx-header-menu-container">
						<div class="edx-header-menu-list edx-wrapper"></div>
					</div>`;
		container.html(content);
		for (var i = 0; i < list.length; i++) {
			var data, item;
			data = list[i];
			item = 	`<div class="edx-header-menu-item">
						<a href="`+data.path+`.html">`+data.title+`</a>
					</div>`;
			jQuery('.edx-header-menu-list').append(item);
		}
	}

	sidebar() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Sidebar -->
					<div class="edx-sidebar-container">
						<div class="edx-sidebar edx-25">
							<div class="edx-sidebar-menu edx-wrapper"></div>
							<div class="edx-sidebar-content"></div>
						</div>
						<div class="edx-sidebar-overlay"></div>
					</div>
					<!-- End ~ Sidebar -->`;
		container.append(content);
		this.sidebarSections();
		this.sidebarControls();
	}

	sidebarSections() {
		let container, content, menu, title, sections;
		container = jQuery('.edx-sidebar-content');
		menu = jQuery('.edx-sidebar-menu');
		sections = ['profile','settings','menu'];
		for (var i = 0; i < sections.length; i++) {
			title = `<div class="edx-sidebar-menu-item" data-name="`+sections[i]+`">`+sections[i]+`</div>`;
			content = 	`<div class="edx-sidebar-section edx-sidebar-section-`+sections[i]+`">
							<div class="edx-sidebar-section-cover edx-wrapper">
								<div class="edx-sidebar-section-title">`+sections[i]+`</div>
							</div>
							<div class="edx-sidebar-section-content edx-sidebar-`+sections[i]+`-content"></div>
						</div>`;
			menu.append(title);
			container.append(content);
		}
		menu.append('<div class="edx-sidebar-menu-item edx-sidebar-close">close</div>');
		jQuery('.edx-sidebar-menu-item').on('click', function() {
			let item, name;
			item = jQuery(this);
			name = item.data('name');
			jQuery('.edx-sidebar-menu-item, .edx-sidebar-section').removeClass('active');
			item.addClass('active');
			jQuery('.edx-sidebar-section-'+name).addClass('active');
		});
		this.sidebarSettings();
	}

	sidebarProfile() {
		let container, content;
		container = jQuery('.edx-sidebar-section-profile');
	}

	sidebarSettings() {
		let container, content;
		container = jQuery('.edx-sidebar-section-settings .edx-sidebar-section-content');
		content = 	`<div class="edx-sidebar-section-settings-list">
						<div class="edx-sidebar-section-settings-item">
							<div class="edx-sidebar-section-settings-title">test</div>
							<div class="edx-sidebar-section-settings-block">on / off</div>
						</div>
						<div class="edx-sidebar-section-settings-item">
							<div class="edx-sidebar-section-settings-title">test</div>
							<div class="edx-sidebar-section-settings-block">on / off</div>
						</div>
						<div class="edx-sidebar-section-settings-item">
							<div class="edx-sidebar-section-settings-title">test</div>
							<div class="edx-sidebar-section-settings-block">on / off</div>
						</div>
					</div>`;
		container.append(content);
	}

	sidebarMenu() {
		let container, content;
		container = jQuery('.edx-sidebar-section-menu');
	}

	sidebarControls() {
		let app = new App();
		
		// open sidebar
		jQuery('.edx-header-sidebar').on('click', function() {
			app.sidebarOpen();
		});

		// close sidebar
		jQuery('.edx-sidebar-overlay, .edx-sidebar-close').on('click', function() {
			app.sidebarClose();
		});

	}

	sidebarOpen() {
		jQuery('.edx-sidebar, .edx-sidebar-menu-item:first-child, .edx-sidebar-section:first-child').addClass('active');
		jQuery('body').addClass('edx-sidebar-opened');
		jQuery('.edx-sidebar-overlay').fadeIn();
	}

	sidebarClose() {
		jQuery('.edx-sidebar').removeClass('active');
		jQuery('body').removeClass('edx-sidebar-opened');
		jQuery('.edx-sidebar-overlay').fadeOut();
		// deactivates the current sidebar section after the sidebar has closed
		setTimeout(function() {
			jQuery('.edx-sidebar-menu-item, .edx-sidebar-section').removeClass('active');
		}, 250);
	}

	page() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Page -->
					<div class="edx-page"></div>
					<!-- End ~ Page -->`;
		container.append(content);
		this.body = jQuery('.edx-page');
	}

	footer() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Footer -->
					<div class="edx-footer"></div>
					<!-- End ~ Footer -->`;
		container.append(content);
		this.foot = jQuery('.edx-footer');
	}

	checkApp() {
		let appObj;
		appObj = localStorage.getItem('edx-cache-app-obj');

		if(appObj != null) {
			// app object exists
			this.configApp(appObj);
		}
		else {
			// app object does not exist
			// start app object
			this.startApp();
		}
	}

	startApp() {
		let appObj;
		appObj = {
			'theme':'dark'
		};
		localStorage.setItem('edx-cache-app-obj',JSON.stringify(appObj));
		this.checkApp();
	}

	configApp(data) {
		let obj = JSON.parse(data);
		switch(obj.theme) {
			case 'dark':
				jQuery('body').addClass('edx-dark-theme');
			break;
			case 'light':
				jQuery('body').addClass('edx-light-theme');
			break;
		}
	}

	onScreen() {
		// is on screen
        jQuery.fn.isOnScreen = function(){

            var win = jQuery(window);
            
            var viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            
            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
            
            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
            
        };

	}

}