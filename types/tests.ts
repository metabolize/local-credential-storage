import LocalCredentialStorage from 'local-credential-storage'

new LocalCredentialStorage()

const storage = new LocalCredentialStorage('com.foobar')

// $ExpectType boolean
storage.isSet

// $ExpectType string | undefined
storage.get().username

// $ExpectType string | undefined
storage.get().password

storage.set()
storage.set('foo')
storage.set(undefined, 'bar')

storage.clear()
