// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const chunked = [];
	for(let element of array){
		const last = chunked[chunked.length-1];
		if(!last || last.length === size){
			chunked.push([element]);
		} else {
			last.push(element)
		}
	}
	return chunked;
}

module.exports = chunk;


// function chunk(array, size) {
// 	const chunked = [];
// 	let index = 0;
// 	while(index < array.length) {
// 		chunked.push(array.slice(index, size + index));
// 		index += size;
// 	}
// 	return chunked;
// }



// function chunk(array, size) {
// 	let newArray = [];
// 	let arr = [];
// 	var j = 0;
// 	for(i = 0 ;i<=array.length; i++){
// 		if(j === size ){
// 			newArray.push(arr);
// 			arr = [];
// 			j = 0;
// 		} else if(i === array.length && j < size){
// 			newArray.push(arr);
// 		}
// 		if(i<array.length){
// 			j++;
// 			arr.push(array[i]);
// 		}
// 	}
// 	return newArray;
// }