'use strict';

describe('Controller: BookController on load', function () {

  // load the controller's module
  beforeEach(module('books'));

  //inject the values for action and routeProvider
  beforeEach(module(function($provide) {
    $provide.value('action', {execute:'UNKNOWN'});
    $provide.value('$routeParams',{});
  }));

  var vm, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    vm = $controller('BookController', { $scope: scope });
  }));

  it('should initialize the pagination model', function () {
    expect(vm.pagination.currentPage).toBe(1);
    expect(vm.pagination.totalItems).toBe(0);
  });

});


describe('Controller: BookController on action LIST-BOOKS', function () {

  // load the controller's module
  beforeEach(module('books'));

  //inject the values for action and routeProvider
  beforeEach(module(function($provide) {
    $provide.value('action', {execute:'LIST-BOOKS'});
    $provide.value('$routeParams',{});
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

  it('should load the booklist on LIST-BOOKS action', function () {
    // program the backend mock to reply 
    httpBackend.expect('GET',apiurl+'/books?page=0&size=10').respond(booksSuccessResponse);
    httpBackend.flush();
    
    expect(vm.pagination.totalItems).toBe(1);
    expect(vm.books[0].title).toBe('test001');
  });

});



describe('Controller: BookController on action SHOW-BOOK', function () {

  // load the controller's module
  beforeEach(module('books'));

  //inject the values for action and routeProvider
  beforeEach(module(function($provide) {
    $provide.value('action', {execute:'SHOW-BOOK'});
    $provide.value('$routeParams',{'id':101});
  }));

  var vm, scope, httpBackend, apiurl;

  var bookDetailResponse = {id: 101, title:'test001'};

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

  it('should load the detail of a book on SHOW-BOOK action', function () {
    // program the backend mock to reply 
    httpBackend.expect('GET',apiurl+'/books/101').respond(bookDetailResponse);
    httpBackend.flush();
    
    expect(vm.book.title).toBe('test001');
    expect(vm.book.id).toBe(101);
  });

});