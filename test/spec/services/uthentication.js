'use strict';

describe('Service: uthentication', function () {

  // load the service's module
  beforeEach(module('eventifyApp'));

  // instantiate service
  var uthentication;
  beforeEach(inject(function (_uthentication_) {
    uthentication = _uthentication_;
  }));

  it('should do something', function () {
    expect(!!uthentication).toBe(true);
  });

});
