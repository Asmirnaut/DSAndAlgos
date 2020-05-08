class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //push creates a new node with the value pushed in
  //if there is no head, set the head and tail to be that newly created node
  //if there is a head, set the next property on the tail to be that new node, and set the tail property to be that new node value
  //increment the length by one
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //traverse traverses through the linked list, starting at the head
  //checks if there is a node
  //prints the node
  //reassignes current node to the current nodes next value
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  //pop removes a node from the end of a Linked list
  //doesn't take a value
  //if there is nothing in the list, return undefined
  //loop through the list until you reach the tail
  //set the next property of the 2nd to last node to be null
  //set the tail to be the 2nd to last node
  //decrement the length of the list by one
  //return the value of the node removed
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    //if there are no more nodes in the list, make sure to make the head and tail null to indicate an empy Linked List
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //shift removes a node from the beginning of a Linked List
  //doesn't take a value
  //Store the current head property in a variable
  //Set the head property to be the current head's next property
  //decrement the length by 1
  //Return the value of the node removed
  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }
  //Unshift adds a new node to the beginning of the Linked List
  //accepts a value of the new node
  //If there is no head, we set the head and tail to be the new node
  //Otherwise, set the newly created node's next property to be the current head property
  //set the head property on the list to be that newly created node
  //increment the length of the list by 1
  //return the linked list
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  //takes the last element, the tail, and assigns it to head
  //assigns next of the old head to null
  //takes the next node in the list and assigns it as previous (instead of currently being next)

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(25);
list.push(35);
list.push(45);
list.unshift(100);
