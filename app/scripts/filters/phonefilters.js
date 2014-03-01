'use strict';

angular.module('angularApp')
  .filter('checkmark', function () {
    return function (input) {
//      return 'checkmark filter: ' + input;
        return input ? '\u2713' : '\u2718';
    };
  });
