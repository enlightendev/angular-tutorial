/**
 * Using the factory method to create a service
 *
 * The object returned by the factory function is the service object and will be used by AngularJS whenever the logService is requested.
 * The factory function is called only once because the object it creates and returns is used whenever the service is required within
 * the application. A common error is to assume that each consumer of the service will receive a different service object and assume
 * that variables like counters will be modified by only one AngularJS component.
 *
 * IN SHORT: services objects are singletons.
 */
angular.module("customServices", [])

    .factory("logService", function () {

        /**
         * Notice that that messageCount variable is defined in the factory function, rather than as part of the service object.
         * I don’t want consumers of the service to be able to modify the counter, and placing it outside of the service object
         * means that it isn’t accessible to service consumers.
         * @type {number}
         */
        var messageCount = 0;

        return {
            log: function (msg) {
                console.log("(LOG + " + messageCount++ + ") " + msg);
            }
        };

    });