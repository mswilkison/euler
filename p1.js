/* Find the sum of all the multiples of 3 or 5 below 1000. */

console.log("This program computes the sum of the multiples of 3 and 5 below 1000.");

var max = 1000;
var sum = 0;

for (var i = 0; i < max; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
}

console.log("Sum = " + sum);
