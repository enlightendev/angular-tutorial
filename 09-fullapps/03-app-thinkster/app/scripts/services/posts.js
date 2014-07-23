'use strict';

app.factory('Post',
    function ($firebase, FIREBASE_URL) {
        //return $resource('https://brilliant-fire-8550.firebaseio.com/posts/:id.json');
        var ref = new Firebase(FIREBASE_URL + 'posts');

        var posts = $firebase(ref);

        var Post = {
            all: posts,
            create: function (post) {
                return posts.$add(post);
            },
            find: function (postId) {
                return posts.$child(postId);
            },
            delete: function (postId) {
                return posts.$remove(postId);
            }
        };

        return Post;
    });