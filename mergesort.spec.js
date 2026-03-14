const { mergeSort } = require("./mergesort.js");

describe("mergesort", () => {
  test("empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("single element", () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test("already sorted", () => {
    expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("reverse order", () => {
    expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });

  test("random order", () => {
    expect(mergeSort([5, 1, 4, 2, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  test("with duplicates", () => {
    expect(mergeSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });
});
