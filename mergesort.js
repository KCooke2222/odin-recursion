function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.trunc(arr.length / 2);
  // sort l
  const left = mergeSort(arr.slice(0, half));

  // sort r
  const right = mergeSort(arr.slice(half, arr.length));

  // combine
  const sorted = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted.concat(left.slice(i), right.slice(j));
}

module.exports = { mergeSort };
