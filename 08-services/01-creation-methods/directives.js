/**
 * NOTICE: Calling the module method with a single argument tells AngularJS that you want to obtain the Module object
 * that represents a previously defined module, on which you can call methods such as directive to define new
 * functionality.
 *
 *
 */

/*
angular.module("exampleApp")
    .directive("triButton", function () {
        return {
            scope: { counter: "=counter" },
            link: function (scope, element, attrs) {
                element.on("click", function (event) {
                    console.log("Button click: " + event.target.innerText);
                    scope.$apply(function () {
                        scope.counter++;
                    });
                });
            }
        }
    });
 */

/**
 * Alternatively, here we create a new module
 * For more complex applications it can be helpful to define multiple modules, especially if you intend to reuse
 * functionality in several projects.
 *
 * this module name will have to be included in the main app module dependency array list:
 *  angular.module("exampleApp", ["customDirectives"])
 *
 * NOTE: I have provided two arguments, which tells AngularJS that I want to create a new module.
 * The first argument is the name of the new module, which is customDirectives in this example, and the second is an
 * array containing the names of the modules that my new module depends on.
 */
angular.module("customDirectives", ["customServices"])
    .directive("triButton", function (logService) {
        return {
            scope: { counter: "=counter" },
            link: function (scope, element, attrs) {
                element.on("click", function (event) {
                    //console.log("Button click: " + event.target.innerText);
                    logService.log("Button click: " + event.target.innerText);
                    scope.$apply(function () {
                        scope.counter++;
                    });
                });
            }
        }
    });
