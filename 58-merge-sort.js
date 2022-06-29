// Title: Merge Sort

// The Merge Sort algorithm is a sorting algorithm that is considered as 
// an example of the divide and conquer strategy. So, in this algorithm, 
// the array is initially divided into two equal halves and then they are 
// combined in a sorted manner. We can think of it as a recursive algorithm 
// that continuously splits the array in half until it cannot be further 
// divided. This means that if the array becomes empty or has only one element 
// left, the dividing will stop, i.e. it is the base case to stop the recursion. 
// If the array has multiple elements, we split the array into halves and 
// recursively invoke the merge sort on each of the halves. Finally, when both 
// the halves are sorted, the merge operation is applied. Merge operation is 
// the process of taking two smaller sorted arrays and combining them to 
// eventually make a larger one

// Pseudocode:
// •    Declare left variable to 0 and right variable to n-1 
// •    Find mid by medium formula. mid = (left+right)/2
// •    Call merge sort on (left,mid)
// •    Call merge sort on (mid+1,rear)
// •    Continue till left is less than right
// •    Then call merge function to perform merge sort.


let arr = [ 7, 3, 9, 10, 4, 0, 2, 1 ];

function merge(left,right){ //linear runtime O(n) => based on arr length
  let result = [];

  while(left.length || right.length) {

    if(left.length && right.length) {
        if(left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    } else if(left.length) {
        result.push(left.shift());
    } else {
        result.push(right.shift());
    }
   }
  return result;
  
}

// similar to binary search => divides arr into 1/2 on each iteration
// Logarithmic runtime O(log n)
function mergeSort(arr = []){
  if(arr.length <= 1){
    return arr;
  }
  
  // Divide array in 1/2
  const mid = arr.length / 2; // create pivot @ index 4 in this case
  const left = arr.slice(0, mid); // [ 7, 3, 9, 10 ]
  const right = arr.slice(mid, arr.length); // [ 4, 0, 2, 1 ]

  // recursively use merge() => ie., calls itself until an exit condition 
  // is met => based on array.length
  return merge(mergeSort(left), mergeSort(right));
}


// 2 functions are merged => Log-linear O(n log n) => o(n) * 0(log n)
// ..better than quadratic O(n^2), but not as good as 0(n) linear,
// O(log n) logarithmic, or O(1) constant
mergeSort(arr); // [ 0, 1, 2, 3, 4, 7, 9, 10 ]



