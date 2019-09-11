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
    if (currNode !== source.join(",")) {
      const node = document.getElementById(currNode);
      setTimeout(() => {
        node.style.background = "darkblue";
      }, 5 * index);
    }
    unvisited.delete(currNode);

    for (let neighbor in graph[currNode]) {
      if (unvisited.has(neighbor)) {
        const node = document.getElementById(neighbor);
        index++;
        setTimeout(() => {
          node.style.background = "yellow";
        }, 5 * index);
      }
      let distanceFromCurrToNeighbor = graph[currNode][neighbor];
      let totalNeighborDistance =
        distance[currNode] + distanceFromCurrToNeighbor;

      if (distance[neighbor] > totalNeighborDistance) {
        distance[neighbor] = totalNeighborDistance;
        previous[neighbor] = currNode;
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
