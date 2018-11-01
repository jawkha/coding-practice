function diagonalDifference(a) {
    let primaryD = [];
    let secondaryD = [];
    let absDiff = 0;

    for (let x = 0; x < a.length; x++) {
        primaryD.push(a[x][x]);
        secondaryD.push(a[x][(a.length -1) - x]);
    }
    console.log(primaryD);
    console.log(secondaryD);
    absDiff = Math.abs(primaryD.reduce((a, b) => (a + b), 0) - secondaryD.reduce((a, b) => (a + b), 0));

    console.log(absDiff);
    return absDiff;
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);