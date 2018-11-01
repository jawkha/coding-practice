/* INPUT
    Line 1 contains 2 space-separated integers denoting the respective values of s (house begins) and t (house ends).
    Line 2 contains 2 space-separated integers denoting the respective values of a (apple tree location) and b (orange tree location).
    Line 3 contains 2 space-separated integers denoting the respective values of m (apples) and n (oranges).
    Line 4 contains m space-separated integers denoting the respective distances that each apple falls from point a.
    Line 5 contains n space-separated integers denoting the respective distances that each orange falls from point b.
 */
// SAMPLE INPUT
// 7 11 Sam's house
// 5 15 trees
// 3 2  fallen fruits
// -2 2 1 apples
// 5 -6 oranges

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let fruitsInHouse = [0, 0];

    apples.map(i => {
        if (a + i >= s && a + i <= t) {
            fruitsInHouse[0] += 1; 
        }
    })

    oranges.map(j => {
        if (b + j <= t && b + j >= s) {
            fruitsInHouse[1] += 1;
        }
    })
    console.log(fruitsInHouse.join(' \n'));
    return fruitsInHouse.join(' \n');
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);