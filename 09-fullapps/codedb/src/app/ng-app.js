'use strict';

angular.module('codedb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/codedb/main.html',
        controller: 'CodeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
