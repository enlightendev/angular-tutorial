'use strict';

describe('Service: tradeRepository', function () {

  // load the service's module
  beforeEach(module('tradeloguiApp'));

  // instantiate service
  var tradeRepository;
  beforeEach(inject(function (_tradeRepository_) {
    tradeRepository = _tradeRepository_;
  }));

  it('should do something', function () {
    expect(!!tradeRepository).toBe(true);
  });

});
