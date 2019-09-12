import dijkstras from "./dijkstras";
import buildGrid from "./build_grid";

document.addEventListener("DOMContentLoaded", () => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const rightMenu = document.getElementById("right_menu");
  rightMenu.setAttribute(
    "style",
    `width:${(width - height) / 2 - 20}px; padding: 0 10px`
  );
  const checkboxes = document.querySelectorAll(".checkbox");
  const commence = document.getElementsByClassName("commence")[0];
  const startBox = checkboxes[0];
  const stopBox = checkboxes[1];
  const wallBox = checkboxes[2];
  const reset = checkboxes[3];

  let interval;

  startBox.addEventListener("mouseenter", () => {
    startBox.firstElementChild.classList.remove("hide");
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
    stopBox.firstElementChild.classList.remove("hide");
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
    wallBox.firstElementChild.classList.remove("hide");
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
  reset.addEventListener("mouseenter", () => {
    reset.firstElementChild.classList.remove("hide");
    interval = setInterval(() => {
      reset.style.background =
        reset.style.background === "darkred" ? "transparent" : "darkred";
      reset.style.color = reset.style.color === "white" ? "black" : "white";
    }, 750);
  });
  startBox.addEventListener("mouseleave", () => {
    startBox.firstElementChild.classList.add("hide");
    if (selection !== "start") {
      startBox.style.color = "black";
      startBox.style.background = "transparent";
    }
    clearInterval(interval);
  });
  stopBox.addEventListener("mouseleave", () => {
    stopBox.firstElementChild.classList.add("hide");
    if (selection !== "stop") {
      stopBox.style.color = "black";
      stopBox.style.background = "transparent";
    }
    clearInterval(interval);
  });
  wallBox.addEventListener("mouseleave", () => {
    wallBox.firstElementChild.classList.add("hide");
    if (selection !== "wall") {
      wallBox.style.color = "black";
      wallBox.style.background = "transparent";
    }
    clearInterval(interval);
  });
  reset.addEventListener("mouseleave", () => {
    reset.firstElementChild.classList.add("hide");
    reset.style.color = "black";
    reset.style.background = "transparent";
    clearInterval(interval);
  });
  startBox.addEventListener("click", () => {
    clearInterval(interval);
    startBox.style.background = "black";
    startBox.style.color = "white";
    stopBox.style.color = "black";
    stopBox.style.background = "transparent";
    wallBox.style.color = "black";
    wallBox.style.background = "transparent";
    selection = "start";
  });
  stopBox.addEventListener("click", () => {
    clearInterval(interval);
    stopBox.style.background = "darkgreen";
    stopBox.style.color = "white";
    startBox.style.color = "black";
    startBox.style.background = "transparent";
    wallBox.style.color = "black";
    wallBox.style.background = "transparent";
    selection = "stop";
  });
  wallBox.addEventListener("click", () => {
    clearInterval(interval);
    wallBox.style.background = "darkorange";
    wallBox.style.color = "white";
    stopBox.style.color = "black";
    stopBox.style.background = "transparent";
    startBox.style.color = "black";
    startBox.style.background = "transparent";
    selection = "wall";
  });
  reset.addEventListener("click", () => {
    clearInterval(interval);
    selection = "";
    source = undefined;
    stop = undefined;
    checkboxes.forEach(box => {
      box.style.color = "black";
      box.style.background = "transparent";
    });
    buildGrid();
  });

  commence.addEventListener("click", () => {
    if (source && stop) dijkstras(graph, source);
  });

  const dimSlider = document.getElementsByClassName("slider")[0];
  const dimSuffix = document.getElementsByClassName("dimension_suffix")[0];
  const dimToolTip = document.getElementsByClassName("dimension_tooltip")[0];

  dimSlider.addEventListener("mouseenter", () => {
    dimToolTip.classList.remove("hide");
  });
  dimSlider.addEventListener("mouseleave", () => {
    dimToolTip.classList.add("hide");
  });
  dimSlider.addEventListener("input", event => {
    const value = event.currentTarget.value;
    square = Number.parseInt(value);
    if (square) {
      dimSuffix.innerHTML = value + "x" + value;
      buildGrid();
    }
  });
});
