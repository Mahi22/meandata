'use strict';

angular.module('angularApp')
  .factory('Assistant', function FarmerData($resource) {
        return $resource('assistants/:assistantId', {
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
