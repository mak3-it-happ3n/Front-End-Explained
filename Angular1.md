# grunt and yeoman
We use _grunt_ and _yeoman_ to make Angular handling very easy

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
The array defines dependencies, so if a new model named _builder_ is created, it should be included in the array like this:

`angular.module('udaciMealsApp', ['builder'])`;


to **return a module**, leave out the array:

 `angular.module('udaciMealsApp)')`

## Bootstrap the App by linking to the module(s)
In the html-code (usually in _index.html_), define the follwing files:

**Define the main module** in the _body_ tag (or a _div_ tag, if only to be used within a specific _div_)

`<body ng-app="udaciMealsApp">`
defines the module _udaciMealsApp_ to be used for the _body_ section

**Include a script tag to link to the module's file** at the end of the _body_ section:

`<script src="scripts/udaciMeals.js"`
