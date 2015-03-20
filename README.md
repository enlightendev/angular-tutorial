


- https://egghead.io/articles/angularjs-core-services-directive-definition-object-and-ui-router-cheat-sheets



## Best Practices
- Each component has a specific purpose. Make them as thin as possible. controllers should be as thin as possible and 
  only contain the code necessary to interact with user events and manipulate the model. We saw how common functionality 
  should be moved to a base controller and the $controller service can be used to inherit the common functionality in 
  your application controllers.

- Directives are responsible for manipulating DOM within your application and provide a way to extend the HTML syntax 
  with new functionality. DO NOT manipulate the DOM inside services, controllers, etc.
  
- Use validation directives help you to move validation code out of your controller into reusable components that you 
  can leverage across all of your application's forms.

- Services provide a large amount of functionality for your application. Your controllers and directives leverage them 
  and in turn, services maintain data across components, encapsulate reusable code, wrap external libraries, and reduce 
  the amount of code in your application.



## TUTORIALS
https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/



## TODO
- codeschool angular email
- angular meteor - http://angularjs.meteor.com/tutorial/step_00
- http://www.reactivemanifesto.org/
- https://thinkster.io/egghead/providers
- ui-router - https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views