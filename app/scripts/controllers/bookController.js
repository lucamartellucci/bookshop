'use strict';


angular.module('books')
    .controller('BookController', ['$routeParams','PAGINATION_CONFIG','$location','BookDataService','action',
        function ($routeParams, PAGINATION_CONFIG, $location, BookDataService, action) {

        /* jshint validthis: true */
        var vm = this;

        vm.pagination = {
            currentPage: 1,
            totalItems: 0
        };

        /*jshint latedef: true */
        vm.addNew = addNew;
        vm.addEditBook = addEditBook;
        vm.loadCurrentPage = loadCurrentPage;
        vm.getBookDetail = getBookDetail;

        // init controller
        (function(){ 
            switch(action.execute) {
                case 'LIST-BOOKS':
                    vm.loadCurrentPage();
                    break;
                case 'SHOW-BOOK':
                    vm.getBookDetail($routeParams.id);
                    break;
            }
        }());

        
        function loadCurrentPage() {
            BookDataService.list.query({
                    'page':vm.pagination.currentPage -1, 
                    'size': PAGINATION_CONFIG.itemsPerPage}, function(response) {
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