function checkPalindrome(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    
    if (str == joinArray) {
        return true
    } else {
        return false
    };
}