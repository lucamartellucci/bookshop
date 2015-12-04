 'use strict';

 angular.module('books').factory( 'BookDataService', ['$resource', 'API_CONFIG', 'PAGINATION_CONFIG',

    function ( $resource, API_CONFIG, PAGINATION_CONFIG ) {
        return {
            list: $resource( API_CONFIG.url + '/books', {}, {
                // params here are default params that can be overriden by the caller
                query: {method: 'GET', params: {page:0, size: PAGINATION_CONFIG.itemsPerPage}, isArray: false}
            } ),
            detail: $resource(API_CONFIG.url + '/books/:bookId', {}, {
                query: {method: 'GET', params: {bookId:'@bookId'}, isArray: false}
            })
        };
    }] 
);

