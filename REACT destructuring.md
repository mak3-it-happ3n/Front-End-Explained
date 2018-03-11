# Destructuring

A great **ES6** feature is destructuring to keep code cleaner and more readable:

Example:

If we have an _Object_ and we
- access its _query_ value via `this.state.query`
- access its _contacts_ value via `this.props.contacts`
- acces its _onDeleteContact_ function via `this.props.onDeleteContact`

We can **destructure** these into simpler variables:

`const {contact, onDeleteContact} = this.props`

`const {query} = this.state`

Now we can refer to these props and state via the shorter variables _contact_, _onDeleteContact_, _query_.
