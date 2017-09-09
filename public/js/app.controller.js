var controllers = angular.module('controllers',[]);

controllers.controller("MainController",['$scope','$window',function($scope,$window){
    $scope.line = 'what.....';
    $window.localStorage.setItem('data',[]);

    $scope.data = localStorage.getItem('data')||[];

    var commands = {
        'Blood pressure *val': function(val){
            $scope.data.push({
                key: 'Blood pressure',
                value: val
            });
            $scope.$apply();
        },
        'GCS *val': function(val){
            $scope.data.push({
                key: 'GCS',
                value: val
            });
            $scope.$apply();
        },
        'Heart rate *val': function(val){
            $scope.data.push({
                key: 'Heart rate',
                value: val
            });
            $scope.$apply();
        },

        'Pain score *val':function(val){
            $scope.data.push({
                key:'Pain score',
                value: val
            });
            $scope.$apply();
        }
    };

    annyang.addCommands(commands);
    annyang.debug();
    annyang.start();
}]);