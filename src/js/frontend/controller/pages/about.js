class About {

	init() {
		this.template();
	}

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
								Educoded, meaning <b>educated + code</b> is the brain child of many not just one. Our goal with this project is to make coding fun and accessible to all walks of life. As many can probably relate... When I was younger, I would spend countless hours creating things out of legos and get lost in my creations. Programming is similar in that sense, it gives you the ability to create whatever you want from nothing. 
							</div>
							<div class="edx-page-text">
								Whether you are coming here with no knowledge or you're a L33T programmer, I guarantee you will enjoy your time on our application. We are very passionate about giving back to the community and helping people change their lives within this industry. This is one of the few professional industries that cares more about your experience than an expensive piece of paper. Much love and respect to those that go to university ;-)
							</div>
							<div class="edx-page-text">
								With all the jobs in tech and almost everything being connected to some form of technology, why would you not want to be a programmer!?! With that being said, what are you waiting for? <b>Learn something new.</b>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}