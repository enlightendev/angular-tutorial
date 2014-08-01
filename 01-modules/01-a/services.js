/**
 *
 */
var servicesModule = angular.module("exampleApp.Services", [])

servicesModule.service("days", function (nowValue) {
        this.today = nowValue.getDay();
        this.tomorrow = this.today + 1;
    });