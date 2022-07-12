// Title: Modular multiplicative inverse

// Subject:
// Given two integers ‘a’ and ‘m‘, find modular multiplicative inverse 
// of ‘a’ under modulo ‘m’.
// The modular multiplicative inverse is an integer ‘x’ such that. 

// a x ≅ 1 (mod m)
// The value of x should be in { 1, 2, … m-1}, i.e., in the range of integer 
// modulo m. ( Note that x cannot be 0 as a*0 mod m will never be 1 )
// The multiplicative inverse of “a modulo m” exists if and only if a and 
// m are relatively prime (i.e., if gcd(a, m) = 1).

// Example:
// Input:  a = 3, m = 11
// Output: 4
// Since (4*3) mod 11 = 1, 4 is modulo inverse of 3(under 11).
// One might think, 15 also as a valid output as "(15*3) mod 11" 
// is also 1, but 15 is not in ring {1, 2, ... 10}, so not 
// valid.

// Input:  a = 10, m = 17
// Output: 12
// Since (10*12) mod 17 = 1, 12 is modulo inverse of 10(under 17).

// reference #1 => https://www.youtube.com/watch?v=YwaQ4m1eHQo
// 3:28
// ex: 
// 3 * 2 = 1 mod 5 => multiplicative inverse => 2
// 2 * 6 = 1 mod 11 => multiplicative inverse => 6 ie., 12-1 = 11
// 5 x ? = 1 mod 10 => will !work because a & m are not both prime nums =>
// cannot have a multiplicative inverse in this situation


function modularMultiplicativeInverse(a,mod){

    for(let x = 1;  x < mod; x++){
        if((a * x) % mod == 1){
            return x;
        }
    }

}

modularMultiplicativeInverse(3,11); // 4

modularMultiplicativeInverse(10,17); // 12