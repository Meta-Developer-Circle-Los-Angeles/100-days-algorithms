// Subject:  
// An element in a sorted array can be found in O(log n) time via binary search. 
// But suppose we rotate an ascending order sorted array at some pivot unknown to 
// you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2. Devise a way 
// to find an element in the rotated array in O(log n) time.

// Example:
// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
//          key = 3
// Output : Found at index 8

// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
//          key = 30
// Output : Not found

// Input : arr[] = {30, 40, 50, 10, 20}
//         key = 10   
// Output : Found at index 3


// reference 2 => https://medium.com/swlh/how-to-find-an-element-in-a-sorted-rotated-array-in-o-log-n-time-327403f9193
function binSearch(arr = [], key){
    let left = 0;
    let right = arr.length - 1;
 
    while(left < right){
      let mid = Math.floor((left + right) / 2);
      if(arr[mid] > arr[right]){
         left = mid + 1;
      } else {
         right = mid;
      }
    }
 
    let pivot = left;
    right = arr.length - 1;
    if(key >= arr[pivot] && key <= arr[right]){
        left = pivot;
    } else {
        right = pivot
    }
 
    while(left <= right){
        let mid = Math.floor((right + left) / 2);
        if(arr[mid] === key){
            return mid;
        } else if (key > arr[mid]){
            left = mid + 1;
        } else {
            right = mid -1
        }
    }
    return -1
 }
 
binSearch([5, 6, 7, 8, 9, 10, 1, 2, 3], 3);
binSearch([5, 6, 7, 8, 9, 10, 1, 2, 3], 30);
binSearch([30, 40, 50, 10, 20], 10);
