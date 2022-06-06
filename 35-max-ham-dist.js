// Subject:
// Given an array of n elements, create a new array which is a rotation of the given array, and hamming distance between both the arrays is maximum. 
// Hamming distance between two arrays or strings of equal length is the number of positions at which the corresponding characters (elements) are different.
// Note: There can be more than one output for the given input. 

// Example:
// Input :  1 4 1
// Output :  2
// Explanation:  Maximum hamming distance = 2. We get this hamming distance with 4 1 1 or 1 1 4 

// Input :  N = 4
//          2 4 8 0
// Output :  4
// Explanation: Maximum hamming distance = 4 We get this hamming distance with 4 8 0 2. All the places can be occupied by another digit. Other possible solutions are 8 0 2 4 and 0 2 4 8. 

// reference => https://www.geeksforgeeks.org/find-a-rotation-with-maximum-hamming-distance/
function maxHamDist(arr=[], num){
    let hamDist;

    for(let j = 1; j < num; j++){
        let hamDist = 0;
        for(let i = 0; i < num; i++){
            if(arr[i] != arr[i + j] % num){
                hamDist++;
            }
        }

        if(hamDist == num){
            return num;
        }
        return hamDist;
    }
}

let arr = [1, 4, 1];
let arrLen = arr.length;
maxHamDist(arr, arrLen); //2

let arr2 = [2, 4, 6, 8];
let arr2Len = arr2.length;
maxHamDist(arr2, arr2Len); // 4
