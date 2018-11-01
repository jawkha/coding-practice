function sumDigits(number) {
    let a = Math.abs(Math.floor(number)).toString().split('')
    console.log({ a })
    let b = a.map(e => parseInt(e, 10)).reduce((a, b) => {
        return a + b
    })
    console.log({ b })
}


sumDigits(-980808)
sumDigits(-9805765875578788000008000)