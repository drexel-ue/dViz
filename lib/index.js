import dijkstras from "./dijkstras";

document.addEventListener("DOMContentLoaded", _ => {
  const body = document.getElementsByClassName("root")[0];
  const height = window.innerHeight;

  let mouseDown = false;

  const square = 10;

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
    dirs.forEach(dir => {
      const x = pos[0] + dir[0];
      const y = pos[1] + dir[1];
      if (x >= 0 && x <= square - 1 && y >= 0 && y <= square - 1) {
        const newPos = [x, y];
        graph[pos][newPos] = 1;
      }
    });
  };

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

  let { distance, previous, size } = dijkstras(graph, [0, 0]);
  //   console.log("distance", distance);
  //   console.log("previous", previous);

  const paintPath = (pathHash, stop) => {
    const dontPaint = stop.join(",");
    let currentDistance = 400;
    let posToPaint = "";

    while (currentDistance > 2) {
      currentDistance = distance[`${stop[0]},${stop[1]}`];
      posToPaint = pathHash[`${stop[0]},${stop[1]}`];
      stop = pathHash[`${stop[0]},${stop[1]}`].split(",");
      size--;
      const nodeToPaint = document.getElementById(posToPaint);
      setTimeout(() => {
        nodeToPaint.style.background = "pink";
      }, 25 * size);
    }
  };

  const x = square - 1;

  paintPath(previous, [x, x]);
});
