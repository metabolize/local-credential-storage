// A light wrapper around LocalStorage, for storing credentials.
//
// namespace: A dotted namespace to use within local storage.
//   e.g. bodylabs.creel, bodylabs.creel.staging
//
var LocalCredentialStorage = module.exports = function (namespace) {
    namespace = namespace || 'credentials';

    this.usernameKey = namespace + '.access_key';
    this.passwordKey = namespace + '.secret';
};

LocalCredentialStorage.prototype.isSet = function () {
    return Boolean(localStorage.getItem(this.usernameKey)) &&
        Boolean(localStorage.getItem(this.passwordKey));
};

// Return an an object:
//
// credentials
//  |- username
//  |- password
//
// Return null if credentials are not set.
//
LocalCredentialStorage.prototype.get = function () {
    if (! this.isSet()) {
        return null;
    }

    return {
        username: localStorage.getItem(this.usernameKey),
        password: localStorage.getItem(this.passwordKey),
    };
};

LocalCredentialStorage.prototype.set = function (username, password) {
    if (! username || ! password) {
        throw new Error('username and password should be truthy');
    }

    localStorage.setItem(this.usernameKey, username);
    localStorage.setItem(this.passwordKey, password);
};

LocalCredentialStorage.prototype.clear = function () {
    localStorage.removeItem(this.usernameKey);
    localStorage.removeItem(this.passwordKey);
};
