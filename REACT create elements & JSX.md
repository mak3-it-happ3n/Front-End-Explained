# The .createElement() Method
**First**, we need to **import react**:
`import React from 'react';`

We can then _create_ React-Elements like this:

`const myBio = React.createElement('div', null, 'Hello World!');`

This will create a JavaScript Object named _myBio_, that is a _div_ element with no properties (_null_) and the string _Hello World!_ as value.

# JSX Method
**The same** can be achieved **in JSX** (a mixture of _JavaScript_ and _HTML_):

`const myBio = (<div>'Hello World!'</div>)`
