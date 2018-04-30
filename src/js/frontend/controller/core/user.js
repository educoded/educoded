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
			this.userOffline();
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
		console.log('user is offline');

		this.userLogin();
	}

	userLogin() {
		let data, userObj, userData, user = new User();
		data = {'email':'','password':''};
		userObj = this.userData();
		console.log(userObj);
		jQuery('.edx-sidebar-profile-login-btn').on('click', function() {
			jQuery('.edx-sidebar-profile-login-input-value').each(function() {
				let item, type;
				item = jQuery(this);
				type = item.data('type');
				data[type] = item.val();
			});
			if(!data.email || !data.password) {
				console.log('missing data');
			}
			else {
				
				userData = user.findUser(data.email, userObj);
				if(userData) {
					if(data.email == userData.email && data.password == userData.password ) {
						console.log('successful login');
						console.log(userData);
					}
					else {
						console.log('email or password is incorrect');
					}
				}
				else {
					console.log('Email does not exist...');
				}
			}
		});
		console.log('user login is ready');

		// Encrypt
		var ciphertext = CryptoJS.AES.encrypt('my message', 'liberty');

		// Decrypt
		var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'liberty');
		var plaintext = bytes.toString(CryptoJS.enc.Utf8);

		console.log(ciphertext.toString());
		console.log(plaintext);

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

	userData(id) {
		let data;
		data = [{"id":1,"first_name":"Mathew","last_name":"Maione","email":"mathew@kavada.com","password":"1337bruh"},{"id":2,"first_name":"Zola","last_name":"Straffon","email":"zstraffon1@loc.gov","password":"ZGImNPyo"},{"id":3,"first_name":"Cheston","last_name":"Shellum","email":"cshellum2@msu.edu","password":"NSM3LyNO"},{"id":4,"first_name":"Esdras","last_name":"Loughney","email":"eloughney3@virginia.edu","password":"dU7JAmEQ"},{"id":5,"first_name":"Fredric","last_name":"Guerro","email":"fguerro4@yale.edu","password":"iohYrr"},{"id":6,"first_name":"Archibald","last_name":"Targe","email":"atarge5@e-recht24.de","password":"GHxJzvvGwW"},{"id":7,"first_name":"Pernell","last_name":"Bulfield","email":"pbulfield6@netlog.com","password":"sY0dOLqF"},{"id":8,"first_name":"Analiese","last_name":"Lohmeyer","email":"alohmeyer7@chron.com","password":"VRMMinhbnQ"},{"id":9,"first_name":"Adey","last_name":"Gligorijevic","email":"agligorijevic8@alexa.com","password":"91DRA2KbaUV"},{"id":10,"first_name":"Lillis","last_name":"Doubleday","email":"ldoubleday9@weebly.com","password":"0jkizzJASsbc"},{"id":11,"first_name":"Alexandros","last_name":"Lassey","email":"alasseya@ning.com","password":"vULOUXQSG"},{"id":12,"first_name":"Alister","last_name":"Di Biasi","email":"adibiasib@biglobe.ne.jp","password":"RPnROyp"},{"id":13,"first_name":"Isiahi","last_name":"Leat","email":"ileatc@slideshare.net","password":"tvrYY8rGbGJs"},{"id":14,"first_name":"Obadiah","last_name":"Tedman","email":"otedmand@dagondesign.com","password":"EeCZJx2i9Un"},{"id":15,"first_name":"Jane","last_name":"Memmory","email":"jmemmorye@yellowbook.com","password":"GA0ubicKCcyS"},{"id":16,"first_name":"Zorana","last_name":"Lympany","email":"zlympanyf@nba.com","password":"ZuoHiQhnUd"},{"id":17,"first_name":"Shawnee","last_name":"Wims","email":"swimsg@opensource.org","password":"HZyZX7H"},{"id":18,"first_name":"Janina","last_name":"Acaster","email":"jacasterh@cpanel.net","password":"4iCqlXe"},{"id":19,"first_name":"Ludovico","last_name":"Bramwich","email":"lbramwichi@ibm.com","password":"YfwnfTSS9bsC"},{"id":20,"first_name":"Tasha","last_name":"Camin","email":"tcaminj@mozilla.org","password":"YSLGjMZEq"},{"id":21,"first_name":"Flemming","last_name":"Jupe","email":"fjupek@bbb.org","password":"8icKlENXst"},{"id":22,"first_name":"Kelsey","last_name":"Frill","email":"kfrilll@census.gov","password":"IDCOYl"},{"id":23,"first_name":"Onfre","last_name":"Arundel","email":"oarundelm@comsenz.com","password":"6uhLaIpb"},{"id":24,"first_name":"Charo","last_name":"Widdowfield","email":"cwiddowfieldn@nyu.edu","password":"MmL0BWJOBN4o"},{"id":25,"first_name":"Holmes","last_name":"Restill","email":"hrestillo@networksolutions.com","password":"ghH0kpw3kCaX"},{"id":26,"first_name":"Denyse","last_name":"Billingsley","email":"dbillingsleyp@t.co","password":"B1FwW4Se91Y"},{"id":27,"first_name":"Robbert","last_name":"O'Neal","email":"ronealq@artisteer.com","password":"43QMeXg7"},{"id":28,"first_name":"Lilian","last_name":"Breakspear","email":"lbreakspearr@google.ru","password":"2HORxh"},{"id":29,"first_name":"Connie","last_name":"Menco","email":"cmencos@ifeng.com","password":"q1mHFwJv4u"},{"id":30,"first_name":"Carlos","last_name":"Mc Carroll","email":"cmccarrollt@bigcartel.com","password":"cXXal0k"},{"id":31,"first_name":"Sallyann","last_name":"Dewhirst","email":"sdewhirstu@ibm.com","password":"zBR6alwLe"},{"id":32,"first_name":"Hilario","last_name":"Gheorghie","email":"hgheorghiev@ycombinator.com","password":"joZl4Yi"},{"id":33,"first_name":"Rachel","last_name":"Hastilow","email":"rhastiloww@mail.ru","password":"mB2W3a"},{"id":34,"first_name":"Cherey","last_name":"Galley","email":"cgalleyx@plala.or.jp","password":"JWKev3LUm"},{"id":35,"first_name":"Evyn","last_name":"Vanin","email":"evaniny@amazonaws.com","password":"CgAlrEovg"},{"id":36,"first_name":"Micki","last_name":"Normavill","email":"mnormavillz@pbs.org","password":"jsPrjK5emio"},{"id":37,"first_name":"Sybila","last_name":"Huddles","email":"shuddles10@microsoft.com","password":"knBa2cU4daJB"},{"id":38,"first_name":"Jodi","last_name":"McAmish","email":"jmcamish11@telegraph.co.uk","password":"WJ1A5v"},{"id":39,"first_name":"Jazmin","last_name":"Kippins","email":"jkippins12@howstuffworks.com","password":"CeNfIiN"},{"id":40,"first_name":"Bethina","last_name":"Tabner","email":"btabner13@sfgate.com","password":"E4XEpJv"},{"id":41,"first_name":"Tait","last_name":"Bleythin","email":"tbleythin14@mapy.cz","password":"el4qUDzDugfI"},{"id":42,"first_name":"Rolland","last_name":"Clemetts","email":"rclemetts15@salon.com","password":"ToYVZMc"},{"id":43,"first_name":"Tracee","last_name":"Gottelier","email":"tgottelier16@bbc.co.uk","password":"Ru54omtaglE0"},{"id":44,"first_name":"Reade","last_name":"Glasheen","email":"rglasheen17@acquirethisname.com","password":"t5OEFbjF7rVn"},{"id":45,"first_name":"Sheryl","last_name":"Sawers","email":"ssawers18@reference.com","password":"9NqHZg5oNhc2"},{"id":46,"first_name":"Brocky","last_name":"Lethem","email":"blethem19@freewebs.com","password":"of7KmO"},{"id":47,"first_name":"Talbert","last_name":"Scardefield","email":"tscardefield1a@list-manage.com","password":"pbKt9ljE"},{"id":48,"first_name":"Archy","last_name":"Baudi","email":"abaudi1b@twitter.com","password":"h0ZnecfeLu"},{"id":49,"first_name":"Neil","last_name":"Sneesbie","email":"nsneesbie1c@goo.gl","password":"5DQD3cfDSejI"},{"id":50,"first_name":"Towney","last_name":"Fibben","email":"tfibben1d@wordpress.org","password":"9H4OofoYA"},{"id":51,"first_name":"Toni","last_name":"Liveing","email":"tliveing1e@wisc.edu","password":"CFWWogX8tnBC"},{"id":52,"first_name":"Judi","last_name":"Daskiewicz","email":"jdaskiewicz1f@bloglines.com","password":"yjDaInmsC"},{"id":53,"first_name":"Maddie","last_name":"Blanch","email":"mblanch1g@thetimes.co.uk","password":"n8VOVv2v"},{"id":54,"first_name":"Heath","last_name":"Langfat","email":"hlangfat1h@mozilla.org","password":"VdpnjC"},{"id":55,"first_name":"Winnie","last_name":"Yegorov","email":"wyegorov1i@friendfeed.com","password":"iPM1dd"},{"id":56,"first_name":"Mella","last_name":"Caldicott","email":"mcaldicott1j@issuu.com","password":"Kt0wB6R0T"},{"id":57,"first_name":"Agnese","last_name":"Aronstam","email":"aaronstam1k@lulu.com","password":"lt4VAVNuNgE"},{"id":58,"first_name":"Glenda","last_name":"Hallihane","email":"ghallihane1l@meetup.com","password":"8oF8w4"},{"id":59,"first_name":"Englebert","last_name":"Gisbye","email":"egisbye1m@cloudflare.com","password":"9L2IsY"},{"id":60,"first_name":"Annette","last_name":"Culbard","email":"aculbard1n@nature.com","password":"susuRO4PZ"},{"id":61,"first_name":"Meara","last_name":"O'Grady","email":"mogrady1o@newsvine.com","password":"dudQbgSd1"},{"id":62,"first_name":"Ekaterina","last_name":"Lazarus","email":"elazarus1p@zimbio.com","password":"v3mYlGbSH8"},{"id":63,"first_name":"Zoe","last_name":"Hacun","email":"zhacun1q@senate.gov","password":"rU73Vbv2ooM"},{"id":64,"first_name":"Karoly","last_name":"Crim","email":"kcrim1r@globo.com","password":"zuATavAh"},{"id":65,"first_name":"Robina","last_name":"Addis","email":"raddis1s@yahoo.com","password":"tgYmjyBG4"},{"id":66,"first_name":"Aurelea","last_name":"Bumphrey","email":"abumphrey1t@kickstarter.com","password":"PJ9kBZ8"},{"id":67,"first_name":"Regan","last_name":"Hawgood","email":"rhawgood1u@unblog.fr","password":"ydjuGMLvPCG"},{"id":68,"first_name":"Nelli","last_name":"Harlowe","email":"nharlowe1v@yahoo.com","password":"HFBE0RNA"},{"id":69,"first_name":"Estelle","last_name":"Twell","email":"etwell1w@jiathis.com","password":"xNLh8Z8"},{"id":70,"first_name":"Rik","last_name":"Assur","email":"rassur1x@ebay.com","password":"vyc2wcoLB"},{"id":71,"first_name":"Lauren","last_name":"Messer","email":"lmesser1y@oakley.com","password":"jVf8y4"},{"id":72,"first_name":"Lothario","last_name":"Seeney","email":"lseeney1z@unicef.org","password":"LUwkKOOt5aN"},{"id":73,"first_name":"Madelin","last_name":"Nason","email":"mnason20@si.edu","password":"N6QeEwMxBo"},{"id":74,"first_name":"Haley","last_name":"Priddie","email":"hpriddie21@goo.gl","password":"kgD51XYcBNo"},{"id":75,"first_name":"Rania","last_name":"Featherby","email":"rfeatherby22@addthis.com","password":"iESZTer"},{"id":76,"first_name":"Sally","last_name":"Redmond","email":"sredmond23@reuters.com","password":"OVrQCG"},{"id":77,"first_name":"Benedetto","last_name":"Lothlorien","email":"blothlorien24@nps.gov","password":"vzUKasokJO"},{"id":78,"first_name":"Edward","last_name":"Blackleech","email":"eblackleech25@paypal.com","password":"mfocALcFk8i"},{"id":79,"first_name":"Mahmud","last_name":"Kittless","email":"mkittless26@businesswire.com","password":"TzWlBvS4qcK"},{"id":80,"first_name":"Matti","last_name":"Drohan","email":"mdrohan27@sina.com.cn","password":"UIJuY7M"},{"id":81,"first_name":"Audi","last_name":"Espy","email":"aespy28@newyorker.com","password":"cYyHse9"},{"id":82,"first_name":"Anastasia","last_name":"Chatain","email":"achatain29@chronoengine.com","password":"Vg7LR4WjvzYu"},{"id":83,"first_name":"Arnie","last_name":"MacTerrelly","email":"amacterrelly2a@ovh.net","password":"cEBMR384Yb"},{"id":84,"first_name":"Mic","last_name":"Bradnocke","email":"mbradnocke2b@accuweather.com","password":"6kdqxc46"},{"id":85,"first_name":"Aeriell","last_name":"Laugheran","email":"alaugheran2c@answers.com","password":"kSyfpLVO"},{"id":86,"first_name":"Frasier","last_name":"Poundesford","email":"fpoundesford2d@mit.edu","password":"GXHFYUz4F"},{"id":87,"first_name":"Cully","last_name":"Anwyl","email":"canwyl2e@dmoz.org","password":"QWvMU6ricO"},{"id":88,"first_name":"Alain","last_name":"Brunton","email":"abrunton2f@narod.ru","password":"aDQu8e"},{"id":89,"first_name":"Myriam","last_name":"Rounsefull","email":"mrounsefull2g@instagram.com","password":"L63wJX9"},{"id":90,"first_name":"Magdalena","last_name":"O'Rowane","email":"morowane2h@nsw.gov.au","password":"UW4Y9rXmjAl7"},{"id":91,"first_name":"Duky","last_name":"Obee","email":"dobee2i@surveymonkey.com","password":"bA617SNiM6"},{"id":92,"first_name":"Harlie","last_name":"Lacaze","email":"hlacaze2j@tripod.com","password":"0K6ArOKR"},{"id":93,"first_name":"Maridel","last_name":"Willacot","email":"mwillacot2k@theglobeandmail.com","password":"GmevGLTzC8PY"},{"id":94,"first_name":"Tasia","last_name":"Bunclark","email":"tbunclark2l@mashable.com","password":"0MD4PUmOTP9t"},{"id":95,"first_name":"Mellie","last_name":"Dumbellow","email":"mdumbellow2m@europa.eu","password":"QBz1048"},{"id":96,"first_name":"Kassandra","last_name":"Kitchenside","email":"kkitchenside2n@newsvine.com","password":"JdmzIKs"},{"id":97,"first_name":"Raeann","last_name":"Ingle","email":"ringle2o@github.io","password":"N8AZq5LcUKL"},{"id":98,"first_name":"Arman","last_name":"Borkin","email":"aborkin2p@huffingtonpost.com","password":"kbxm81w"},{"id":99,"first_name":"Maynord","last_name":"Waller-Bridge","email":"mwallerbridge2q@home.pl","password":"r43n3Z"},{"id":100,"first_name":"Carny","last_name":"Sever","email":"csever2r@xrea.com","password":"GeqS7THn"}];
		return data;
	}

}