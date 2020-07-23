// TypeScript Version: 3.5

export default class LocalCredentialStorage {
  constructor(namespace?: string)
  isSet: boolean
  get(): { username?: string; password?: string }
  set(username?: string, password?: string): void
  clear(): void
}
