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

  //Inserting a node
  //create a new node
  //Check if there is a root, if not the root becomes the new node
  //If there is a root, check if the value of the node is greater than or less than the value of the root
  //if it is greater, check to see if there is a node to the right
  //if there is, move to that node and repeat the steps
  //if not, add that node as the right property
  //if it is less, check to see if there is a node to the left
  //if there is, move to that node and repeat the steps
  //if there is not, add that node as the left property
  insert(val) {
    let newNode = new Node(val);
    if (!root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  //Finding a node in a BST
  //Check if there is a root, if not, we are done searching
  //If there is a root, check if the value of the root is the value we are looking for
  //If not, check to see if the value is greater than or less than the value of the root
  //If it is greater
  //Check to see if there is a node on the right
  //if there is , move to that node and repeat the steps
  //if not, we are done searching
  //If it is less, do the same steps as greater but on the left
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }
}
