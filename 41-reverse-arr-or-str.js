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
   newArr.reverse(); //traverses...so 0(n)
   for(let i = 0; i < newArr.length; i++){ //0(n) again!!
       let res = newArr[i];
        console.log(res);
   }
}

// EX 2:
// 0(n) => better
function reverseString(arr = []) {
    let newArr = [];
    for (var i = arr.length - 1; i >= 0; i--){
       newArr += arr[i];
    }
     
    return newArr;
}

reverseString([1, 2, 3]);
