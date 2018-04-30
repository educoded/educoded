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
			// this.buildTemplate();
		}
		else {
			// not logged in
			this.s3Data();
		}

	}

	userOnline() {
		console.log('user is online');
	}

	userOffline() {
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
		this.userLogin();
	}

	userLogin() {
		let data, userObj, userData, user = new User();
		data = {'email':'','password':''};
		userObj = this.userData();
		jQuery('.edx-sidebar-profile-login-btn').on('click', function() {
			jQuery('.edx-sidebar-profile-login-input-value').each(function() {
				let item, type;
				item = jQuery(this);
				type = item.data('type');
				data[type] = item.val();
			});
			userData = user.getUser(data, userObj);
		});
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
		let user, path, uData, password, u = new User();
		if(!data.email || !data.password) {
			return 'Missing data';
		}
		else {
			user = this.findUser(data.email, obj);
			path = CryptoJS.AES.decrypt(user.path,'lufrewop').toString(CryptoJS.enc.Utf8);
			jQuery.ajax({
	            type: 'GET',
	            crossDomain: true,
	            dataType: 'json',
	            url: 'https://s3-us-west-2.amazonaws.com/weed-express/data/users/'+path+'.json',
	            complete: function(jsondata) {
	                uData = JSON.parse(jsondata.responseText)[0];
	                password = CryptoJS.AES.decrypt(uData.password,'lufrewop').toString(CryptoJS.enc.Utf8);
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

	s3Data() {
		let user = new User();
		jQuery.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: 'https://s3-us-west-2.amazonaws.com/weed-express/data/users/user-data.json',
            complete: function(jsondata) {
                sessionStorage.setItem('userData',jsondata.responseText);
                user.userOffline();
            }
        });
	}

	saveUser(data) {
		sessionStorage.removeItem('uData');
		sessionStorage.removeItem('userData');
		localStorage.setItem('edx-cache-user-obj',JSON.stringify(data));
		this.checkUser();
	}

	userData() {
		return JSON.parse(sessionStorage.getItem('userData'));
	}

}