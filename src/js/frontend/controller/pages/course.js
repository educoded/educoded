class Course {

	init() {
		this.data = this.courseData();
		this.template();
	}

	template() {
		this.cover();
	}

	cover() {
		let container, content;
		container = jQuery('.edx-page-cover');
		content = 	`<div class="edx-wrapper">
						<div class="edx-page-cover-titles">
							<div class="edx-page-cover-title">`+this.data.info.language+`</div>
							<div class="edx-page-cover-subtitle">`+this.data.info.title+`</div>
						</div>
					</div>`;
		container.html(content);
	}

	sidebar() {

	}

	courseData() {

		let data = {
			'info':{
				'id':'y86fr0wb',
				'title':'headings and paragraphs',
				'track':'introduction to html',
				'language':'html',
				'keywords':['html','headings','paragraphs'],
				'description':'',
				'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				'difficulty':'easy',
				'video':{
					'id':'',
					'steps':[
						{
							'time':'',
							'id':''
						},
						{
							'time':'',
							'id':''
						},
						{
							'time':'',
							'id':''
						}
					],
				},
			},
			'date':{
				'created':'',
				'updated':''
			},
			'author':{
				'name':'mathew maione',
				'image':''
			}
		};
		return data;

	}

}