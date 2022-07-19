// Title: Sum of bit differences among all pairs

// Subkect:
// Given an integer array of n integers, find sum of bit differences in all pairs that 
// can be formed from array elements. Bit difference of a pair (x, y) is count of 
// different bits at same positions in binary representations of x and y. 

// For example, bit difference for 2 and 7 is 2. Binary representation of 2 is 010 and 7 
// is 111 ( first and last bits differ in two numbers).

// Example:
// Input: arr[] = {1, 2}
// Output: 4
// All pairs in array are (1, 1), (1, 2)
//                        (2, 1), (2, 2)
// Sum of bit differences = 0 + 2 +
//                          2 + 0
//                       = 4

// Input:  arr[] = {1, 3, 5}
// Output: 8
// All pairs in array are (1, 1), (1, 3), (1, 5)
//                        (3, 1), (3, 3) (3, 5),
//                        (5, 1), (5, 3), (5, 5)
// Sum of bit differences =  0 + 1 + 1 +
//                           1 + 0 + 2 +
//                           1 + 2 + 0 
//                        = 8


// Reference #1 => https://www.youtube.com/watch?v=cfizo_K7e0o 
// Reference #2 => https://www.geeksforgeeks.org/sum-of-bit-differences-among-all-pairs/
// EX 1:
// (x,y)
// x = 3 = (0 0 1 1)
// y = 6 = (0 1 1 0)
//            1   1  => 2
// Bit Difference(x,y) = 2

// // EX 2:
// (x,y,z) = (1, 3, 6)
// x = 1 = (0 0 0 1)
// x = 1 = (0 0 0 1)
//          0 0 0 0 

// x = 1 = (0 0 0 1)
// y = 3 = (0 0 1 1)
//          0 0 1 0 => 1

// x = 1 = (0 0 0 1)
// z = 6 = (0 1 1 0)
//          0 1 1 1 => 3

// y = 3 = (0 0 1 1)
// x = 1 = (0 0 0 1)
//          0 0 1 0 => 1

// y = 3 = (0 0 1 1)
// y = 3 = (0 0 1 1)
//          0 0 0 0

// y = 3 = (0 0 1 1)
// z = 6 = (0 1 1 0)
//          0 1 0 1 => 2

// z = 6 = (0 1 1 0)
// x = 1 = (0 0 0 1)
//          0 1 1 1 => 3

// z = 6 = (0 1 1 0)
// y = 3 = (0 0 1 1)
//          0 1 0 1 => 2

// z = 6 = (0 1 1 0)
// z = 6 = (0 1 1 0)
//          0 0 0 0

// possibe pairs => 9
// sum of all bit differences => 12

// Simple Approach
// Time Complexity 0(n2)
// Space Complexity 0(1)

// Efficient Approach
// Time Complexity 0(n)
// Space Complexity 0(1)
// Assume that each integer => fixed num of bits
// Instead of going through each pair, traverse each bit position + for each i(th) bit,
// count num of ints from arr having i(th) bit as set

function sumBitDifferences(arr= []){
   // let arrLen = arr.length;
   let sumBitDifferences = 0;                                

   for(let i = 0; i < arr.length; i++){
      
      for(let j = i; j < arr.length; j++){
            // check for set bit @ i(th) position by taking the bitwise AND 
            // operation of the int w/ 1 left shift
            // if bit => set => tnen increment countNumiTHBitSet
            // compare bits => get diff
            // EX: 100 ^ 101 => diff => 1
            let compareBits = arr[i]^arr[j];
            // store number of ints having i(th) bit => set
            let countNumiTHBitSet = countSetBits(compareBits);        

            sumBitDifferences += 2*countNumiTHBitSet;
         
         
      }
   }
   return sumBitDifferences;
}


function countSetBits(n){
   let countNumiTHBitSet = 0;            

   while (n != 0) {
       n = n & (n - 1); // get rid of least significant bit set
       countNumiTHBitSet++;
   }

   return countNumiTHBitSet;
}

// 001
// 010
sumBitDifferences([1,2]); // 4

sumBitDifferences([1, 3, 5]);