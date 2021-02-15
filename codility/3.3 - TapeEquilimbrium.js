// Task Score 100%
// Correctness 100%
// Performance 100%

// 😁😁😁😁
// new solution O(n + m + p) = O(n) BETTER!!!
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let minimalDiff = 0
    let sumsA = []
    let sumA = 0
    let sumsB = []
    let sumB = 0
    for (let i = 0; i < A.length - 1; i++) {
        sumA += A[i];
        sumsA.push(sumA)
    }
    for (let i = A.length - 1; i > 0; i--) {
        // it is possible to solve this with only 2 for structures, putting this one inside the first for up in here
        sumB += A[i];
        sumsB.push(sumB)
    }
    for (let i = 0; i < sumsA.length; i++) {
        if (i === 0) {
            minimalDiff = Math.abs(sumsA[i] - sumsB[sumsA.length - 1 - i])
        } else if (minimalDiff > Math.abs(sumsA[i] - sumsB[sumsA.length - 1 - i])) {
            minimalDiff = Math.abs(sumsA[i] - sumsB[sumsA.length - 1 - i])
        }
    }
    // console.log(sumsA);
    // console.log(sumsB);
    return minimalDiff;
}
