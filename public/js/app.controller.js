var controllers = angular.module('controllers',[]);

controllers.controller("MainController",['$scope','$window',function($scope,$window){
      
    $scope.line = 'what.....';
    $window.localStorage.setItem('vitals',[]);
    $window.localStorage.setItem('pt',[]);

    $scope.data = localStorage.getItem('vitals')||[];
    $scope.data = localStorage.getItem('pt')||[];
    
    $scope.check = function(val) {
        $scope.conscious = val;
    }

    var commands = {
        'Consciousness *val': function(val){
            $scope.check(val);
            $scope.$apply();
        },
        'Blood pressure *val over *val2': function(val,val2){
            $scope.vitals.push({
                key: 'Blood pressure',
                bps: val,
                bpd: val2
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
        'Heart rate *val respiratory rate *val2': function(val,val2){
            $scope.vitals.push({
                key: 'Heart rate',
                pr: val,
                rr: val2,
                date: new Date()
            });
            $scope.$apply();
        },
        'Heart rate *val': function(val){
            $scope.data.push({
                key: 'Heart rate',
                pr: val,
                date: new Date()
            });
            $scope.$apply();
        },
        'Respiratory rate *val': function(val){
            $scope.data.push({
                key: 'Resp rate',
                value: val,
                rr: val,
                date: new Date()
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