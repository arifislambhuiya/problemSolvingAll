const arr = [3, 4, 5, 65, 33, 27];
const key = 65;

function findElement(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

console.log(findElement(arr, key));
