'use strict';

angular.module( 'bookshop' )
    .directive( 'clickLink', ['$location', function ( $location ) {
        function getQueryParams( url ) {
            var qparams = {},
                parts = (url || '').split( '?' ),
                qparts, qpart,
                i = 0;

            if ( parts.length <= 1 ) {
                return qparams;
            } else {
                qparts = parts[1].split( '&' );
                for ( i in qparts ) {
                    qpart = qparts[i].split( '=' );
                    qparams[decodeURIComponent( qpart[0] )] =
                        decodeURIComponent( qpart[1] || '' );
                }
            }

            return qparams;
        }

        return {link: function ( scope, element, attrs ) {
            element.on( 'click', function () {
                scope.$apply( function () {
                    var queryParams = getQueryParams( attrs.clickLink );
                    var url = attrs.clickLink.split( '?' )[0];
                    if (url.indexOf('/') !== 0){
                        // url is relative
                        url=$location.path()+ '/'+url;
                    }
                    $location.search( queryParams ).path( url );
                } );
            } );
        }};
    }] );