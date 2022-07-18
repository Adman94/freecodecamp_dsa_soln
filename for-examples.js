const array = [1, 2, 3, 4, 5];

console.log("In for-in elem is index of array: ");
for (let elem in array) {
  console.log(elem);
}
console.log("In for-of elem is elements in array itself: ");
for (let elem of array) {
  console.log(elem);
}
