(function(){

    /**
     * Model to use when not getting data from json
     * @type {{user: string, items: {action: string, done: boolean}[]}}
     */
    var model = {
        user: "Juan",
        items: [
            { action: "Buy Flowers", done: false },
            { action: "Get Shoes", done: false },
            { action: "Collect Tickets", done: true },
            { action: "Call Joe", done: false }
        ]
    };

    /**
     * todoApp depends on todo-directives
     * @type {module}
     */
    var todoApp = angular.module("todoApp", ['todo-directives']);

    todoApp.filter("checkedItems", function () {
        return function (items, showComplete) {
            var resultArr = [];
            angular.forEach(items, function (item) {
                if (item.done == false || showComplete == true) {
                    resultArr.push(item);
                }
            });
            return resultArr;
        }
    });

    todoApp.controller("ToDoCtrl", function () {

        this.todo = model;

        this.incompleteCount = function () {
            var count = 0;
            angular.forEach(this.todo.items, function (item) {
                if (!item.done) { count++ }
            });
            return count;
        }

        this.warningLevel = function () {
            return this.incompleteCount() < 3 ? "label-success" : "label-warning";
        }

        this.addNewItem = function (actionText) {
            this.todo.items.push({ action: actionText, done: false });
        }

    });
})();