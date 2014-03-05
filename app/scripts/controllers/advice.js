'use strict';

angular.module('angularApp')
  .controller('AdviceCtrl', function ($scope, $routeParams, $location, $http,FarmerData) {
        $scope.farmer = null;
        $scope.advice = {Assistance_Id : '',
            Work_Type: '',
            Description: '',
            Field_Image: '',
            Transaction_Date: '',
            Product: '',
            Crop:'',
            Spray_Date:''
        };
        $scope.assistants=[];
        $scope.isEdit = false;

        $scope.save = function (){
            if(!$scope.farmer.TimeLine){
                $scope.farmer.TimeLine = [];
            }
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
            console.log("sdfsdf"+$scope.assistants);
            console.log($scope.farmer);
        }

        init();
  });
