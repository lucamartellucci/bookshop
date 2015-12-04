'use strict';

angular.module('configuration', [])
    .config(['$httpProvider',function($httpProvider){
        $httpProvider.defaults.useXDomain=true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
    .constant('PAGINATION_CONFIG', {
        maxSize: 10,
        boundaryLinks: true,
        rotate: false,
        itemsPerPage: 10
    })
    .constant('API_CONFIG', {
        url: 'http://127.0.0.1:8080/api'
    });


angular.module('books', ['ngResource','configuration']);


angular.module('bookshop', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'pascalprecht.translate',
    'books',
    'configuration'
  ]);


