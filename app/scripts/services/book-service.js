'use strict';

/**
 * @ngdoc service
 * @name compareNationsApp.bookService
 * @description
 * # bookService
 * Service in the compareNationsApp.
 */
angular.module('compareNationsApp')
  .factory('bookService', ['ENV', '$resource', function (ENV, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      
    var res = $resource('' + ENV.apiEndpoint + '/books', {}, {});
      
    var prototype = {
        api : res,
        getAllBooks: function(params) {
            var succ = params.succ;
            
            return prototype.api.get(null, function(data) {
                
                if(succ){
                    succ(data);
                }
            });
        }
    };
    return prototype;
  }]);











