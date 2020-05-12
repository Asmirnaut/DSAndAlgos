//Building a Graph through an AdjacencyList
//Undirected Graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //Adding a Vertex
  //Accepts a name of a vertex
  // It should add a key to the adjaceny list with the name of the vertex and set its value to be an empty array

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  //Adding an Edge
  //Accept two vertices, we can call them ver1 and ver2
  //The function should find in the adjacency list the key of ver1 and push ver2 to the array
  //the function should find in the adjacency list the key of ver2 and push the ver1 to the array
  //Not worrying about error handling/invalid vertices

  addEdge(ver1, ver2) {
    this.adjacencyList[ver1].push(ver2);
    this.adjacencyList[ver2].push(ver1);
  }

  // Removing an Edge
  //Accepts two vertices, ver1 and ver2
  //reassign the key of ver1 to be an array that does not contain vertex 2
  //do the same for ver2

  removeEdge(ver1, ver2) {
    this.adjacencyList[ver1] = this.adjacencyList[ver1].filter(
      (v) => v !== ver2
    );
    this.adjacencyList[ver2] = this.adjacencyList[ver2].filter(
      (v) => v !== ver1
    );
  }

  //Remove Vertex
  //Accepts a single argument, a vertex
  //Should loop as long as there are any other vertices in the adjaceny list for that vertex
  //Inside the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  //delete the key in the adjacency list for that vertex

  removeVertex(ver) {
    if (this.adjacencyList[ver].length) {
      for (let i = 0; i < this.adjacencyList[ver].length; i++) {
        this.removeEdge(ver, i);
      }
    }
    delete this.adjacencyList[ver];
  }
}
