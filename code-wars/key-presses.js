// https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript
function presses(phrase) {
    let arr = phrase.split('').map(el => el.toUpperCase().charCodeAt(0))
    let ones = arr.filter(el => el <= 65 || (el - 65) % 3 === 0)
    console.log((68 - 65) % 3)
}
// 65, 68, 71, 74, 77, 81, 84, 87,
// 66, 69, 72, 75, 78, 82, 85, 88,
// 67, 70, 73, 76, 79, 83, 86, 89,
// 80, 90
// 'ADGJMPTW ' = 1
// 'BEHKNQUX' = 2
// 'CFILORVY' = 3
// 'SZ' = 4

presses("HOW R U")