function timeConversion(s) {
    let hour = parseInt(s.substring(0, 2), 10);
    let minSec = s.substring(2, 8);
    let amPm = s.substring(8);

    // if AM, simply remove the AM from the string
        if (amPm === 'AM') {
            if (hour < 12) {
            return s.substring(0, 8);
            } else {
                return (`00${minSec}`);
            }
        } else if (amPm === 'PM') {
    // if PM and less than 12, add 12 to hour and remove PM from the string
            if (hour < 12) {
                return (`${hour + 12}${minSec}`);
    // if PM and hour is equal to 12, replace hour with '00' and remove PM from the string
            } else {
                return s.substring(0, 8);
            }
        }
}

timeConversion('07:05:45PM');
timeConversion('12:05:45PM');