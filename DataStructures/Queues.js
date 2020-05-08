// Queues are FIFO, First in First Out
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //Enqueue accepts a value and creates a new node using that value passed into the function
  //if there are no nodes in the queue, set the node to be first and last property
  //increase the size and return the queue

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  //Dequeue removes the first property in the list
  //If there is no first prop, return null
  //See if the first is the same as the last, if so set the first and last to be null
  //If there is more than one node, set the first property to be the next property of the first
  //Decrement the size and return the value of the node dequeued

  dequeue() {
    if (!this.first) return null;
    let removed = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removed.val;
  }
}
