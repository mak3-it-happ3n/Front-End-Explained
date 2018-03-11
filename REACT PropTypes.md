# PropTypes
PropTypes are a great way to validate intended data types in React.

We can use _PropTypes_ to specify which data types are required in which format whenever props are passed.

## Install PropTypes
As _PropTypes_ is not a core part of React, we first have ton install it:

`npm install --save prop-types`

or:

`yarn add prop-types`

## Import PropTypes
We now have to _import_ PropTypes into our app:

`import PropTypes from 'prop-types'`

## Define PropTypes
We can now define the PropTypes.

Example:

`ListContacts.propTypes = {`

`contacts: PropTypes.array.isRequired,`

`onDeleteContact: PropTypes.func.isRequired`

`}`

This code defines that when invoking the _ListContacts_ component
- we need to add a prop _contacts_ that is an array (and required)
- we need a prop _onDeleteContact_ that is a function (and required)
Otherwise, an error will be thrown, stating which propTypes where expected.
