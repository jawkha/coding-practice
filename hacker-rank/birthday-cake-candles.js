function birthdayCakeCandles(n, ar) {
    let tallest = 0;
    let tallestCount = 0;

    tallest = ar.reduce((a, b) => Math.max(a, b));

    for (let x = 0; x < n; x++) {
       if (ar[x] === tallest) {
           tallestCount += 1;
       }
    }
    console.log(tallestCount);
    return tallestCount;
}

birthdayCakeCandles(6, [3, 4, 5, 5, 3, 2]);