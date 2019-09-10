document.addEventListener("DOMContentLoaded", _ => {
  const body = document.getElementsByClassName("root")[0];
  const height = window.innerHeight;

  let mouseDown = false;

  const square = 50;

  [...Array(square).keys()].forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "rowDiv";
    rowDiv.style.height = `${height / square}%`;
    [...Array(square).keys()].forEach(col => {
      const colDiv = document.createElement("div");
      const pos = [col, row];
      colDiv.setAttribute("data-pos", pos);
      colDiv.className = "node";
      colDiv.style.width = `${height / square}%`;

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
});
