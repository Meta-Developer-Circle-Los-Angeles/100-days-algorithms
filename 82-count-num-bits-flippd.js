// Title: Count number of bits to be flipped to convert A to B

// Subject:
// Given two numbers ‘a’ and b’. Write a program to count number of 
// bits needed to be flipped to convert ‘a’ to ‘b’. 

// Example:
// Input : a = 10, b = 20
// Output : 4
// Binary representation of a is 00001010
// Binary representation of b is 00010100
// We need to flip highlighted four bits in a
// to make it b.

// Input : a = 7, b = 10
// Output : 3
// Binary representation of a is 00000111
// Binary representation of b is 00001010
// We need to flip highlighted three bits in a
// to make it b.

// Reference => https://www.geeksforgeeks.org/count-number-of-bits-to-be-flipped-to-convert-a-to-b/

// 1. Calculate XOR of A and B.      
// a_xor_b = A ^ B
// 2. Count the set bits in the above 
// calculated XOR result.
// countSetBits(a_xor_b) => set bits occur where A != B

function countSetBits(bits) {
    let setBits = 0;
    while(bits != 0){
        setBits++;
        bits &= (bits - 1);
    }
    return setBits;
    
}
function numBitsFlipped(num1,num2) {
    return countSetBits(num1 ^ num2);
}

numBitsFlipped(10,20); // 4
numBitsFlipped(7,10); // 3