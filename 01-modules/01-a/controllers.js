var controllersModule = angular.module("exampleApp.Controllers", [])

/**
 * we pass in the days service
 */
controllersModule.controller("dayCtrl", function ($scope, days) {
    $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function ($scope, days) {
    $scope.day = days.tomorrow;
});