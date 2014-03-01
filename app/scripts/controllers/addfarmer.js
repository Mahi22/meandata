'use strict';

angular.module('angularApp')
  .controller('AddfarmerCtrl', function ($scope, $location, FarmerData,$http) {
        $scope.farmer = { Name:'',Village:'',Phone:'',Location:'',Profile_Pic:""};

        $scope.save = function(){

                 // $http.post('/farmers',$scope.farmer)
                 //     .success(function(data,status,headers,config){
                 //         window.alert("Success");
                 //     })
                 //     .error(function(data,status,headers,config){
                 //         window.alert(status);
                 //     });

             var farmer = new FarmerData($scope.farmer);

           farmer.$save(function(){

               console.log(farmer);
               $location.path('/addcrop/'+farmer._id);
           });
        }
  });
