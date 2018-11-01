function race(v1, v2, g) {
    // The time required to catch up is directly proportional to the magnitude of headstart g and inversely proportional to the difference in speed (v2 - v1).
    if (v1 >= v2) {
        return null;
    }

    let timeArray = [];
    let time = g / (v2 - v1);
    time = time * 60 * 60;

    // To avoid working with floating numbers, we have converted the unit of time into seconds 
    let seconds = Math.floor(time % 60);
    timeArray.unshift(seconds)

    let minutes = Math.floor((time / 60) % 60)
    timeArray.unshift(minutes)

    let hours = Math.floor(time / (60 * 60))
    timeArray.unshift(hours)

    console.log(timeArray)
    return timeArray;
}

race(720, 850, 70);
// race(80, 91, 37);
