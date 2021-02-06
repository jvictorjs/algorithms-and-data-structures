/*
D. Weird Subtraction Process
time limit per test1 second
memory limit per test256 megabytes
inputstandard input
outputstandard output
You have two variables a and b. Consider the following sequence of actions performed with these variables:

If a = 0 or b = 0, end the process. Otherwise, go to step 2;
If a ≥ 2·b, then set the value of a to a - 2·b, and repeat step 1. Otherwise, go to step 3;
If b ≥ 2·a, then set the value of b to b - 2·a, and repeat step 1. Otherwise, end the process.
Initially the values of a and b are positive integers, and so the process will be finite.

You have to determine the values of a and b after the process ends.

Input
The only line of the input contains two integers n and m (1 ≤ n, m ≤ 1018). n is the initial value of variable a, and m is the initial value of variable b.

Output
Print two integers — the values of a and b after the end of the process.

Examples
inputCopy
12 5
outputCopy
0 1
inputCopy
31 12
outputCopy
7 12
Note
Explanations to the samples:

a = 12, b = 5  a = 2, b = 5  a = 2, b = 1  a = 0, b = 1;
a = 31, b = 12  a = 7, b = 12.

*/


var numbers = readline().split(" ").map(function (x) { return parseInt(x); });
var a = numbers[0]
var b = numbers[1]
var finished = false;
while (!finished) {
    if (a === 0 || b === 0) {// step 1
        finished = true;
    } else { // step 2
        if (a >= 2 * b) {
            a %= (2 * b) // here is the key to be successful in this problem: at first you will try a = a - 2*b, 
            // but it will take too long to run, you will notice that a %= (2*b) it will reduces the running loops and time execution
        } else { // step 3
            if (b >= 2 * a) {
                b %= (2 * a)
            } else {
                finished = true;
            }
        }
    }
}
print(a + ' ' + b)
