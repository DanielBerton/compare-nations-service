'use strict';

/**
 * @ngdoc service
 * @name compareNationsApp.libraryBookService
 * @description
 * # libraryBookService
 * Service in the compareNationsApp.
 */
angular.module('compareNationsApp')
  .factory('libraryBookService',['ENV', '$resource', function (ENV, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
      var res = $resource(ENV.apiEndpoint + '/', {
          getAllBooks :{
              
              method : 'GET',
              url: ENV.apiEndpoint + '/books'
          },
          getAllLibraries : {
              method : 'GET',
              url: ENV.apiEndpoint + '/libreries'
          }
      
      
      });
      
      
      
      
      
      
      
      var prototype = {
          api: res,
          getAllBooks: function(params) {
              var succ = params.succ;
              
              return prototype.api.get(null, function(data) {
                  if(succ){
                      succ(data);
                  }
              });
          },
          getAllLibreries: function(params) {
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
