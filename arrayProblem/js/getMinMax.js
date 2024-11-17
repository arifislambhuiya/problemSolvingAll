const arr = [4, -9, 6, 5, 2, 3];

function getMin(arr) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function getMax(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMin(arr));
console.log(getMax(arr));

function getMinMax(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (i of arr) {
    if (i < min) {
      min = i;
    }
    if (i > max) {
      max = i;
    }
  }

  return [min, max];
}

// console.log(getMinMax(arr));

const arr2 = arr.sort((a, b) => a - b);
// console.log(arr2);
// console.log(`Min Number is : ${arr2[0]} \nMax Number is : ${arr2.length - 1}`);

//
