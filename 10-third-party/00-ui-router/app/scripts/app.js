'use strict';

/**
 * @ngdoc overview
 * @name uiRouterExampleApp
 * @description
 * # uiRouterExampleApp
 *
 * Main module of the application.
 */
angular
  .module('uiRouterExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'app.controllers',
    'app.services'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html'
      })

      .state('inline', {
        url: '/inline',
        template: '<h1>Hello, your name is:  {{ name }}</h1>',
        resolve: {
          name: function () {
            return 'Juan';
          }
        },
        controller: function ($scope, name) {
          $scope.name = name;
        }
      })

      .state('trades', {
        url: '/trades',
        templateUrl: 'views/partials/trades.html',
        resolve: {

          // A string value resolves to a service
          tradeResource: 'Trade',

          trades: function (tradeResource) {
            return tradeResource.query();
          }
        },
        controller: 'tradeCtrl'
      });
  });
