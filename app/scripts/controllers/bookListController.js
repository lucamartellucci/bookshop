'use strict';


angular.module('bookshop')
    .controller('BookListController', ['BookService','ConfService', function (BookService, ConfService) {

        // local function
        var getPagedBooks = function(page, size) {
            BookService.getPagedBooks( page -1, size )
                .then(function(response){
                    vm.books = response.data.result;
                    vm.pagination.totalItems=response.data.totalItems;
                });
        };

        // init controller
        var vm = this;

        vm.pageCfg = ConfService.getPaginationConfig();
        vm.pagination = {
            currentPage: 0,
            totalItems: 0
        };

        // load first page
        getPagedBooks(1, this.pageCfg.itemsPerPage);

        // manage the pages
        vm.pageChanged = function() {
            getPagedBooks(vm.pagination.currentPage, this.pageCfg.itemsPerPage);
        };

    }]);