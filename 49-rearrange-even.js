// Title:
// Rearrange array such that even positioned are greater than odd

// Subject:
// Given an array A of n elements, sort the array according to the following relations :  

// A[i] >= A[i-1]           
 

// , if i is even.  

// A[i] <= A[i-1]           
 

// , if i is odd. 
// Print the resultant array.

// Example:
// Input : A[] = {1, 2, 2, 1}
// Output :  1 2 1 2
// Explanation : 
// For 1st element, 1  1, i = 2 is even.
// 3rd element, 1  1, i = 4 is even.

// Input : A[] = {1, 3, 2}
// Output : 1 3 2
// Explanation : 
// Here, the array is also sorted as per the conditions. 
// 1  1 and 2 < 3.

function reArrangeEven(arr = []){
    arrLen = arr.length;
    arr.sort();
    let temp = [];
    let even = 0;
    let odd = arrLen - 1;
    for(let i = 0; i < arr.length; i++){
        if([i + 1] % 2 == 0){
            temp[i] = arr[odd--];
          } else{
            temp[i] = arr[even++];
          }
        }
       
    for(let i = 0; i < arr.length; i ++){
        console.log(temp[i]); 
    }
}

reArrangeEven([1, 2, 2, 1]);

reArrangeEven([1, 3, 2]);