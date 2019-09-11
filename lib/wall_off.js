export default pos => {
  const posString = pos.join(",");
  const node = document.getElementById(posString);
  node.style.background = "darkorange";
  for (let key in graph) {
    delete graph[key][posString];
  }
};
