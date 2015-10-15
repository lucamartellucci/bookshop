'use strict';


angular.module('bookshop')
    .controller('BookController', ['$routeParams','BookService','PAGINATION_CONFIG', 'action',
        function ($routeParams, BookService, PAGINATION_CONFIG, action) {

        // local function
        var getPagedBooks = function(page, size) {
            BookService.getPagedBooks( page -1, size )
                .then(function(response){
                    vm.books = response.data.result;
                    vm.pagination.totalItems=response.data.totalItems;
                });
        };

        var getBookDetail = function(id) {
            BookService.getBookDetail(id)
                .then(function(response){
                    vm.book = response.data;
                });
        };


        // attaching functions and objects to the visual model (controller scope)
        var vm = this;
        vm.pagination = {
            currentPage: 0,
            totalItems: 0
        };

        // manage the pages
        vm.pageChanged = function() {
            getPagedBooks(vm.pagination.currentPage, PAGINATION_CONFIG.itemsPerPage);
        };

        vm.addEditBook = function(action, id) {
            console.log('Add edit book', action, id);
        };

        vm.init = function(todo){
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

        vm.addNew = function() {

        };

        // init controller
        vm.init(action.execute);

    }]);