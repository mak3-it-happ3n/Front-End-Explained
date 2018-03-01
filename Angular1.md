# grunt and yeoman
We use _grunt_ and _yeoman_ to make Angular handling very easy

## grunt
To start the final app, just type `grunt serve`

## Yeoman
Yeoman helps to automatically create and organize files with the following commands:

  **generate an Angular app** named _udaciMeals_ (in the current directory):

  `yo angular udaciMeals`

  **generate an Angular controller** named _menu_:

  `yo angular:controller menu`

  this will create the file and also link to it in _index.html_!

  **generate an Angular view / template** named _menu_:

  `yo angular:view menu`

  generates _menu.html_ within _app/views_

# Angular.JS

## Module(s)
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

## Configure the controller
To configure the controller, create it via yeoman and use a constructor function in the module:

    `angular.module('udaciMealsApp)

    .controller('MenuCtrl', function() {

      this.id = 5;

      this.name = "test name";

      this.img = "picture.jpg";

      this.rating = 10;

      });`

## Link to the view/template & the controller
In _index.html_ link to the view (generated via yeoman) in the _div_ where you want to include it.

`<div ng-include="'views/menu.html'" ng-controller="MenuCtrl as menu"></div>`

This will:
- link to the correct view file _menu.html_
- link to the controller _MenuCtrl_
- names the controller _menu_

## Configure the view
In _menu.html_ (created via yeoman), you can access the linked controller its defined values with **double curly braces** _{{}}_.

Example:

`   

      <div class="row">

      <div class"items-container">

        <div class="col-md-4>

          <h4>{{menu.name}}</h4>

          <p>Rating: {{menu.rating}}</p>

          <p>Image: {{menu.img}}</p>

        </div>

      </div>

    </div>"
    `

Note that the controller's name _menu_ is the one defined when linking to the controller from _index.html_.

## Directives
Angular.JS uses _Directives_ to link to its big list of functionalities. Directives are placed on DOM elements.

Some directives are:

**ng-app**: bootstrap the entire app with the module.
Example:

`<body ng-app="udaciMealsApp">`

**ng-include**: include a an external html-template as a view
Example: see next example

**ng-controller**: link and name a controller:
Example:

`<div ng-include="'views/menu.html'" ng-controller="MenuCtrl as menu"></div>`

**ng-if**: creates or removes an element, based on the validity of its expression. Example:

`<span ng-if="menu.rating > 4.0"> - People love this item!</span>`

Only displays the span-element if _{{menu.rating}}_ is higher than 4.0. (note that double braces are not used here!)

**ng-class**: applies a class based on a condition. Example:

`<span ng-class="{highlight: menu.rating > 4.5}">some Text</span>`

The class _highlight_ will be added to the span (and thus the text _some Text_) if _{{menu.rating}}_ is higher than 4.5.

Multiple directives can be set on the same element. Example:

`<span ng-if="menu.rating > 4.0" ng-class="{highlight: menu.rating > 4.5}">some Text</span>`

**ng-model**: input, select and text area elements. Example:

`<textarea ng-modell="menu.newReview" name="menu.review" rows="3" cols="40"</textarea>

<p>

  {{menu.newReview}}

  <span ng-if="!menu.newReview">Why not write a review!</span>

</p>`
