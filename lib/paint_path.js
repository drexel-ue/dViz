export default (distance, pathHash, stop) => {
  let currentDistance = Infinity;
  let posToPaint = "";

  while (currentDistance > 2) {
    currentDistance = distance[`${stop[0]},${stop[1]}`];
    posToPaint = pathHash[`${stop[0]},${stop[1]}`];
    stop = pathHash[`${stop[0]},${stop[1]}`].split(",");
    const nodeToPaint = document.getElementById(posToPaint);
    //   setTimeout(() => {
    nodeToPaint.style.background = "pink";
    //   }, square);
  }
};
