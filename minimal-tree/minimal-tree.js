class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.head = null;
  }

  insert(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    const insertRecursive = node => {
      if (node.value > data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        }
        insertRecursive(node.left);
      } else if (node.value < data) {
        if (node.right === null) {
          node.right = new Node(data);
          return;
        }
        insertRecursive(node.right);
      }
    };

    insertRecursive(this.head);
  }

  createMinHeightTreeFrom(array) {
    if (array.length === 1) {
      this.insert(array[0]);
      return;
    }
    const middleIdx = Math.floor(array.length / 2);
    this.insert(array[middleIdx]);
    this.createMinHeightTreeFrom(array.slice(0, middleIdx));
    this.createMinHeightTreeFrom(array.slice(middleIdx, array.length));
  }

  // root -> left -> right
  preOrder() {
    const preOrderRecursive = node => {
      if (node === null) {
        return;
      }
      console.log(node.value);
      preOrderRecursive(node.left);
      preOrderRecursive(node.right);
    };

    preOrderRecursive(this.head);
  }

  // left -> root -> right
  inOrder() {
    const inOrderRecurive = node => {
      if (node === null) {
        return;
      }
      inOrderRecurive(node.left);
      console.log(node.value);
      inOrderRecurive(node.right);
    };
    inOrderRecurive(this.head);
  }

  // left -> right -> root
  postOrder() {
    const postOrderRecursive = node => {
      if (node === null) {
        return;
      }
      postOrderRecursive(node.left);
      postOrderRecursive(node.right);
      console.log(node.value);
    };
    postOrderRecursive(this.head);
  }
}

const bt = new BinaryTree();
bt.createMinHeightTreeFrom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log("preorer:");
bt.preOrder();
console.log("inorder:");
bt.inOrder();
console.log("postorder:");
bt.postOrder();
