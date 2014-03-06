'use strict';

angular.module('angularApp')
  .controller('AddCropCtrl', function ($scope, $routeParams, $location, FarmerData) {
       $scope.farmer = null;
       $scope.farmers = [];
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

        }

        $scope.init();

        $scope.today = function() {
            $scope.crop.Crop_Sowing_Date = new Date();
        };
        $scope.today();


        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        $scope.format = $scope.formats[0];
  });
