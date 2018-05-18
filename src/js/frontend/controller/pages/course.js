class Course {

	init() {
		this.checkCourse();
	}

	checkCourse() {
		let url, id, course = new Course(), api = new API();;
		url = window.location.search;
		if(url.includes('?id=')) {
			id = url.replace('?id=','');
			course.id = id;
			// check to see if course has been either loaded or cached
			localforage.ready(function() {
				let key;
		        key = 'edx-cache-course-obj-'+id;
		        localforage.getItem(key).then(function(value) {
				    if(value != null) {
				    	// cached
						localforage.getItem('edx-cache-course-stats-'+id).then(function(stats) {
							course.courseData = value; // Sets the course data as a global value
							course.courseStats = stats; // Sets the course stats as a global value
							course.template();
							console.log('cached');
						});
				    }
				    else {
				    	// not cached
				  		course.loadCourse();
				  		console.log('not loaded');
				    }
				});
		    });
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
		this.sidebar();
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
					</div>
					<div class="edx-page-cover-pattern-container">
						<div class="edx-page-cover-pattern edx-wrapper"></div>
					</div>`;
		container.html(content);
		this.coverPattern(data.info.language);
	}

	coverPattern(lang) {
		setTimeout(function() {
			let shapes, shape, size, rotate, pX, pY, cover;
			shapes = ['square','circle'];
			cover = jQuery('.edx-page-cover');
			function getRandom(min, max) { return Math.floor(Math.random() * (max - min) + min); }
			for (var i = 30 - 1; i >= 0; i--) {
				shape = getRandom(0,2);
				size = getRandom(20,200);
				rotate = getRandom(0,90);
				pX = getRandom(0,cover.width());
				pY = getRandom(90,cover.height());
				jQuery('.edx-page-cover-pattern').append('<div class="edx-page-cover-shape edx-shape-'+lang+' edx-shape-'+shapes[shape]+'" style="width:'+size+'px; height:'+size+'px; top:'+pY+'px; left:'+pX+'px; transform: rotate('+rotate+'deg)"></div>');
			}
		}, 50);
	}

	sidebar() {
		let container, content, data, steps, sections;
		data = this.courseData;
		steps = data.info.video.steps;
		container = jQuery('.edx-page-sidebar-container');
		content = 	`<div class="edx-page-sidebar-section">
						<div class="edx-course-sidebar-title edx-wrapper">sections</div>
						<div class="edx-course-sidebar-content">
							<div class="edx-course-sidebar-sections"></div>
						</div>
						<div class="edx-course-btn-container">
							<div class="edx-course-btn edx-wrapper">submit</div>
						</div>
					</div>`;
		container.html(content);
		sections = jQuery('.edx-course-sidebar-sections');
		for (var i = 0; i < steps.length; i++) {
			let step, section;
			step = steps[i];
			section = 	`<div class="edx-course-sidebar-section">
							<div class="edx-course-sidebar-section-title">`+step.title+`</div>
							<div class="edx-course-sidebar-section-status">
								<div class="edx-course-sidebar-section-status-boxes">
									<div class="edx-course-sidebar-section-status-box edx-25"></div>
									<div class="edx-course-sidebar-section-status-box edx-25"></div>
								</div>
							</div>
							<div class="edx-course-sidebar-section-info">
								<div class="edx-course-sidebar-section-question">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
							</div>
						</div>`;
			sections.append(section);
		}

	}

	grid() {
		let container, content;
		container = jQuery('.edx-page-grid-content');
		content = 	`<div class="edx-xs-100 edx-sm-100 edx-md-100 edx-lg-100">
						<div class="edx-course-section edx-course-section-video active"></div>
						<div class="edx-course-section edx-course-section-editor"></div>
						<div class="edx-course-section-content"></div>
					</div>`;
		container.html(content);

		this.courseEditor();
		this.courseVideo();
		this.courseContent();

	}

	courseVideo() {
		let container, content, data, stats, id, player, editor = new Editor(), app = new App(), api = new API();
		data = this.courseData;
		stats = this.courseStats
		id = data.info.id;
		container = jQuery('.edx-course-section-video');
		content =	`<div class="edx-container">
						<div class="edx-page-video-container">
							<div class="edx-course-video">
								<div class="edx-page-video-overlay edx-wrapper edx-25">
									<div class="edx-course-video-message">
										Please complete this section before moving forward
									</div>
								</div>
								<div class="edx-page-video edx-15" id="edx-course-video"></div>
							</div>
						</div>
					</div>`;
		container.html(content);

		app.videoResize();

        jQuery('.edx-page-toolbar-btn').on('click', function() {
        	setTimeout(function() {
        		app.videoResize();
        	}, 250);
        });

        jQuery(window).resize(function() {
        	app.videoResize();
        });

        window.youtubeReady = function () {
        	let editor = ace.edit('edx-course-editor');
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
	                onReady: function(event){
	                	let timer, state, elapsed, duration, points, completed, lastPoint, btn, message, overlay, sections, section;
			            points = [];
			            completed = [];
			            btn = jQuery('.edx-course-btn-container');
			            message = jQuery('.edx-course-video-message');
			            overlay = jQuery('.edx-page-video-overlay');
			            duration = player.getDuration();
			            sections = data.info.video.steps;
			            for (var i = stats.length - 1; i >= 0; i--) {
			            	if(stats[i].status < 1) {
			            		points.push(sections[i].time);
			            	}
			            	else {
			            		jQuery('.edx-course-sidebar-section:nth-child('+(i+1)+') .edx-course-sidebar-section-status-box').addClass('correct').removeClass('incorrect');
			            		completed.push(sections[i].time);
			            	}

			            }
			            player.mute();
			            if(completed.length > 0) { player.seekTo(completed[0]); }
			            else { player.seekTo(0.001); }
			        	player.playVideo();

			            function videoLoop(editor) {
			            	timer = setInterval(function(){ 
				                state = player.getPlayerState();
				                elapsed = player.getCurrentTime();
				                lastPoint = points.length - 1;
				                section = sections.length - points.length;
				            	if((elapsed + 0.25) > points[lastPoint] && (elapsed - 0.25) < points[lastPoint]) {
				            		player.pauseVideo();
				            		clearInterval(timer);
				            		overlay.addClass('active');
				            		message.fadeIn();
				            		jQuery('.edx-course-sidebar-section-info').slideUp();
				            		jQuery('.edx-course-sidebar-section:nth-child('+(section+1)+') .edx-course-sidebar-section-info').slideDown();
				            		btn.fadeIn();
				            		setTimeout(function() {
				            			jQuery('html, body').animate({ scrollTop: jQuery('.edx-page-grid').offset().top - 50 }, 500);
				            			jQuery('.edx-course-section-video').slideUp();
				            			jQuery('.edx-course-section-editor').slideDown();
				            			editor.focus();
				            		}, 2000);
				            	}
				            	else {
				            		// console.log(state + ' : ' + elapsed);
				            	}
				            }, 250);
			            }

			            videoLoop(editor);

			            btn.on('click', function() {
			            	let code, stats;
			            	code = editor.getValue();
			            	if(code.replace(/\s/g,'') == sections[section]['code'].replace(/\s/g,'')) {
			            		btn.fadeOut();
			            		overlay.removeClass('active');
			            		message.fadeOut();
			            		jQuery('.edx-course-section-video').slideDown();
			            		jQuery('.edx-course-section-editor').slideUp();
				            	jQuery('.edx-course-sidebar-section:nth-child('+(section+1)+') .edx-course-sidebar-section-status-box').addClass('correct').removeClass('incorrect');

				            	localforage.ready(function() {
							        localforage.getItem('edx-cache-course-stats-'+id).then(function(value) {
							        	value[section].status = 1;
							        	localforage.setItem('edx-cache-course-stats-'+id,value);
							        });
							    });

				    			points.pop();
				    			if(points.length < 1) {
				    				console.log('all done');
				    			}
				    			else {
				    				videoLoop(editor);
				    			}
				    			app.videoResize();
				    			player.playVideo();
				            	editor.setValue(''); // reset editor value
			            	}
			            	else {
			            		jQuery('.edx-course-sidebar-section:nth-child('+(section+1)+') .edx-course-sidebar-section-status-box').addClass('incorrect');
			            	}
			            });

			        }
	            }
	        });
		};
		if (window.YT) {
		    youtubeReady();
		}
	}

	courseEditor() {
		let container, content, data, editor = new Editor(), api = new API();
		container = jQuery('.edx-course-section-editor');
		data = this.courseData;
		content =	`<div class="edx-container">
						<div class="edx-editor-container">
							<div class="edx-editor-app">
								<div class="edx-editor-holder active">
									<pre class="edx-editor" id="edx-course-editor"></pre>
								</div>
							</div>
						</div>
					</div>`;
		container.html(content);

		// main editor
		editor.init({
			'id':'edx-course-editor',
			'theme':'ace/theme/monokai',
			'mode':'ace/mode/'+data.info.language,
			'language':{
				'name':data.info.language,
				'ext':api.languageInfo(data.info.language,'ext')
			},
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
	}

	courseContent() {
		let container, content, data, editor = new Editor(), api = new API();
		container = jQuery('.edx-course-section-content');
		data = this.courseData;
		content = 	`<div class="edx-container">
						<div class="edx-page-content">
							<div class="edx-wrapper edx-course-content-wrapper">
								<div class="edx-xs-100 edx-sm-100 edx-md-30 edx-lg-30">
									<div class="edx-course-content-section edx-course-info-section"></div>
								</div>
								<div class="edx-xs-100 edx-sm-100 edx-md-70 edx-lg-70">
									<div class="edx-course-content-section">
										<div class="edx-page-text">`+data.info.content+`</div>
										<div class="edx-page-text">`+data.info.content+`</div>
										<div class="edx-course-snippet-container">
											<div class="edx-course-snippet" id="edx-course-snippet-1"></div>
										</div>
										<div class="edx-page-text">`+data.info.content+`</div>
										<div class="edx-page-text">`+data.info.content+`</div>
										<div class="edx-course-snippet-container">
											<div class="edx-course-snippet" id="edx-course-snippet-2"></div>
										</div>
										<div class="edx-page-text">`+data.info.content+`</div>
										<div class="edx-page-text">`+data.info.content+`</div>
										<div class="edx-course-snippet-container">
											<div class="edx-course-snippet" id="edx-course-snippet-3"></div>
										</div>
										<div class="edx-page-text">`+data.info.content+`</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.html(content);

		this.courseInfo();

		let snippetCode = 
`.edx-section {
	background: red;
}`;
		
		for (var i = 0; i < 3; i++) {
			editor.init({
				'id':'edx-course-snippet-'+(i+1),
				'theme':'ace/theme/monokai',
				'mode':'ace/mode/'+data.info.language,
				'language':{
					'name':data.info.language,
					'ext':api.languageInfo(data.info.language,'ext')
				},
				'code':snippetCode,
				'wrap':true,
				'margin':false,
				'focus':true,
				'readonly':true,
				'template':'snippet',
				'shadow':false,
				'style':{
					'font-size':'11px'
				}
			});	
		}
	}

	courseInfo() {
		let container, content, info, data;
		container = jQuery('.edx-course-info-section');
		data = this.courseData;
		info = [{'name':'author','item':data.author.name },{'name':'posted','item':data.date.created },{'name':'updated','item':data.date.updated },{'name':'difficulty','item':data.info.difficulty },{'name':'language','item':data.info.language }];
		info.forEach(function(element) { container.append('<div class="edx-course-info">'+element.name+': <span>'+element.item+'</span></div>'); });
	}

	loadCourse() {
		let id, courseData, courseStats, stats, course = new Course(), config = new Config();
		id = this.id;
		jQuery.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: config.route('courses')+id+'/course.json',
            complete: function(jsondata) {
            	courseData = JSON.parse(jsondata.responseText)[0];
            	courseStats = courseData.info.video.steps;
				if(courseData) {
					localforage.ready(function() {
						stats = [];
						for (var i = 0; i < courseStats.length; i++) { stats[i] = {'status':0}; }
						localforage.setItem('edx-cache-course-obj-'+id,courseData);
						localforage.setItem('edx-cache-course-stats-'+id,stats);
						course.checkCourse();
					});
				}
				else {
					course.courseError(1);
				}
            }
        });
	}

}