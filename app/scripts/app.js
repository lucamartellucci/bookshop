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
