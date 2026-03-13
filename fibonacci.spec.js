const { fib, fibRecursive } = require("./fibonacci.js");

describe("fibonacci iterative", () => {
  test("fib 0", () => {
    expect(fib(0)).toEqual([]);
  });

  test("fib 1", () => {
    expect(fib(1)).toEqual([0]);
  });

  test("fib 2", () => {
    expect(fib(2)).toEqual([0, 1]);
  });

  test("fib 5", () => {
    expect(fib(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test("fib 8", () => {
    expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("fib 10", () => {
    expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});

describe("fibonacci recursive", () => {
  test("fibRecursive 0", () => {
    expect(fibRecursive(0)).toEqual([]);
  });

  test("fibRecursive 1", () => {
    expect(fibRecursive(1)).toEqual([0]);
  });

  test("fibRecursive 2", () => {
    expect(fibRecursive(2)).toEqual([0, 1]);
  });

  test("fibRecursive 5", () => {
    expect(fibRecursive(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test("fibRecursive 8", () => {
    expect(fibRecursive(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
