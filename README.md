# local-credential-storage

[![version](https://img.shields.io/npm/v/local-credential-storage?style=flat-square)][npm]
[![license](https://img.shields.io/npm/l/local-credential-storage?style=flat-square)][npm]
[![build](https://img.shields.io/circleci/project/github/metabolize/local-credential-storage?style=flat-square)][build]
[![code style](https://img.shields.io/badge/code_style-prettier-ff69b4?style=flat-square)][prettier]

[npm]: https://npmjs.com/local-credential-storage/
[build]: https://circleci.com/gh/metabolize/local-credential-storage/tree/master
[prettier]: https://prettier.io/

A light wrapper around LocalStorage, for storing credentials.

## Usage

```js
import LocalCredentialStorage from 'local-credential-storage'

const credentials = new LocalCredentialStorage('com.myapp')

// Checking for saved credentials.
if (credentials.isSet) {
  const { username, password } = credentials.get()
}

// Saving new credentials.
credentials.set('someuser', 'somepass')
```

## Acknowledgements

This little bit of code was developed at Body Labs by [Paul Melnikow][] and
later open sourced. Thanks to a repository and package transfer from Body Labs,
it's being maintained by the original author.

[paul melnikow]: https://github.com/paulmelnikow

## License

This project is licensed under the 2-clause BSD license.
