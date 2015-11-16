'use strict';


angular.module('bookshop')
    .controller('NavbarController', ['$location', function ($location) {

    	var vm = this;
    	vm.isCollapsed = true;
    	this.isActive = isActive;

    	function isActive(viewLocation) { 
    		console.log('isActive', viewLocation, $location.path());
	        return viewLocation === $location.path();
	    };
}]);