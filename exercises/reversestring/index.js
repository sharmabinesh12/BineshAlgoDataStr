// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * solution 1
*/
// function reverse(str) {
// 	let revStr = [];
// 	for(i = 0;i<str.length; i++){
// 		revStr[str.length -1-i] = str.split('')[i];
// 	}
// 	return revStr.join('');
// }

/** 
 * Solution 2 
*/
// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// /**Solution 3 */
// function reverse(str) {
// 	let reversed = '';
// 	for(let character of str) {
// 		reversed = character+reversed;
// 	}
// 	return reversed;
// }


/**Solution 4 */
function reverse(str) {
	return str.split('').reduce((reversed, char)=>char+reversed,'')
}

module.exports = reverse;
