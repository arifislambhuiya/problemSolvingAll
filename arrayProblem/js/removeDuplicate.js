//TODO: Using javaScrip filter methhod
const fruits = ["mango", "apple", "mango", "orange", "apple", "mango", "mango"];

function removeDuplicates(fruits) {
  return fruits.filter((item, index) => fruits.indexOf(item) === index);
}

console.log(removeDuplicates(fruits));

//TODO: Using set method
function removeDuplicates(fruits) {
  return [...new Set(fruits)];
}
console.log(removeDuplicates(fruits));

//TODO: Using javaScript forEach method
function removeDuplicates(fruits) {
  let unique = [];
  fruits.forEach((e) => {
    if (!unique.includes(e)) {
      unique.push(e);
    }
  });
  return unique;
}

console.log(removeDuplicates(fruits));
