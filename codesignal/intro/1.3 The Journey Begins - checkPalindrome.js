
function checkPalindrome(inputString) {
    let isPalindrome = true;
    for (let i in inputString) {
        if (inputString[i] !== inputString[inputString.length - 1 - i]) {
            return false;
        }
        if (i > inputString.length / 2) {
            return isPalindrome;
        }
    }
    return isPalindrome;
}
