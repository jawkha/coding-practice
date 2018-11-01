// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
    console.log(arr)
    let sumIndex = []
    let first, last;

    arr.filter((el, index) => {
        first = arr.slice(0, index)
        last = arr.slice(index + 1)

        first = first.length ? first.reduce((a, b) => a + b) : 0;
        last = last.length ? last.reduce((a, b) => a + b) : null

        if (first === last) {
            sumIndex.push(index)
        }
    })
    console.log(sumIndex)

    if (sumIndex.length) {
        return sumIndex[0]
    } else {
        return -1
    }
}
findEvenIndex([2, 3, 4, 5, 4, 3, 2])
findEvenIndex([1, 100, 50, -51, 1, 1])
findEvenIndex([20, 10, 30, 10, 10, 15, 35])
findEvenIndex([20, 10, -80, 10, 10, 15, 35])