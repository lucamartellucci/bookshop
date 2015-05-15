 'use strict';

 angular.module('bookshop').factory( 'BookResource', ['$resource',

        function ( $resource ) {
            var prefix = 'http://127.0.0.1:8080/api';
            return {
                list: $resource( prefix + '/books', {}, {
                    query: {method: 'GET', params: {}, isArray: false}
                } )
            };
        }] );


 angular.module('bookshop').service('BookService', ['$http',

        function ($http) {

            var pagedBooks = {};

            this.getPagedBooks = function(page, size) {

                return  $http({
                    url: 'http://127.0.0.1:8080/api/books',
                    method: 'GET',
                    params: {page:page, size: size}
                }).success(function(data) {
                    pagedBooks = data;
                }).error(function(){
                    //TODO
                    console.log('Error getting paged books');
                });

            };
        }]);