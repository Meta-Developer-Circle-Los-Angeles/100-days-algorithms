// Subject:
// Given an array (or string), the task is to reverse the array/string.


// Example:
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

// EX 1:
function reverseArr(arr = []){
   let newArr = [...arr];
   newArr.reverse();
   for(let i = 0; i < newArr.length; i++){
       let res = newArr[i];
        console.log(res);
   }
}
