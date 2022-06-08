// Subject:
// There is a given array and split it from a specified position, and move the first part of the array add to the end. 
 

//  Example:
//  Input : arr[] = {12, 10, 5, 6, 52, 36}
//             k = 2
// Output : arr[] = {5, 6, 52, 36, 12, 10}
// Explanation : Split from index 2 and first 
// part {12, 10} add to the end .

// Input : arr[] = {3, 1, 2}
//            k = 1
// Output : arr[] = {1, 2, 3}
// Explanation : Split from index 1 and first
// part add to the end.

function splitArr(arr = [], k){
    let cArr = [...arr];
    cArr.splice(k, cArr.length);
    let splitLeft = arr.splice(k);
    let res = splitLeft.concat(cArr);
    return res;
}


splitArr([12, 10, 5, 6, 52, 36], 2);
splitArr([3, 1, 2], 1);