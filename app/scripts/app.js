'use strict';


angular
  .module('bookshop', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'pascalprecht.translate'
  ])
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
  }])
  .config(['$httpProvider',function($httpProvider){
      $httpProvider.defaults.useXDomain=true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.useStaticFilesLoader( {
            prefix: 'http://127.0.0.1:8080/api/i18n/messages/',
            suffix: ''
        } );
        $translateProvider.useSanitizeValueStrategy('escaped');

        $translateProvider.preferredLanguage( 'en' );
        $translateProvider.fallbackLanguage( 'en' );
   }])
  .constant('PAGINATION_CONFIG', {
        maxSize: 10,
        boundaryLinks: true,
        rotate: false,
        itemsPerPage: 10
  })
  .constant('API_CONFIG', {
        url: 'http://127.0.0.1:8080/api/'
  });
