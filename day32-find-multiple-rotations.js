// Subject: Given an array of size n and multiple values around which we 
// need to left rotate the array. How to quickly find multiple left rotations?

// Example:
// Input : arr[] = {1, 3, 5, 7, 9}
//         k1 = 1
//         k2 = 3
//         k3 = 4
//         k4 = 6
// Output : 3 5 7 9 1
//          7 9 1 3 5
//          9 1 3 5 7
//          3 5 7 9 1

// Input : arr[] = {1, 3, 5, 7, 9}
//         k1 = 14 
// Output : 9 1 3 5 7

// Reference => https://www.geeksforgeeks.org/quickly-find-multiple-left-rotations-of-an-array/


// EX 1:
function findMultipleLeftRotations(arr = [], numRotations){
    let arrLen = arr.length;

    return function(){
        for(i = numRotations; i < numRotations + arrLen; i++){
            console.log(arr[i % arrLen] + " ");
    
        }
    
    }
}

let rotateOne = findMultipleLeftRotations([1, 3, 5, 7, 9], 1);
let result = rotateOne();

let rotateThree = findMultipleLeftRotations([1, 3, 5, 7, 9], 3);
let result2 = rotateThree();

let rotateFour = findMultipleLeftRotations([1, 3, 5, 7, 9], 4);
let result3 = rotateFour();

let rotateSix = findMultipleLeftRotations([1, 3, 5, 7, 9], 4);
let result4 = rotateSix();