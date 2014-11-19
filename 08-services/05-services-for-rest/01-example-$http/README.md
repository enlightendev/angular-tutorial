The $http service is a built-in AngularJS service that is used to allow the AngularJS app to talk to backend
systems or other third-party systems using web services. The $http service is essentially a wrapper for the
browser's XMLHttpRequest object and allows us to work at ease without having to worry about the low-level APIs.

The $http service function accepts a configuration object as an argument and returns a promise with two methods:
success and error. We can use the .then() method to register callbacks, which in turn returns the response as a
single object.

The basic usage of the $http service would look like the following lines of code:

$http({
    method: 'GET',
    url: 'api/api-endpoint'
}).success(function(data, status, headers, config) {
    // called on success
}).error(function(data, status, headers, config) {
    //called on error
})

The preceding code can also be written using shortcut methods and would look like the following lines of code:

$http.get('api/api-endpoint').success(successCallback).error(errorCallback)
Similar to .get(), the following additional shortcut methods are available as part of the $http service.

$http.head
$http.post
$http.jsonp
$http.put
$http.delete

Two ways to deal with such asynchronous calls are using callbacks and promises. While callbacks are OK when making
individual requests, they tend to get messy when you need to do nested callbacks. This is where promises come in handy,
as they can be easily chained.

As per the proposal at CommonJS, "Promises provide a well-defined interface for interacting with an object that
represents the result of an action that is performed asynchronously, and may or may not be finished at any given
point in time."

Promises in AngularJS are implemented via the $q service, which is based on the Q Library by Kris Kowal.
It is available at https://github.com/kriskowal/q.

There are two components to this: Deferred and Promise.
The Deferred object is used to notify the status of the task. The Promise object provides the result of the deferred task.

The Deferred object has three methods: resolve(), reject(), and notify(). The Promise object also has three methods:
then(), catch(), and finally(). You can read more about the $q service and these methods at https://docs.angularjs.org/api/ng/service/$q.

Of the three methods of the Promise object, the .then() method is the most important one and is also a part of the proposed specs at CommonJS.

The syntax to use the .then() method is as follows: `.then(successCallback, errorCallBack, notificationCallBack)`

Once the result is available, the then() method will call either successCallBack or errorCallBack.
The notificationCallBack method might be called multiple times while the promise is being resolved or rejected
and is used to provide an indication of the progress.

