'use strict';

angular.module('NGTutApp')

/**
 *
 */
    .controller('DirectivesCtrl', function ($scope, $timeout) {

        $scope.isDisabled = true;

        $timeout(function () {
            $scope.isDisabled = false;
        }, 5000);

        $scope.btnClick = function () {
            //$('#title').addClass('bounce');
        };

    });
