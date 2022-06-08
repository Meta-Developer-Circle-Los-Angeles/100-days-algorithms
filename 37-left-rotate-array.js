// Subject:
// Given an array of size n and multiple values around which we need to 
// left rotate the array. How to quickly print multiple left rotations?

// Example:
// Input : 
// arr[] = {1, 3, 5, 7, 9}
// k1 = 1
// k2 = 3
// k3 = 4
// k4 = 6
// Output : 
// 3 5 7 9 1
// 7 9 1 3 5
// 9 1 3 5 7
// 3 5 7 9 1

// Input : 
// arr[] = {1, 3, 5, 7, 9}
// k1 = 14 
// Output : 
// 9 1 3 5 7


// EX 1:
function multLeftRotate(arr=[], numRotate){
   
    let arrSlice = arr.slice(0,numRotate); //1
    let newArr = arr.slice(numRotate, arr.length);
 
    return newArr.concat(arrSlice);
}

multLeftRotate([1, 3, 5, 7, 9], 1);
multLeftRotate([1, 3, 5, 7, 9], 3);
multLeftRotate([1, 3, 5, 7, 9], 4);
multLeftRotate([1, 3, 5, 7, 9], 6);


// EX 2:
// Reference => https://tutorialspoint.dev/data-structure/arrays/quickly-find-multiple-left-rotations-of-an-array
function leftRotate(arr, arrLen, numRotate) { 
 for(i = numRotate; i < numRotate + arrLen; i++) {
     console.log(arr[i % arrLen]);
 }        
} 

arr = [1, 3, 5, 7, 9]; 
arrLen = arr.length; 

numRotate = 1; 
leftRotate(arr, arrLen, numRotate); 

// EX 3:
function leftRotate(arr, numRotate) { 
 let arrLen = arr.length;
 return function(){
     for(i = numRotate; i < numRotate + arrLen; i++) {
         console.log(arr[i % arrLen]);
     }  
     return leftRotate(arr, arrLen, numRotate);
 } 
}

let newArr1 = leftRotate([1, 3, 5, 7, 9], 1);
let closure1 = newArr1();
closure1;

let newArr2 = leftRotate([1, 3, 5, 7, 9], 3);
let closure2 = newArr2();
closure2;

let newArr3 = leftRotate([1, 3, 5, 7, 9], 4);
let closure3 = newArr3();
closure3;

let newArr4 = leftRotate([1, 3, 5, 7, 9], 6);
let closure4 = newArr4();
closure4;