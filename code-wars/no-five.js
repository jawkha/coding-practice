function dontGiveMeFive(start, end) {
    let a = 0;
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) {
            a++
        }
    }
    console.log(a)
    return a;
}

dontGiveMeFive(1, 9)
dontGiveMeFive(44, 60)