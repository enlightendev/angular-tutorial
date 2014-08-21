'use strict';

/**
 * @ngdoc directive
 * @name tradeloguiApp.directive:tradeForm
 * @description
 * # tradeForm
 */
angular.module('tradeloguiApp')
    .directive('tradeForm', function (logService, tradeRepository) {
        return {
            restrict: 'E',
            templateUrl: 'views/partials/trade-form.html',

            controller: function ($scope) {

                $scope.trades = tradeRepository.getTrades();

                /**
                 * Empty object used for 2 way binding
                 * @type {{}}
                 */
                this.trade = {};

                this.addTrade = function (form) {

                    $scope.trades.push(this.trade);

                    //reset trade object
                    this.trade = {};

                    form.$setPristine();
                }

            },
            controllerAs: 'tradeFormCtrl'
            /*
            ,scope: {
                trade: '='
                //,genres: '='
            }
            */

            /*
            ,link: function postLink(scope, element, attrs) {
                element.text('this is the tradeForm directive');
            }
            */
        };
    });
