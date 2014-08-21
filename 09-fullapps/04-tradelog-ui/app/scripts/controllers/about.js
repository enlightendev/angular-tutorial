'use strict';

/**
 * @ngdoc function
 * @name tradeloguiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tradeloguiApp
 */
angular.module('tradeloguiApp')
    .controller('AboutCtrl', function ($scope, logService) {

        logService.log("Running AboutCtrl.");

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
