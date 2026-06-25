function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

const arr = [1, [2, [3, 4]], 5];

console.log(flattenArray(arr));
// [1, 2, 3, 4, 5]
// simple
const arr = [1, [2, [3, 4]], 5];

const result = arr.flat(Infinity);

console.log(result);
// [1, 2, 3, 4, 5]