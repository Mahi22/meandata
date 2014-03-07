'use strict';

angular.module('angularApp')
  .controller('AdviceCtrl', function ($scope, $routeParams, $location, $http,FarmerData, Fileupload) {
        $scope.farmer = null;
        $scope.advice = {Assistance_Id : '',
            Work_Type: '',
            Description: '',
            Field_Image: '',
            Transaction_Date: '',
            Product: [],
            Crop:'',
            Spray_Date:''
        };
        $scope.assistants=[];
        $scope.products=[];
        $scope.workTypes=[];
        $scope.isEdit = false;
        $scope.items=[];
        $scope.selectedValue=[];
        var i=0;

        $scope.addItem=function()
        {
            $scope.items.push("item"+i++);
            console.log($scope.selectedValue);
        }

        $scope.save = function (){
            if(!$scope.farmer.TimeLine){
                $scope.farmer.TimeLine = [];
            }
            $scope.items.push("item"+i++);
            $scope.farmer.TimeLine.push($scope.advice);


            $scope.farmer.$update(function(data){
                console.log(data);
                $location.path('/editfarmer/'+data._id);
            });
        };

        function init(){
            $scope.farmer = FarmerData.get({farmerId: $routeParams.id});

            $http.get('/assistants').success(function(data,status,headers,config){
                $scope.assistants=data;
            })
            .error(function(data,status,headers,config){
                console.log('errr');
            });

            $http.get('/products').success(function(data,status,headers,config){
                $scope.products=data;
            })
            .error(function(data,status,headers,config){
                console.log('errr');
            });

            $http.get('/worktypes').success(function(data,status,headers,config){
                $scope.workTypes=data;
            })
            .error(function(data,status,headers,config){
                console.log('errr');
            });
            console.log("sdfsdf"+$scope.assistants);
            console.log($scope.farmer);
        }

        init();

        $scope.uploadFiles = function(){
          var files = $scope.fieldpics;
          var imageurls = [];
          var dirName = ($scope.farmer.Name + $scope.farmer.Village).replace(/ /g,'');
          var uploadUrl = '/upload/'+ dirName + '/';

          for (var i = 0; i < files.length; i++) {
              Fileupload.uploadFilesToUrl(files[i], uploadUrl, function(response) {
              console.log("File uploaded : "+ response.imgpath);
              imageurls.push(response.imgpath);
            });
          }
          $scope.advice.Field_Image = imageurls;
          
        };



        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.open11 = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened1 = true;
        };

        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        $scope.format = $scope.formats[0];
  });
