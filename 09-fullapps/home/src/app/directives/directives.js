'use strict';

angular.module('NGTutApp')

  .directive('basicDirective', function () {
    //return a directive definition object comprised of methods and properties that
    //we use to define and configure our directive.
    return {
      //E=element, A=attribute, C=class
      restrict: 'A', //typically stick to attribute
      template: '<p>this is a basic directive</p>',

      //set to true so our template output is not surrounded with <basic-directive> tags
      replace: true
    };
  })

  .directive('testDirective', function () {
    //return a directive definition object comprised of methods and properties that
    //we use to define and configure our directive.
    return {
      //E=element, A=attribute, C=class
      restrict: 'A', //typically stick to attribute

      //set to true so our template output is not surrounded with <test-directive> tags
      replace: true,
      scope: {
        myUrl: '=someAttr',
        myLinkText: '@'
      },
      template: '\
                  <div>\
                    <label style="padding-left: 2px">My URL Field:</label>\
                    <input type="text" ng-model="myUrl" />\
                    <a href="{{myUrl}}">{{myLinkText}}</a>\
                  </div>\
                '
    };
  });
