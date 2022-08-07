// Title: Find Missing And Repeating

// Subject:
// Given an unsorted array Arr of size N of positive integers. One number 
// 'A' from set {1, 2, …N} is missing and one number 'B' occurs twice in 
// array. Find these two numbers.

// Example:
// Input:
// N = 2
// Arr[] = {2, 2}
// Output: 2 1
// Explanation: Repeating number is 2 and 
// smallest positive missing number is 1.

// reference => https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/
// Time Complexity: O(n) 
function findMissingrepeatedNums(arr = []){
    let arrLen = arr.length;
    let smPositiveMissNum = 0;
    let repeatedNum = 0;
    let sumOfAllNums= Math.floor((arrLen * (arrLen + 1)) / 2);
    let sumSquareofAllNums = Math.floor((arrLen * (arrLen + 1) * (2 * arrLen + 1))/6);
 
    for(let i = 0; i < arr.length; i++){
        sumOfAllNums-= arr[i]
        sumSquareofAllNums -= arr[i] * arr[i]
    }
     
    smPositiveMissNum = Math.floor(Math.floor(sumOfAllNums+ sumSquareofAllNums / sumOfAllNums) / 2);
    repeatedNum = smPositiveMissNum - sumOfAllNums;
 
    let result = [];
    result.push(repeatedNum);
    result.push(smPositiveMissNum);
 
    return result;
 
}
 
let out = findMissingrepeatedNums([ 2, 2 ]);
 
for(let i of out){
    console.log(i);
}
   

let out2 = findMissingRepeatedNums([4, 3, 6, 2, 1, 6, 7 ]);
for(let i of out2){
    console.log(i);
}




