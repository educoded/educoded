class DB {

	init() {
		
	}

	get(query) {
		jQuery.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: 'https://s3-us-west-2.amazonaws.com/educoded/data/'+query.table+'.json',
            complete: function(jsondata) {
            	let data, columns, db = new DB();

            	// returned data as object
            	data = JSON.parse(jsondata.responseText);
				columns = db.getColumns(query,data);

				// set data
				db.setData(query,columns);

				// now run your function
				if(query.function) {
					eval(query.function);
				}
				
            }
        });

	}


	getColumns(query,data) {
		let array = [];
		for (var i = 0; i < data.length; i++) {
			let columns;
			if(query.column && query.value) {
				if(data[i][query.column] == query.value) {
					if(query.columns.length < 1) {
						array.push(data[i]);
					}
					else {
						columns = query.columns.reduce((o, key) => Object.assign(o, {[key]: data[i][key]}), {});
						array.push(columns);
					}
				}
			}
			else {
				array.push(data[i]);
			}
		}
		return array;
	}

	setData(query,array) {
		let storage = new Storage();
		if(query.storage.name) {
			storage.saveData(query.storage,array);
		}
		else {
			console.log(array);
		}
	}

}