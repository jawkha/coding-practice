function solve(a0, a1, a2, b0, b1, b2) {
    /*
     * Write your code here.
     */
    let alice = [];
    let bob = [];
    let aliceSum = 0;
    let bobSum = 0;
    let score = [];

    for (let a = 0; a < arguments.length; a++) {
        if (a < arguments.length/2) {
            alice.push(arguments[a]);
        } else {
            bob.push(arguments[a]);
        }  
    }
    console.log(alice);
    console.log(bob);

    for (let x = 0; x < alice.length; x++) {
        if (alice[x] > bob[x]) {
            aliceSum += 1;
        } else if (alice[x] < bob[x]) {
            bobSum += 1;
        } else {

        }
    }
    score = [aliceSum, bobSum];
    console.log(score);
    return score;
}

solve(2, 4, 1, 5, 3, 1);