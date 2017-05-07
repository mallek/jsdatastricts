/**
 * A linked list only knows about it's head and tail,
 * each node knows how to find the next node
 * @constructor
 */
function LinkedList() {
    this.head = null;
    this.tail = null;
}

/**
 * A node in a linked list will know it's value and the nodes to either side of it
 * @param value
 * @param next
 * @param prev
 * @constructor
 */
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

/**
 * Add a new value to the beginning of the linked list
 * Constant time O(1)
 * @param value
 */
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


/**
 * Add a new node to the tail of the linked list
 * Constant time O(1)
 * @param value
 */
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

/**
 * remove the head node of the linked list returning the value stored
 * Constant time O(1)
 * @returns {*}
 */
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

/**
 * Removde the end of the linked list returning the value
 * Constant time O(1)
 * @returns {*}
 */
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


/**
 * Searching the linked list will require traversing each node once
 * Linear time O(n)
 * @param searchValue
 * @returns {*}
 */
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

/**
 * finding the index of items will require visiting each node of the linked list
 * Linear time O(n)
 * @param value
 * @returns {Array}
 */
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




