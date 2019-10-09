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

  const startBox = document.getElementById("select_start");
  const stopBox = document.getElementById("select_stop");
  const wallBox = document.getElementById("select_wall");
  const reset = document.getElementById("reset");

  const checkboxes = [startBox, stopBox, wallBox, reset];

  let interval;

  startBox.addEventListener("mouseenter", () => {
    startBox.firstElementChild.classList.remove("hide");
    if (selection !== "start") {
      interval = setInterval(() => {
        startBox.style.background =
          startBox.style.background === "silver" ? "transparent" : "silver";
        startBox.style.color =
          startBox.style.color === "black" ? "silver" : "black";
      }, 750);
    }
  });
  stopBox.addEventListener("mouseenter", () => {
    stopBox.firstElementChild.classList.remove("hide");
    if (selection !== "stop") {
      interval = setInterval(() => {
        stopBox.style.background =
          stopBox.style.background === "rgba(8, 131, 16, 0.65)"
            ? "transparent"
            : "rgba(8, 131, 16, 0.65)";
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
      }, 750);
    }
  });
  reset.addEventListener("mouseenter", () => {
    reset.firstElementChild.classList.remove("hide");
    interval = setInterval(() => {
      reset.style.background =
        reset.style.background === "darkred" ? "transparent" : "darkred";
    }, 750);
  });
  startBox.addEventListener("mouseleave", () => {
    startBox.firstElementChild.classList.add("hide");
    if (selection !== "start") {
      startBox.style.background = "transparent";
    }
    clearInterval(interval);
  });
  stopBox.addEventListener("mouseleave", () => {
    stopBox.firstElementChild.classList.add("hide");
    if (selection !== "stop") {
      stopBox.style.background = "transparent";
    }
    clearInterval(interval);
  });
  wallBox.addEventListener("mouseleave", () => {
    wallBox.firstElementChild.classList.add("hide");
    if (selection !== "wall") {
      wallBox.style.background = "transparent";
    }
    clearInterval(interval);
  });
  reset.addEventListener("mouseleave", () => {
    reset.firstElementChild.classList.add("hide");
    reset.style.background = "transparent";
    clearInterval(interval);
  });
  startBox.addEventListener("click", () => {
    clearInterval(interval);
    startBox.style.background = "silver";
    startBox.style.color = "black";
    stopBox.style.background = "transparent";
    wallBox.style.background = "transparent";
    selection = "start";
  });
  stopBox.addEventListener("click", () => {
    clearInterval(interval);
    stopBox.style.background = "rgba(8, 131, 16, 0.65)";
    startBox.style.background = "transparent";
    startBox.style.color = "silver";
    wallBox.style.background = "transparent";
    selection = "stop";
  });
  wallBox.addEventListener("click", () => {
    clearInterval(interval);
    wallBox.style.background = "darkorange";
    stopBox.style.background = "transparent";
    startBox.style.background = "transparent";
    startBox.style.color = "silver";
    selection = "wall";
  });
  reset.addEventListener("click", () => {
    clearInterval(interval);
    selection = "";
    source = undefined;
    stop = undefined;
    startBox.style.color = "silver";
    checkboxes.forEach(box => {
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
    reset.dispatchEvent(new Event("click"));
  });
});
