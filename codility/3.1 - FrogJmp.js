// Task Score 100%
// Correctness 100%
// Performance 100%

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    // base case
    let jumps = 0;
    if (X === Y) {
        return 0;
    } else {
        // codigo força bruta, como melhorar? brute-force here comented, hot to improve?
        /*
        while (X < Y){
            X += D
            jumps++
        }
        */
        // melhorando o código:
        // posso dividir a diferença entre X e Y e fazer mod?
        let distance = Y - X;
        // caso base, if the distance is lower than the jump size
        if (distance < D) {
            return 1;
        } else {
            // if not, divide the distance by the size of the jump size and returns the ceil value O(n) here
            // console.log(Math.ceil(2))
            return Math.ceil(distance / D)
        }
    }
    // return jumps;
}
