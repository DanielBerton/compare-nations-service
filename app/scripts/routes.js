'use strict';

angular.module('compareNationsApp')
    .config(function ($routeProvider) {
        $routeProvider
          /*  .when('/', {
                templateUrl: 'views/nation.html',
                controller: 'NationslistCtrl',
                controllerAs: 'nationCtrl'
            })*/
            .when('/libraries', {
                templateUrl: 'views/library.html',
                controller: 'LibraryControllerCtrl',
                controllerAs: 'libraryCtrl'
            })
            .when('/nation', {
                templateUrl: 'views/nation.html',
                controller: 'NationslistCtrl',
                controllerAs: 'nationCtrl'
            })
            .when('/books', {
                templateUrl: 'views/book.html',
                controller: 'BookcontrollerCtrl',
                controllerAs: 'bookCtrl'
            })
            .when('/bookandlibrary', {
                templateUrl: 'views/library-book.html',
                controller: 'LibraryBookControllerCtrl',
                controllerAs: 'LibraryBookCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
