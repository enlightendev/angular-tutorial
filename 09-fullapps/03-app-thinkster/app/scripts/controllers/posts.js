'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angNewsApp
 */
app.controller('PostsCtrl', function ($scope, $location, Post) {

    /**
     * bound to form: e.g. <input type="text" ng-model="post.url" />
     * as value in input text changes so do the attributes of this object
     * @type {{url: string, title: string}}
     */
    $scope.post = {url: 'http://', title: ''};

    /**
     * array of post obbjects
     * @type {Array}
     */
    $scope.posts = Post.all;

    $scope.deletePost = function (postId) {
        Post.delete(postId);
    };

});
