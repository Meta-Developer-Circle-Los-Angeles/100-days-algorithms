// Title: Move all zeroes to end of array | Set-2 (Using single traversal)

// Subject: Given an array of n numbers. The problem is to move all the 0’s to the end of the array while maintaining the order of the other elements. Only single traversal of the array is required.

// Example:
// Input : arr[]  = {1, 2, 0, 0, 0, 3, 6}
// Output : 1 2 3 6 0 0 0

// Input: arr[] = {0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9}
// Output: 1 9 8 4 2 7 6 9 0 0 0 0 0


// EX 1:
function moveZeroesSingleTraversal(arr = []){
    arr = [1, 2, 0, 4, 3, 0, 5, 0];
    let newArr = [...arr];
    let posNums = newArr.filter(ar => ar != 0); // 0(n)
    posNums; 
    let zeroes = arr.filter(ar => ar === 0); // 0(n)
    let finalArr = posNums.concat(zeroes);
    for(let i = 0; i < finalArr.length; i++){ // 0(n)
        console.log(finalArr[i]);
    }
 }

 moveZeroesSingleTraversal([1, 2, 0, 4, 3, 0, 5, 0]);

 // EX 2:
 //reference => https://www.geeksforgeeks.org/move-zeroes-end-array-set-2-using-single-traversal/
 function moveZeroesSingleT2(arr = []){
       
    let temp = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[temp] = arr[i];
            temp = temp + 1;
        }
    }

    for(let i = temp; i < arr.length; i++){
        arr[i] = 0;
    }


    return `All indexes with value zero have been moved to the end of the array ${arr}`;
 }

 moveZeroesSingleT2([1, 2, 0, 4, 3, 0, 5, 0]);
 moveZeroesSingleT2([0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]);