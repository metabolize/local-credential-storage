# Changelog

## 4.0.0

- In the localStorage key, use `:` instead of `.` as the separator between
  the namespace and `username` and `password`.

## 3.1.0

- Add type definitions.

## 3.0.0

### Breaking changes

- Rename the keys used by local storage from `accessKey` to `username` and
  `secret` to `password`.
- Work when username or password is set, but not both.

## 2.0.0

- Change `isSet` from a function to a property.
- Adopt ES6 syntax.
