function goodVsEvil(good, evil) {
    let goodWorth = [1, 2, 3, 3, 4, 10];
    let goodArray = good.split(' ').map((el) => parseInt(el, 10));
    for (let i = 0; i < goodArray.length; i++) {
        goodArray[i] *= goodWorth[i]
    }

    let goodCount = goodArray.reduce((a, b) => a + b);
    console.log('good', goodCount);

    let evilWorth = [1, 2, 2, 2, 3, 5, 10]
    let evilArray = evil.split(' ').map((el) => parseInt(el, 10));
    for (let i = 0; i < evilArray.length; i++) {
        evilArray[i] *= evilWorth[i]
    }

    let evilCount = evilArray.reduce((a, b) => a + b);
    console.log('evil', evilCount)

    if (goodCount > evilCount) {
        let goodWins = "Battle Result: Good triumphs over Evil"
        console.log(goodWins)
        return goodWins;
    } else if (goodCount === evilCount) {
        let noVictor = "Battle Result: No victor on this battle field"
        console.log(noVictor);
        return noVictor;
    } else {
        let evilWins = "Battle Result: Evil eradicates all trace of Good"
        console.log(evilWins)
        return evilWins;
    }
}


goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1');
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0');
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')