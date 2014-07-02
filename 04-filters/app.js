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

    var gem = {
        name: 'Juan Gem',
        price: 2,
        description: 'this is a long description for the explicit purpose of showing the limitTo filter.',
        canPurchase: true,
        soldOut: false,
        date: new Date()
    }

    var users = [
        {
            fname: 'juan',
            lname: 'lamadrid',
            uname: 'alamadrid'
        },
        {
            fname: 'john',
            lname: 'deer',
            uname: 'bdeer'
        },
        {
            fname: 'jack',
            lname: 'Handy',
            uname: 'chandy'
        },
        {
            fname: 'Dwight',
            lname: 'Gooden',
            uname: 'dgooden'
        }
    ]
})();