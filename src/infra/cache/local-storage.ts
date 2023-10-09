export class LocalStorage {
  set(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key: string): any {
    const item = localStorage.getItem(key)
    if (item) return JSON.parse(item)
    return null
  }

  clear() {
    localStorage.clear()
  }
}
