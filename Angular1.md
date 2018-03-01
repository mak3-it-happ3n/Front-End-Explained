# grunt and yeoman
We use grunt and yeoman to make Angular handling very easy

## grunt
To start the final app, just type `grunt serve`

## Yeoman
Yeoman helps to automatically create and organize files with the following commands:

  **generate an Angular app** named _udaciMeals_ (in the current directory):
  
  `yo angular udaciMeals`

# Angular.JS

## Modules
A module holds everthing together (e.g. crontroller and templates).

To **create a module** named _udaciMealsApp_, in _app.js_ type:

`angular.module('udaciMealsApp', [])`;

(the array is needed, even if it is empty)

to **return a module**, leave out the array:
 `angular.module('udaciMealsApp)')`
