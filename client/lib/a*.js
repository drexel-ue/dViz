const distanceToStart = coord => {
  return Math.sqrt(
    Math.pow(coord[0] - source[0], 2) + Math.pow(coord[1] - source[1], 2)
  );
};

const distanceToEnd = coord => {
  return Math.sqrt(
    Math.pow(source[0] - coorde[0], 2) + Math.pow(source[1] - coord[1], 2)
  );
};

const remove = (arr, item) => {
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] == item) arr.splice(index, 1);
  }
};

const aStar = (source, terminus) => {
  let distance = {};
  let g = distanceToStart(source);
  let h = distanceToEnd(source);
  let open = [
    {
      coord: source,
      f: g + h,
      g,
      h
    }
  ];
  let closed = [];

  let indexOfLowestF = 0;
  while (open.length > 0) {
    open.forEach((node, index) => {
      if (node.f < open[indexOfLowestF].f) {
        indexOfLowestF = index;
      }
    });
  }

  const current = open[indexOfLowestF];

  if (current.coord == stop) {
    // Found end.
  } else {
    closed.push(current);
    remove(open, current);
  }
};
