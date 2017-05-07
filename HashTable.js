//**************************************************
//          HASH TABLE CONSTRUCTORS
//**************************************************

function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

//**************************************************
//                     HASH
//**************************************************

HashTable.prototype.hash = function (key) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }

    var bucket = total % this.numBuckets;
    return bucket;
}

//**************************************************
//                     INSERT
//**************************************************

HashTable.prototype.insert = function (key, value) {
    var index = this.hash(key);
    console.log('INDEX: ', index)
    //if no nodes exist add at top of bucket chain
    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value);
    //Check if we need to update value or insert
    } else if (this.buckets[index].key === key) {
        this.buckets[index].value = value;
    } else {
        var currentNode = this.buckets[index];
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next.value = value;
                return; //short curcit to jump out without attaching new node
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
    var newNode = new HashNode()
}

//**************************************************
//                     GET
//**************************************************

HashTable.prototype.get = function (key) {
    var index = this.hash(key)
    if (!this.buckets[index]) {
        return null;
    } else {
        var currentNode = this.buckets[index]
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

//**************************************************
//                     GET ALL
//**************************************************

HashTable.prototype.retrieveAll = function () {
    var results = []
    for (var i = 0; i < this.numBuckets; i++) {
        var currentNode = this.buckets[i];
        while (currentNode) {
            results.push(currentNode)
            currentNode = currentNode.next;
        }
    }
    return results;
}



//**************************************************
//                     TESTING
//**************************************************

console.log('hello world'.charCodeAt(4))

var myHT = new HashTable(30);
console.log(myHT)

myHT.hash('Becca')

console.log(myHT.hash('Travis'))

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');
myHT.insert('Travis', 'thaley@outlook.com');


console.log(myHT.buckets)

console.log(myHT.get('Travis'));
console.log(myHT.get('Dean'));

function log(value) {
    console.log(value);
}

console.log(myHT.retrieveAll());
