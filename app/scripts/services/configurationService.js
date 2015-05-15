'use strict';


angular.module( 'bookshop' ).service('ConfService', function() {

    var pagination = {
        maxSize: 10,
        boundaryLinks: true,
        rotate: false,
        itemsPerPage: 10
    };


   this.getPaginationConfig = function() {
       return pagination;
   };


});