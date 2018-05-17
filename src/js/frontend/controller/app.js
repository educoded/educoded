class App {

	init() {
		this.app = jQuery('.edx-app');
		this.meta();
		this.header();
		this.sidebar();
		this.page();
		this.footer();
		this.startApp();
		this.events();
		this.onScreen();
	}

	meta() {
		let container, content;
		container = jQuery('head');
		content = 	`<title>educoded</title>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">

					<link rel="apple-touch-icon" sizes="180x180" href="https://s3-us-west-2.amazonaws.com/educoded/media/favicon/apple-touch-icon.png">
					<link rel="icon" type="image/png" sizes="32x32" href="https://s3-us-west-2.amazonaws.com/educoded/media/favicon/favicon-32x32.png">
					<link rel="icon" type="image/png" sizes="16x16" href="https://s3-us-west-2.amazonaws.com/educoded/media/favicon/favicon-16x16.png">
					<link rel="manifest" href="https://s3-us-west-2.amazonaws.com/educoded/media/favicon/site.webmanifest">
					<link rel="mask-icon" href="https://s3-us-west-2.amazonaws.com/educoded/media/favicon/safari-pinned-tab.svg" color="#5bbad5">
					<meta name="msapplication-TileColor" content="#da532c">
					<meta name="theme-color" content="#ffffff">`;
		container.prepend(content);
	}

	header() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Header -->
					<div class="edx-header edx-15"></div>
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
					<div class="edx-footer">
						<div class="edx-footer-main">
							<div class="edx-footer-content">
								<div class="edx-container">
									<div class="edx-footer-menu edx-wrapper">
										<div class="edx-xs-100 edx-sm-50 edx-md-25 edx-lg-25">
											<div class="edx-footer-menu-block-wrapper edx-wrapper">
												<div class="edx-footer-menu-block">
													<div class="edx-footer-menu-title">About</div>
													<a href="about.html">
														<div class="edx-footer-menu-item">About Us</div>
													</a>
													<a href="team.html">
														<div class="edx-footer-menu-item">Team</div>
													</a>
													<a href="blog.html">
														<div class="edx-footer-menu-item">Blog</div>
													</a>
												</div>
											</div>
										</div>
										<div class="edx-xs-100 edx-sm-50 edx-md-25 edx-lg-25">
											<div class="edx-footer-menu-block-wrapper edx-wrapper">
												<div class="edx-footer-menu-block">
													<div class="edx-footer-menu-title">Browse</div>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Routes</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Paths</div>
													</a>
													<a href="courses.html">
														<div class="edx-footer-menu-item">Courses</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Sandbox</div>
													</a>
												</div>
											</div>
										</div>
										<div class="edx-xs-100 edx-sm-50 edx-md-25 edx-lg-25">
											<div class="edx-footer-menu-block-wrapper edx-wrapper">
												<div class="edx-footer-menu-block">
													<div class="edx-footer-menu-title">Languages</div>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">C and C++</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">C#</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">CSS</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">HTML</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Java</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Javascript</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Python</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">PHP</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Ruby</div>
													</a>
												</div>
											</div>
										</div>
										<div class="edx-xs-100 edx-sm-50 edx-md-25 edx-lg-25">
											<div class="edx-footer-menu-block-wrapper edx-wrapper">
												<div class="edx-footer-menu-block">
													<div class="edx-footer-menu-title">Other</div>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Account</div>
													</a>
													<a href="register.html">
														<div class="edx-footer-menu-item">Register</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Contact</div>
													</a>
													<a href="javascript:void(0)">
														<div class="edx-footer-menu-item">Affiliate Program</div>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div class="edx-footer-newsletter"></div>
									<div class="edx-footer-social edx-wrapper">
										<div class="edx-footer-social-item edx-wrapper">
											<span class="fa fa-facebook"></span>
										</div>
										<div class="edx-footer-social-item edx-wrapper">
											<span class="fa fa-instagram"></span>
										</div>
										<div class="edx-footer-social-item edx-wrapper">
											<span class="fa fa-youtube"></span>
										</div>
										<div class="edx-footer-social-item edx-wrapper">
											<span class="fa fa-twitter"></span>
										</div>
										<div class="edx-footer-social-item edx-wrapper">
											<span class="fa fa-github"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="edx-footer-copyright">
							<div class="edx-wrapper">educoded</div>
						</div>
					</div>
					<!-- End ~ Footer -->`;
		container.append(content);
		this.foot = jQuery('.edx-footer');
	}

	startApp() {
		let app = new App();
		// check to see if recent courses have been either loaded or cached
		localforage.ready(function() {
			let key, theme;
	        key = 'edx-cache-app-obj';
	        theme = {'theme':'dark'};
	        localforage.getItem(key).then(function(value) {
			    if(value != null) {
			    	console.log('cached');
			    	// cached
					// Sets the course data as a global value
					switch(value.theme) {
						case 'dark':
							jQuery('body').addClass('edx-dark-theme');
						break;
						case 'light':
							jQuery('body').addClass('edx-light-theme');
						break;
					}
			    }
			    else {
			    	console.log('not cached');
			    	// not cached
					localforage.setItem(key, theme, function() {
						app.startApp();
			        });
			    }
			});
	    });
	}

	events() {
		jQuery(document).scroll(function() {
			let pos;
			pos = jQuery(document).scrollTop();
			if(pos > 150) {
				jQuery('.edx-header').addClass('active');
			}
			else {
				jQuery('.edx-header').removeClass('active');
			}
		});
	}

	videoResize() {
    	let video, container, videoWidth, containerWidth, videoHeight, containerHeight;
		video = jQuery('.edx-page-video');
		container = jQuery('.edx-page-video-container');
		if(video) {
			// video
			videoWidth = video.width();
			videoHeight = videoWidth * (9/16);
			video.css({'height':videoHeight+'px'});
			// video container
			containerWidth = container.width();
			containerHeight = containerWidth * (9/16);
			container.css({'height':containerHeight+'px'});
		}
    }

	onScreen() {
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