class API {

	init() {		
        // unique
        function unique(arr, comparator) {
            var uniqueArr = [];
            for (var i in arr) {
                var found = false;
                for (var j in uniqueArr) {
                    if (comparator instanceof Function) {
                        if (comparator.call(null, arr[i], uniqueArr[j])) {
                            found = true;
                            break;
                        }
                    }
                    else {
                        if (arr[i] == uniqueArr[j]) {
                            found = true;
                            break;
                        }
                    }
                }
                if (!found) {
                    uniqueArr.push(arr[i]);
                }
            }
            return uniqueArr;
        }
	}

    gradient() {
        var colors = new Array(
            [201, 75, 75],
            [247, 183, 51],
            [247, 183, 51],
            [201, 75, 75],
            [201, 75, 75],
            [247, 183, 51]
        );
        var step = 0;
        var colorIndices = [0,1,2,3];
        var gradientSpeed = 0.002; //transition speed
        function updateGradient() {
            if ( $===undefined ) return;
            var c0_0 = colors[colorIndices[0]];
            var c0_1 = colors[colorIndices[1]];
            var c1_0 = colors[colorIndices[2]];
            var c1_1 = colors[colorIndices[3]];
            var istep = 1 - step;
            var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            var color1 = "rgb("+r1+","+g1+","+b1+")";
            var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
            var color2 = "rgb("+r2+","+g2+","+b2+")";
            $('.edx-gradient').css({background: "-webkit-gradient(linear, left top, right bottom, from("+color1+"), to("+color2+"))"}).css({background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
            step += gradientSpeed;
            if ( step >= 1 ) {
                step %= 1;
                colorIndices[0] = colorIndices[1];
                colorIndices[2] = colorIndices[3];
                colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
                colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            }
        }
        setInterval(updateGradient,10);
    }

    config(key) {
        let data;
        data = {
            'host':'https://s3-us-west-2.amazonaws.com/weed-express/',
            'users':'https://s3-us-west-2.amazonaws.com/weed-express/data/users/user-data.json',
            'user':'https://s3-us-west-2.amazonaws.com/weed-express/data/users/',
            'courses':'https://s3-us-west-2.amazonaws.com/educoded/data/courses/',
            'salt':'lufrewop'
        };
        return data[key];
    }

    popularLanguages() {
        let data;
        data = [{'name':'C and C++','value':'c_cpp','ext':'cpp','path':'ace/mode/c_cpp'},{'name':'C#','value':'csharp','ext':'cs','path':'ace/mode/csharp'},{'name':'CSS','value':'css','ext':'css','path':'ace/mode/css'},{'name':'Go','value':'golang','ext':'go','path':'ace/mode/golang'},{'name':'HTML','value':'html','ext':'html','path':'ace/mode/html'},{'name':'Java','value':'java','ext':'java','path':'ace/mode/java'},{'name':'JavaScript','value':'javascript','ext':'js','path':'ace/mode/javascript'},{'name':'MySQL','value':'mysql','ext':'myd','path':'ace/mode/mysql'},{'name':'Objective-C','value':'objectivec','ext':'mm','path':'ace/mode/objectivec'},{'name':'PHP','value':'php','ext':'php','path':'ace/mode/php'},{'name':'Python','value':'python','ext':'py','path':'ace/mode/python'},{'name':'Ruby','value':'ruby','ext':'rb','path':'ace/mode/ruby'},{'name':'Scala','value':'scala','ext':'sc','path':'ace/mode/scala'},{'name':'SQL','value':'sql','ext':'sql','path':'ace/mode/sql'},{'name':'Swift','value':'swift','ext':'swift','path':'ace/mode/swift'},{'name':'Typescript','value':'typescript','ext':'ts','path':'ace/mode/typescript'}];
        return data;
    }

    languageInfo(lang, item) {
        let data, info;
        data = {
            'css':{'ext':'css','snippet':''},
            'html':{'ext':'html','snippet':''},
            'javascript':{'ext':'js','snippet':''},
            'mysql':{'ext':'myd','snippet':''},
            'php':{'ext':'php','snippet':''},
            'python':{'ext':'py','snippet':''}
        };
        if(!item) { info = data[lang]; }
        else { info = data[lang][item]; }
        return info;
    }

    // getConfig(key, data) {
    //     for (var i = 0; i < data.length; i++) {
    //         if (data[i].email === key) {
    //             return data[i];
    //         }
    //         else {
    //             return false;
    //         }
    //     }
    // }

}