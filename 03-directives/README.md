##About 

Directives are responsible for manipulating DOM within your application and provide a way to extend the HTML syntax with 
new functionality. I.E use directives to manipulate DOM and leave that out of controllers, etc.


    var myModule = angular.module(...);

    myModule.directive('namespaceDirectiveName', function factory(injectables) {
     var directiveDefinitionObject = {
       restrict: string,
       priority: number,
       template: string,
       templateUrl: string,
       replace: bool,
       transclude: bool,
       scope: bool or object,
       controller: function controllerConstructor($scope,
                                                  $element,
                                                  $attrs,
                                                  $transclude),
       require: string,
       link: function postLink(scope, iElement, iAttrs) { ... },
       compile: function compile(tElement, tAttrs, transclude) {
         return {
           pre: function preLink(scope, iElement, iAttrs, controller) { ... },
           post: function postLink(scope, iElement, iAttrs, controller) { ... }
         }
       }
     };
     return directiveDefinitionObject;
    });


