function toCamelCase(str) {
    let arr;
    arr = str.includes('-') ? str.split('-') : str.split('_')
    console.log(arr);

    function capitalize(word) {
        let firstLetter = word.charAt(0).toUpperCase()
        console.log(firstLetter)
        return firstLetter;
    }

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            arr[i] = `${capitalize(arr[i])}${arr[i].slice(1)}`
        }
    }

    console.log(arr)

    let capitalizedString = arr.join('')
    console.log(capitalizedString)
    return capitalizedString;
}

toCamelCase("the_stealth_warrior")