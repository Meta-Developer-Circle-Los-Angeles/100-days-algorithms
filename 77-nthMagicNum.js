// Title; Find nth Magic Number

// Subject:
// A magic number is defined as a number which can be expressed as a power of 5 or 
// sum of unique powers of 5. First few magic numbers are 5, 25, 30(5 + 25), 125, 
// 130(125 + 5), ….
// Write a function to find the nth Magic number.

// Example: 
// Input: n = 2
// Output: 25

// Input: n = 5
// Output: 130 


// reference => https://www.geeksforgeeks.org/find-nth-magic-number/
function nthMagicNumber(n){
    let power = 1;
    let res = 0;
    if(n < 0){
        return;
    }
    // iterate each bit 
    while(n){

        power = power*5;
        // find last bit using & operation + update answer & power
        if((n & 1) == 1){
            res += power;
        }

        n = n / 2;

    }
   
    return res;

}


nthMagicNumber(2);
nthMagicNumber(5);