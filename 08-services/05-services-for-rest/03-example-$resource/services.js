angular.module('myApp.services')
/**
 * The name of our factory is movie; each movie instance has a property called _id.
 *
 */
    .factory('Movie', function($resource){
        return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id', {id: '@_id'}, {
            update: {
                method: 'PUT'
            }
        });
    });

