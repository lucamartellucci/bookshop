'use strict';

angular.module('bookshop')
	.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.useStaticFilesLoader( {
            prefix: 'http://127.0.0.1:8080/api/i18n/messages/',
            suffix: ''
        } );
        $translateProvider.useSanitizeValueStrategy('escaped');

        $translateProvider.preferredLanguage( 'en' );
        $translateProvider.fallbackLanguage( 'en' );
   	}]);