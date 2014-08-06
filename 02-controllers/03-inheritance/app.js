var app = angular.module("exampleApp", []);

app.controller("topLevelCtrl", function ($scope) {

    $scope.dataValue = "Hello, Adam";

    $scope.reverseText = function () {
        $scope.dataValue = $scope.dataValue.split("").reverse().join("");
    }

    $scope.changeCase = function () {
        var result = [];
        angular.forEach($scope.dataValue.split(""), function (char, index) {
            result.push(index % 2 == 1
                ? char.toString().toUpperCase() : char.toString().toLowerCase());
        });
        $scope.dataValue = result.join("");
    };
});

/**
 *
 */
app.controller("firstChildCtrl", function ($scope) {

    /**
     * Child controllers can override the data and behaviors of their parents, which means
     * that data values and behaviors can be replaced with local versions that have the same name.
     * Each implementation of this behavior is different and changes the dataValue property in a
     * different way, but they are all invoked in the same way through the ng-click directive:
     */
    $scope.changeCase = function () {
        $scope.dataValue = $scope.dataValue.toUpperCase();
    };
});

app.controller("secondChildCtrl", function ($scope) {

    $scope.changeCase = function () {
        $scope.dataValue = $scope.dataValue.toLowerCase();
    };

    $scope.shiftFour = function () {
        var result = [];
        angular.forEach($scope.dataValue.split(""), function (char, index) {
            result.push(index < 4 ? char.toUpperCase() : char);
        });
        $scope.dataValue = result.join("");
    }
});