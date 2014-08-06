angular.module("exampleApp", [])

    /**
     * Controllers provide capabilities to their views through their scope.
     * The root scope is available as a service.
     * All scopes, including the $rootScope service, define a number of methods
     * that are used to send and receive events.
     *
     */
    .controller("simpleCtrl", function ($scope, $rootScope) {

        $scope.$on("zipCodeUpdated", function (event, args) {
            $scope[args.type] = args.zipCode;
        });

        $scope.setAddress = function (type, zip) {

            $rootScope.$broadcast("zipCodeUpdated", {
                type: type, zipCode: zip
            });
            console.log("Type: " + type + " " + zip);
        }

        $scope.copyAddress = function () {
            $scope.shippingZip =  $scope.billingZip;
        }

    });