// Subject:
// Consider an array arr of distinct numbers sorted in increasing order. 
// Given that this array has been rotated (clockwise) k number of times. 
// Given such an array, find the value of k.


// Example:
// Input: arr[] = {15, 18, 2, 3, 6, 12}
// Output: 2
// Explanation: Initial array must be {2, 3, 6, 12, 15, 18}. We get the
// given array after rotating the initial array twice.

// Input: arr[] = {7, 9, 11, 12, 5}
// Output: 4

// Input: arr[] = {7, 9, 11, 12, 15};
// Output: 0

// reference => https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array/

// 0(n) linear time complexity
function numRotationsLinear(arr = [], arrLen){
   arrLen = arr.length;
   let min = arr[0];
   let min_index = 0;
   for(let i = 0; i < arrLen; i++){
       if(min > arr[i]){
        min = arr[i];
        min_index = i;
       }
   }
   return min_index;
}

numRotationsLinear([15, 18, 2, 3, 6, 12]);
numRotationsLinear([7, 9, 11, 12, 5]);
numRotationsLinear([7, 9, 11, 12, 15]);
// let n = arr.length;


// EX 2:
// 0(log n) binary method => time complexity

function numRotationsLogn(arr = [], left, right){
    
    if(right < left){
        return 0;
    }
    if(right === 0){
        return left;
    }

    let mid = Math.floor((left + right) / 2);
    if(mid < right && arr[mid + 1] < arr[mid]){
        return mid + 1;
    }

    if (mid > left && arr[mid] < arr[mid - 1]){
        return mid;
    }
    
 
    // Decide whether we need to go to left half or
    // right half
    if (arr[right] > arr[mid]){
        return numRotationsLogn(arr, left, mid-1);
    } else { 
        return numRotationsLogn(arr, mid+1, right);
    }
 
}
let arr = [15, 18, 2, 3, 6, 12]
let arrLen = arr.length - 1;
numRotationsLogn(arr , 0, arrLen);


// EX 3:

// 0(log n) binary method => time complexity

function numRotationsLogn2(arr = [], arrLen)
{     
      let left = 0; 
      let right = arrLen - 1;

      while(left <= right){
          let mid = left + Math.floor((right - left) / 2) ;
          let prev = (mid - 1 + arrLen) % arrLen;
          let next = (mid + 1) % arrLen;
          if(arr[mid] <= arr[prev] && arr[mid] <= arr[next])
            return mid;
          else if (arr[mid] <= arr[right])
            right = mid - 1 ;
          else if (arr[mid] >= arr[left])
            left=mid + 1;
      }
      return 0;
}
 
// Driver code
 
let arr = [15, 18, 2, 3, 6, 12];
let arrLen = arr.length;
numRotationsLogn2(arr, arrLen);