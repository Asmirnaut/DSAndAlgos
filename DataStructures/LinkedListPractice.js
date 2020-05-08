class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}


class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  //Insert first node
  insertFirst(data){
    this.head = new Node(data, this.head)// second argument pushes this.head to the next value (if it is not the first and only node)
  }

  //Insert last node

  //Insert at index

  //Get at index

  //Remove at Index

  //Clear List

  //Print List data
  
}

