'use strict';

angular.module('bookshop')
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BookController',
        controllerAs:'bookCtrl',
        resolve: {
          'action': function () {
            return {
              execute: 'LIST-BOOKS'
            };
          }
        }
      })
      .when('/books/:id', {
        templateUrl: 'views/book.html',
        controller: 'BookController',
        controllerAs:'bookCtrl',
        resolve: {
          'action': function () {
            return {
              execute: 'SHOW-BOOK'
            };
          }
        }
      })
      .when('/books/addnew', {
        templateUrl: 'views/bookNew.html',
        controller: 'BookController',
        controllerAs:'bookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);