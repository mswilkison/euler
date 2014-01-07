/* By considering the terms in the Fibonacci sequence whose
 * value do not exceed four million, find the sum of the
 * even-valued terms
 */

var fibTerm = 1;
var prevTerm = 1;
var sum = 0;

while (fibTerm < 4000000) {
    if (fibTerm % 2 == 0) sum += fibTerm;
    var temp = fibTerm;
    fibTerm += prevTerm;
    prevTerm = temp;
}

console.log("Sum = " + sum);
