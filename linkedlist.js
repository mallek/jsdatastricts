function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
    //If there is already data in list slide head over and take it's place
    if (this.head) {
        this.head.prev = newNode;
    //this is the first node in the list so set tail to this node also
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
    var newNode = new Node(value, null, this.tail);
    //If there is already data in list slide tail over and take it's place
    if (this.tail) {
        this.tail.next = newNode;
    //this is the first node in the list so set head to this node also
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
    //if list is empty get outa here
    if (!this.head) { return null; }

    var val = this.head.value;
    this.head = this.head.next;
    //if the list is not empty set value of prev node null (popping this node off)
    if (this.head) {
        this.head.prev = null;
    //list is now empty so set tail to null
    } else {
        this.tail = null;
    }

    return val;
}

LinkedList.prototype.removeTail = function () {
    //if list is empty get outa here
    if (!this.tail) { return null; }

    var val = this.tail.value;
    this.tail = this.tail.prev;
    //if the list is not empty set value of next node
    if (this.tail) {
        this.tail.next = null;
    //list is now empty so set head to null
    } else {
        this.head = null;
    }

    return val;
}

exports.LinkedList = new LinkedList();




