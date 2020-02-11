class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  toString() {
    return `{data: ${this.data}, left: [ ${
      this.left ? this.left.toString() : typeof this.left
    }], right: [${this.right ? this.right.toString() : typeof this.right}]}`;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;

    this._getDeepestNode = (direction, currentNode) => {
      if (!currentNode) {
        return;
      }

      if (currentNode[direction]) {
        return this._getDeepestNode(direction, currentNode[direction]);
      }
      return currentNode;
    };
  }

  add(data) {
    const node = this.root;
    const _insert = (currentNode, data) => {
      if (!currentNode) {
        currentNode = new Node(data);
      } else if (currentNode.data > data) {
        currentNode.left = _insert(currentNode.left, data);
      } else if (currentNode.data < data) {
        currentNode.right = _insert(currentNode.right, data);
      }
      return currentNode;
    };
    if (!node) {
      this.root = new Node(data);
      return;
    } else {
      this.root = _insert(node, data);
    }
  }

  search(data) {
    const _searchBy = (currentNode, data) => {
      if (!currentNode || data === null || typeof data === "undefined") {
        return null;
      } else if (currentNode.data === data) {
        return currentNode;
      }

      return _searchBy(
        data > currentNode.data ? currentNode.right : currentNode.left,
        data
      );
    };
    return _searchBy(this.root, data);
  }

  print() {
    return this.root.toString();
  }

  addMany(arrayOfData) {
    arrayOfData.forEach(element => {
      this.add(element);
    });
  }

  findMin() {
    return this._getDeepestNode("left", this.root);
  }

  findMax() {
    return this._getDeepestNode("right", this.root);
  }

  _removeRecursive(currentNode, toRemove) {
    const isALeaf = node => !node.left && !node.right;

    if (!currentNode) {
      return null;
    } else if (currentNode.data > toRemove) {
      currentNode.left = removeRecursive(currentNode.left)(toRemove);
    } else if (currentNode.data < toRemove) {
      currentNode.right = removeRecursive(currentNode.right)(toRemove);
    } else if (currentNode.data === toRemove) {
      if (isALeaf(currentNode) || (!currentNode.left && !currentNode.right)) {
        return null;
      } else if (!currentNode.left ^ !currentNode.right) {
        if (!currentNode.left) {
          return currentNode.right;
        } else if (!currentNode.right) {
          return currentNode.left;
        }
      } else {
        const minNode = getDeepestNode("left")(currentNode.right);
        currentNode.data = minNode.data;
        currentNode.right = removeRecursive(currentNode.right)(minNode.data);
        return currentNode;
      }
    }
    return currentNode;
  }

  remove(data) {
    return this.removeRecursive(this.root, data);
  }
}

const bst = new BinarySearchTree();
bst.add(3);
bst.add(2);
bst.add(5);
bst.add(1);
bst.add(7);
bst.add(8);
bst.add(9);
bst.remove(9);
console.log(bst.search(8));
console.log(bst.findMin());
console.log(bst.findMax());
