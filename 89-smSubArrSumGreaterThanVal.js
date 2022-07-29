// Title: Smallest subarray with sum greater than a given value

// Subject:
// Given an array of integers and a number x, find the smallest subarray with 
// sum greater than the given value. 

// Example:
// arr[] = {1, 4, 45, 6, 0, 19}
//    x  =  51
// Output: 3
// Minimum length subarray is {4, 45, 6}

// arr[] = {1, 10, 5, 2, 7}
//    x  = 9
// Output: 1
// Minimum length subarray is {10}

// arr[] = {1, 11, 100, 1, 0, 200, 3, 2, 1, 250}
//     x = 280
// Output: 4
// Minimum length subarray is {100, 1, 0, 200}

// arr[] = {1, 2, 4}
//     x = 8
// Output : Not Possible
// Whole array sum is smaller than 8.


// Reference => https://www.youtube.com/watch?v=NKoHjWl2m8Y
// Simple solution => 0(n2)
function smSubArrSumGreaterThanVal(arr = [], num){
    // arr.sort((a,b) => a-b); 
    let arrLen = arr.length;
    let smallestSubArr = arrLen + 1;
    for(let i = 0; i < arr.length; i++){
        let currentSum = arr[i];
        // if 1 element/value > num....
        if(currentSum > num){
            return 1;
        }
        // add elements at index end to
        for(let end = i+1; end < arr.length; end++){
            currentSum  += arr[end];
            if(currentSum > num && (end - i + 1) < smallestSubArr){
                smallestSubArr = (end - i + 1);
            }
        }
    }
    return smallestSubArr;
}


smSubArrSumGreaterThanVal([1, 4, 45, 6, 0, 19], 51); // 3

// Efficient solution => 0(n)
// worst case => each element will be added once & subtracted once from currentSum value
function smSubArrSumGrtrThanVal2(arr = [], num){
    let arrLen = arr.length;
    let smallestSubArr = arrLen + 1;
    let currentSum = 0;
    let start = 0;
    let end = 0;
    while(end < arrLen){
        // add values while < num
        while(currentSum <= num && end < arrLen){
            currentSum += arr[end++];
        }
        // update length of smallestSubArr if sum > num
        while(currentSum > num && start < arrLen){
            // update smallestSubArr
            if(end - start < smallestSubArr){
                smallestSubArr = end - start;
            }
            // remove values from start
            currentSum -= arr[start++];
        }
    }
       
    return smallestSubArr;

}

function out(arr, num){
   res = smSubArrSumGrtrThanVal2(arr,num);
   return `The smallest subarray with a sum that is greater than ${num} is ${res}`;
}

out([1, 4, 45, 6, 0, 19], 51); // 3