'use strict'

// A light wrapper around LocalStorage, for storing credentials.
//
// namespace: A dotted namespace to use within local storage.
//   e.g. com.mycompany.myapp, com.mycompany.myapp.staging
//
module.exports = class LocalCredentialStorage {
  constructor(namespace = 'credentials') {
    this.usernameKey = `${namespace}.username`
    this.passwordKey = `${namespace}.password`
  }

  get isSet() {
    return (
      Boolean(localStorage.getItem(this.usernameKey)) &&
      Boolean(localStorage.getItem(this.passwordKey))
    )
  }

  // Return an object:
  //
  // credentials
  //  |- username
  //  |- password
  //
  // Return null for values which are not set.
  //
  get() {
    return {
      username: localStorage.getItem(this.usernameKey),
      password: localStorage.getItem(this.passwordKey),
    }
  }

  set(username, password) {
    if (!username || !password) {
      throw new Error('username and password should be truthy')
    }

    localStorage.setItem(this.usernameKey, username)
    localStorage.setItem(this.passwordKey, password)
  }

  clear() {
    localStorage.removeItem(this.usernameKey)
    localStorage.removeItem(this.passwordKey)
  }
}
