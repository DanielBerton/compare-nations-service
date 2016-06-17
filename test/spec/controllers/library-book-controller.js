'use strict';

describe('Controller: LibraryBookControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('compareNationsApp'));

  var LibraryBookControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LibraryBookControllerCtrl = $controller('LibraryBookControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LibraryBookControllerCtrl.awesomeThings.length).toBe(3);
  });
});
