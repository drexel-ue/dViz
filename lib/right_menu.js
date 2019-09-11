import dijkstras from "./dijkstras";
import buildGrid from "./build_grid";

document.addEventListener("DOMContentLoaded", () => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const rightMenu = document.getElementById("right_menu");
  rightMenu.setAttribute(
    "style",
    `width:${(width - height) / 2 - 10}px; padding: 0 10px`
  );
  const checkboxes = document.getElementsByClassName("checkbox");
  const commence = document.getElementsByClassName("commence")[0];
  const startBox = checkboxes[0];
  const stopBox = checkboxes[1];
  const wallBox = checkboxes[2];

  let interval;
  startBox.addEventListener("mouseenter", () => {
    if (selection !== "start") {
      interval = setInterval(() => {
        startBox.style.background =
          startBox.style.background === "black" ? "transparent" : "black";
        startBox.style.color =
          startBox.style.color === "white" ? "black" : "white";
      }, 750);
    }
  });
  stopBox.addEventListener("mouseenter", () => {
    if (selection !== "stop") {
      interval = setInterval(() => {
        stopBox.style.background =
          stopBox.style.background === "darkgreen"
            ? "transparent"
            : "darkgreen";
        stopBox.style.color =
          stopBox.style.color === "white" ? "black" : "white";
      }, 750);
    }
  });
  wallBox.addEventListener("mouseenter", () => {
    if (selection !== "wall") {
      interval = setInterval(() => {
        wallBox.style.background =
          wallBox.style.background === "darkorange"
            ? "transparent"
            : "darkorange";
        wallBox.style.color =
          wallBox.style.color === "white" ? "black" : "white";
      }, 750);
    }
  });
  startBox.addEventListener("mouseleave", () => {
    if (selection === "") {
      startBox.style.color = "black";
      startBox.style.background = "transparent";
    }
    clearInterval(interval);
  });
  stopBox.addEventListener("mouseleave", () => {
    if (selection === "") {
      stopBox.style.color = "black";
      stopBox.style.background = "transparent";
    }
    clearInterval(interval);
  });
  wallBox.addEventListener("mouseleave", () => {
    if (selection === "") {
      wallBox.style.color = "black";
      wallBox.style.background = "transparent";
    }
    clearInterval(interval);
  });
  startBox.addEventListener("click", () => {
    clearInterval(interval);
    startBox.style.background = "black";
    startBox.style.color = "white";
    stopBox.style.color = "black";
    stopBox.style.background = "transparent";
    selection = "start";
  });
  stopBox.addEventListener("click", () => {
    clearInterval(interval);
    stopBox.style.background = "darkgreen";
    stopBox.style.color = "white";
    startBox.style.color = "black";
    startBox.style.background = "transparent";
    selection = "stop";
  });

  wallBox.addEventListener("click", () => {
    clearInterval(interval);
    wallBox.style.background = "darkorange";
    wallBox.style.color = "white";
    selection = "wall";
  });

  //   console.log("distance", distance);
  //   console.log("previous", previous);

  const paintPath = (distance, size, pathHash, stop) => {
    let currentDistance = Infinity;
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

  commence.addEventListener("click", () => {
    if (source && stop) {
      let { distance, previous, size } = dijkstras(graph, source);
      paintPath(distance, size, previous, stop);
    }
  });

  const dimInput = document.getElementsByClassName("dimension_input")[0];
  const dimSuffix = document.getElementsByClassName("dimension_suffix")[0];
  const dimToolTip = document.getElementsByClassName("dimension_tooltip")[0];

  dimInput.addEventListener("mouseenter", () => {
    dimToolTip.classList.remove("hide");
  });
  dimInput.addEventListener("mouseleave", () => {
    dimToolTip.classList.add("hide");
  });
  dimInput.addEventListener("input", event => {
    square = Number.parseInt(event.currentTarget.value);
    dimSuffix.innerHTML = "x" + event.currentTarget.value;
    buildGrid();
  });
});
