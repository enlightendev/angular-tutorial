'use strict';

angular.module('NGTutApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])

  .controller('ParentCtrl', function ($scope) {

    $scope.parentProperty = '$scope.parentProperty in ParentCtrl';

  })


  .run(function ($rootScope) {
    $rootScope.rootProperty = '$rootScope.rootProperty created in app.run function';
  })

;

