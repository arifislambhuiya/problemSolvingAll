const arr = [2, 3, 4, 5, 6, 7];
const pos = 3;
const x = 39;

function insertAnyPostion(arr, x, pos) {
  for (let i = arr.length - 1; i >= pos; i--) {
    arr[i + 1] = arr[i];
  }

  arr[pos] = x;
}

console.log(arr);
insertAnyPostion(arr, x, pos);
console.log(arr);
