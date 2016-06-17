'use strict';

/**
 * @ngdoc service
 * @name compareNationsApp.libraryService
 * @description
 * # libraryService
 * Service in the compareNationsApp.
 */
angular.module('compareNationsApp')
  .factory('libraryService', ['ENV', '$resource', function (ENV, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      var res = $resource(ENV.apiEndpoint + '/libraries');
      
      var prototype = {
          api : res,
          getAllLibraries : function(params) {
              var succ = params.succ;
              
              return prototype.api.get(null, function(data) {
                  if(succ) {
                      succ(data);
                  }
              });
          }
      };
      return prototype;
  }]);
