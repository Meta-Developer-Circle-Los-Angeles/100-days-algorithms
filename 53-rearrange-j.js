// Title: Rearrange an array such that ‘arr[j]’ becomes ‘i’ if ‘arr[i]’ is ‘j’ | Set

// Subject: Given an array of size n where all elements are distinct and in range from 0 to n-1, change contents of arr[] so that arr[i] = j is changed to arr[j] = i. 

// Example:
// Example 1:
// Input: arr[]  = {1, 3, 0, 2};
// Output: arr[] = {2, 0, 3, 1};
// Explanation for the above output.
// Since arr[0] is 1, arr[1] is changed to 0
// Since arr[1] is 3, arr[3] is changed to 1
// Since arr[2] is 0, arr[0] is changed to 2
// Since arr[3] is 2, arr[2] is changed to 3

// Example 2:
// Input: arr[]  = {2, 0, 1, 4, 5, 3};
// Output: arr[] = {1, 2, 0, 5, 3, 4};

// Example 3:
// Input: arr[]  = {0, 1, 2, 3};
// Output: arr[] = {0, 1, 2, 3};

// Example 4:
// Input: arr[]  = {3, 2, 1, 0};
// Output: arr[] = {3, 2, 1, 0};


// Reference => https://www.geeksforgeeks.org/rearrange-array-arrj-becomes-arri-j/
// Time complexity: O(n) 
// Auxiliary space :O(n)
function rearrangeJ(arr = []){
    let arrLen = arr.length;
    let temp = new Array(arrLen);
    for(let i = 0; i < arrLen; i++){
       temp[arr[i]] = i;
    }
    for(let i = 0; i < arrLen; i++){
        arr[i] = temp[i];
    }
    for (let i = 0; i < arrLen; i++){
        // console.log(arr[i]);
    }
    return arr;
    
}


rearrangeJ([2, 0, 1, 4, 5, 3]); //1, 2, 0, 5, 3, 4 
//index 2 = 0, index 0 = 1, index 1 = 2, index 4 = 3, index 3 = 5
// ie.,...1,2,0,5,3,4
rearrangeJ([1, 3, 0, 2]); // 2, 0, 3, 1 



function rearrangeJ(arr = []){
    let arrLen = arr.length;
    let temp = new Array(arrLen);
    for(let i = 0; i < arrLen; i++){
       temp[arr[i]] = i;
    }
    for(let i = 0; i < arrLen; i++){
        arr[i] = temp[i];
    }
    for (let i = 0; i < arrLen; i++){
        // console.log(arr[i]);
    }
    return function(index0, index1){
        index0 = arr[0];
        index1 = arr[1];
        return `
               Index 0 => ${index0}, 
               Index 1 => ${index1},
               etc.,
               The final result is:
               ${arr}
               `
    }
    
}

let res = rearrangeJ([2, 0, 1, 4, 5, 3]);
let out = res();
out;
