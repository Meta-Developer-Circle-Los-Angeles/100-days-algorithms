Title: K’th Smallest/Largest Element in Unsorted Array | Set 2 (Expected Linear Time)

// Subject: 
// This is a continuation of the previous exervice.
// Given an array and a number k where k is smaller than the size 
// of the array, we need to find the k’th smallest element in the 
// given array. It is given that all array elements are distinct.

// Example:
// Input: arr[] = {7, 10, 4, 3, 20, 15}
//        k = 3
// Output: 7

// Input: arr[] = {7, 10, 4, 3, 20, 15}
//        k = 4
// Output: 10

function kSmLarge(arr = [], k){
    arr.sort((a,b) => a-b); 

    for(let i = 0; i < arr.length; i++){
        arr[k] = arr[i];
        let res = arr[k-1];
        return `The K’th Smallest Element is ${res}`;

    }

}

kSmLarge([7, 10, 4, 3, 20, 15], 3); // 7
kSmLarge([7, 10, 4, 3, 20, 15], 4); // 10