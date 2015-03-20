'use strict';

angular.module('NGTutApp')

/**
 * controller created to demonstrate access to properties defined in parent scope.
 * rootProperty is created in run function
 * parentProperty is created in ParentCtrl referenced <body ng-controller="ParentCtrl">
 * childProperty is created in this controller.
 */
    .controller('ChildCtrl', function ($scope) {
        $scope.childProperty = 'child scope in ChildCtrl';

        $scope.fullSentenceFromChild = 'Same $scope: We can access ' +
        $scope.rootProperty + ' and ' +
        $scope.parentProperty + ' and ' +
        $scope.childProperty;
    });
