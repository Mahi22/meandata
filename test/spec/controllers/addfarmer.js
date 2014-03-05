'use strict';

describe('Controller: AddfarmerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var AddfarmerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddfarmerCtrl = $controller('AddfarmerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
