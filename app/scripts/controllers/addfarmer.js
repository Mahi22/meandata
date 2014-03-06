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
            if(validate(files[0])) {
            var dirName = ($scope.farmer.Name + $scope.farmer.Village).replace(/ /g,'');
            var uploadUrl = '/upload/'+ dirName + '/';
            Fileupload.uploadFilesToUrl(files[0], uploadUrl, function(response) {
              console.log("File uploaded : "+ response.imgpath);
              $scope.farmer.Profile_Pic = response.imgpath;
            });
           }
        };

        $scope.save = function(){
          var farmer = new FarmerData($scope.farmer);
           farmer.$save(function(){
               console.log(farmer);
               $location.path('/addcrop/'+farmer._id);
           });
        };

        function validate(file) {
        var extensions = new Array("jpg","jpeg","gif","png","bmp");

        var image_file = file.name;

        var image_length = image_file.length;

        var pos = image_file.lastIndexOf('.') + 1;

        var ext = image_file.substring(pos, image_length);

        var final_ext = ext.toLowerCase();

        for (var i = 0; i < extensions.length; i++)
        {
            if(extensions[i] == final_ext)
            {
            return true;
            }
        }

        console.log("Allowed image extensions are : "+ extensions.join(', ') +".");
        return false;
        }
  });
