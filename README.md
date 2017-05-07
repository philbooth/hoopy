# hoopy

[![Package status](https://img.shields.io/npm/v/hoopy.svg?style=flat-square)](https://www.npmjs.com/package/hoopy)
[![Build status](https://img.shields.io/travis/philbooth/hoopy.svg?style=flat-square)](https://travis-ci.org/philbooth/hoopy)
[![License](https://img.shields.io/github/license/philbooth/hoopy.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Like an array, but rounder.

* [Huh?](#huh)
* [What's it useful for?](#whats-it-useful-for)
* [How do I install it?](#how-do-i-install-it)
* [How do I use it?](#how-do-i-use-it)
  * [Loading the library](#loading-the-library)
  * [Creating arrays](#creating-arrays)
  * [Accessing array items](#accessing-array-items)
  * [Growing the array](#growing-the-array)
* [Is there a change log?](#is-there-a-change-log)
* [How do I set up the dev environment?](#how-do-i-set-up-the-dev-environment)
* [What license is it released under?](#what-license-is-it-released-under)

## Huh?

Hoopy is a circular array
data type.
It extends `Array`
so that out-of-bounds indices
wrap back round
to the start of the array
(or if they're negative indices,
they wrap back round
to the end of the array).

## What's it useful for?

If you want a fixed-length buffer
for streamed I/O,
Hoopy can do that for you.

## How do I install it?

Via `npm`:

```
npm i hoopy --save
```

Or if you just want the git repo:

```
git clone git@github.com:philbooth/hoopy.git
```

## How do I use it?

### Loading the library

```js
const Hoopy = require('hoopy');
```

### Creating arrays

```js
// Create a circular array containing 100 items
const hoopy = new Hoopy(100);
```

You must pass
a `size` argument
to the `Hoopy` constructor,
otherwise it will throw.

### Accessing array items

```js
// Fill the array with nonsense
hoopy.fill('foo');

// Print all the nonsense
for (let i = 0; i < hoopy.length; ++i) {
  console.log(hoopy[i]);
}
```

You can read and write array items
using square brackets for indexing
as you would with a normal array.
However, if you write to
an out-of-bounds index,
it will not increase
the length of the array.
Instead the index is applied
modulo the array length,
wrapping back round to the start.
Negative indices work in reverse,
wrapping back round to the end
of the array.

The methods
`push`, `pop`, `shift` and `unshift`
will throw if called.
Future versions of the library
may implement sane behaviour
for them.
All of the other `Array` methods
work normally.

### Growing the array

```js
// Add 50 more items to the array
hoopy.grow(50);
```

The `grow` method
adds items to the array.
It takes one argument,
which is the number
of items to grow the array by.

The caller is responsible
for ensuring they don't overwrite
unprocessed items.
If you need to increase
the size of the array,
you must call `grow`.

## Is there a change log?

[Yes](CHANGELOG.md).

## How do I set up the dev environment?

To install the dependencies:

```
npm i
```

To run the tests:

```
npm t
```

To lint the code:

```
npm run lint
```

## What license is it released under?

[MIT](LICENSE).

