class User {

	init() {
		this.checkUser();
	}

	checkUser() {

		// check to see if user has been either loaded or cached
		let userObj, user = new User();
		userObj = localStorage.getItem('edx-cache-user-obj');

		if(userObj != null) {
			// logged in
			// Sets the user data as a global value
			this.userData = userObj;
			this.userOnline();
			console.log('logged in');
		}
		else {
			// not logged in
			let user = new User(), api = new API();
			jQuery.ajax({
	            type: 'GET',
	            crossDomain: true,
	            dataType: 'json',
	            url: api.config('users'),
	            complete: function(jsondata) {
	                user.userOffline(jsondata.responseText);
	            }
	        });
		}

	}

	userOnline() {
		let container, content, data, user = new User();
		data = JSON.parse(this.userData);
		container = jQuery('.edx-sidebar-profile-content');
		content = 	`<div class="edx-sidebar-profile-online">
						<div>Hello, `+data.first_name+`!</div>
						<div class="edx-user-logout">logout</div>
						<div class="edx-user-admin">admin</div>
					</div>`;
		container.html(content);

		// logout
		jQuery('.edx-user-logout').on('click', function() {
			user.userLogout();
		});
	}

	userOffline(data) {
		let container, content;
		container = jQuery('.edx-sidebar-profile-content');
		content = 	`<div class="edx-sidebar-profile-offline">
						<div class="edx-sidebar-profile-login">
							<div class="edx-sidebar-profile-login-block">
								<div class="edx-sidebar-profile-login-title">
									email
								</div>
								<div class="edx-sidebar-profile-login-input">
									<input class="edx-sidebar-profile-login-input-value" data-type="email" type="text" placeholder="me@example.com">
								</div>
							</div>
							<div class="edx-sidebar-profile-login-block">
								<div class="edx-sidebar-profile-login-title">
									password
								</div>
								<div class="edx-sidebar-profile-login-input">
									<input class="edx-sidebar-profile-login-input-value" data-type="password" type="password" placeholder="••••••••">
								</div>
							</div>
							<div class="edx-sidebar-profile-login-btn edx-wrapper">login</div>
							<div class="edx-sidebar-break"></div>
							<div class="edx-sidebar-profile-register-btn edx-wrapper">register</div>
						</div>
					</div>`;
		container.html(content);
		this.userLogin(data);
	}

	userLogin(userObj) {
		let data, userData, user = new User();
		data = {'email':'','password':''};
		jQuery('.edx-sidebar-profile-login-btn').on('click', function() {
			jQuery('.edx-sidebar-profile-login-input-value').each(function() {
				let item, type;
				item = jQuery(this);
				type = item.data('type');
				data[type] = item.val();
			});
			userData = user.getUser(data, JSON.parse(userObj));
		});
	}

	userLogout() {		
		localStorage.removeItem('edx-cache-user-obj');
		this.checkUser();
	}

	findUser(key, data) {
	    for (var i = 0; i < data.length; i++) {
	        if (data[i].email === key) {
	            return data[i];
	        }
	        else {
	        	return false;
	        }
	    }
	}

	getUser(data, obj) {
		let user, path, uData, password, u = new User(), api = new API();
		if(!data.email || !data.password) {
			return 'Missing data';
		}
		else {
			user = this.findUser(data.email, obj);
			path = CryptoJS.AES.decrypt(user.path,api.config('salt')).toString(CryptoJS.enc.Utf8);
			jQuery.ajax({
	            type: 'GET',
	            crossDomain: true,
	            dataType: 'json',
	            url: api.config('user')+path+'.json',
	            complete: function(jsondata) {
	                uData = JSON.parse(jsondata.responseText)[0];
	                password = CryptoJS.AES.decrypt(uData.password,api.config('salt')).toString(CryptoJS.enc.Utf8);
					if(uData) {
						if(data.email == uData.email && data.password == password ) {
							u.saveUser(uData);
						}
						else {
							return 'Email or password is incorrect.';
						}
					}
					else {
						return 'Email does not exist.';
					}
	            }
	        });
		}
	}

	saveUser(data) {
		localStorage.setItem('edx-cache-user-obj',JSON.stringify(data));
		this.checkUser();
	}

}