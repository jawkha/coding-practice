function miniMaxSum(arr) {
    let sums = [];
    let minmax = [];

    for (let a = 0; a < arr.length; a++) {
        sums[a] = (arr.reduce((a, b) => (a + b), 0)) - arr[a]; 
    }

    // console.log(sums);
      minmax.push(sums.reduce((a, b) => Math.min(a, b)));
      minmax.push(sums.reduce((a, b) => Math.max(a, b)));
        console.log(minmax.join(' '));
}

miniMaxSum([1, 2, 3, 4, 5]);