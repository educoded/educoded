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
				console.log('URL is missing the id');
			break;
		}
	}

	template() {
		this.cover();
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

	sidebar() {

	}

	grid() {
		let container, content, data, editor = new Editor();
		data = this.courseData;
		container = jQuery('.edx-page-grid-content');
		content = 	`<div class="edx-xs-100 edx-sm-100 edx-md-100 edx-lg-100">
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
					<div class="edx-xs-100 edx-sm-100 edx-md-75 edx-lg-75">
						<div class="edx-page-content">
							<div class="edx-page-text">`+data.info.content+`</div>
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