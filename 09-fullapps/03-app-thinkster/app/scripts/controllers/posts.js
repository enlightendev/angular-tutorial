'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angNewsApp
 */
app.controller('PostsCtrl', function ($scope, Post) {

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

    /**
     * function called by form submit
     */
    $scope.submitPost = function(){
        //add post
        Post.create($scope.post).then(function () {
            $scope.post = {url: 'http://', 'title': ''};
        });
    }

    $scope.deletePost = function (postId) {
        Post.delete(postId);
    };

});
