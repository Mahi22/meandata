'use strict';

angular.module('angularApp')
    .controller('EditCropCtrl', function ($scope, $routeParams, $location, FarmerData) {
        $scope.farmer = null;
        $scope.crop = null;



        $scope.save = function(){
            $scope.farmer.$update(function(data){
                $location.path('/editfarmer/'+data._id);
            });
        };


        $scope.init = function (){
            $scope.farmer = FarmerData.get({farmerId: $routeParams.id}, function(){
                for (var x = 0; x < $scope.farmer.Crop.length; x++) {
                    if ($scope.farmer.Crop[x]._id === $routeParams.crop) {
                        $scope.crop = $scope.farmer.Crop[x];
                    }
                }
            });

        };

        $scope.init();

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

