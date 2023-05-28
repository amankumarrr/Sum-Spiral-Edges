function sumSpiral(size) {
  let sum = 0;
  const numberOfEdges = 4;

  if (size > 1) {
    let maxValue = size * size;

    let current = 0;
    let gapInBetweenCorners = size - 1;

    let firstEdge = maxValue - 3 * gapInBetweenCorners;

    for (let j = 0; j < numberOfEdges; j++) {
      current = current + (firstEdge === 0 ? gapInBetweenCorners : firstEdge);
      sum += current;
      firstEdge = 0;
    }
  }
  return sum;
}

sumSpiral(3);
