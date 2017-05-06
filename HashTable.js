function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function (key) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }

    var bucket = total % this.numBuckets;
    return bucket;
}

HashTable.prototype.insert = function (key, value) {
    var index = this.hash(key);
    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value);
    } else {
        var curentNode = this.buckets[index];
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }

    var newNode = new HashNode()
}

console.log('hello world'.charCodeAt(4))

var myHT = new HashTable(30);
console.log(myHT)

//myHT.hash('Becca')

console.log(myHT.hash('Travis'))