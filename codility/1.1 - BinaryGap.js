// Task Score 100%
// Correctness 100%
// Performance Not assessed

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binaryStringN = (N >>> 0).toString(2)
    // console.log(binaryStringN)

    let longestBinaryGapLength = 0
    let currentGapLength = 0

    let gapStarted = false;
    let gapFineshed = false;

    for (let i = 0; i < binaryStringN.length; i++) {
        currentChar = binaryStringN.charAt(i);
        // console.log('currentChar = '+currentChar);

        if (currentChar === '1') {
            if (gapStarted === true) {
                gapFineshed = true;
            }
            gapStarted = true;
            if (gapFineshed) {
                if (currentGapLength > longestBinaryGapLength) {
                    longestBinaryGapLength = currentGapLength
                }
                currentGapLength = 0
            }
        } else {
            if (gapStarted === true) {
                currentGapLength++
            }
        }
    }
    return longestBinaryGapLength
}
