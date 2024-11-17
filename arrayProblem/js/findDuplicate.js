const arr = [12, 6, 11, 40, 12, 5, 6, 5, 12, 11];

function findDoplicates(arr) {
  duplicates = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

const result = findDoplicates(arr);
console.log(result);
