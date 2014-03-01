'use strict';

angular.module('angularApp')
  .controller('PhonedetailCtrl', [ '$scope','$routeParams','$http', function ($scope, $routeParams, $http ) {

        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
               $scope.phone = data;
               $scope.mainImageUrl = data.images[0];
        });

        $scope.setImageUrl = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }


  }]);
