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
  //Swap the first value in the values property with the last one
  //Pop from the values property so you can return the val at the end
  //Have the new root sink down to the corect spot
  //Parent index starts at 0
  //Find the next index of the left child: 2*index+1 (make sure it's not out of bounds)
  //find the index of the right child: 2*index+2(make sure it is not out of bounds)
  //If the left or right child is greater than the element, swap. If both left and right children are larger, swap with the largest child
  //The child index you swapped to now becomes the new parent index
  //Keep looping and swapping until neither child is larger than the element
  //return old root

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
