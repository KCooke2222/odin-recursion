function fib(n) {
  if (n <= 0) {
    return [];
  } else if (n == 1) {
    return [0];
  }

  res = [0, 1];
  for (let i = 2; i < n; i++) {
    res.push(res[i - 2] + res[i - 1]);
  }

  return res;
}

function fibRecursive(n) {
  if (n <= 0) {
    return [];
  } else if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  }

  const prev = fibRecursive(n - 1);
  return [...prev, prev[n - 3] + prev[n - 2]];
}

module.exports = { fib, fibRecursive };
