// Title: // Title: Rotate bits of a number

// Subject: 
// Bit Rotation: A rotation (or circular shift) is an operation similar to shift except 
// that the bits that fall off at one end are put back to the other end. 
// In left rotation, the bits that fall off at left end are put back at right end. 
// In right rotation, the bits that fall off at right end are put back at left end.

// Example:
// Let n is stored using 8 bits. Left rotation of n = 11100101 by 3 makes n = 00101111 (Left shifted 
// by 3 and first 3 bits are put back in last ). If n is stored using 16 bits or 32 bits then left 
// rotation of n (000…11100101) becomes 00..0011100101000. 
// Right rotation of n = 11100101 by 3 makes n = 10111100 (Right shifted by 3 and last 3 bits are put 
// back in first ) if n is stored using 8 bits. If n is stored using 16 bits or 32 bits then right 
// rotation of n (000…11100101) by 3 becomes 101000..0011100. 


// Reference #1 => https://www.youtube.com/watch?v=S2yXCBu3NdQ
// Reference #2 => https://www.geeksforgeeks.org/rotate-bits-of-an-integer/

// EX:
// L rotate n = 229 => (11100101)**2 by d = 3
// output => 47 => (00101111)**2
// 1st => store first 3 bits in separate place
// 2nd => bring/shift bits to right => total # of bits - d => hence, 8 - 3 = 5
// right shift n by 5
// Time complexity 0(1) constant
// Space complexity 0(1)constant
let bits = 32;
function leftRotateBits(num, rotateBy){
    // bitwise or
    return (num << rotateBy)|(num >> (bits - rotateBy));
}

function RightRotateBits(num, rotateBy){
    // bitwise or
    return (num >> rotateBy)|(num << (bits - rotateBy));
}


leftRotateBits(16,2); // 64

rightRotateBits(16,2); // 4

