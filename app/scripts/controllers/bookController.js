'use strict';


angular.module('bookshop')
    .controller('BookController', ['$routeParams','PAGINATION_CONFIG', 'action','$location','BookDataService',
        function ($routeParams, PAGINATION_CONFIG, action, $location, BookDataService) {

        /* jshint validthis: true */
        var vm = this;

        vm.pagination = {
            currentPage: 0,
            totalItems: 0
        };

        /* jshint validthis: true */
        vm.addNew = addNew;
        vm.addEditBook = addEditBook;
        vm.loadPage = loadPage;
        vm.getBookDetail = getBookDetail;

        // init controller
        (function(){ 
            switch(action.execute) {
                case 'LIST-BOOKS':
                    vm.loadPage(1);
                    break;
                case 'SHOW-BOOK':
                    vm.getBookDetail($routeParams.id);
                    break;
            }
        }());

        function loadPage(page) {
            BookDataService.list.query({'page':page -1, 'size': PAGINATION_CONFIG.itemsPerPage}, function(response) {
                vm.books = response.result;
                vm.pagination.totalItems=response.totalItems;
            });
        }


        function getBookDetail(id) {
            BookDataService.detail.query({'bookId':id}, function(book) {
                vm.book = book;
            });
        }


        function addEditBook(action, id) {
            console.log('Add edit book', action, id);
        }

        function addNew() {
            $location.path('/books/addnew');
        }

    }]);