let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
const flatten = function(array, value){
  const result = array.concat("") + value.concat("");
  return result;
}

console.log(arrays.reduce(flatten));