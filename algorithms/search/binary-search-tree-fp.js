const createNode = (data, left, right) => ({
  data,
  left,
  right,
});

const printNode = (node) =>
  node !== null ? JSON.stringify(node, null, 2) : node;

const addRecursive = (currentNode) => (data) => {
  if (!currentNode) {
    return createNode(data);
  }
  const clonedCurrentNode = { ...currentNode };
  if (clonedCurrentNode.data > data) {
    clonedCurrentNode.left = addRecursive(clonedCurrentNode.left)(data);
  } else if (clonedCurrentNode.data < data) {
    clonedCurrentNode.right = addRecursive(clonedCurrentNode.right)(data);
  }
  return clonedCurrentNode;
};

const getDeepestNode = (direction) => (currentNode) => {
  if (!currentNode || !currentNode[direction]) {
    return currentNode;
  } else {
    return getDeepestNode(direction)(currentNode[direction]);
  }
};

const find = (currentNode) => (data) => {
  if (!currentNode) {
    return null;
  } else if (currentNode.data === data) {
    return currentNode;
  } else if (currentNode.data > data) {
    return find(currentNode.left)(data);
  } else {
    return find(currentNode.right)(data);
  }
};

const removeRecursive = (currentNode) => (toRemove) => {
  const isALeaf = (node) => !node.left && !node.right;

  if (!currentNode) {
    return null;
  }
  const clonedCurrentNode = { ...currentNode };
  if (clonedCurrentNode.data > toRemove) {
    clonedCurrentNode.left = removeRecursive(clonedCurrentNode.left)(toRemove);
  } else if (clonedCurrentNode.data < toRemove) {
    clonedCurrentNode.right = removeRecursive(clonedCurrentNode.right)(
      toRemove
    );
  } else if (clonedCurrentNode.data === toRemove) {
    if (
      isALeaf(clonedCurrentNode) ||
      (!clonedCurrentNode.left && !clonedCurrentNode.right)
    ) {
      return null;
    } else if (!clonedCurrentNode.left ^ !clonedCurrentNode.right) {
      if (!clonedCurrentNode.left) {
        return clonedCurrentNode.right;
      } else if (!clonedCurrentNode.right) {
        return clonedCurrentNode.left;
      }
    } else {
      const minNode = getDeepestNode("left")(clonedCurrentNode.right);
      clonedCurrentNode.data = minNode.data;
      clonedCurrentNode.right = removeRecursive(clonedCurrentNode.right)(
        minNode.data
      );
      return clonedCurrentNode;
    }
  }
  return clonedCurrentNode;
};

const preOrder = (currentNode) => {
  const nodes = [];

  if (!currentNode) {
    return nodes;
  }
  const preOrederRecursive = (node) => {
    if (!node) {
      return;
    }
    nodes.push(node.data);
    preOrederRecursive(node.left);
    preOrederRecursive(node.right);
    return nodes;
  };
  return preOrederRecursive(currentNode);
};

const postOrder = (currentNode) => {
  const nodes = [];

  const postOrderRecursive = (node) => {
    if (!node) {
      return;
    }
    postOrderRecursive(node.left);
    postOrderRecursive(node.right);
    nodes.push(node.data);
    return nodes;
  };

  return postOrderRecursive(currentNode);
};

const inOrder = (currentNode) => {
  const nodes = [];

  const inOrderRecursive = (node) => {
    if (!node) {
      return;
    }

    inOrderRecursive(node.left);
    nodes.push(node.data);
    inOrderRecursive(node.right);
    return nodes;
  };

  return inOrderRecursive(currentNode);
};

const binarySearchTree = () => {
  let rootNode = null;

  const setRootNode = (newRoot) => (rootNode = newRoot);
  const getRootNode = () => rootNode;

  return {
    getRootNode,
    add: (data) => setRootNode(addRecursive(getRootNode())(data)),
    remove: (data) => setRootNode(removeRecursive(getRootNode())(data)),
    find: (toFind) => find(getRootNode())(toFind),
    toString: () => printNode(getRootNode()),
    findMin: () => getDeepestNode("left")(getRootNode()),
    findMax: () => getDeepestNode("right")(getRootNode()),
    preOrder: () => preOrder(getRootNode()),
    postOrder: () => postOrder(getRootNode()),
    inOrder: () => inOrder(getRootNode()),
  };
};

let bst = binarySearchTree();
bst.add(100);
bst.add(800);
bst.add(3);
bst.add(12);

console.log(bst.toString());
console.log("find min: ", printNode(bst.findMin()));
console.log("find max: ", printNode(bst.findMax()));

console.log("preOrder: ", bst.preOrder());
console.log("postOrder: ", bst.postOrder());
console.log("inOrder: ", bst.inOrder());

console.log("removing 100 from tree");
bst.remove(100);
console.log(bst.toString());

console.log("removing 12 from tree");
bst.remove(12);
console.log(bst.toString());

console.log("removing 800 from tree");
bst.remove(800);
console.log(bst.toString());

console.log("removing 3 from tree");
bst.remove(3);
console.log("root node should be null");
console.log(bst.toString());
