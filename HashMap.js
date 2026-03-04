const LinkedList = require("../linked-list/LinkedList");
const Node = require("../linked-list/nodeElement");

function HashMap() {
  // buckets take in LinkedList of ind nodes of each set k-v pair
  buckets = Array(16);
  for (let i = 0; i < buckets.length; i++) {
    list = new LinkedList();
    buckets[i].push(list);
  }
  loadFactor = 0.75;
  capacity = 16;
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
  const hashCode = hash(key);
  const list = this.buckets[hashCode];
  if (this.buckets.find(hashCode)) {
    const keyIndex = list.findIndex(hashCode);
    this.buckets[hashCode][keyIndex] = value;
  }
};
