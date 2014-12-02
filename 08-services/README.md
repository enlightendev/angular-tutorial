##About

Services are used to encapsulate functionality that you want to reuse in an application but that don’t fit neatly into 
the Model-View-Controller pattern. Services are commonly used to implement cross-cutting concerns, e.g. logging, security, 
and networking.

## Responsibilities of services

Services are responsible for providing reusable code libraries to the other components in your application. Services can 
provide cross-cutting functionality for your application, such as logging, authentication, and messaging. They can contain 
code to request and store data from external servers. They can also include functionality to manipulate, sort, filter, 
and even transform the data into different projections as necessary.

Services should also be used to integrate with external services that you use in your application. For example, you could 
create a service that wraps the Dropbox API to allow your application to write its data to a user's Dropbox account or 
encapsulate an analytics library to keep track of how users navigate through your application.

Since AngularJS only creates a single instance of a service during your application's lifetime, you can also use a service 
as a great way to communicate among components. One controller can store data in a service, navigate to a new controller, 
and then the new controller can pull the data from the service without having to make a server request or parse query parameters.

Finally, services can be used to provide business logic to your application. You could create a rules engine to handle 
complex form validation or a state machine to handle user workflow for a long-running business process. Maybe you need 
a complex compute engine that calculates tax and shipping charges for a shopping cart.

## services, factories, providers

a service is a single instance of an object, function, or value that you can leverage across the various components of
your application. When you inject a service into an application, the $inject service first looks to check if an
instance of the service already exists. If it does, the $inject service returns the existing instance. If it does not,
the $inject service creates a new instance of the service and returns it.

There are one of five different module-definition methods used to create services. The first two are best for static values,
configuration values, and models and the rest are best for defining services based on how they are constructed or used.

## creating your own
a factory is written to return a single object, array, or function that can then be passed as a parameter to any other
function or controller, across the entire application.



## REFERENCE

https://www.youtube.com/watch?v=4ovXYLGFtc4&index=3&list=PLrOyJq2oDA6Gi-YCsi0-4xzlZt0V_Vpsb
https://www.youtube.com/watch?v=A6cJasNBkyI&index=3&list=PLrOyJq2oDA6Gi-YCsi0-4xzlZt0V_Vpsb
https://docs.angularjs.org/guide/services









