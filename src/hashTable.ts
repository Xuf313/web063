type KeyValue<K, V> = [K, V];
type Bucket<K, V> = KeyValue<K, V>[];

export class HashTable<K, V> {
  private storage: Bucket<K, V>[];
  private size: number;

  constructor(size: number = 50) {
    this.size = size;
    this.storage = Array.from({ length: this.size }, () => []);
  }

  private _hash(key: K): number {
    const keyStr = String(key);
    let hash = 0;

    for (let i = 0; i < keyStr.length; i++) {
      const charCode = keyStr.charCodeAt(i);
      hash = (hash << 5) - hash + charCode;
      hash = hash & hash;
    }

    return Math.abs(hash % this.size);
  }

  set(key: K, value: V): void {
    const index = this._hash(key);
    // Add the '!' here
    const bucket = this.storage[index]!;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i]![0] === key) {
        bucket[i]![1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  get(key: K): V | undefined {
    const index = this._hash(key);
    // Add the '!' here
    const bucket = this.storage[index]!;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i]![0] === key) {
        return bucket[i]![1];
      }
    }

    return undefined;
  }

  has(key: K): boolean {
    const index = this._hash(key);
    // Add the '!' here
    const bucket = this.storage[index]!;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i]![0] === key) {
        return true;
      }
    }

    return false;
  }

  clear(): void {
    this.storage = Array.from({ length: this.size }, () => []);
  }

  entries(): KeyValue<K, V>[] {
    const allEntries: KeyValue<K, V>[] = [];

    for (const bucket of this.storage) {
      allEntries.push(...bucket);
    }

    return allEntries;
  }
}