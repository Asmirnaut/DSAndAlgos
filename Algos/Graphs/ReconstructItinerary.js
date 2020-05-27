/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
*/

var findItinerary = function (tickets) {
  //construct aList with start as key and dest as value
  let graph = {};

  for (let [org, des] of tickets) {
    if (!graph[org]) graph[org] = [];
    graph[org].push(des);
  }
  for (const key in graph) {
    graph[key].sort();
  }
  let itinerary = traverse(graph, 'JFK');
  return itinerary.reverse();
};

const traverse = (graph, dest, itinerary = []) => {
  const stack = graph[dest] || [];
  let org;
  while (stack.length) {
    org = stack.shift();
    traverse(graph, org, itinerary);
  }
  itinerary.push(dest);
  return itinerary;
};
