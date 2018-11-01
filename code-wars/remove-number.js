/* https://www.codewars.com/kata/5547cc7dcad755e480000004/train/javascript */

// INSTRUCTIONS
// A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

// (See examples of returns for each language in "RUN SAMPLE TESTS")

// Examples:
// removNb(26) should return [(15, 21), (21, 15)]
// or
// removNb(26) should return { {15, 21}, {21, 15} }
// or
// removeNb(26) should return [[15, 21], [21, 15]]
// or
// removNb(26) should return [ {15, 21}, {21, 15} ]
// or
// removNb(26) should return "15 21, 21 15"

/**
 * From the array of length n, I want to remove two numbers in each loop and sum the rest to check if their sum is equal to the product of those 2 numbers. If it is, we push these numbers to an array.
 * 
 */
// SOLUTION - VERSION 1
// function removeNb(n) {
// 	let match = []
// 	let arr = []
// 	for (let i = 1; i <= n; i++) {
// 		arr.push(i)
// 	}

// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (i !== j) {
// 				let product = arr[i] * arr[j]
// 				let sumRest = arr.filter((el) => (el !== arr[i]) && (el !== arr[j])).reduce((a, b) => a + b)
// 				if ( product === sumRest) {
// 					match.push([arr[i], arr[j]])
// 				}
// 			}
// 		}
// 	}
// 	console.log(match)
// 	return match
// }
// removeNb(110)


// SOLUTION - VERSION 2
function removeNb(n) {
	let match = []

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			if (i !== j) {
				let product = i * j
				let sumRest = 0
				for (let k = 1; k <= n; k++) {
					if (k !== i && k !== j) {
						sumRest += k
					}
				}
				if (product === sumRest) {
					match.push([i, j])
				}
			}
		}
	}
	console.log(match)
	return match
}