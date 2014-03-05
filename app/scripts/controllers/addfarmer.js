'use strict';

angular.module('angularApp')
  .controller('AddfarmerCtrl', function ($scope, $location, FarmerData, $http, Fileupload) {
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

        $scope.uploadFile = function(){
          var files = $scope.profpic;
          var dirName = ($scope.farmer.Name + $scope.farmer.Village).replace(/ /g,'');
          var uploadUrl = '/upload/'+ dirName + '/';
          Fileupload.uploadFilesToUrl(files[0], uploadUrl, function(response) {
            console.log("File uploaded : "+ response.imgpath);
            $scope.farmer.Profile_Pic = response.imgpath;
          });
        };

        $scope.save = function(){
          var farmer = new FarmerData($scope.farmer);
           farmer.$save(function(){
               console.log(farmer);
               $location.path('/addcrop/'+farmer._id);
           });
        };
  });
