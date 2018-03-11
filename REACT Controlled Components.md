# Controlled Components
Controlled components are components that controlled by React instead of being controlled by the DOM. They have 3 advantages:

1. instant input validation
2. conditional disable/enable buttons
3. enforce input formats

## Example

`class NameForm extends React.Component {`

`state = {email: ''}`

`handleChange = (event) => {`

`this.setState({email: event.target.value})`

`}`

`render() {`

`return (`

`<form>`

`<input type="text" value={this.state.email}`

`onChange={this.handleChange} \>`

`</form>`

`)`

`}`

This example of a form _NameForm_ illustrates that the _value_ of the input field always reflects the component's state (line 26).

The email can be updated via a _handleChange_ method (line 14-18) that is invoked when the state changes (line 28).
