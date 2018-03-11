# State
Components have `props` (passed from parent components) that are immutable.
Another form of data is stored in a component's `state`.

By changing a component's `state`, React knows that the UI changes.

## Defining the state

Example:

`class User extends React.Component {`

`state = {`

`username: 'Tyler'`

`}`

This sets the `state`of the component `User` to an object with the key-value pair `username: 'Tyler'`.

To **access the state** of a component, we use the exact same logic as for accessing a component's props: _this.state..._

`...`

`render() {`

`return (`

`<p> Username: {this.state.username} </p>`

## Updating state
To update a component's state, we use `setState`. There are 2 ways to do this:

1. If the **new state of the component DEPENDS on the previous state**, we use the _functional setState_ approach:

`this.setState((prevState) = > ({`

`count: prevState.count +1`

`}))`


2. For **every other case**, we use the _object setState_ approach:

`this.setState({`

`username: 'Tyler'`

`})`
