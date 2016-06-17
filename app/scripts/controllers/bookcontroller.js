'use strict';

/**
 * @ngdoc function
 * @name compareNationsApp.controller:BookcontrollerCtrl
 * @description
 * # BookcontrollerCtrl
 * Controller of the compareNationsApp
 */
angular.module('compareNationsApp')
  .controller('BookcontrollerCtrl', ['bookService',  function (bookService) {
      var self = this;
      self.books = bookService;
        
      self.books.getAllBooks({
          succ: function(data) {
              self.resultSet = data.books;
              console.log(data.books);
          }
      });
  }]);