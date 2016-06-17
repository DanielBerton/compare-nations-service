'use strict';

describe('Service: libraryBookService', function () {

  // load the service's module
  beforeEach(module('compareNationsApp'));

  // instantiate service
  var libraryBookService;
  beforeEach(inject(function (_libraryBookService_) {
    libraryBookService = _libraryBookService_;
  }));

  it('should do something', function () {
    expect(!!libraryBookService).toBe(true);
  });

});
