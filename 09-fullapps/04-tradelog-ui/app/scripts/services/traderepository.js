'use strict';

/**
 *
 */
angular.module('tradeloguiApp')
    .factory("tradeRepository", function () {
        /**
         * Notice that that trades variable is defined in the factory
         * function, rather than as part of the service object.
         * I don’t want consumers of the service to be able to modify the
         * data, and placing it outside of the service object
         * means that it isn’t accessible to service consumers.
         * @type {number}
         */
        var trades = [
            {
                "longShort": 'Long',
                "ticker": 'MSFT',
                "comment": 'MSFT rocks',
                "rating": 4,
                "entry_date": '04/01/2014',
                "entry_price": 40,
                "exit_date": '04/10/2014',
                "exit_price": 40
            },
            {
                longShort: 'Short',
                ticker: 'IBM',
                comment: 'IBM Stinks!',
                rating: 3,
                "entry_date": '02/01/2014',
                "entry_price": 10,
                "exit_date": '03/10/2014',
                "exit_price": 20
            }
        ];

        /**
         * service object = public API
         */
        return {
            addTrade: function (trade) {
                trades.push(trade);
            },

            getTrades: function () {
                return trades;
            }
        };

    }
);