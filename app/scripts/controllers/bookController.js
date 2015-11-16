'use strict';


angular.module('bookshop')
    .controller('BookController', ['$routeParams','BookService','PAGINATION_CONFIG', 'action','$location',
        function ($routeParams, BookService, PAGINATION_CONFIG, action, $location) {

        /* jshint validthis: true */
        var vm = this;

        vm.pagination = {
            currentPage: 0,
            totalItems: 0
        };
        vm.init = init;
        vm.addNew = addNew;
        vm.addEditBook = addEditBook;
        vm.pageChanged = pageChanged;

        // init controller
        vm.init(action.execute);


        function getPagedBooks(page, size) {
            BookService.getPagedBooks( page -1, size )
                .then(function(response){
                    vm.books = response.data.result;
                    vm.pagination.totalItems=response.data.totalItems;
                });
        };

        function getBookDetail(id) {
            BookService.getBookDetail(id)
                .then(function(response){
                    vm.book = response.data;
                });
        };

        function pageChanged() {
            getPagedBooks(vm.pagination.currentPage, PAGINATION_CONFIG.itemsPerPage);
        };

        function addEditBook(action, id) {
            console.log('Add edit book', action, id);
        };

        function init(todo){
            console.log('executing the bookcontroller with action',todo);
            switch(todo) {
                case 'LIST-BOOKS':
                    getPagedBooks(1, PAGINATION_CONFIG.itemsPerPage);
                    break;
                case 'SHOW-BOOK':
                    getBookDetail($routeParams.id);
                    break;
            }
        };

        function addNew() {
            $location.path('/books/addnew');
        };

    }]);