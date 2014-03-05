'use strict';

angular.module('angularApp')
  .service('Fileupload', function Fileupload($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
     this.uploadFilesToUrl = function(file, uploadUrl, callback){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data){
            callback(data);
        })
        .error(function(){
        });
    }

  });
