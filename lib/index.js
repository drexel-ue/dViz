document.addEventListener("DOMContentLoaded", event => {
  const body = document.getElementsByClassName("root")[0];
  const height = window.innerHeight;

  let mouseDown = false;

  [...Array(50).keys()].forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "rowDiv";
    [...Array(50).keys()].forEach(col => {
      const colDiv = document.createElement("div");
      const pos = [col, row];
      colDiv.setAttribute("data-pos", pos);
      colDiv.className = "node";
      rowDiv.append(colDiv);
      colDiv.addEventListener("mousedown", event => {
        colDiv.style.backgroundColor = "red";
        mouseDown = true;
      });
      colDiv.addEventListener("mouseover", event => {
        if (mouseDown) {
          colDiv.style.backgroundColor = "red";
        }
      });
      colDiv.addEventListener("mouseup", event => {
        mouseDown = false;
      });
    });
    body.append(rowDiv);
  });
});
