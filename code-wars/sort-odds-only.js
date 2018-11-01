function sortArray(array) {
    // we have to first check whether each element is odd or even.
    // if odd and it's greater than the following element which should also be odd, we switch their positions
    // this should go on until all odd elements are sorted in an ascending order
    let sorted = array.sort((a, b) => {
        if (a % 2 !== 0 || b % 2 !== 0) {
            return a - b
        }
    })
    console.log(sorted)
}

sortArray([5, 3, 2, 8, 1, 4])

// 5 is odd and it's greater than 3, so the two should switch positions, 
// 5 and 2 should not switch positions because 2 is not odd
