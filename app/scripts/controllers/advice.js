'use strict';

angular.module('angularApp')
  .controller('AdviceCtrl', function ($scope, $routeParams, $location, FarmerData) {
        $scope.farmer = null;
        $scope.advice = {Assistance_Id : '',
            Work_Type: '',
            Description: '',
            Field_Image: '',
            Transaction_Date: '',
            Product: '',
            Crop:'',
            Spray_Date:''
        };

        $scope.isEdit = false;

        $scope.save = function (){
            if(!$scope.farmer.TimeLine){
                $scope.farmer.TimeLine = [];
            }
            $scope.farmer.TimeLine.push($scope.advice);


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
