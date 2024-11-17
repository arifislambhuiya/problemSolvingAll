const arr = [40, 70, 33, 54, 30, 65];

function leaderOfArr(arr, n) {
  for (let i = 0; i < n; i++) {
    let j;

    for (j = i + 1; j < n; j++) {
      if (arr[i] <= arr[j]) break;
    }

    if (j == n) {
      console.log(arr[i] + " ");
    }
  }
}

leaderOfArr(arr, arr.length);
