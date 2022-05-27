// Subject: Given an array, cyclically rotate the array clockwise by one. 

// Example:
// Input:  arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}

// EX 1:
function rotateByOne(arr=[]){
    let arrPop = arr.pop();
    arr.unshift(arrPop);
    return arr;
    
}

rotateByOne([1, 2, 3, 4, 5]);

