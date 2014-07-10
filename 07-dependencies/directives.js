/**
 * this file is to be included in app.js
 */
(function(){

    /**
     * It ok that we have the same variable name (todoApp) as in app.js
     * because we are wrapped in our own closure.
     *
     * @type {module}
     */
    var todoApp = angular.module('todo-directives',[]);

    /**
     * this will create a directive referenced as <todo-header></todo-header>
     */
    todoApp.directive('todoHeader', function(){
        /**
         * we return a directive definition object - a configuration object
         * defining how the directive works
         */
        return {
            restrict: 'E',                       //the type of directive (E for element)
            templateUrl: '00__header-element-directive.html'   //URL of a template
        };

    });
})();

