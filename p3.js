/* The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 */

function prime(n) {
    var i = 2;
    while (n % i !== 0 && i < n) {
        i++;
    }
    if (i < n) {
        return prime(n / i);
    }
    return n;
}

console.log("Largest prime factor = " + prime(600851475143));
