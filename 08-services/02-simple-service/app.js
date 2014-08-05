/**
 * define the base app module
 */
var myModule = angular.module('myApp', []);

/**
 * add a controller that injects userRepository service
 */
myModule.controller('myController', function($scope, userRepository) {

    $scope.users = userRepository.getAllFemales();

    $scope.changeFirstUsersFirstName = function() {
        $scope.users[0].firstName = 'Jill'
    };

});

/**
 * define the service
 */
myModule.factory('userRepository', function() {

    return {

        getAllUsers: function() {
            return [
                { firstName: 'Jane', lastName: 'Doe', age: 29 },
                { firstName: 'John', lastName: 'Doe', age: 32 }
            ];
        },

        getAllFemales: function(){
            return [
                { firstName: 'Jane', lastName: 'Doe', age: 29 },
                { firstName: 'Janet', lastName: 'Doe', age: 32 }
            ]
        }
    };
});