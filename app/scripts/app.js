'use strict';


angular
  .module('bookshop', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
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
        templateUrl: 'views/books.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$httpProvider',function($httpProvider){
      $httpProvider.defaults.useXDomain=true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
