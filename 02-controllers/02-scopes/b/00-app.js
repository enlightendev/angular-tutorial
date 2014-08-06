angular.module("exampleApp", [])

    /**
     * Controllers provide capabilities to their views through their scope.
     */
    .controller("simpleCtrl", function ($scope) {

        $scope.addresses = {};

        $scope.setAddress = function (type, zip) {
            console.log("Type: " + type + " " + zip);
            $scope.addresses[type] = zip;
        }

        $scope.copyAddress = function () {
            $scope.shippingZip = $scope.billingZip;
        }

    });