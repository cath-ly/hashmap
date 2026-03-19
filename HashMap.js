const LinkedList = require("../linked-list/LinkedList");

function HashMap() {
  // buckets take in LinkedList of ind nodes of each set k-v pair
  this.loadFactor = 0.75;
  this.capacity = 16;
  this.buckets = Array(this.capacity);
  this.count = 0;
  for (let i = 0; i < this.buckets.length; i++) {
    let list = new LinkedList();
    this.buckets[i] = list;
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

//grab an array and then map 0, 1 as key and value
HashMap.prototype.set = function (key, value) {
  //for next time implement the node to have two values, key and value => node.value = [key, value]
  if (this.count === Math.ceil(this.loadFactor * this.capacity)) {
    this.capacity = this.capacity * 2;
    newBucket = Array(this.capacity);
    newBucket = [...this.buckets];
    this.buckets = newBucket;
    for (let i = this.capacity / 2; i < this.capacity; i++) {
      let list = new LinkedList();
      this.buckets.push(list);
    }
  }
  const hashCode = this.hash(key);
  if (hashCode < 0 || hashCode >= this.buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
  const list = this.buckets[hashCode];
  if (list.size() === 0) {
    list.prepend([key, value]);
    this.count = this.count + 1;
    return;
  }
  // will LL be able to take [k,v] as value rather than int?
  for (const node of list.array) {
    if (node.value[0] === key) {
      node.value[1] = value;
      return;
    }
  }
  list.append([key, value]);
  this.count = this.count + 1;
};

HashMap.prototype.get = function (key) {
  const hashCode = this.hash(key);
  if (hashCode < 0 || hashCode >= this.buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
  const list = this.buckets[hashCode];
  if (list.size() === 0) return null;
  for (const node of list.array) {
    if (node.value[0] === key) return node.value[1];
  }
  return null;
};

HashMap.prototype.has = function (key) {
  const hashCode = this.hash(key);
  if (hashCode < 0 || hashCode >= this.buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
  const list = this.buckets[hashCode];
  if (list.size() === 0) return false;
  for (const node of list.array) {
    if (node.value[0] === key) return true;
  }
  return false;
};

HashMap.prototype.remove = function (key) {
  if (!this.has(key)) return false;
  const hashCode = this.hash(key);
  const list = this.buckets[hashCode];
  let index = 0;
  for (const node of list.array) {
    if (node.value[0] === key) {
      list.remove(index);
    }
    index = index + 1;
  }
  this.count = this.count - 1;
};

HashMap.prototype.length = function () {
  return this.count;
};

HashMap.prototype.clear = function () {
  buckets = Array(16);
  this.capacity = 16;
  for (let i = 0; i < this.capacity; i++) {
    let list = new LinkedList();
    this.buckets[i].push(list);
  }
};

HashMap.prototype.keys = function () {
  const keyList = [];
  for (let i = 0; i < this.capacity; i++) {
    for (const node of this.buckets[i]) {
      if (node) {
        keyList.push(node.value[0]);
      }
    }
  }
  return keyList;
};

HashMap.prototype.values = function () {
  const valueList = [];
  for (let i = 0; i < this.capacity; i++) {
    for (const node of this.buckets[i]) {
      if (node) {
        valueList.push(node.value[1]);
      }
    }
  }
  return valueList;
};

HashMap.prototype.entries = function () {
  const kpList = [];
  for (let i = 0; i < this.capacity; i++) {
    for (const node of this.buckets[i]) {
      if (node) {
        kpList.push(node.value);
      }
    }
  }
  return kpList;
};

module.exports = HashMap;
