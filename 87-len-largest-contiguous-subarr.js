// Title: Length of the largest subarray with contiguous elements | Set 1

// Subject: 
// Given an array of distinct integers, find length of the longest subarray which 
// contains numbers that can be arranged in a continuous sequence. 

// Example:
// Input:  arr[] = {10, 12, 11};
// Output: Length of the longest contiguous subarray is 3

// Input:  arr[] = {14, 12, 11, 20};
// Output: Length of the longest contiguous subarray is 2

// Input:  arr[] = {1, 56, 58, 57, 90, 92, 94, 93, 91, 45};
// Output: Length of the longest contiguous subarray is 5

// Reference 1 => https://www.geeksforgeeks.org/length-largest-subarray-contiguous-elements-set-1/
// keep track of minimum and maximum element in each subarray
// Time complexity 0(n2)

function findMinimum(x, y) { 
    return (x < y) ? x : y; 
}
function findMaximum(x, y) { 
    return (x > y) ? x : y; 
}
  

function longestContinuousSubArr(arr = []) {
    let arrLen = arr.length;
    let maxLen = 1;
    for(let i = 0; i < arrLen - 1; i++){
        let min = arr[i];
        let max = arr[i];
        // i == start, j === end
        for(let j = i + 1; j < arrLen; j++){
            //update min + max values in subarrays
            min = findMinimum(min, arr[j]);
            max = findMaximum(max, arr[j]);

            // find subarray w/ contiguous elements
            // ie., if difference betweem max & min == difference betweem
            // index of last element - index of first element
            if ((max - min) == j - i){
                maxLen = Math.max(maxLen, max - min + 1);
            }
        }
    return `The length of the largest subarray with contiguous elements is ${maxLen} .`;
 }
}


longestContinuousSubArr([10, 12, 11]);