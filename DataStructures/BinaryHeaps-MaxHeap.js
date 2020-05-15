class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12, 11];
  }

  //Inserting a node into our heap
  //Push the value into the values property on the heap
  //Bubble the value up to its correct spot
  //Create a variable called index which is the length of the values property -1
  //Create a variable called parentIndex which is the floor of (index-1)/2
  //Keep looping as long as the values element at the parentIndex is less than the values element at the child index
  //swap the value of the values element at the parentIndex with the value of the element property at the child index
  //set the index to be the parentIndex and start over
  //account for hitting the beggining of the values array

  insert(val) {
    this.values.push(val);

    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  //Removing from a heap
  //remove the root
  //replae with the most recently added
  //adjust(sink down)
}

let heap = new MaxBinaryHeap();
