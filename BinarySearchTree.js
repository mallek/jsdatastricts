function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

//**************************************************
//                     Insert
//**************************************************

BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }

    } else if (value > this.value) {
        if (!this.right) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
    }
};

//**************************************************
//                     Contains
//**************************************************

BST.prototype.contains = function (value) {
    if (value === this.value) {
        return true;
    }
    else if (value < this.value) {
        if (!this.left) {
            return false;
        } else {
            return this.left.contains(value);
        }
    }
    else if (value > this.value) {
        if (!this.right) {
            return false;
        } else {
            return this.right.contains(value);
        }
    }
};

//**************************************************
//              Depth First Traversal
//**************************************************

BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    if (order === 'pre-order') {
        iteratorFunc(this.value);
    }
    if (this.left) {
        this.left.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === 'in-order') {
        iteratorFunc(this.value);
    }
    if (this.right) {
        this.right.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === 'post-order') {
        iteratorFunc(this.value);
    }
};

//**************************************************
//              Breadth First Traversal
//**************************************************

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    let queue = [this];
    while (queue.length) {
        let treeNode = queue.shift();
        iteratorFunc(treeNode);
        if (treeNode.left) {
            queue.push(treeNode.left);
        }
        if (treeNode.right) {
            queue.push(treeNode.right);
        }
    }
};

//**************************************************
//              Get Smallest Value
//**************************************************
BST.prototype.getMinVal = function () {
    if (!this.left) {
        return this.value;
    } else {
        return this.left.getMinVal();
    }
};

//**************************************************
//              Get Largest Value
//**************************************************
BST.prototype.getMaxVal = function () {
    if (!this.right) {
        return this.value;
    } else {
        return this.right.getMaxVal();
    }
};


//**************************************************
//                     TESTING
//**************************************************

let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

//console.log(bst);
console.log(bst.right.left.left);
console.log(bst.left.right.left);
console.log(bst.left.left.left);
console.log(bst.right.right);

console.log(bst.contains(50));  //true
console.log(bst.contains(10));  //true
console.log(bst.contains(105));  //true
console.log(bst.contains(15));  //false

console.log('---------------------------------------------------');
bst.depthFirstTraversal(log, 'in-order');
console.log('---------------------------------------------------');
bst.depthFirstTraversal(log, 'pre-order');
console.log('---------------------------------------------------');
bst.depthFirstTraversal(log, 'post-order');

function log(value) {
    console.log(value);
}

console.log('---------------------------------------------------');
bst.breadthFirstTraversal(logNodeValue);

function logNodeValue(node) {
    console.log(node.value);
}

console.log('---------------------------------------------------');
console.log(bst.getMinVal());
console.log(bst.getMaxVal());







