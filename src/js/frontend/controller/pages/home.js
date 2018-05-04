class Home {

	init() {
		this.container = jQuery('.edx-page');
		this.template();
		this.editor();
		this.recentCourses();
	}

	template() {
		let container, content;
		container = this.container;
		content = '<div class="edx-angled-sections"></div>'
		container.html(content);
		this.sections();
	}

	sections() {
		let container, content, sections;
		container = jQuery('.edx-angled-sections');
		sections = ['editor','courses'];
	    for (var i = 0; i < sections.length; i++) {
	    	content = `<div class="edx-section edx-angled-section edx-section-`+sections[i]+`"></div>`;
	    	container.append(content);
	    }
	    jQuery('.edx-section').first().addClass('edx-gradient');
	}

	editor() {
		let container, content, code, editor = new Editor();
		container = jQuery('.edx-section-editor');
		content = 	`<div class="edx-angled-section-wrapper edx-container">
						<div class="edx-editor-container">
							<div class="edx-wrapper edx-editor-wrapper">
								<div class="edx-xs-100 edx-sm-100 edx-md-75 edx-lg-75">
									<div class="edx-editor-app">
										<div class="edx-editor-holder active">
											<pre class="edx-editor" id="edx-homepage-editor"></pre>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);

		code = `<!DOCTYPE html>
<html lang="en">
	<head>
		<title>educoded</title>
		
		<!-- Main CSS -->
		<link rel="stylesheet" type="text/css" href="../src/css/frontend/main.css">
		<!-- RequireJS -->
		<script src="../src/js/frontend/require.js"></script>
	</head>
	<body class="edx-app edx-25">
		<script>
			requirejs(['../src/js/frontend/config'],function(){
				requirejs(['jQuery','ace','editor','app','user','home'],
				function (app, home) {
					var app = new App(), user = new User(), home = new Home();
					app.init();
					user.init();
					home.init();
				});
			});
		</script>
	</body>
</html>`;

		// initiate editor
		editor.init({
			'id':'edx-homepage-editor',
			'theme':'ace/theme/monokai',
			'mode':'ace/mode/html',
			'code':code,
			'wrap':true,
			'margin':false,
			'focus':true,
			'readonly':false,
			'template':'multiple',
			'shadow':false,
			'style':{
				'font-size':'11px'
			}
		});
	}

	recentCourses() {
		let coursesObj;

		// check to see if recent courses have been either loaded or cached
		coursesObj = localStorage.getItem('edx-cache-recent-courses-obj');

		if(coursesObj != null) {
			// cached
			// Sets the course data as a global value
			this.coursesData = JSON.parse(coursesObj);
			console.log('cached');
			this.courses();
		}
		else {
			// not cached
			this.s3Data();
		}
	}

	courses() {
		let container, content,data, courses, course;
		container = jQuery('.edx-section-courses');
		data = this.coursesData;

		content = 	`<div class="edx-angled-section-wrapper edx-container">
						<div class="edx-wrapper">
							<div class="edx-xs-100 edx-sm-100 edx-md-100 edx-lg-100">
								<div class="edx-section-title">Most recent courses</div>
								<div class="edx-course-carousel owl-carousel owl-theme"></div>
							</div>
						</div>
					</div>`;
		container.html(content);

		courses = jQuery('.edx-course-carousel');
		for (var i = 0; i < data.length; i++) {
			course = 	`<div class="item">
							<div class="edx-course-card edx-course-card-`+data[i].language+`">
								<div class="edx-course-card-cover edx-wrapper">
									<div class="edx-course-card-cover-titles">
										<div class="edx-course-card-cover-title">`+data[i].language+`</div>
										<div class="edx-course-card-cover-subtitle">`+data[i].title+`</div>
									</div>
								</div>
								<div class="edx-course-card-content">
									<div class="edx-course-card-description">Lorem ipsum dolor sit amet, no sit sonet corpora indoctum, quo ad fierent insolens. Duo aeterno ancillae ei.</div>
									<a href="course.html?id=`+data[i].id+`">
										<div class="edx-course-card-link">view course</div>
									</a>
								</div>
							</div>
						</div>`;
			courses.append(course);
		}

		jQuery('.edx-course-carousel').owlCarousel({
		    loop: true,
		    margin: 5,
		    nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		    responsive:{
		        0:{ items:1 },
		        600:{ items:2 },
		        1000:{ items:3 }
		    }
		});
	}

	s3Data() {
		let coursesObj, home = new Home();
		jQuery.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: 'https://s3-us-west-2.amazonaws.com/educoded/data/courses/list.json',
            complete: function(jsondata) {
            	coursesObj = JSON.parse(jsondata.responseText);
            	localStorage.setItem('edx-cache-recent-courses-obj',JSON.stringify(coursesObj));
				home.recentCourses();
            }
        });

		// let getUserObj, db = new DB();
		// getUserObj = sessionStorage.getItem('edx-query-get-user');
		// if(getUserObj != null) {
		// 	console.log('cached from DB');
		// 	console.log(JSON.parse(getUserObj));
		// }
		// else {
		// 	db.get({'columns':[],'table':'courses/list','column':'first_name','value':'Mathew','storage':{'type':'local','name':'edx-cache-recent-courses-obj'}});
		// }

	}

}