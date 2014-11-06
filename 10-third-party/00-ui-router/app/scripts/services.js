angular.module('app.services', [])
  .factory('Trade', ['$resource', function ($resource) {
      return $resource('data/trades/:tradeId.json', {}, {
        query: {
          method: 'GET',
          params: {tradeId: 'trades'},
          isArray: true
        }
      });
    }]);
