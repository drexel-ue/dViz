# dViz

## Background and Overview

[dViz](https://d-viz.herokuapp.com/) is a path finding algorithm visualizer. Currently, dViz will showcase Dijkstra's algorithm. More path finding algorithms are to follow.

## Technologies

- Express

  - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- Node

  - Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser.

- Heroku

  - Heroku is a cloud platform as a service supporting several programming languages. Badreads will be deployed to Heroku for production in the form of a Docker image.

## Use

Use is intuitive and tooltips are provided to highlight functions. Select a start, select a stop, throw in a challenge by adding walls, and let her rip!

![demo_shot](https://raw.githubusercontent.com/drexel-ue/dViz/master/demo_pngs/demo.png)

### Javascript implementation of Dijkstra's algorithm

```javascript
const dijkstras = (graph, source) => {
  let distance = {};
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[source] = 0;

  let unvisited = new Set(Object.keys(graph));
  const size = unvisited.size;
  let previous = {};
  let index = 0;
  while (unvisited.size > 0) {
    let currNode = minDistanceNode(unvisited, distance);
    index++;
    if (currNode !== source.join(",") && currNode !== stop.join(",")) {
      const node = document.getElementById(currNode);
      setTimeout(() => {
        node.style.background = "rgba(83, 9, 219, 0.65)";
      }, 1000 * Math.log(index / size)); // Use setTimeouts to structure animation tree after the math behind the algorithm.
    }
    unvisited.delete(currNode);

    for (let neighbor in graph[currNode]) {
      let distanceFromCurrToNeighbor = graph[currNode][neighbor];
      let totalNeighborDistance =
        distance[currNode] + distanceFromCurrToNeighbor;

      if (distance[neighbor] > totalNeighborDistance) {
        distance[neighbor] = totalNeighborDistance;
        previous[neighbor] = currNode;
      }
      if (unvisited.has(neighbor) && neighbor !== stop.join(",")) {
        const node = document.getElementById(neighbor);
        index++;
        let taco = unvisited.size;
        setTimeout(() => {
          if (taco === 1) paintPath(distance, previous, stop);
          node.style.background = "rgba(255, 251, 0, 0.65)";
        }, 1000 * Math.log(index / size)); // Logorithm scales total animation duration to the size of the query field.
      }
    }
  }

  return { distance, previous, size };
};
// Determines relaxtion.
const minDistanceNode = (nodes, distance) => {
  return Array.from(nodes).reduce((minNode, node) =>
    distance[node] < distance[minNode] ? node : minNode
  );
};
```
