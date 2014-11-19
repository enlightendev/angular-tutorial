var app = angular.module('app', ['ui.grid']);

app.controller('MainCtrl', function ($scope) {

    $scope.myData = [
        {
            "firstName": "Cox",
            "lastName": "Carney"
        },
        {
            "firstName": "Juan",
            "lastName": "Lamadrid"

        }];

});