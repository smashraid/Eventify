'use strict';

describe('Service: HttpSessionInterceptor', function () {

  // load the service's module
  beforeEach(module('eventifyApp'));

  // instantiate service
  var HttpSessionInterceptor;
  beforeEach(inject(function (_HttpSessionInterceptor_) {
    HttpSessionInterceptor = _HttpSessionInterceptor_;
  }));

  it('should do something', function () {
    expect(!!HttpSessionInterceptor).toBe(true);
  });

});
