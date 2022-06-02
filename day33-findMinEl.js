// Subject:
// A sorted array is rotated at some unknown point, find the minimum element in it. 
// The following solution assumes that all elements are distinct.

// Example:
// Input: {5, 6, 1, 2, 3, 4}
// Output: 1

// Input: {1, 2, 3, 4}
// Output: 1

// Input: {2, 1}
// Output: 1


// reference => https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/
// O(n) time
function findMinEl(arr=[], left, right){
    let arrLen = arr.length;
    left = 0;
    right = arrLen -1;

    if(right < left){
        return 0;
    }

    if(right === left){
        return arr[left];
    }

    let mid = Math.floor((left + right) / 2);

    if(mid < right && arr[mid + 1] < arr[mid]){
        return arr[mid + 1];
    }

    if(mid > left && arr[mid] < arr[mid - 1]){
        return arr[mid];
    }

    if(arr[right] > arr[mid]){
        return findMinEl(arr, left, mid - 1);
    }
    return findMinEl(arr, mid + 1, right);
 }

 findMinEl([5, 6, 1, 2, 3, 4]);
 findMinEl([1, 2, 3, 4]);//Uncaught InternalError: too much recursion???
 findMinEl([2, 1]);
 
// O(log n) time.

function findMinElLogN(arr=[], left, right){

    while(left < right){
        let mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] == arr[right]){
            right--;
        } else if(arr[mid] > arr[right]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[right];
}

let arr1 = [5, 6, 1, 2, 3, 4];
let arrLen1 = arr1.length - 1;
findMinElLogN(arr1, 0, arrLen1);

let arr2 = [1, 2, 3, 4];
let arrLen2 = arr2.length - 1;
findMinElLogN(arr2, 0, arrLen2);

let arr3 = [2, 1];
let arrLen3 = arr3.length - 1;
findMinElLogN(arr3, 0, arrLen3);