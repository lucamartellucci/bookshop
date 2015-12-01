'use strict';

describe('Controller: BookController', function () {

  // load the controller's module
  beforeEach(module('bookshop'));

  //inject ito the controller the value of action
  beforeEach(module(function($provide) {
    $provide.value('action', {execute:'LIST-BOOKS'});
  }));

  var vm, scope, httpBackend, apiurl;

  var booksSuccessResponse = {totalItems: 1,result:[{title:'test001'}]};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    apiurl = 'http://127.0.0.1:8080/api';
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
    httpBackend.expect('GET',apiurl+'/i18n/messages/en').respond({});
    httpBackend.expect('GET',apiurl+'/books?page=0&size=10').respond(booksSuccessResponse);
    
    httpBackend.flush();
    
    expect(vm.pagination.totalItems).toBe(1);
    expect(vm.books[0].title).toBe('test001');
  });

});
