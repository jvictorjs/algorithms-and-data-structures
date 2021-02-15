// Task Score 100%
// Correctness 100%
// Performance 100%

function solution(A) {
    let occurrencesJSON = {};
    for (let i in A) {
        if (A[i] in occurrencesJSON) { // pulo do gato is here: checks if the object already exists in the occurrencesJSON
            occurrencesJSON[A[i]]++;
        } else {
            occurrencesJSON[A[i]] = 1; // if the object don't exist, will be created with the value 1
        }
    }
    for (let i in occurrencesJSON) {
        if (occurrencesJSON[i] % 2 == 1) { // look for the only element that appears ONE and only time
            return parseInt(i);
        }
    }
    return 0;
}
