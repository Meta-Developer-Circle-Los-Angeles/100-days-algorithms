// Title: Count triplets with sum smaller than a given value

// Subject:
// Given an array of distinct integers and a sum value. Find count of triplets 
// with sum smaller than given sum value. The expected Time Complexity is O(n2).

// Example:
// Input : arr[] = {-2, 0, 1, 3}
//         sum = 2.
// Output : 2
// Explanation :  Below are triplets with sum less than 2
//                (-2, 0, 1) and (-2, 0, 3)

// Input : arr[] = {5, 1, 3, 4, 7}
//         sum = 12.
// Output : 4
// Explanation :  Below are triplets with sum less than 12
//                (1, 3, 4), (1, 3, 5), (1, 3, 7) and
//                (1, 4, 5)%

               
// Reference => https://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/
// Time Complexity => O(n3)
function sum(arr){
   let total = arr.reduce((a,b) => {  
      return a+b;  
    },0);  

    return total;
}


function countTripletsSmallerThanSumN3(arr = [], sum) {
    let res = 0;
    let arrLen = arr.length;

    for(let i = 0; i < arrLen - 2; i++){
        // start @ 2nd element
        for(let j = i+1; j < arrLen - 1; j++){
            // start @ 3rd element
            for(let k = j+1; k < arrLen; k++){
                if(arr[i] + arr[j] + arr[k] < sum){
                    res++;
                }
            }
        }
    }
   return res;
}

let arr = [-2, 0, 1, 3];
let sumOfArr = sum(arr);
countTripletsSmallerThanSumN3(arr, sumOfArr); // 2

// Time Complexity => O(n2)

function sum2(arr){
    let total = arr.reduce((a,b) => {  
       return a+b;  
     },0);  
 
     return total;
 }

 
function countTripletsSmallerThanSumN3(arr = [], sum){
    arr.sort((a,b) => a-b); 
    let res = 0;
    let arrLen = arr.length;
    for(let i = 0; i < arr.length - 2; i++){
        let j = i + 1;
        let k = arrLen - 1;
        while(j < k){
            //look for smaller values by moving k if triplet >= sum
            if(arr[i] + arr[j] + arr[k] >= sum){
                k--;
            } else {
                res += (k - j);
                j++;
            }
        }

    }

    return res;
}


let arr2 = [-2, 0, 1, 3];
let sumOfArr2 = sum2(arr2);
countTripletsSmallerThanSumN3(arr2, sumOfArr2); // 2