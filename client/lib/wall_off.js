export default pos => {
  const posString = pos.join(",");
  const node = document.getElementById(posString);
  node.style.transitionDuration = "0s";
  node.style.transitionDelay = "0s";
  node.style.background = "darkorange";
  for (let key in graph) {
    delete graph[key][posString];
  }
  delete graph[posString];
};
