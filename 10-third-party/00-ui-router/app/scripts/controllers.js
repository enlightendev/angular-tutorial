angular.module('app.controllers',[])
  .controller('tradeCtrl', function($scope, trades){ //second param (trades)

    //$scope.trades = Trade.query();
    $scope.trades = trades;

  });
