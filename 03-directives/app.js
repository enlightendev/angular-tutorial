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

        /**
         *
         * @type {{fname: string, lname: string, uname: string}[]}
         */
        this.userList = users;
    });

    app.controller("PanelController", function(){
        /**
         *
         * @type {{name: string, price: number, description: string}}
         */
        this.product = gem;

        this.tab = 1;

        /**
         *
         * @param setTab
         */
        this.selectTab = function(setTab){
            this.tab = setTab;
        }

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }

    });

    var gem = {
        name: 'Juan Gem',
        price: 2.45,
        description: 'this is the product description.',
        canPurchase: true,
        soldOut: false
    }

    var users = [
        {
            fname: 'juan',
            lname: 'lamadrid',
            uname: 'alamadrid',
            image: './images/user-male-icon.png'
        },
        {
            fname: 'john',
            lname: 'deer',
            uname: 'bdeer',
            image: './images/user-maleb-icon.png'
        },
        {
            fname: 'jane',
            lname: 'Handy',
            uname: 'chandy',
            image: './images/user-female-icon.png'
        },
        {
            fname: 'Dwight',
            lname: 'Gooden',
            uname: 'dgooden',
            image: './images/user-maleb-icon.png'
        }
    ]
})();