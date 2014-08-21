'use strict';

/**
 * @ngdoc overview
 * @name tradeloguiApp
 * @description
 * # tradeloguiApp
 *
 * Main module of the application.
 */
angular
    .module('tradeloguiApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/log', {
                templateUrl: 'views/log.html',
                controller: 'TradelogCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
