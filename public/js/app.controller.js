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
    $window.localStorage.setItem('ssn',[]);

    $scope.vitals = localStorage.getItem('vitals')||[];
    $scope.name = localStorage.getItem('name')||[];
    $scope.age = localStorage.getItem('age')||[];
    $scope.hist = localStorage.getItem('hist')||[];
    $scope.allergy = localStorage.getItem('allergy')||[];
    $scope.med = localStorage.getItem('med')||[];
    $scope.treat = localStorage.getItem('treat')||[];
    $scope.ssn = localStorage.getItem('ssn')||[];
    $scope.histjoin = "";
    $scope.allergyjoin = "";
    $scope.medjoin = "";
    $scope.treatjoin = "";  
      
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
    function exportData() {
      var data = '';
        for (var i=1;i<=3;i++) {
          var sep = '';
          for (var j=1;j<=1;j++) {
            data +=  sep + document.getElementById(i + '_' + j).value;
            sep = ',';
        }
        data += '\r\n';
    }
    for (var i=4;i<=6;i++) {
      var sep = '';
        for (var j=1;j<=2;j++) {
            data +=  sep + document.getElementById(i + '_' + j).value;
            sep = ',';
        }
        data += '\r\n';
    }
    for (var i=7;i<=10;i++) {
        var sep = '';
        for (var j=1;j<=4;j++) {
            data +=  sep + document.getElementById(i + '_' + j).value;
            sep = ',';
        }
        data += '\r\n';
    }
    for (var i=11;i<=14;i++) {
      var sep = '';
        for (var j=1;j<=1;j++) {
            data +=  sep + document.getElementById(i + '_' + j).value;
            sep = ',';
        }
        data += '\r\n';
    }
      var exportLink = document.createElement('a');
      exportLink.setAttribute('href', 'data:text/csv;base64,' + window.btoa(data));
      exportLink.appendChild(document.createTextNode('test.csv'));
      document.getElementById('results').appendChild(exportLink);
}
    var commands = {
        'ssn *val':function(val){
            $scope.ssn.push({
                value: val
            })
            $scope.$apply();
        },  
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
        'bp *val over *val2 Pulse *val3 respiratory rate *val4 sats *val5': function(val,val2, val3, val4, val5){
            $scope.vitals.push({
                bps: val,
                bpd: val2,
                pr: val3,
                rr: val4,
                ox: val5,
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
        'bp *val over *val2': function(val,val2){
            $scope.vitals.push({
                bps: val,
                bpd: val2,
                date: new Date()
            });
            $scope.$apply();
        },
        'sats *val': function(val){
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
            if ($scope.histjoin == "") {
                  $scope.histjoin = val;
            } else {
                  $scope.histjoin = $scope.histjoin + ", " + val;  
            }
            $scope.$apply();
        },
        'allergies *val': function(val){
            $scope.allergy.push({
                allergies: val
            })
            if ($scope.allergyjoin == "") {
                  $scope.allergyjoin = val;
            } else {
                  $scope.allergyjoin = $scope.allergyjoin + ", " + val;  
            }
            $scope.$apply();
        },
        'meds *val': function(val){
            $scope.med.push({
                medication: val
            })
            if ($scope.medjoin == "") {
                  $scope.medjoin = val;
            } else {
                  $scope.medjoin = $scope.medjoin + ", " + val;  
            }
            $scope.$apply();
        },
        'treatment *val': function(val){
            $scope.treat.push({
                treatment: val
            })
            if ($scope.treatjoin == "") {
                  $scope.treatjoin = val;
            } else {
                  $scope.treatjoin = $scope.treatjoin + ", " + val;  
            }
            $scope.$apply();
        },
    };

    annyang.addCommands(commands);
    annyang.debug();
    annyang.start();
}]);
