// Title: Primality Test | Set 2 (Fermat Method)

// Subject: 
// Given a number n, check if it is prime or not. We have introduced and 
// discussed the School method for primality testing in Set 1.
// Primality Test | Set 1 (Introduction and School Method)
// In this post, Fermat’s method is discussed. This method is a 
// probabilistic method and is based on Fermat’s Little Theorem.

// Example:
// Fermat's Little Theorem:
// If n is a prime number, then for every a, 1 < a < n-1,

// an-1 ≡ 1 (mod n)
//  OR 
// an-1 % n = 1 
 
// Example: Since 5 is prime, 24 ≡ 1 (mod 5) [or 24%5 = 1],
//          34 ≡ 1 (mod 5) and 44 ≡ 1 (mod 5) 

//          Since 7 is prime, 26 ≡ 1 (mod 7),
//          36 ≡ 1 (mod 7), 46 ≡ 1 (mod 7) 
//          56 ≡ 1 (mod 7) and 66 ≡ 1 (mod 7) 

// https://www.youtube.com/watch?v=qdylJqXCDGs

// Step 1:
// n - 1 = 2 ** k * m => note: k & m are whole nums
// n = 53, hence, 53-1 = 2 ** k * m
// 52 = 2 ** k * m
// 52 / 2 ** 1 = 26
// 52 / 2 ** 2 = 13 // last available whole num, so..
// k = 2 
// m = 13
// 52 / 2 ** 3 = 6.5 // not a whole num

// 52 = 2**2 * 13..ie., 52 = 2**k * m

// Step 2:
// pick an a
// 1 < a < n - 1 => ie., between 2 & 51
// pick a num ..... a = 2

// Step 3:
// b0 = a**m modn
// b0 = 2**13 % 53 = 30mod53
// if bo = either +1 or -1, n = prime num(probably)
// b0 = 30, so !prime

// calculate new b0:
// b1 = b0 ** 2 modn = -1 modn , ie.,....b1 = 30 ** 2 mod53 = -1 mod53
// if bo = either +1 (composite....!prime) or -1(is prime => probably)
// b1 = -1 , so (probably) prime

// Reference #2 => https://www.youtube.com/watch?v=AaNUzEHiDpI
// Reminder: 1 is neither a prime nor a composite
// Time complexity => 0(n)
// Simple solution:
// see `day72primeTest.png`

// EX 1:
function primalityTest(n){

  if(n <= 1){
    return false;
  }

  for(let i = 2; i < n; i++){
     if(n % i == 0){
      return false;
     } else {
      return true;
     }
  }
}

primalityTest(53); // true
primalityTest(10); // false
primalityTest(3); // true

// reference 3 => https://www.baeldung.com/cs/fermat-primality-test:
// EX 2:

// result => is either composite or prime
// xBase => exponentiation base
// exp => exponent
// mod => modular operand
function findPower(xBase,exp,mod){
  let res = 1;
  while (exp > 0) {
    if ((exp % 2) == 1){
      res = (res * xBase) % mod;
      exp--;
    } else {
      xBase = (xBase * xBase) % mod;
      exp = exp / 2;
    }
  }
  return res;
}
// num => num to be tested
// numTimesTest => num times the test is to be repeated
function checkIfNumIsPrime(num,numTimesTest){
  if(num % 2 == 0 && num != 2){
      return false;
  }
  if(num <= 3){
      return true;
  }
  while(numTimesTest > 0){
      let a = Math.floor(Math.random() * (num - 3) + 2);
      if (findPower(a, num - 1, num) != 1) {
         return false;
       }

      numTimesTest--;
  }
  return true;
}

checkIfNumIsPrime(53,2); // true
checkIfNumIsPrime(10,2); //false
