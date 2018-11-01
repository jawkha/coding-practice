function plusMinus(arr) {
    let posit = 0;
    let negat = 0;
    let zeroes = 0;
    let fractions = [];

    arr.map((a) => {
        if (a > 0) {
            posit += 1;
        } else if (a < 0) {
            negat += 1;
        } else {
            zeroes += 1;
        }
    })
    // console.log(`${posit} ${negat} ${zeroes}`);

    fractions = [posit, negat, zeroes];
    fractions = fractions.map(el => el/arr.length);
    console.log(fractions.join(' \n'));
}

plusMinus([-4, 3, -9, 0, 4, 1]);