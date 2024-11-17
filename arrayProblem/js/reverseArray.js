const arr = [1, 3, 2, 4, 5, 6, 7];

// TODO:using method
const rewArr = arr.slice().reverse();
// console.log(rewArr);

//TODO: useing for loop

function reverseforLoop(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let = temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

reverseforLoop(arr);
console.log(arr);

// TODO:using loop
function reverseArrWithLoop(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// reverseArrWithLoop(arr, 0, arr.length - 1);
// console.log(arr);

//TODO:using stack data structure
function reverseArrUsingStck(arr) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }
}

// reverseArrUsingStck(arr);
// console.log(arr);
