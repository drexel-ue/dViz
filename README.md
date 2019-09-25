# dViz

## Background and Overview

[dViz](https://d-viz.herokuapp.com/) is a path finding algorithm visualizer. Currently, dViz will showcase Dijkstra's algorithm. More path finding algorithms are to follow.

## Technologies

- Express

  - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- React

  - ReactJS is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It’s used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.

- Node

  - Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser.

- Heroku

  - Heroku is a cloud platform as a service supporting several programming languages. Badreads will be deployed to Heroku for production in the form of a Docker image.

## Use

Use is intuitive and tooltips are provided to highlight functions. When first coming to the site, a modal is presented to give a quick feature guide. The option to hide this modal on subsequent loads is also available. Should the modal ever need to accessed, a helpful `?` can be reached from the control panel.

## Visual Examples

#### Modal Instructions

![modal_insructions](https://raw.githubusercontent.com/drexel-ue/dViz/master/demo_pngs/modal.png)

#### Controls

![controls](https://raw.githubusercontent.com/drexel-ue/dViz/master/demo_pngs/path_controls.png)

#### Path found with no wall

![no_wall](https://raw.githubusercontent.com/drexel-ue/dViz/master/demo_pngs/no_wall.png)

#### Path found with wall

![with_wall](https://raw.githubusercontent.com/drexel-ue/dViz/master/demo_pngs/with_wall.png)

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
        node.style.background = "darkblue";
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
          node.style.background = "yellow";
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

