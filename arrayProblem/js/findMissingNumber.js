const arr = [1, 2, 3, 5];

function missingNumber(arr, n) {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += arr[i];
  }
  let expectedSum = (n * (n + 1)) / 2;

  return expectedSum - sum;
}

console.log(missingNumber(arr, 5));
