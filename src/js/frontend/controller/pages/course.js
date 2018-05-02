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

	saveCourse(data,id) {
		sessionStorage.removeItem('edx-temp-course-obj');
		localStorage.setItem('edx-cache-course-obj-'+id,JSON.stringify(data));
		this.checkCourse();
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
		let container, content, data;
		data = this.courseData;
		container = jQuery('.edx-page-grid-content');
		content = 	`<div class="edx-xs-100 edx-sm-100 edx-md-50 edx-lg-50">50</div>
					<div class="edx-xs-100 edx-sm-100 edx-md-50 edx-lg-50">50</div>`;
		container.html(content);
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
					sessionStorage.setItem('edx-temp-course-obj',jsondata.responseText);
                	course.saveCourse(courseData,id);	
				}
				else {
					course.courseError(1);
				}
            }
        });
	}

}