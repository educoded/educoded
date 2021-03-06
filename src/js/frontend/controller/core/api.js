class API {

    init() {        
        // unique
        function unique(arr, comparator) {
            let uniqueArr = [];
            for (let i in arr) {
                let found = false;
                for (let j in uniqueArr) {
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

    unique(arr, comparator) {
        let uniqueArr = [];
        for (let i in arr) {
            let found = false;
            for (let j in uniqueArr) {
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

    randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
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
            'python':{'ext':'py','snippet':''},
            'ruby':{'ext':'rb','snippet':''}
        };
        if(!item) { info = data[lang]; }
        else { info = data[lang][item]; }
        return info;
    }

    phoneApi(){
        var edxApp = angular.module('edxApp', []);
        edxApp.controller('edxCtrl', function($scope) {
          $scope.currencyVal;
        });
        edxApp.directive('phoneInput', function($filter, $browser) {
            return {
                require: 'ngModel',
                link: function($scope, $element, $attrs, ngModelCtrl) {
                    var listener = function() {
                        var value = $element.val().replace(/[^0-9]/g, '');
                        $element.val($filter('tel')(value, false));
                    };
                    ngModelCtrl.$parsers.push(function(viewValue) {
                        return viewValue.replace(/[^0-9]/g, '').slice(0,10);
                    });
                    ngModelCtrl.$render = function() {
                        $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
                    };
                    $element.bind('change', listener);
                    $element.bind('keydown', function(event) {
                        var key = event.keyCode;
                        if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
                            return;
                        }
                        $browser.defer(listener);
                    });
                    $element.bind('paste cut', function() {
                        $browser.defer(listener);
                    });
                }
            };
        });
        edxApp.filter('tel', function () {
            return function (tel) {
                if (!tel) { return ''; }
                var value = tel.toString().trim().replace(/^\+/, '');
                if (value.match(/[^0-9]/)) { return tel; }
                var country, city, number;
                switch (value.length) {
                    case 1:
                    case 2:
                    case 3:
                        city = value;
                        break;
                    default:
                        city = value.slice(0, 3);
                        number = value.slice(3);
                }
                if(number){
                    if(number.length>3){
                        number = number.slice(0, 3) + '-' + number.slice(3,7);
                    }
                    else{
                        number = number;
                    }
                    return ("(" + city + ") " + number).trim();
                }
                else{
                    return "(" + city;
                }
            };
        });
    }

}