function aVeryBigSum(n, ar) {
    // ar.reduce((a, b) => (a + b), 0);
    let sum = 0;
    for (let a = 0; a < n; a++) {
        sum += ar[a];
    }
    console.log(sum);
    return sum;
}

aVeryBigSum(5, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);