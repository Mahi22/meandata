'use strict';

angular.module('angularApp')
  .controller('AddfarmerCtrl', function ($scope, $location, FarmerData, $http) {
        $scope.farmer = { Name:'',Village:'',Phone:'',Location:'',Profile_Pic:""};

        $scope.getLocation = function(val) {
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function(res){
                    var addresses = [];
                    angular.forEach(res.data.results, function(item){
                        addresses.push(item.formatted_address);
                    });
                    return addresses;
                });
        };

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
        };
  });
