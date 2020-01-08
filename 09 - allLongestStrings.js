function allLongestStrings(inputArray) {
    var longest = inputArray.reduce((a, b) => a.length > b.length ? a : b, '');

    var newArray = [];

    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == longest.length) {
        newArray.push(inputArray[i]);
      }
    } return newArray;
}
