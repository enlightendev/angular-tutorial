/**
 * Created by JL25292 on 7/2/2014.
 */
(function(){
    var app = angular.module('store',[]);

    /**
     * basic controller
     */
    app.controller('StoreController', function(){

        /**
         *
         * @type {{name: string, price: number, description: string}}
         */
        this.product = gem;
    });

    var gem = {
        name: 'Juan Gem',
        price: 2.45,
        description: '. . .'
    }
})();