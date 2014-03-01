'use strict';

angular.module('angularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
       .when('/', {
            templateUrl: 'views/land.html',
            controller: 'UserCtrl'
       })
      .when('/farmer', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl: 'views/phonedetail.html',
        controller: 'PhonedetailCtrl'
      })
      .when('/addfarmer', {
        templateUrl: 'views/farmer.html',
        controller: 'AddfarmerCtrl'
      })
      .when('/editfarmer/:id', {
        templateUrl: 'views/farmer.html',
        controller: 'EditfarmerCtrl'
      })
      .when('/addcrop/:id', {
        templateUrl: 'views/crop.html',
        controller: 'AddcropCtrl'
      })
      .when('/advice/:id', {
        templateUrl: 'views/advice.html',
        controller: 'AdviceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
