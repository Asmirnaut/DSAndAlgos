//Abstract data structure: collection of data that obides by LIFO principle : Last In, First Out

//Although a stack can be implemented with an Array and using push/pop, a Linked List is a more time efficient way to implement it.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //Push should accept a value, and create a new node with that value
  //If there are no nodes in the stack, set the first and last property to be the newly created node
  //If there is at least one node, create a variable that stores the current first property on the stack
  //Reset the first property to be the newly created node
  //Set the next property on the node to be the previously created variable and increment the size of the stack by 1
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  //Pop removes the first node in the stack
  //If there are no nodes, return null
  //If there is only one node, set the first and last property to be null
  //If there is more than one node, set the first property to be the next property on the current first
  //Decrement the size by 1 and return the value of the node removed
  pop() {
    if (!this.first) return null;
    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
      //this way, when we do the next steps, this.first will also equal null since we are popping off the only value that there is
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

//A stack is supposed to be constant time, so while using a linked list we have to  push and pop to the beginning.
