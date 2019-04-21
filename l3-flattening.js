function flatten(array, sum) {
	return array + sum.concat("");
}


let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let result = arrays.reduce(flatten, []);
console.log(result)
// → [1, 2, 3, 4, 5, 6] 