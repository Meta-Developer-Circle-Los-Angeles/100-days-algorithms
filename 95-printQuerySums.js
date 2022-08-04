// Title: MO’s Algorithm (Query Square Root Decomposition) | Set 1

// Subject:
// Let us consider the following problem to understand MO’s Algorithm.
// We are given an array and a set of query ranges, we are required to find the sum of every 
// query range.

// Example:
// Input:  arr[]   = {1, 1, 2, 1, 3, 4, 5, 2, 8};
//         query[] = [0, 4], [1, 3] [2, 4]
// Output: Sum of arr[] elements in range [0, 4] is 8
//         Sum of arr[] elements in range [1, 3] is 4  
//         Sum of arr[] elements in range [2, 4] is 6

// reference => https://www.geeksforgeeks.org/mos-algorithm-query-square-root-decomposition-set-1-introduction/
// Time complexity => O(mn)
class Query{
    constructor(leftIndexValue, rightIndexValue)
    {
        this.leftIndexValue = leftIndexValue;
        this.rightIndexValue = rightIndexValue;
    }
}
         
function printQuerySums(arr = [], query = []){
            
    let queryLen = query.length;
             
    for (let i = 0; i < queryLen; i++){
        let leftIndex = query[i].leftIndexValue;
        let rightIndex = query[i].rightIndexValue;
                
        let sumOfQueryRange = 0;
        for (let j = leftIndex; j <= rightIndex; j++){
            sumOfQueryRange += arr[j];
        }
                  
        return `The sum of ${leftIndex} to ${rightIndex} is ${sumOfQueryRange}`;
    }
                
}
         
let arr = [1, 1, 2, 1, 3, 4, 5, 2, 8];
         
let query = [];
query.push(new Query(0,4));
printQuerySums(arr, query);
        
let query2 = [];
query2.push(new Query(1,3));
printQuerySums(arr, query2);
        
let query3 = [];
query3.push(new Query(2,4));
printQuerySums(arr, query3);