# Create a Component via a class

Example:

First, we have to import React and the _Component_ functionality:

`import React, {Component} from 'react'`

Then we can create a Component named _ListContacts_ as class:

`class ListContacts extends Component {`

  `render() {`

    `return (`

      `<ol className='contact-list'>`

      `{this.props.contacts.map((contact) => (`

        `... (functionality here)...`

Note that:
- each Component **must have a render method**
- the render method must **return the UI**
- all props are accessed via _this.props...._

# Create a Component via a stateless function

We we want a component with **render as its only method**, an easier way to generate it, is via a _stateless function_:

Example:

`function ListContacts (props) {`

  `return (`

    `<ol className='contact-list'>`

    `{props.contacts.map((contact) => (`

      `...(functionality here)...`

Note that:
- a stateless function takes _props_ as its argument
- props are access without _this_ via _props...._

# Compare Components created as a class and stateless functions (written as ES6 arrow functions) directly

The following 2 examples are exactly the same:

**Created as a class:**

`class Email extends React.Component {

  render() {

    return (

      <div>
        {this.props.text}
      </div>
    );
  }
};`

**Created as a stateless arrow function:**

`const Email = (props) => (`
  
`<div> {props.text} </div> );`
