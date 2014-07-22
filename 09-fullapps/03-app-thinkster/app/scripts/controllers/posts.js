'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angNewsApp
 */
app.controller('PostsCtrl', function ($scope) {

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
    $scope.posts = [];

    /**
     * function called by form submit
     */
    $scope.submitPost = function(){
        //add post
        $scope.posts.push($scope.post);

        //reset post
        $scope.post = {url: 'http://', title: ''};
    }

    $scope.deletePost = function(index){
        $scope.posts.splice(index,1);
    }

});
