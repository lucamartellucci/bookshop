'use strict';

describe('Controller: BookController', function () {

  // load the controller's module
  beforeEach(module('books'));

  //inject ito the controller the value of action
  beforeEach(module(function($provide) {
    $provide.value('action', {execute:'LIST-BOOKS'});
    $provide.value('$routeParams',{id:'1'});
  }));

  var vm, scope, httpBackend, apiurl;

  var booksSuccessResponse = {totalItems: 1,result:[{title:'test001'}]};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, API_CONFIG) {
    apiurl = API_CONFIG.url;
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    vm = $controller('BookController', { $scope: scope });
  }));

  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should initialize the pagination model', function () {
    expect(vm.pagination.currentPage).toBe(1);
    expect(vm.pagination.totalItems).toBe(0);

    // program the backend mock to reply 
    httpBackend.expect('GET',apiurl+'/books?page=0&size=10').respond(booksSuccessResponse);
    httpBackend.flush();
    
    expect(vm.pagination.totalItems).toBe(1);
    expect(vm.books[0].title).toBe('test001');
  });

});
