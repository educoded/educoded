class API {

	init() {

		// is on screen
        jQuery.fn.isOnScreen = function(){

            var win = jQuery(window);
            
            var viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            
            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
            
            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
            
        };

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
            'salt':'lufrewop'
        };
        return data[key];
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