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
										<div class="edx-page-video-overlay edx-wrapper">
											<div class="edx-course-video-info">
												<div class="edx-course-video-btn">continue</div>
											</div>
										</div>
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

		let player, url;
		url = window.location.pathname;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('edx-course-video', {
                width: 1280,
                height: 720,
                playerVars: {
                	autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0
                },
                videoId: 'GRe3GUaw1iU',
                events: {
                    // 'onReady': function() {
                    // 	console.log('I am ready');
                    // 	player.mute();
                    // }
                    onReady: initialize
                }
            });
        }

        function initialize(event){
        	player.seekTo(0.001);
        	player.playVideo();
            // player.mute();
            let timer, state, elapsed, duration, points, lastPoint, btn, sections, section;
            points = [];
            btn = jQuery('.edx-course-video-btn');
            duration = player.getDuration();

            sections = [
            	{
            		'title':'first section',
            		'time':5,
            		'question':'this is a test',
            		'code':'test1',
            		'status':0
            	},
            	{
            		'title':'second section',
            		'time':8,
            		'question':'this is a test',
            		'code':'test2',
            		'status':0
            	},
            	{
            		'title':'third section',
            		'time':14,
            		'question':'this is a test',
            		'code':'test3',
            		'status':0
            	},
            	{
            		'title':'fourth section',
            		'time':22,
            		'question':'this is a test',
            		'code':'test4',
            		'status':0
            	}
            ];

            for (var i = sections.length - 1; i >= 0; i--) {
            	points.push(sections[i].time);
            }

            console.log(duration/60);

            function videoLoop() {
            	timer = setInterval(function(){ 

	                state = player.getPlayerState();
	                elapsed = player.getCurrentTime();
	                lastPoint = points.length - 1;
	                section = sections.length - points.length;
	            	if((elapsed + 0.25) > points[lastPoint] && (elapsed - 0.25) < points[lastPoint]) {
	            		player.pauseVideo();
	            		clearInterval(timer);
	            		btn.fadeIn();
	            	}
	            	else {
	            		console.log(state + ' : ' + elapsed);
	            	}
	                // console.log(state + ' : ' + elapsed);
	                // switch(state) {
	                //     case 1:
	                //         // video playing
	                //     break;
	                //     case 0:
	                //         player.seekTo(0);
	                //     break;
	                // }
	            }, 250);
            }

            videoLoop();

            btn.on('click', function() {
            	let code, editor;
            	editor = jQuery('#edx-course-editor');
            	code = editor.getValue();
            	if(code == sections[section]['code']) {
            		btn.fadeOut();
	    			points.pop();
	    			if(points.length < 1) {
	    				console.log('all done');
	    			}
	    			else {
	    				videoLoop();
	    			}
	    			player.playVideo();
            	}
            	else {
            		console.log('invalid answer');
            	}
            });

        }

        function onPlayerStateChange(event) {
        	console.log(event);
        	// player.playVideo();
        	player.playVideo();
        	console.log(event);
        }
        
        setTimeout(function() {
            onYouTubeIframeAPIReady();
        }, 250);

  //       jQuery(document).scroll(function() {

		// 	var pos, cover, sidebar, toolbar, grid;
  //   		pos = jQuery(this).scrollTop();
		// 	let video = jQuery('.edx-course-video');

  //   		if( jQuery('.edx-page-video-container').isOnScreen() ) {
  //               player.playVideo();
  //           }
  //           else {
  //               player.pauseVideo();
  //               video = video.detach();
  //               jQuery('.edx-page-sidebar-container').html(video);
		// 		app.videoResize();
		// 		player.playVideo();
  //           }


		// });
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