var controllers = angular.module('controllers',[]);

controllers.controller("MainController",['$scope','$window',function($scope,$window){
      
    $scope.line = 'what.....';
    $window.localStorage.setItem('vitals',[]);
    $window.localStorage.setItem('demo',[]);
    $window.localStorage.setItem('hist',[]);

    $scope.vitals = localStorage.getItem('vitals')||[];
    $scope.demo = localStorage.getItem('demo')||[];
    $scope.hist = localStorage.getItem('hist')||[];
    
    $scope.sex = function(val) {
        $scope.sex = val;
    }
    $scope.conscious = function(val) {
        $scope.conscious = val;
    }
    $scope.pup = function(val) {
        $scope.pup = val;
    }
    $scope.airway = function(val) {
        $scope.airway = val;
    }
    $scope.cpr = function(val) {
        $scope.cpr = val;
    }
    $scope.strok = function(val) {
        $scope.strok = val;
    }
    $scope.injury = function(val) {
        $scope.injury = val;
    }

    var commands = {
        'Name *val':function(val){
            $scope.demo.push({
                name: val
            })
            $scope.$apply();
        },
        'Age *val':function(val){
            $scope.demo.push({
                age: val
            })
            $scope.$apply();
        },
        'Sex *val':function(val){
            $scope.sex(val);
            $scope.$apply();
        },
        'Blood pressure *val over *val2': function(val,val2){
            $scope.vitals.push({
                bps: val,
                bpd: val2,
                date: new Date()
            });
            $scope.$apply();
        },
        'Oximetry *val': function(val){
            $scope.vitals.push({
                ox: val,
                date: new Date()
            });
            $scope.$apply();
        },
        'Heart rate *val': function(val){
            $scope.vitals.push({
                pr: val,
                date: new Date()
            });
            $scope.$apply();
        },
        'Respiratory rate *val': function(val){
            $scope.vitals.push({
                rr: val,
                date: new Date()
            });
            $scope.$apply();
        },
        'Heart rate *val respiratory rate *val2': function(val,val2){
            $scope.vitals.push({
                pr: val,
                rr: val2,
                date: new Date()
            });
            $scope.$apply();
        },
        'Blood pressure *val over *val2 Heart rate *val3 respiratory rate *val4': function(val,val2, val3, val4){
            $scope.vitals.push({
                bps: val,
                bpd: val2,
                pr: val3,
                rr: val4,
                date: new Date()
            });
            $scope.$apply();
        },
        'Consciousness *val': function(val){
            $scope.conscious(val);
            $scope.$apply();
        },
        'Pupils *val': function(val){
            $scope.pup(val);
            $scope.$apply();
        },
        'airway *val': function(val){
            $scope.airway(val);
            $scope.$apply();
        },
        'cpr *val': function(val){
            $scope.cpr(val);
            $scope.$apply();
        },
        'stroke *val': function(val){
            $scope.strok(val);
            $scope.$apply();
        },
        '*val injury': function(val){
            $scope.injury(val);
            $scope.$apply();
        },
        'medical history' : function(val){
            $scope.hist.push({
                medHist: val
            })
            $scope.$apply();
        },
        'allergies *val': function(val){
            $scope.hist.push({
                allergies: val
            })
            $scope.$apply();
        },
        'medication *val': function(val){
            $scope.hist.push({
                medication: val
            })
            $scope.$apply();
        },
        'treatment *val': function(val){
            $scope.hist.push({
                treatment: val
            })
            $scope.$apply();
        },
    };

    annyang.addCommands(commands);
    annyang.debug();
    annyang.start();
}]);