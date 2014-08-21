'use strict';

describe('Controller: TradelogCtrl', function () {

  // load the controller's module
  beforeEach(module('tradeloguiApp'));

  var TradelogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TradelogCtrl = $controller('TradelogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
