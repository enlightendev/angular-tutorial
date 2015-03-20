'use strict';

angular.module('NGTutApp')

/**
 */
  .controller('TutorialCtrl', function ($scope, $http) {

    $http.get("./assets/data/tutorials.json").success(function (responseData) {
      $scope.tutorials = responseData;
    });


  });
