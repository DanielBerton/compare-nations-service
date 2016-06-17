'use strict';

/**
 * @ngdoc function
 * @name compareNationsApp.controller:LibraryBookControllerCtrl
 * @description
 * # LibraryBookControllerCtrl
 * Controller of the compareNationsApp
 */
angular.module('compareNationsApp')
  .controller('LibraryBookControllerCtrl',[ 'libraryBookService', function (libraryBookService) {
      var self = this;
      self.libraryBook = libraryBookService;
      
      self.libraryBook.getAllBooks({
          succ : function(data){
              self.resultSet = data.books;
          }
      }); 
      
      self.libraryBook.getAllLibreries({
          succ: function(data) {
              self.resultSet = data.librares;
          }
      });
  }]);
