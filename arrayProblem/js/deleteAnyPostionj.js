const arr = [2, 3, 5, 6, 75];
const key = 3;
let n = arr.length;

function findElement(arr, key, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

function deleteAnyPosition(arr, key, n) {
  let pos = findElement(arr, key, n);

  if (pos == -1) {
    console.log("Element Not found");
    return n;
  }

  for (let i = pos; i < n; i++) {
    arr[i + 1] = arr[i];
  }
}

for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}

n = deleteAnyPosition(arr, key, n);

for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
