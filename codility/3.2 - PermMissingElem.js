// Task Score 100%
// Correctness 100%
// Performance 100%

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4
    let sumA = 0
    let sumB = A.length + 1 // if the array was not missing any value, this would be de sum
    for (let i in A) {
        sumA += A[i]
        sumB += (Number(i) + 1)
    }
    return sumB - sumA // the sum if not missing any, minus the current sum
}
