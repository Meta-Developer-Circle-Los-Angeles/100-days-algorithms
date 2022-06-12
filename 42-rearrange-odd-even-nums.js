// Subject:
// Given an array of n elements. Our task is to write a program to rearrange 
// the array such that elements at even positions are greater than all elements 
// before it and elements at odd positions are less than all elements before it.

Example:
Input : arr[] = {1, 2, 3, 4, 5, 6, 7}
Output : 4 5 3 6 2 7 1

Input : arr[] = {1, 2, 1, 4, 5, 6, 8, 8} 
Output : 4 5 2 6 1 8 1 8

function rearrangeArrEvenOdd(arr = []){
    let arrLen = arr.length;
    
    for(let i = 0; i < arrLen; i++){
       if(i % 2 == 0 && arr[i] > arr[i + 1]){ //even
           let temp = arr[i];
           arr[i] = arr[i+1];
           arr[i+1] = temp;
       }
       if(i % 2 != 0 && arr[i] < arr[i+1]){ //odd
          let temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp; 
       }
     }
      res = '';
      for (let i = 0; i < arrLen; i++){
         res += arr[i] + " ";
      }
 
      return res;
       
 }
 
 rearrangeArrEvenOdd([1, 2, 3, 4, 5, 6, 7]); // 1 3 2 5 4 7 6  //4 5 3 6 2 7 1 ??????
 rearrangeArrEvenOdd([1, 2, 1, 4, 5, 6, 8, 8]); // 1 2 1 5 4 8 6 8 

 // EX 2:
 // Reference https://www.geeksforgeeks.org/rearrange-array-arri-arrj-even-arri/
function rearrangeArr(arr = [], arrLen){
    let evenIndex = Math.floor(arrLen / 2);
    let oddIndex = arrLen - evenIndex;
    // let temp = [...arrLen];
    let temp = new Array(arrLen);
 
    for(let i = 0; i < arrLen; i++){
        temp[i] = arr[i];
    }
    temp.sort();
 
    let j = oddIndex - 1;
 
    for(let i = 0; i < arrLen; i+=2){
        arr[i] = temp[j]
        j--;
    }
 
    j = oddIndex;
 
    for(let i = 1; i < arrLen; i+=2){
        arr[i] = temp[j];
        j++;
    }
 
    for(let i = 0; i < arrLen; i++){
        console.log(arr[i]);
    }
    return function(arr = [], arrLen){
        arr;
        arrLen = arr.length;
        let res = rearrangeArr(arr, arrLen);
        return res;
    }
 }
 
let arrOne = rearrangeArr();
arrOne([ 1, 2, 3, 4, 5, 6, 7 ]);

let arrTwo = rearrangeArr();
arrTwo([ 1, 2, 1, 4, 5, 6, 8, 8 ]);
