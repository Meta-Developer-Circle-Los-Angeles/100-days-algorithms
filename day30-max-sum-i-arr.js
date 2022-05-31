// Subject: Given an array arr[] of n integers, find the maximum that 
// maximizes the sum of the value of i*arr[i] where i varies from 0 to n-1.

// Example:
// Input: arr[] = {8, 3, 1, 2}
// Output: 29
// Explanation: Lets look at all the rotations,
// {8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
// {3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
// {1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
// {2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17

// Input: arr[] = {3, 2, 1}
// Output: 7
// Explanation: Lets look at all the rotations,
// {3, 2, 1} = 3*0 + 2*1 + 1*2 = 4
// {2, 1, 3} = 2*0 + 1*1 + 3*2 = 7
// {1, 3, 2} = 1*0 + 3*1 + 2*2 = 7

// Reference => https://www.geeksforgeeks.org/maximum-sum-iarri-among-rotations-given-array/

function maxSum(arr=[], arrLen){
    arrLen = arr.length;
    let result = Number.MIN_VALUE;
    for(let i = 0; i < arrLen; i++){
        let currentValue = 0;
        for(j = 0; j < arrLen; j++){
            let index = (i + j) % arrLen;
            currentValue += j * arr[index];
        }
        result = Math.max(result, currentValue);
    }
    return result;
}

let arr = [8, 3, 1, 2];
arrLen = arr.length;
maxSum(arr, arrLen);

let arr2 = [3, 2, 1];
arrLen2 = arr2.length;
maxSum(arr2, arrLen2);