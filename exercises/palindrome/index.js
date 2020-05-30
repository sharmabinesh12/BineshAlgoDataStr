// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// /**
//  * Solution1
//  * @param {input string} str 
//  */
// function palindrome(str) {
// 	return str === str.split('').reduce((reversed, char)=>char+reversed,'')
// }

// /**
//  * Solution2
//  * @param {input string} str 
//  */
// function palindrome(str) {
// 	return str.split('').every((char,i)=>{
// 		return char === str[str.length-1-i]
// 	})
// }

/**
 * Solution3
 * @param {input string} str 
 */
function palindrome(str) {
	for(i=0;i<str;i++){
		if(str[i] !== str[str.length - 1 -i]){
			return false;
		} else {
			
		}
	}
}

module.exports = palindrome;
