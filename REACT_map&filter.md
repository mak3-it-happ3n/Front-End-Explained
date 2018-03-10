# .map Method
The method is highly useful to **iterate over array items** and returns a new array.

Example:

`const names = ['Michael', 'Ryan', 'Tyler'];
const nameLengths = names.map( name => name.length );`

(each item in _names_ is temporarily stored in the variable _name_ and its length is returned)

The array _nameLengths_ will hold the values `[7, 4, 5]`.

_.map_ methods are often used to **replace for-loops** for arrays!

The method can also be used to **return both, the value and the index** of each item:
`const namesAndIndex = names.map((name, index) => name.length + index);`

# .filter Method
The method is useful to **filter items of an array** and returns a new array.

Example:

`const names = ['Michael', 'Ryan', 'Tyler'];
const shortNames = names.filter( name => name.length < 5 );`

(each item in _names_ is temporarily stored in the variable _name_ and its length is compared against the filter condition and returned if the condition is true)

The array _shortNames_ will hold the value `['Ryan']`.

_.filter_ methods are often used to **replace if-statements** for arrays!

# Combining .map and .filter

Both methods can be combined to **first filter and than map** over the items of an array:
`const names = ['Michael', 'Ryan', 'Tyler'];
const shortNamesLengths = names.filter( name => name.length < 5 ).map( name => name.length );`

The array _shortNamesLengths_ will hold the value `[4]`
