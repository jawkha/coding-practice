// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.
//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(n) {
    let symb = '#';
    let space = ' ';
    let ladder = '';

    for (let a = 1; a <= n; a++) {
        ladder += `${space.repeat(n-a)}${symb.repeat(a)}\n`;
    }
    console.log(ladder);
    return ladder;
}

staircase(6);