angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope, $log, Products) {

        $scope.displayMode = "list";
        $scope.currentProduct = null;

        $scope.listProducts = function () {
            $scope.products = Products.getProducts();
        };

        $scope.deleteProduct = function (product) {
            Products.deleteProduct(product);
        };

        $scope.createProduct = function (product) {
            Products.createProduct(product);
            $scope.displayMode = "list";

        };

        $scope.updateProduct = function (product) {
            Products.updateProduct(product);
            $scope.displayMode = "list";
        };

        $scope.editOrCreateProduct = function (product) {
            $scope.currentProduct = product ? angular.copy(product) : {};
            $scope.displayMode = "edit";
        };

        $scope.saveEdit = function (product) {
            if (angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
        };

        $scope.cancelEdit = function () {
            $scope.currentProduct = {};
            $scope.displayMode = "list";
        };

        $scope.listProducts();
    })

    .factory('Products', function($log){

        $log.info('Products:: calling products service');

        var products = [
            { id: 0, name: "Dummy1", category: "Test", price: 1.25 },
            { id: 1, name: "Dummy2", category: "Test", price: 2.45 },
            { id: 2, name: "Dummy3", category: "Test", price: 4.25 }];

        return {
            getProducts: function(){
                $log.info('Products::getProducts');
                return products;
            },

            deleteProduct: function(product){
                $log.info('Products::deleteProduct: ' + angular.toJson(product));
                products.splice(products.indexOf(product), 1);
            },

            createProduct: function(product){
                $log.info('Products::createProduct: ' + angular.toJson(product));
                products.push(product);
            },

            updateProduct: function(product){
                $log.info('Products::updateProduct: ' + angular.toJson(product));
                for (var i = 0; i < products.length; i++) {
                    if (products[i].id== product.id) {
                        products[i] = product;
                        break;
                    }
                }
            }
        }
    });