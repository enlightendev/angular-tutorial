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



