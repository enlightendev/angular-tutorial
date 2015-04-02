'use strict';

angular.module('codedb')
  .controller('CodeCtrl', function ($scope) {
    $scope.codedb = [
      {
        'title': 'Spring Oauth',
        'reference': 'https://spring.io/',
        'description': 'Spring OAuth',
        'tags': 'oauth, spring-security',
        'source': 'http://www.github.com'
      },
      {
        'title': 'Node.js Oauth',
        'reference': 'https://node.io/',
        'description': 'Node OAuth',
        'tags': 'oauth, node-security',
        'source': 'http://www.github.com'
      },
      {
        'title': 'Twitter',
        'reference': 'https://node.io/',
        'description': 'Node OAuth',
        'tags': 'twt',
        'source': 'http://www.github.com'
      }
    ];
  });
