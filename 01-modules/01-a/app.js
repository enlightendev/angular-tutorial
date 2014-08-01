/**
 * declare dependencies on other modules.
 */
var myApp = angular.module("exampleApp",
    ["exampleApp.Controllers", "exampleApp.Filters",
        "exampleApp.Services", "exampleApp.Directives"]);

myApp.constant("startTime", new Date().toLocaleTimeString());
myApp.config(function (startTime) {
    console.log("Main module config: " + startTime);
});
myApp.run(function (startTime) {
    console.log("Main module run: " + startTime);
});

var now = new Date();
myApp.value("nowValue", now);