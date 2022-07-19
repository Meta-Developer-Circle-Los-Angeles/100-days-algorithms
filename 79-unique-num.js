// Title: Find the element that appears once

// Subject:
// Given an array where every element occurs three times, except one element which 
// occurs only once. Find the element that occurs once. The expected time complexity is 
// O(n) and O(1) extra space. 

// Example:
// Input: arr[] = {12, 1, 12, 3, 12, 1, 1, 2, 3, 3} 
// Output: 2 
// In the given array all element appear three times except 2 which appears once.

// Input: arr[] = {10, 20, 10, 30, 10, 30, 30} 
// Output: 20 
// In the given array all element appear three times except 20 which appears once. 

function uniqueNum(arr = []){
    arr.sort((a,b)=>a-b);
    let uniqueNum = false;
    
    for(let i = 0; i <= arr.length; i++){
        let num = arr[i];
        
        if(uniqueNum){
            if(arr[i+1] != arr[i]){
                uniqueNum = false;
            }
        } else {
            if(arr[i+1] === arr[i]){
                uniqueNum = true;
                continue;
            }
            return num;
        }
    }
   return false;
}


uniqueNum([12, 1, 12, 3, 12, 1, 1, 2, 3, 3]);
uniqueNum([10, 20, 10, 30, 10, 30, 30]);