var myApp = angular.module("my-app",[]);

myApp.controller('mycontroller', function($scope){
    $scope.talk = { name : 'Building modern web apps with ASP.NET 5', duration : '30m' }
})

myApp.directive('attrcustomdirective',function(){
    return{
        restrict:'E',
        scope : {talkname : '@talk'},
        template : "<div style='border:1px solid red'>{{talkname}}</div>"
    }
})


myApp.directive('bindcustomdirective', function(){
    return {
        restrict:'E',
        scope:{talkinfo : '=talkdetails'},
        template:"<input type='text' ng-model='talkinfo.name'/>" + "<div>{{talkinfo.name}} : {{talkinfo.duration}}</div>"
    };
    
})
