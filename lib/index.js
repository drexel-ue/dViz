document.addEventListener("DOMContentLoaded", _ => {
  const body = document.getElementsByClassName("root")[0];
  const height = window.innerHeight;

  let mouseDown = false;

  const square = 30;

  const graph = {};

  const dirs = [
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1]
  ];

  const setNeighbors = pos => {
    graph[pos] = {};
    dirs.forEach((dir, index) => {
      const x = pos[0] + dir[0];
      const y = pos[1] + dir[1];
      if (x >= 0 && x <= square - 1 && y >= 0 && y <= square - 1) {
        const newPos = [x, y];
        graph[pos][newPos] = 1;
      }
    });
  };

  //
  const dijkstras = (graph, source) => {
    let distance = {};
    for (let node in graph) {
      distance[node] = Infinity;
    }
    distance[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let previous = {};

    while (unvisited.size > 0) {
      let currNode = minDistanceNode(unvisited, distance);
      unvisited.delete(currNode);

      for (let neighbor in graph[currNode]) {
        let distanceFromCurrToNeighbor = graph[currNode][neighbor];
        let totalNeighborDistance =
          distance[currNode] + distanceFromCurrToNeighbor;

        if (distance[neighbor] > totalNeighborDistance) {
          distance[neighbor] = totalNeighborDistance;
          previous[neighbor] = currNode;
        }
      }
    }

    return { distance, previous };
  };
  // Determines relaxtion.
  const minDistanceNode = (nodes, distance) => {
    return Array.from(nodes).reduce((minNode, node) =>
      distance[node] < distance[minNode] ? node : minNode
    );
  };

  // Actual rendering.
  [...Array(square).keys()].forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "rowDiv";
    rowDiv.style.height = `${height / square}%`;
    [...Array(square).keys()].forEach(col => {
      const colDiv = document.createElement("div");
      const pos = [row, col];
      setNeighbors(pos);
      colDiv.setAttribute("data-pos", pos);
      colDiv.className = "node";
      colDiv.id = pos;
      colDiv.style.width = `${height / square}%`;
      if (pos[0] === 0 && pos[1] === 0) {
        colDiv.style.background = "black";
      } else if (pos[0] === square - 1 && pos[1] === square - 1) {
        colDiv.style.background = "darkgreen";
      }

      rowDiv.append(colDiv);

      colDiv.addEventListener("mousedown", _ => {
        colDiv.style.backgroundColor = "darkorange";
        mouseDown = true;
      });
      colDiv.addEventListener("mouseover", _ => {
        if (mouseDown) {
          colDiv.style.backgroundColor = "darkorange";
        }
      });
      colDiv.addEventListener("mouseup", _ => {
        mouseDown = false;
      });
    });
    body.append(rowDiv);
  });

  //   console.log("graph", graph);

  let { distance, previous } = dijkstras(graph, [0, 0]);
  //   console.log("distance", distance);
  //   console.log("previous", previous);

  const paintPath = (pathHash, start, stop) => {
    let currentDistance = 400;
    let posToPaint = "";

    while (currentDistance > 2) {
      currentDistance = distance[`${stop[0]},${stop[1]}`];
      posToPaint = pathHash[`${stop[0]},${stop[1]}`];
      stop = pathHash[`${stop[0]},${stop[1]}`].split(",");
      const nodeToPaint = document.getElementById(posToPaint);
      nodeToPaint.style.background = "pink";
    }
  };

  const x = square - 1;

  paintPath(previous, [0, 0], [x, x]);
});
