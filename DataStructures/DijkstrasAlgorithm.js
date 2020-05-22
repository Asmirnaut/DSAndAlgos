class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  findPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    //to return at end:
    let path = [];
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //as long as there is something to visit:
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //we are done
        //build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distances to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            //updating new smallest distance to neighbor
            distances[nextNode.node] = candidate;
            //updating how we got to the next neighbor
            previous[nextNode.node] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

//Create a priority queue to keep track of current smallest distances from start node to current node.

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

//Dijkstra's Pseudocode
//Function accepts a starting and ending vertex
//Create an object called distances and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
//Add each vertex with a priority of  Infinity to the priority queue, except the starting vertex, which has a priority of 0 since that is where we begin
//Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
//start looping as long as there is something in the priority queue
//dequeue a vertex from queue
//if the vertex is the same as the ending vertex, we are done
//otherwise loop through each value in the adjacency list at the vertex
//calculate the distance to that vertex from the starting vertex
//if that distance is less than what is currently stored in our distances object, we update the distances object with a new lower distance
//update the previous object to contain that vertex
//enqueue the vertex with the total distance from the start node
//FOUND UNDER WEIGHTEDGRAPH -> FINDPATH

let graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
console.log(graph.findPath('A', 'E'));
