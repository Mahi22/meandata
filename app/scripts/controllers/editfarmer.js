'use strict';

angular.module('angularApp')
  .controller('EditfarmerCtrl', function ($scope, $routeParams, $location, FarmerData, Fileupload) {
        $scope.farmer = null;


        $scope.save = function(){

            console.log("Called save fuction");
            $scope.farmer.$update(function(data){
                console.log(data);
                $location.path('/addcrop/'+data._id);
            });
        };

        $scope.save1 = function(){

            console.log("Called save fuction");
            $scope.farmer.$update(function(data){
                console.log(data);
                $location.path('/advice/'+data._id);
            });
        };
        $scope.init = function (){
            $scope.farmer = FarmerData.get({farmerId: $routeParams.id});
            console.log($scope.farmer);
        };

        $scope.init();

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

        function validate(file) {
            var extensions = new Array("jpg","jpeg","gif","png","bmp");
            var image_file = file.name;
            var image_length = image_file.length;
            var pos = image_file.lastIndexOf('.') + 1;
            var ext = image_file.substring(pos, image_length);
            var final_ext = ext.toLowerCase();
            for (var i = 0; i < extensions.length; i++) {
                if(extensions[i] == final_ext) {
                return true;
                }
            }
            console.log("Not uploaded. Allowed image extensions are : "+ extensions.join(', ') +".");
            return false;
        }

  });
