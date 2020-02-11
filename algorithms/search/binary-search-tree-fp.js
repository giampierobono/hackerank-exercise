const createNode = (data, left, right) => ({
  data,
  left,
  right
});

const printNode = node => JSON.stringify(node, null, 2);

const addRecursive = currentNode => data => {
  if (!currentNode) {
    return createNode(data);
  } else if (currentNode.data > data) {
    currentNode.left = addRecursive(currentNode.left)(data);
  } else if (currentNode.data < data) {
    currentNode.right = addRecursive(currentNode.right)(data);
  }
  return currentNode;
};

const getDeepestNode = direction => currentNode => {
  if (!currentNode || !currentNode[direction]) {
    return currentNode;
  } else {
    return getDeepestNode(direction)(currentNode[direction]);
  }
};

const find = currentNode => data => {
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

const removeRecursive = currentNode => toRemove => {
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
};

const preOrder = currentNode => {
  const nodes = [];

  if (!currentNode) {
    return nodes;
  }
  const preOrederRecursive = node => {
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

const postOrder = currentNode => {
  const nodes = [];

  const postOrderRecursive = node => {
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

const inOrder = currentNode => {
  const nodes = [];

  const inOrderRecursive = node => {
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

const binarySearchTree = rootNode => ({
  add: addRecursive(rootNode),
  remove: removeRecursive(rootNode),
  find: find(rootNode),
  toString: () => printNode(rootNode),
  findMin: () => getDeepestNode("left")(rootNode),
  findMax: () => getDeepestNode("right")(rootNode),
  preOrder: () => preOrder(rootNode),
  postOrder: () => postOrder(rootNode),
  inOrder: () => inOrder(rootNode)
});

let rootNode = null;
rootNode = binarySearchTree(rootNode).add(100);
rootNode = binarySearchTree(rootNode).add(800);
rootNode = binarySearchTree(rootNode).add(3);
rootNode = binarySearchTree(rootNode).add(12);

console.log(binarySearchTree(rootNode).toString());

console.log("preOrder: ", binarySearchTree(rootNode).preOrder());
console.log("postOrder: ", binarySearchTree(rootNode).postOrder());
console.log("inOrder: ", binarySearchTree(rootNode).inOrder());

rootNode = binarySearchTree(rootNode).remove(100);
rootNode = binarySearchTree(rootNode).remove(12);
rootNode = binarySearchTree(rootNode).remove(800);
rootNode = binarySearchTree(rootNode).remove(3);

console.log(binarySearchTree(rootNode).toString());
