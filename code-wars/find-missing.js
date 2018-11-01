// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write the function findMissing(list), list will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7

var findMissing = function (list) {
    let n = Math.min(Math.abs(list[1] - list[0]), Math.abs(list[list.length - 1] - list[list.length - 2]))
    console.log(n)

    let completeArray = []
    for (let i = 0; i <= list.length; i++) {
        if (list[0] < list[list.length - 1]) {
            completeArray.push(list[0] + (n * i))
        } else {
            completeArray.push(list[0] - (n * i))
        }

    }
    console.log(completeArray)
    for (let i = 0; i < completeArray.length; i++) {
        if (list.indexOf(completeArray[i]) === -1) {
            console.log(completeArray[i])
            return completeArray[i]
        }
    }
}

findMissing([1, 4, 10, 13, 16])
findMissing([1, -9, -14])