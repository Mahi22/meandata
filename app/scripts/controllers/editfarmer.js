'use strict';

angular.module('angularApp')
  .controller('EditfarmerCtrl', function ($scope, $routeParams, $location, $http, FarmerData, Fileupload, $q) {
        $scope.farmer = null;
        $scope.assistants = [];
        $scope.isEdit = 0;


        $scope.save2 = function(){


            $scope.uploadFile(function(){
                console.log('this is after upload '+ $scope.farmer);
                $scope.farmer.$update(function(data){
                    console.log(data);
                    $location.path('/addcrop/'+data._id);
                });

            });
        };


        $scope.uploadFile = function(callback){

            var files = $scope.profpic;
            if(files != undefined && $scope.farmer.Name != '' && $scope.farmer.Village != '' && validate(files[0])) {
                var dirName = ($scope.farmer.Name + $scope.farmer.Village).replace(/ /g,'');
                var uploadUrl = '/upload/'+ dirName + '/';
                Fileupload.uploadFilesToUrl(files[0], uploadUrl, function(response) {
                    console.log("File uploaded : "+ response.imgpath);
                    $scope.farmer.Profile_Pic = response.imgpath;
                    callback();
                });

            }
            else callback();
        };

        $scope.save = function(){

            $scope.uploadFile(function(){
                console.log('this is after upload '+ $scope.farmer);
                $scope.farmer.$update(function(data){
                    console.log(data);
                    $location.path('/farmer');
                });

            });


        };

        $scope.save1 = function(){
            $scope.uploadFile();
            console.log("Called save fuction");
            $scope.farmer.$update(function(data){
                console.log(data);
                $location.path('/advice/'+data._id);
            });
        };

        $scope.getAssistant = function( val, callback){

                console.log(JSON.stringify(val));

                
                 $http.get("/assistants/"+val.Assistance_Id)
                    .success(function(data,status,headers,config){
                        console.log("This is data" + data);
                        return callback(data);
                    }).error(function(data,status,headers,config){
                        console.log(data);
                    });
        }

        $scope.getAssistants = function ( farmer, callback){
            var deferred = $q.defer();
            var promise = deferred.promise;
            var prom = [];

            farmer.TimeLine.forEach(function(val,key){
                    // console.log(val);
                    console.log(val + ' ' + key);
                    prom.push($scope.getAssistant(val, function(value){
                        console.log("checking value" + value);
                        $scope.assistants.push(value);
                        console.log($scope.assistants);
                    }));
                    
                });
                
                $q.all(prom).then(function () {
                    callback();
                });
        };


        $scope.init = function (callback){
            var newValue="";
            var $i=0;
            $scope.farmer =  
            FarmerData.get({farmerId: $routeParams.id},function(farmer){
                
                // $scope.getAssistants(farmer, function(){
                //     console.log("Called this callback function");
                // });
                for(var i=0;i<farmer.TimeLine.length;i++)
                {
                    $http.get("/assistants/"+farmer.TimeLine[i].Assistance_Id)
                    .success(function(data,status,headers,config){
                        // console.log(config.url.substring(config.url.lastIndexOf('/')+1));
                        // $scope.farmer.TimeLine[0].Assistance_Id=data;
                        console.log(data);
                        $scope.assistants.push(data);
                    }).error(function(data,status,headers,config){

                    });
                }
                callback();


            });
            
            
        };





        $scope.init(function(){
            console.log("kuchh");
            angular.forEach($scope.assistants,function(val,key){
                console.log("Kuch"+val);
            });
            console.log($scope.farmer);
        });




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
