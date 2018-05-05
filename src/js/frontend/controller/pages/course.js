class Course {

	init() {
		this.checkCourse();
	}

	checkCourse() {
		let courseObj, url, id;
		url = window.location.search;
		if(url.includes('?id=')) {
			id = url.replace('?id=','');
			this.id = id;

			// check to see if course has been either loaded or cached
			courseObj = localStorage.getItem('edx-cache-course-obj-'+id);

			if(courseObj != null) {
				// cached
				// Sets the course data as a global value
				this.courseData = JSON.parse(courseObj);
				console.log('cached');
				this.template();
			}
			else {
				// not cached
				this.s3Data();
			}

		}
		else {
			this.courseError(0);
		}
	}

	courseError(id) {
		switch(id) {
			case 0:
				window.location.replace('courses.html');
			break;
		}
	}

	template() {
		this.cover();
		this.toolbar();
		this.grid();
	}

	cover() {
		let container, content, data;
		data = this.courseData;
		container = jQuery('.edx-page-cover');
		content = 	`<div class="edx-wrapper">
						<div class="edx-page-cover-titles">
							<div class="edx-page-cover-title">`+data.info.language+`</div>
							<div class="edx-page-cover-subtitle">`+data.info.title+`</div>
						</div>
					</div>`;
		container.html(content);
	}

	toolbar() {
		let container, content, data;
		data = this.courseData;
		container = jQuery('.edx-page-toolbar');
		content = 	`<div class="edx-page-toolbar-menu">
						<div class="edx-wrapper">
							<div class="edx-page-toolbar-menu-item active" data-name="overview">overview</div>
							<div class="edx-page-toolbar-menu-item" data-name="editor">editor</div>
						</div>
					</div>`;
		container.append(content);

		jQuery('.edx-page-toolbar-menu-item').on('click', function() {
			let item, name;
			item = jQuery(this);
			name = item.data('name');
			jQuery('.edx-course-section').removeClass('active');
			jQuery('.edx-course-section-'+name).addClass('active');
		});

	}

	sidebar() {

	}

	grid() {
		let container, content, data, editor = new Editor(), app = new App();
		data = this.courseData;
		container = jQuery('.edx-page-grid-content');
		content = 	`<div class="edx-xs-100 edx-sm-100 edx-md-100 edx-lg-100">
						<div class="edx-course-section edx-course-section-overview active">
							<div class="edx-container">
								<div class="edx-page-video-container">
									<div class="edx-course-video">
										<div class="edx-page-video-overlay"></div>
										<div class="edx-page-video edx-15" id="edx-course-video"></div>
									</div>
								</div>
								<div class="edx-page-content">
									<div class="edx-page-text">`+data.info.content+`</div>
									<div class="edx-page-text">`+data.info.content+`</div>
									<div class="edx-page-text">`+data.info.content+`</div>
									<div class="edx-page-text">`+data.info.content+`</div>
								</div>
							</div>
						</div>
						<div class="edx-course-section edx-course-section-editor">
							<div class="edx-editor-container">
								<div class="edx-wrapper edx-editor-wrapper">
									<div class="edx-xs-100 edx-sm-100 edx-md-90 edx-lg-90">
										<div class="edx-editor-app">
											<div class="edx-editor-holder active">
												<pre class="edx-editor" id="edx-course-editor"></pre>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.html(content);

		// initiate editor
		editor.init({
			'id':'edx-course-editor',
			'theme':'ace/theme/monokai',
			'mode':'ace/mode/'+data.info.language,
			'code':'',
			'wrap':true,
			'margin':false,
			'focus':true,
			'readonly':false,
			'template':'multiple-read-only',
			'shadow':false,
			'style':{
				'font-size':'11px'
			}
		});

		app.videoResize();

        jQuery('.edx-page-toolbar-btn').on('click', function() {
        	setTimeout(function() {
        		app.videoResize();
        	}, 250);
        });

        jQuery(window).resize(function() {
        	app.videoResize();
        });

		var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('edx-course-video', {
                width: 1280,
                height: 720,
                playerVars: {
                    // autoplay: 1,
                    controls: 0,
                    rel: 0,
                    fs: 0
                },
                videoId: 's0zORQpXGBo',
                events: {
                    onReady: initialize
                }
            });
        }

        function initialize(event){
            // player.mute();
            var timer, state;
            timer = setInterval(function(){ 
                state = player.getPlayerState();
                switch(state) {
                    case 1:
                        // video playing
                    break;
                    case 0:
                        player.seekTo(0);
                    break;
                }
            }, 150);
        }
        
        setTimeout(function() {
            onYouTubeIframeAPIReady();
        }, 500);

        setTimeout(function() {
        	let video = jQuery('.edx-course-video').detach();
        	jQuery('.edx-page-sidebar-container').html(video);
        	app.videoResize();
        }, 1500);

	}

	s3Data() {
		let id, courseData, course = new Course(), api = new API();
		id = this.id;
		jQuery.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api.config('courses')+id+'/course.json',
            complete: function(jsondata) {
            	courseData = JSON.parse(jsondata.responseText)[0];
				if(courseData) {
					localStorage.setItem('edx-cache-course-obj-'+id,JSON.stringify(courseData));
					course.checkCourse();
				}
				else {
					course.courseError(1);
				}
            }
        });
	}

}