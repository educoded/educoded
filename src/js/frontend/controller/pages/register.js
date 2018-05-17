class Register {

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
							<div class="edx-page-cover-title">register</div>
							<div class="edx-page-cover-subtitle">learn something new</div>
						</div>
					</div>`;
		container.html(content);
	}

	page() {
		this.registration();
	}

	registration() {
		let container, content, api = new API();
		container = jQuery('.edx-page-full-content');
		content = 	`<div class="edx-xs-100 edx-sm-100 edx-md-50 edx-lg-50">
						<div class="edx-page-content">
							<div class="edx-page-form">
								<!-- first name -->
								<div class="edx-page-form-item">
									<div class="edx-page-form-title">first name</div>
									<div class="edx-page-form-input">
										<input type="text" class="edx-page-form-value" data-min="2" data-max="18" data-type="first_name" placeholder="Barry" autocomplete="off" />
									</div>
								</div>
								<!-- last name -->
								<div class="edx-page-form-item">
									<div class="edx-page-form-title">last name</div>
									<div class="edx-page-form-input">
										<input type="text" class="edx-page-form-value" data-min="2" data-max="18" data-type="last_name" placeholder="Allen" autocomplete="off" />
									</div>
								</div>
								<!-- email -->
								<div class="edx-page-form-item">
									<div class="edx-page-form-title">email</div>
									<div class="edx-page-form-input">
										<input type="email" class="edx-page-form-value" data-min="5" data-max="60" data-type="email" placeholder="me@example.com" autocomplete="off" />
									</div>
								</div>
								<!-- phone -->
								<div class="edx-page-form-item" ng-app="edxApp">
									<div class="edx-page-form-title">phone</div>
									<div class="edx-page-form-input" ng-controller="edxCtrl">
										<input type="text" class="edx-page-form-value input-phone" data-min="14" data-max="14" data-type="phone" phone-input ng-model="phoneVal" placeholder="(808) 955-9821" autocomplete="off" data-value="{{phoneVal | tel}}" />
									</div>
								</div>
								<!-- password -->
								<div class="edx-page-form-item">
									<div class="edx-page-form-title">password</div>
									<div class="edx-page-form-input">
										<input type="password" class="edx-page-form-value" data-min="8" data-max="20" data-type="password" placeholder="••••••••" autocomplete="off" />
									</div>
								</div>
								<!-- password confirm -->
								<div class="edx-page-form-item">
									<div class="edx-page-form-title">password confirm</div>
									<div class="edx-page-form-input">
										<input type="password" class="edx-page-form-value" data-min="8" data-max="20" data-type="password_confirm" placeholder="••••••••" autocomplete="off" />
									</div>
								</div>
								<!-- register button -->
								<div class="edx-page-form-item">
									<div class="edx-page-form-btn edx-page-form-register">register</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		api.phoneApi();
		this.validateRegistration();
	}

	validateRegistration() {
		let obj, error, register = new Register();
		jQuery('.edx-page-form-register').on('click', function() {
			obj = {};
			error = [];
			jQuery('.edx-page-form-value').each(function() {
				let item, data, value, key, min, max;
				item = jQuery(this);
				value = item.val();
				key = item.data('type');
				min = item.data('min');
				max = item.data('max');
				data = {'value':value,'key':key,'min':min,'max':max};
				register.validateData(data,obj,error);
			});			
			if(error.length > 0) {
				console.log(error);
			}
			else {
				console.log('register new user');
			}
		});
	}

	validateData(data,obj,error) {
		let register = new Register();
		obj[data.key] = {'value':data.value};
		switch(data.key) {
			case 'first_name':
			case 'last_name':
				register.validateLength(data,obj,error);
			break;
			case 'email':
				register.validateLength(data,obj,error);
				register.validateEmail(data,obj,error);
			break;
			case 'phone':
				register.validateLength(data,obj,error);
			break;
			case 'password':
			case 'password_confirm':
				register.validateLength(data,obj,error);
				register.validatePassword(data,obj,error);
			break;
		}
	}

	validateLength(data,obj,error) {
		if(!data.value) {
			error.push({'key':data.key,'item':data.key.replace(/_/g, " "),'error':'missing values'});
		}
		else {
			if(data.value.length < data.min) {
				error.push({'key':data.key,'item':data.key.replace(/_/g, " "),'error':'value needs to be at least '+data.min+' letters'});
			}
			else if(data.value.length > data.max) {
				error.push({'key':data.key,'item':data.key.replace(/_/g, " "),'error':'value needs to be less than '+data.max+' letters'});
			}
		}
	}

	validateEmail(data,obj,error) {

	}

	validatePassword(data,obj,error) {
		if(obj['password'] && obj['password_confirm']) {
			if(obj['password'].value == obj['password_confirm'].value) {
				
			}
			else {
				error.push({'key':'password','item':'password','error':'passwords do not match'});
			}
		}
	}

}