'use strict';

angular.module('NGTutApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'TutorialCtrl'
      })
      .state('controllers-scope', {
        url: '/controllers-scope',
        templateUrl: 'app/controllers/scopes.html',
        controller: 'ChildCtrl'
      })
      .state('directives-builtin', {
        url: '/directives-builtin',
        templateUrl: 'app/directives/built-in.html',
        controller: 'DirectivesCtrl'
      })
      .state('directives-custom', {
        url: '/directives-custom',
        templateUrl: 'app/directives/custom.html'
      })
      .state('directives-binding', {
        url: '/directives-binding',
        templateUrl: 'app/directives/binding.html'
      })

    ;

    $urlRouterProvider.otherwise('/');
  });
