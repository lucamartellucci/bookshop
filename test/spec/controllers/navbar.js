'use strict';

describe('Controller: NavbarController', function () {

  // load the controller's module
  beforeEach(module('bookshop'));

  var vm, scope, $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    scope = $rootScope.$new();

    $location = _$location_;
    $location.path('/books');

    vm = $controller('NavbarController', {
      $scope: scope
    });
  }));

  it('should attach a collapsed navbar to the scope', function () {
    expect(vm.isCollapsed).toBe(true);
  });

  it('should toggle the navbar when toggleCollapse method is called', function () {
    vm.toggleCollapse();
    expect(vm.isCollapsed).toBe(false);
    vm.toggleCollapse();
    expect(vm.isCollapsed).toBe(true);
  });

  it('should apply the active class to the current selected navbar item', function () {
    expect(vm.isActive('/books')).toBe(true);
  });

  it('should remove the active class to the non selected items', function () {
    expect(vm.isActive('/video')).toBe(false);
  });

});
