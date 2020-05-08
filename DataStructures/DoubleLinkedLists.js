class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Push creates a new node with the value passed into the function
  //If the head property is null, set the head and tail to be the newly created node, if not set the next property on the tail to be that node
  //set the previous property on the newly created node to be the tail
  //Increment the length and return the doubly linked list
  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //Pop returns the value of the node removed from the end of the LL
  //If there is no head, return undefined
  //Store the current tail in a variable to return later
  //If the length is 1, set the head and tail to be null
  //Update the tail to be the previous Node and set the new tails next to null
  //Decrement the length and return value removed
  pop() {
    if (!this.head) {
      return undefined;
    }

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }

    this.length--;
    return poppedNode;
  }

  //Shift will remove a node from the top (the head) of the LL
  //if the length is 0, return undefined
  //Store the current head property in a var
  //if the length is 1, set head and tail to be null
  //Update the head to be the next of the old head
  //set the heads prev property to null
  //set teh old heads next to null
  //decrement the length and return the old head

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  //Unshift creates a new node with a value passed to the function
  //if the length is 0, set tail and head to be the new node
  //Otherwise set the prev property on the head of the list to be the new node
  //set the next property on the new node to be the head
  //Update the head to be the new node
  //Increment length and return the list

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Get returns the node of the inex passed in as an argument
  //if the index is less than 0 or greater/equal to the length, return null
  //if the index is less than or equal to half the length of the list
  //loop through the list starting from the head and loop to middle
  //return node once it is found
  //If the index is greater than half the length of the list
  //loop through the list starting from the tail and towards the middle
  //return node once it is found

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  //Set creates a variable which is yhe result of the get method at the index passed to the function
  //if the get method returns a valid node, set the value of that node to be the value passed into the function
  //return true
  //otherwise return false

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  //Insert a node at a given index
  //if the index is less than zero or greater than or equal to the length, return false
  //if the index is 0, unshit
  //if the index is the same as the length, push
  //use get method to access the index-1
  //set the next and prev properties on the correct nodes to link everything together
  //incrememnt the length and return true

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = beforeNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  //Remove takes an index and removes a node at that index
  //if the index is less than zero or greater than/equal to the length, return undefined
  //if the index is 0, shift
  //if the index is the same as the length - 1, pop
  //use the get method to retrieve the item to be removed
  //update the next and prev properties to remove the found node from the list
  //set next and prev to null on the found node
  //decrement the length and return the removed node

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
