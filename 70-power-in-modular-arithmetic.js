// Title: Modular Exponentiation (Power in Modular Arithmetic)

// Subject:
// Given three numbers x, y and p, compute (xy) % p. 

// Example:
// Input:  x = 2, y = 3, p = 5
// Output: 3
// Explanation: 2^3 % 5 = 8 % 5 = 3.

// Input:  x = 2, y = 5, p = 13
// Output: 6
// Explanation: 2^5 % 13 = 32 % 13 = 6.

function modularExponentiation(x,y,p){
    let xy = x ** y;
    let res = xy % p;
    return `${x} to the power of ${y} is ${xy} & ${xy} % ${p} is ${res}`;

} 

modularExponentiation(2,3,5);