import paintPath from "./paint_path";

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
      }, 1000 * Math.log(index / size));
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
        }, 1000 * Math.log(index / size));
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

export default dijkstras;
