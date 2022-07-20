// Title: Count total set bits in all numbers from 1 to n

// Subject: 

// Given a positive integer n, count the total number of set bits in 
// binary representation of all numbers from 1 to n. 

// Example:
// Input: n = 3
// Output:  4

// Input: n = 6
// Output: 9

// Input: n = 7
// Output: 12

// Input: n = 8
// Output: 13

// Reference => https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n/

function totalSetBits(n){
  let numSetBits = 0;
  for(let i = 1; i <= n; i++){
    let numsUpToN = [i];
    numSetBits += countSetBits(numsUpToN);
  }

  return numSetBits;
}

function countSetBits(n){           
 
    if (n <= 0) {
        return 0;
    }
 
    return (n % 2 == 0 ? 0 : 1) + countSetBits(Math.floor(n/2));
 }

totalSetBits(3); // 4
totalSetBits(6); // 9
totalSetBits(7); // 12
totalSetBits(8); // 13

