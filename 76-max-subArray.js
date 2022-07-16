// Title: Find the maximum subarray XOR in a given array

// Subject: 
// Given an array of integers. find the maximum XOR subarray value in the given array. 
// Expected time complexity O(n).

// Example:
// Input: arr[] = {1, 2, 3, 4}
// Output: 7
// Explanation: The subarray {3, 4} has maximum XOR value

// Input: arr[] = {8, 1, 2, 12, 7, 6}
// Output: 15
// Explanation: The subarray {1, 2, 12} has maximum XOR value

// Input: arr[] = {4, 6}
// Output: 6
// Explanation: The subarray {6} has maximum XOR value

// Reference 1 => https://www.geeksforgeeks.org/find-the-maximum-subarray-xor-in-a-given-array/
// Time Complexity: O(n2)
function maxSubArrXOR(arr,n){
  n = arr.length;
  let res = Number.MIN_VALUE;  

  // get starting points -f subarrays
  for(let i = 0; i < n; i++){
     let subArr = 0;
     //pick ending points of subarrays
     for(let j = i; j < n; j++){
         // use of ^ => EX: num 23 = same as 2^3 
         subArr = subArr ^ arr[j];
         res = Math.max(res, subArr);
     }

  }
  return `The maximum subarray XOR of ${arr} is: ${res}`;
}


maxSubArrXOR([1, 2, 3, 4]); // 7

maxSubArrXOR([8, 1, 2, 12, 7, 6]); // 15

maxSubArrXOR([1, 2, 3, 4, 6, 7, 8, 9]); // 15

maxSubArrXOR([4, 2, 8, 4, 9, 7, 8, 3]); // 15

maxSubArrXOR([4, 2, 8]); // 14

maxSubArrXOR([4, 2, 8, 9, 10]); // 14

maxSubArrXOR([3, 2, 8]);// 10

// TODO:
// complexity O(n)