//Tree traversal for not just BST

//Breadth First Search - Iterative Steps
//Create a queue(array) and a viariable to store the values of nodes visited
//Place the root node in the queue
//Loop as long as there is anything in the queue
//Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
//If there isa  left property on the node dequeued, add it to the queue
//If there is a right property on the node dequeued, add it to the queue
//Return the value

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  //Depth First Search - Pre-Order (Recursively)
  //Create a variable to store the values of nodes visited
  //Store the root of the BST in a variable called current
  //Write a helper function which accepts a node as an argument
  //Push the values of the node to the variable that stores the values
  //If the node has a left property, call the helper function with the left property on the node
  //If the node has a right property, call the helper function with the right property on the node

  preOrder() {
    let visited = [];
    let current = this.root;

    const traverse = (node) => {
      visited.push(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(current);
    return visited;
  }
}
