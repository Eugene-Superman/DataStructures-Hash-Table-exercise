class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (this.data[hash]) {
      this.data[hash].push([key, value])
    } else {
      this.data[hash] = [[key, value]]
    };

    return this.data;
  }

  get(key) {
    const hash = this._hash(key);
    const dataElement = this.data[hash]
    console.log(dataElement)
    if (!dataElement) {
      return undefined;
    }
    const dataToFind = dataElement.find(de => de[0] === key);

    return dataToFind[1];
  }


}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');

myHashTable.set('q', 228);
console.log(myHashTable.get('q'));
myHashTable.set('h', 1488);
console.log(myHashTable.get('h'));

