// Title: Sieve of Eratosthenes

// Subject: 
// Given a number n, print all primes smaller than or equal to n. 
// It is also given that n is a small number. 

// Example: 
// Input : n =10
// Output : 2 3 5 7 

// Input : n = 20 
// Output: 2 3 5 7 11 13 17 19
// The sieve of Eratosthenes is one of the most efficient ways to find all 
// primes smaller than n when n is smaller than 10 million or 
// so (https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes.



// Reference => https://www.tutorialspoint.com/using-sieve-of-eratosthenes-to-find-primes-javascript
function eratosthenes(n){
    // create arr as large as num
    const nums = new Array(n);
    nums.fill(true);// all possible primes = true @first
    nums[0] = nums[1] = false; // ignore 0 & 1
    // iterate from 2 to sqrt of n
    // filter out !prime nums, return pnly prime nums
    for (let i = 2; i <= Math.sqrt(n); i++) {
       for (let j = 2; i * j <= n; j++){
           nums[i * j] = false;
       }
    }
    //aggregate nums & add to new arr
    let out = nums.reduce((primeNums, boolPrimeTrue, index) => {
       if(boolPrimeTrue){
           return primeNums.concat(index);
       }else{
           return primeNums;
       };
    },[]);

    return `Here are the prime nums that are smaller than or equal to ${n}: ${out}`;
 }
 
eratosthenes(10);
eratosthenes(20);