'use strict';

angular.module('angularApp')
  .controller('AddcropCtrl', function ($scope, $routeParams, $location, FarmerData) {
       $scope.farmer = null;
       $scope.crop = {Crop_Type:'',Crop_Sowing_Date:'',Land:''};
       $scope.isEdit = false;

       $scope.save = function (){
           if(!$scope.farmer.Crop){
               $scope.farmer.Crop = [];
           }
           $scope.farmer.Crop.push($scope.crop);

           $scope.farmer.$update(function(data){
               console.log(data);
               $location.path('/editfarmer/'+data._id);
           });
       };

        $scope.init = function (){
           $scope.farmer = FarmerData.get({farmerId: $routeParams.id});
           console.log($scope.farmer);
        }

        $scope.init();
  });
