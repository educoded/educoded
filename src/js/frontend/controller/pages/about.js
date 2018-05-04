class About {

	init() {
		let getUserObj, db = new DB();
		console.log(moment().format());
		getUserObj = sessionStorage.getItem('edx-query-get-user');
		if(getUserObj != null) {
			console.log('cached from DB');
			console.log(JSON.parse(getUserObj));
		}
		else {
			db.get({'columns':['id','first_name','email'],'table':'users/list','column':'first_name','operator':'==','value':'Mathew','storage':{'type':'session','name':'edx-query-get-user'}});
		}
	}

}