var controllers = angular.module('controllers',[]);

controllers.controller("MainController",['$scope','$window',function($scope,$window){
      
    $scope.line = 'what.....';
    $window.localStorage.setItem('vitals',[]);
    $window.localStorage.setItem('name',[]);
    $window.localStorage.setItem('age',[]);
    $window.localStorage.setItem('hist',[]);
    $window.localStorage.setItem('allergy',[]);
    $window.localStorage.setItem('med',[]);
    $window.localStorage.setItem('treat',[]);

    $scope.vitals = localStorage.getItem('vitals')||[];
    $scope.name = localStorage.getItem('name')||[];
    $scope.age = localStorage.getItem('age')||[];
    $scope.hist = localStorage.getItem('hist')||[];
    $scope.allergy = localStorage.getItem('allergy')||[];
    $scope.med = localStorage.getItem('med')||[];
    $scope.treat = localStorage.getItem('treat')||[];
    
    $scope.sex = function(val) {
        $scope.sex = val;
    }
    $scope.consciousCheck = function(val) {
        $scope.conscious = val;
    }
    $scope.pupilsCheck = function(val) {
        $scope.pup = val;
    }
    $scope.airwayCheck = function(val) {
        $scope.airway = val;
    }
    $scope.cprCheck = function(val) {
        $scope.cpr = val;
    }
    $scope.strokeCheck = function(val) {
        $scope.strok = val;
    }
    $scope.injuryCheck = function(val) {
        $scope.injury = val;
    }

    var commands = {
        'Name *val':function(val){
            $scope.name.push({
                value: val
            })
            $scope.$apply();
        },
        'Age *val':function(val){
            $scope.age.push({
                value: val
            })
            $scope.$apply();
        },
        'Sex *val':function(val){
            $scope.sex(val);
            $scope.$apply();
        },
        'Blood pressure *val over *val2 Pulse *val3 respiratory rate *val4': function(val,val2, val3, val4){
            $scope.vitals.push({
                bps: val,
                bpd: val2,
                pr: val3,
                rr: val4,
                date: new Date()
            });
            $scope.$apply();
        },
        'Pulse *val respiratory rate *val2': function(val,val2){
            $scope.vitals.push({
                pr: val,
                rr: val2,
                date: new Date()
            });
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
        'Pulse *val': function(val){
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
        'Consciousness *val': function(val){
            if (val == 'alert' || val == 'verbal'|| val == 'pain'||val == 'unresponsive') {
                $scope.consciousCheck(val);
                $scope.$apply();
            }
        },
        'Pupils *val': function(val){
            if (val == 'normal' || val == 'constricted'|| val == 'dilated'||val == 'no reaction') {
                $scope.pupilsCheck(val);
                $scope.$apply();
            }
        },
        'airway *val': function(val){
            if (val == 'no' || val == 'yes') {
                $scope.airwayCheck(val);
                $scope.$apply();
            }
        },
        'cpr *val': function(val){
            if (val == 'no' || val == 'yes') {
                $scope.cprCheck(val);
                $scope.$apply();
            }
        },
        'stroke *val': function(val){
            if (val == 'no' || val == 'facial drop'|| val == 'arm drift'||val == 'speech impaired') {
                $scope.strokeCheck(val);
                $scope.$apply();
            }
        },
        '*val injury': function(val){
            if (val == 'none' || val == 'blunt'|| val == 'penetrating'||val == 'burn') {
                $scope.injuryCheck(val);
                $scope.$apply();
            }
        },
        'past medical history *val' : function(val){
            $scope.hist.push({
                medHist: val
            })
            $scope.$apply();
        },
        'allergies *val': function(val){
            $scope.allergy.push({
                allergies: val
            })
            $scope.$apply();
        },
        'medications *val': function(val){
            $scope.med.push({
                medication: val
            })
            $scope.$apply();
        },
        'treatment *val': function(val){
            $scope.treat.push({
                treatment: val
            })
            $scope.$apply();
        },
    };

    annyang.addCommands(commands);
    annyang.debug();
    annyang.start();
}]);
