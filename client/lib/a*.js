const calcGofN = coord => {
  return Math.sqrt(
    Math.pow(coord[0] - source[0], 2) + Math.pow(coord[1] - source[1], 2)
  );
};

const calcHofN = coord => {
  return Math.sqrt(
    Math.pow(source[0] - coorde[0], 2) + Math.pow(source[1] - coord[1], 2)
  );
};

const aStar = (source, terminus) => {
  let distance = {};
  let open = [[source[0], source[1]]];
  let closed = [];
};
