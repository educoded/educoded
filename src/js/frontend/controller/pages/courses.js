class Courses {

	init() {

		console.log('courses');
		this.template();

	}

	template() {
		this.cover();
		this.grid();
		this.sidebar();
	}

	cover() {
		let container, content, data;
		data = this.courseData;
		container = jQuery('.edx-page-cover');
		content = 	`<div class="edx-wrapper">
						<div class="edx-page-cover-titles">
							<div class="edx-page-cover-title">courses</div>
							<div class="edx-page-cover-subtitle">all courses</div>
						</div>
					</div>
					<div class="edx-page-cover-pattern-container">
						<div class="edx-page-cover-pattern edx-wrapper"></div>
					</div>`;
		container.html(content);
		this.coverPattern();
	}

	coverPattern() {
		setTimeout(function() {
			let languages, language, shapes, shape, size, rotate, pX, pY, cover;
			languages = ['html','css','javascript','php','mysql','python'];
			shapes = ['square','circle'];
			cover = jQuery('.edx-page-cover');
			function getRandom(min, max) { return Math.floor(Math.random() * (max - min) + min); }
			for (var i = 30 - 1; i >= 0; i--) {
				language = getRandom(0,6);
				shape = getRandom(0,2);
				size = getRandom(20,200);
				rotate = getRandom(0,90);
				pX = getRandom(0,cover.width());
				pY = getRandom(90,cover.height());
				jQuery('.edx-page-cover-pattern').append('<div class="edx-page-cover-shape edx-shape-'+languages[language]+' edx-shape-'+shapes[shape]+'" style="width:'+size+'px; height:'+size+'px; top:'+pY+'px; left:'+pX+'px; transform: rotate('+rotate+'deg)"></div>');
			}
		}, 50);
	}

	sidebar() {
		let container, content;
		container = jQuery('.edx-page-sidebar-container');
		content = 	`<div class="edx-page-sidebar-content-container">
						<div class="edx-page-sidebar-filter">
							<div class="edx-page-sidebar-key">filter</div>
						</div>
					</div>`;
		container.append(content);
	}

	filterSidebar() {
		let container, content, list, language = [], difficulty = [];
		container = jQuery('.edx-page-sidebar-filter');
		list = ['language','difficulty'];
		for (var i = 0; i < list.length; i++) {
			content = 	`<div class="edx-page-sidebar-section">
							<div class="edx-page-sidebar-section-title">`+list[i]+`</div>
							<div class="edx-page-sidebar-section-list">
								<div class="edx-page-sidebar-section-list-item">item</div>
								<div class="edx-page-sidebar-section-list-item">item</div>
								<div class="edx-page-sidebar-section-list-item">item</div>
								<div class="edx-page-sidebar-section-list-item">item</div>
							</div>
						</div>`;
			container.append(content);
		}
		jQuery('.edx-course-card').each(function() {
			let item, lang, diff;
			item = jQuery(this);
			lang = item.data('language');
			diff = item.data('difficulty');
			language.push(lang);
			difficulty.push(diff);
		});
		console.log(language);
	}

	grid() {
		this.loadCourses();
	}

	courses() {
		let container, content, data;
		container = jQuery('.edx-page-grid-content');
		data = this.coursesData;
		for (var i = 0; i < data.length; i++) {
			content = 	`<div class="edx-xs-100 edx-sm-50 edx-md-33 edx-lg-33">
							<div class="edx-course-card edx-course-card-`+data[i].language+`" data-language="`+data[i].language+`" data-difficulty="`+data[i].difficulty+`">
								<div class="edx-course-card-cover edx-wrapper">
									<div class="edx-course-card-cover-titles">
										<div class="edx-course-card-cover-title">`+data[i].language+`</div>
										<div class="edx-course-card-cover-subtitle">`+data[i].title+`</div>
									</div>
								</div>
								<div class="edx-course-card-content">
									<div class="edx-course-card-description">Lorem ipsum dolor sit amet, no sit sonet corpora indoctum, quo ad fierent insolens. Duo aeterno ancillae ei.</div>
								</div>
								<a href="course.html?id=`+data[i].id+`">
									<div class="edx-course-card-link">view course</div>
								</a>
							</div>
						</div>`;
			container.append(content);
		}
		this.filterSidebar();
	}

	loadCourses() {
		let coursesObj, courses = new Courses();
		// check to see if recent courses have been either loaded or cached
		localforage.ready(function() {
			let key;
	        key = 'edx-cache-recent-courses-obj';
	        localforage.getItem(key).then(function(value) {
			    if(value != null) {
			    	// cached
					// Sets the course data as a global value
			    	courses.coursesData = value;
					courses.courses();
			    }
			    else {
			    	// not cached
					jQuery.ajax({
			            type: 'GET',
			            crossDomain: true,
			            dataType: 'json',
			            url: 'https://s3-us-west-2.amazonaws.com/educoded/data/courses/list.json',
			            complete: function(jsondata) {
			            	coursesObj = JSON.parse(jsondata.responseText);
							localforage.setItem('edx-cache-recent-courses-obj', coursesObj, function() {
					            localforage.getItem('edx-cache-recent-courses-obj').then(function(readValue) {
					                courses.coursesData = readValue;
									courses.courses();
					            });
					        });

			            }
			        });
			    }
			});
	    });
	}

}