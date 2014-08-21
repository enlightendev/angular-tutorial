'use strict';

/**
 * @ngdoc service
 * @name tradeloguiApp.logService
 * @description
 * # logService
 * Factory in the tradeloguiApp.
 */
angular.module('tradeloguiApp')
    .factory("logService", function () {

        /**
         * Notice that that messageCount variable is defined in the factory function,
         * rather than as part of the service object.
         * I don’t want consumers of the service to be able to modify the counter,
         * and placing it outside of the service object means that it isn’t accessible
         * to service consumers.
         * @type {number}
         */
        var messageCount = 0;

        return {
            log: function (msg) {
                console.log("(LOG + " + messageCount++ + ") " + msg);
            }
        };

    });
