var controllers = angular.module('controllers',[]);

controllers.controller("MainController",['$scope','$window',function($scope,$window){
    $scope.line = 'what.....';
    $window.localStorage.setItem('data',[]);
    $window.localStorage.setItem('bp',[]);

    $scope.data = localStorage.getItem('data')||[];
    $scope.data = localStorage.getItem('bp')||[];
    
    $scope.conscious = function(val) {
        $scope.data = val;
    }

    var commands = {
        'Consciousness *val': function(val){
            $scope.conscious(val);
            $scope.$apply();
        },
        'Blood pressure *val': function(val){
            $scope.data.push({
                key: 'Blood pressure',
                value: val
            });
            $scope.$apply();
        },
        'Glasgow coma scale *val': function(val){
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