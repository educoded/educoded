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
            	let data, array = [], storage = new Storage();
            	data = JSON.parse(jsondata.responseText);
				for (var i = 0; i < data.length; i++) {
					if(data[i][query.column] == query.value) {
						let columns;
						columns = query.columns.reduce((o, key) => Object.assign(o, {[key]: data[i][key]}), {});
						array.push(columns);
					}
				}
				if(query.storage) {
					storage.saveData(query.storage,array);
				}
            }
        });

	}

}