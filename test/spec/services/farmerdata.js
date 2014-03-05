'use strict';

describe('Factory: FarmerData', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var FarmerData;
  beforeEach(inject(function (_FarmerData_) {
    Farmerdata = _FarmerData_;
  }));

  it('should do something', function () {
    expect(!!FarmerData).toBe(true);
  });

});
