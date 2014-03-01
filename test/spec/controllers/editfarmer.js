'use strict';

describe('Controller: EditfarmerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var EditfarmerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditfarmerCtrl = $controller('EditfarmerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
