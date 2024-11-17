const arr = [4, 1, 4, 4, 2, 4];

function majorityElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > arr.length / 2) {
      return arr[i];
    }
  }

  return -1;
}

console.log(majorityElements(arr));

//logo color
<style>
  {/* logo color */}
  #2DBCEB #A6E3F7 #C2ECF9 #0B5E79
  {/* font */}
  Aero BC
</style>;
