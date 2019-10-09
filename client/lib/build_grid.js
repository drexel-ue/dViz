import wallOff from "./wall_off";

export default () => {
  graph = {};
  const body = document.getElementsByClassName("root")[0];
  const height = window.innerHeight;

  let mouseDown = false;

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

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

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

      rowDiv.append(colDiv);

      colDiv.addEventListener("click", _ => {
        if (selection === "start") {
          if (source) {
            const prevStart = document.getElementById(source.join(","));
            prevStart.style.background = "transparent";
          }
          colDiv.style.background = "silver";
          source = pos;
        }
        if (selection === "stop") {
          if (stop) {
            const prevStop = document.getElementById(stop.join(","));
            prevStop.style.background = "transparent";
          }
          colDiv.style.background = "rgba(8, 131, 16, 0.65)";
          stop = pos;
        }
      });
      colDiv.addEventListener("mousedown", _ => {
        mouseDown = true;
        if (selection === "wall") wallOff(pos);
      });
      colDiv.addEventListener("mouseover", _ => {
        if (mouseDown && selection === "wall") wallOff(pos);
      });
      colDiv.addEventListener("mouseup", _ => {
        mouseDown = false;
      });
    });
    body.append(rowDiv);
  });
};
