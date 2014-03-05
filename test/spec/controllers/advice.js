'use strict';

describe('Controller: AdviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var AdviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdviceCtrl = $controller('AdviceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
