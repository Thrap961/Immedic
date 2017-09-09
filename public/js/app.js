var app = angular.module('myApp',[
    'ngRoute',
    'controllers'
]);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'/partials/main.html',
        controller: 'MainController'
    }).when('/detail/:itemId',{
        template:'detail partial',
        controller: 'DetailController'
    }).otherwise({
       redirectTo:'/'
    });

}]);