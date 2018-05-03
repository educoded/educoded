class Storage {

	saveData(param,data) {
		switch(param.type) {
			case 'local':
				localStorage.setItem(param.name,JSON.stringify(data));
			break;
			case 'session':
				sessionStorage.setItem(param.name,JSON.stringify(data));
			break;
		}
	}

}