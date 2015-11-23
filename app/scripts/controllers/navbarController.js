'use strict';


angular.module('bookshop')
    .controller('NavbarController', ['$location', function ($location) {

        // used to set te actve item on the navbar
        function isActive(viewLocation) { 
            return viewLocation === $location.path();
        }

        // to open or collapse the navbar
        function toggleCollapse() {
            vm.isCollapsed = !vm.isCollapsed;
        }

    	var vm = this;

    	vm.isCollapsed = true;
    	vm.isActive = isActive;
    	vm.toggleCollapse = toggleCollapse;

	    
}]);