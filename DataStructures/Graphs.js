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
}
