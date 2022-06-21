// Title: Reorder an array according to given indexes

// Subject:
// Given two integer arrays of same size, “arr[]” and “index[]”, reorder elements in “arr[]” according to given index array. It is not allowed to given array arr’s length.

// Example:
// Input:  arr[]   = [10, 11, 12];
//         index[] = [1, 0, 2];
// Output: arr[]   = [11, 10, 12]
//         index[] = [0,  1,  2] 

// Input:  arr[]   = [50, 40, 70, 60, 90]
//         index[] = [3,  0,  4,  1,  2]
// Output: arr[]   = [40, 60, 90, 50, 70]
//         index[] = [0,  1,  2,  3,   4]

// Expected time complexity O(n) and auxiliary space O(1)        


function reArrangeArrIndex(arr=[], index=[]){
    let arrLen = arr.length;
    let temp = [...Array(arrLen)];
    for(let i = 0; i < arr.length; i++){   
        temp[index[i]] = arr[i];
        // console.log(temp);
      
    }

    for(let i = 0; i < arrLen; i++){
        arrLen[i] = temp[i];
        index[i] = i;
        console.log(temp[i]);
        
    }

}

reArrangeArrIndex([10, 11, 12], [1, 0, 2]);
reArrangeArrIndex([50, 40, 70, 60, 90],[3,  0,  4,  1,  2]);