const arr = [2, 4, 5, 8, 6, 6, 7, 8, 8, 9];
const target = 8;

function findOccurrence(arr, target) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result++;
    }
  }
  return result;
}

console.log(findOccurrence(arr, target));
