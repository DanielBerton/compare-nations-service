'use strict';

/**
 * @ngdoc function
 * @name compareNationsApp.controller:LibraryControllerCtrl
 * @description
 * # LibraryControllerCtrl
 * Controller of the compareNationsApp
 */
angular.module('compareNationsApp')
  .controller('LibraryControllerCtrl',['libraryService', function (libraryService) {
    
      var self = this;
      self.library = libraryService;
      
      self.library.getAllLibraries({
          succ: function(data){
              self.result = data.libraries;
          }
      });
  }]);
