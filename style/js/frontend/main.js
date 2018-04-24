console.log('main.js');

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