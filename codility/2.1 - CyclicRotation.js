// Task Score 100%
// Correctness 100%
// Performance Not assessed

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 0) {
        return []
    } else {
        for (let i = 0; i < K; i++) {
            let lastElement = A.pop()
            A = [lastElement].concat(A)
        }
        return A
    }
}
