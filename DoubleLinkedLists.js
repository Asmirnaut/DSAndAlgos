class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  //Push creates a new node with the value passed into the function
  //If the head property is null, set the head and tail to be the newly created node, if not set the next property on the tail to be that node
  //set the previous property on the newly created node to be the tail
  //Increment the length and return the doubly linked list
}