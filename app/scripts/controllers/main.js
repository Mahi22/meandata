'use strict';

angular.module('angularApp')
  .controller('MainCtrl',['$scope','$http', function ($scope, $http) {


        $scope.searchfarmer = function(){
            console.log("called farmer");
        }
  }]);
