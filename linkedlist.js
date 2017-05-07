function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

//Constant time O(1)
LinkedList.prototype.addToHead = function (value) {
    let newNode = new Node(value, this.head, null);
    //If there is already data in list slide head over and take it's place
    if (this.head) {
        this.head.prev = newNode;
    //this is the first node in the list so set tail to this node also
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
};

//Constant time O(1)
LinkedList.prototype.addToTail = function (value) {
    let newNode = new Node(value, null, this.tail);
    //If there is already data in list slide tail over and take it's place
    if (this.tail) {
        this.tail.next = newNode;
    //this is the first node in the list so set head to this node also
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
};

//Constant time O(1)
LinkedList.prototype.removeHead = function () {
    //if list is empty get outa here
    if (!this.head) { return null; }

    let val = this.head.value;
    this.head = this.head.next;
    //if the list is not empty set value of prev node null (popping this node off)
    if (this.head) {
        this.head.prev = null;
    //list is now empty so set tail to null
    } else {
        this.tail = null;
    }

    return val;
};

//Constant time O(1)
LinkedList.prototype.removeTail = function () {
    //if list is empty get outa here
    if (!this.tail) { return null; }

    let val = this.tail.value;
    this.tail = this.tail.prev;
    //if the list is not empty set value of next node
    if (this.tail) {
        this.tail.next = null;
    //list is now empty so set head to null
    } else {
        this.head = null;
    }

    return val;
};

//Linear time O(n)
LinkedList.prototype.search = function (searchValue) {
    //get our search starting point
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchValue) {
            return currentNode.value;
        }
        //update our while index so we eventually break out
        currentNode = currentNode.next;
    }
    return null;
};

//Linear time O(n)
LinkedList.prototype.indexOf = function (value) {
    let results = [];
    let index = 0;
    let currentNode = this.head;

    while (currentNode) {
        if (currentNode.value === value) {
            results.push(index);
        }
        index++;
        currentNode = currentNode.next;
    }

    return results;
};

exports.LinkedList = new LinkedList();




