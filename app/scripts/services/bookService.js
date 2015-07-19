 'use strict';

 angular.module('bookshop').factory( 'BookResource', ['$resource', 'API_CONFIG',

        function ( $resource, API_CONFIG ) {
            return {
                list: $resource( API_CONFIG.url + '/books', {}, {
                    query: {method: 'GET', params: {}, isArray: false}
                } ),
                detail: $resource(API_CONFIG.url + '/books/:id', {}, {
                    query: {method: 'GET', params: {}, isArray: false}
                })
            };
        }] );


 angular.module('bookshop').service('BookService', ['$http', 'API_CONFIG',

        function ($http, API_CONFIG) {

            var pagedBooks = {};

            var book = {};

            this.getPagedBooks = function(page, size) {

                return  $http({
                    url: API_CONFIG.url + '/books',
                    method: 'GET',
                    params: {page:page, size: size}
                }).success(function(data) {
                    pagedBooks = data;
                }).error(function(){
                    //TODO
                    console.log('Error getting paged books');
                });

            };

            this.getBookDetail = function(id) {
                return $http({
                    url: API_CONFIG.url + '/books/' + id,
                    method: 'GET'
                }).success(function(data) {
                    book = data;
                }).error(function(){
                    //TODO
                    console.log('Error getting book detail');
                });
            }
        }]);