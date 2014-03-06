'use strict';

angular.module('angularApp')
  .factory('FarmerData', function FarmerData($resource) {
        return $resource('farmers/:farmerId', {
            farmerId: '@_id'
        }, {
            update: {
                method: 'PUT'
            },
            query:{
                method:'GET', isArray:true
            }
        });
    });
