// Title: Minimum swaps required to bring all elements less than or equal to k together

// Subject: Given an array of n positive integers and a number k. Find the minimum number of swaps required to bring all the numbers less than or equal to k together. 

// Example:
// Input:  arr[] = {2, 1, 5, 6, 3}, k = 3
// Output: 1

// Explanation: 
// To bring elements 2, 1, 3 together, swap 
// element '5' with '3' such that final array
// will be-
// arr[] = {2, 1, 3, 6, 5}

// Input:  arr[] = {2, 7, 9, 5, 8, 7, 4}, k = 5
// Output: 2


// Reference => https://www.geeksforgeeks.org/minimum-swaps-required-bring-elements-less-equal-k-together/
function minSwaps(arr = [], k){
    let arrLen = arr.length;
    let lessThanK = 0;
    for(let i = 0; i < arrLen; i++){
        if(arr[i] <= k){
            lessThanK++;
        }
    }
    let greaterThanK = 0;
    for(let i = 0; i < lessThanK; i++){
        if(arr[i] > k){
            greaterThanK++;
        }
    }

    let result = greaterThanK;

    for(let i = 0, j = lessThanK; j < arrLen; i++, j++ ){
       if(arr[i] > k){
           greaterThanK--;
       }
       if(arr[j] > k ){
           greaterThanK++;
       }

       result = Math.min(result, greaterThanK);
    }

     return function(){
       return `The minimum number of swaps required to bring all the numbers less than or equal to k together is ${result}.`;   
     }

}


let resOne = minSwaps([2, 1, 5, 6, 3], 3);
let getNumSwaps = resOne();
getNumSwaps;

let resTwo = minSwaps([2, 7, 9, 5, 8, 7, 4], 5);
let getNumSwaps2 = resTwo();
getNumSwaps2;
