const flatten = arr =>
    arr.reduce((acc, cur) =>
      acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
  