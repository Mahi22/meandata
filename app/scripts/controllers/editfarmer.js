'use strict';

angular.module('angularApp')
  .controller('EditfarmerCtrl', function ($scope, $routeParams, $location, FarmerData) {
        $scope.farmer = null;


        $scope.save = function(){

            console.log("Caleed save fuction");
            $scope.farmer.$update(function(data){
                console.log(data);
                $location.path('/addcrop/'+data._id);
            });
        };

        $scope.save1 = function(){

            console.log("Caleed save fuction");
            $scope.farmer.$update(function(data){
                console.log(data);
                $location.path('/advice/'+data._id);
            });
        };
        $scope.init = function (){
            $scope.farmer = FarmerData.get({farmerId: $routeParams.id});
            console.log($scope.farmer);
        };

        $scope.init();

  });
