const LinkedList = require("../linked-list/LinkedList");
const Node = require("../linked-list/nodeElement");

function HashMap() {
  // buckets take in LinkedList of ind nodes of each set k-v pair
  loadFactor = 0.75;
  capacity = 16;
  buckets = Array(capacity);
  count = 0;
  for (let i = 0; i < buckets.length; i++) {
    list = new LinkedList();
    buckets[i].push(list);
  }
}

HashMap.prototype.hash = function (key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
  }

  return hashCode;
};

HashMap.prototype.set = function (key, value) {
  //for next time implement the node to have two values, key and value => node.value = [key, value]
  if (this.count === Math.ceil(this.loadFactor * this.capacity)) {
    this.capacity = this.capacity * 2;
    newBucket = Array(this.capacity);
    newBucket = [...this.buckets];
    this.buckets = newBucket;
  }
  const hashCode = hash(key);
  if (hashCode < 0 || hashCode >= buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
  const list = this.buckets[hashCode];
  // need a way to hold key but how?
  if (list.contains(key)) {
    const index = list.findIndex(key);
    list.replace(index, value);
  } else {
    list.append(value);
  }
  this.count = this.count + 1;
};

HashMap.prototype.get = function (key) {
  const hashCode = hash(key);
  if (hashCode < 0 || hashCode >= buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
  const list = this.buckets[hashCode];
  if (list.size() === 0 || !list.contains(key)) return null;
  for (const node of list) {
    if (node === key) return node.value;
  }
};

HashMap.prototype.has = function (key) {
  const hashCode = hash(key);
  if (hashCode < 0 || hashCode >= buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
  const list = this.buckets[hashCode];
  if (list.size() === 0 || !list.contains(key)) return false;
  return true;
};
