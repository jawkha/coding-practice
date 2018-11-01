function tickets(peopleInLine) {
    // console.log(peopleInLine)
    // let change = 0;
    // let answer;
    // for (let i = 0; i < peopleInLine.length; i++) {
    //     if (peopleInLine[i] === 25) {
    //         change += 25;
    //         console.log(change)
    //     }
    //     if (peopleInLine[i] > 25) {
    //         change -= peopleInLine[i] - 25;
    //         console.log(change)
    //         if (change < 0) {
    //             answer = 'NO'
    //             console.log(answer)
    //             return answer
    //         }
    //     }
    // }
    // if (change >= 0) {
    //     answer = 'YES'
    //     console.log(change)
    //     return answer
    // }
}

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)