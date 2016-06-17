'use strict';

describe('Controller: NationslistCtrl', function () {

  // load the controller's module
  beforeEach(module('compareNationsApp'));

  var NationslistCtrl,
      scope,
      httpBackend,
      http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http, $httpBackend ) {
    scope = $rootScope.$new();
    
    httpBackend = $httpBackend;
      
    http = $http;
      
    //Simuliamo il Backend
    httpBackend
    .when('GET', '/data/nations.json', {})
    .respond(function(method, url, data, headers){
	return [
	   200,
	   [
	     {'name':  'nazione 1', 'area': '100'},
	     {'name':  'nazione 1', 'area': '200'},
	     {'name':  'nazione 1', 'area': '500'}
	   ],
	   {}
];
});  
      
      
    NationslistCtrl = $controller('NationslistCtrl', {
      $scope: scope,
      $http: http    
      // place here mocked dependencies
    });
      
      httpBackend.flush();
  }));

  it('must return nations', function () {
    expect(scope.nations).toBeDefined();
  });
});
