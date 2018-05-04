class About {

	init() {
		// let getUserObj, db = new DB();
		// console.log(moment().format());
		// getUserObj = sessionStorage.getItem('edx-query-get-user');
		// if(getUserObj != null) {
		// 	console.log('cached from DB');
		// 	console.log(JSON.parse(getUserObj));
		// }
		// else {
			// db.get({'columns':[],'table':'users/list','column':'first_name','operator':'equals','value':'Mathew','function':'let about = new About(); about.test();','storage':{'type':'','name':''}});
		// }
		this.template();
	}

	// template() {
	// 	edx-page-full-content
	// }

	template() {
		this.cover();
		this.page();
	}

	cover() {
		let container, content, data;
		data = this.courseData;
		container = jQuery('.edx-page-cover');
		content = 	`<div class="edx-wrapper">
						<div class="edx-page-cover-titles">
							<div class="edx-page-cover-title">about</div>
							<div class="edx-page-cover-subtitle">who we are</div>
						</div>
					</div>`;
		container.html(content);
	}

	page() {
		let container, content;
		container = jQuery('.edx-page-full-content');
		content = 	`<div class="edx-xs-100 edx-sm-100 edx-md-50 edx-lg-50">
						<div class="edx-page-content">
							<div class="edx-page-text">
								Educoded started back in 2013 when I came up with the idea of documenting
								my progress through my journey as a programmer.
							</div>
							<div class="edx-page-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</div>
							<div class="edx-page-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	test() {
		console.log('this is coming from DB');
	}

}