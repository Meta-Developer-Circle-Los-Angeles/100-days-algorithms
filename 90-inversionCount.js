// Title: Count Inversions in an array | Set 1 (Using Merge Sort)

// Subject:
// Inversion Count for an array indicates – how far (or close) the array is 
// from being sorted. If the array is already sorted, then the inversion count 
// is 0, but if the array is sorted in the reverse order, the inversion count 
// is the maximum. 

// Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j

// Example:
// Input: arr[] = {8, 4, 2, 1}
// Output: 6

// Explanation: Given array has six inversions:
// (8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1).


// Input: arr[] = {3, 1, 2}
// Output: 2

// Explanation: Given array has two inversions:
// (3, 1), (3, 2) 


// Time Complexity = 0(n2) 
function inversionCount(arr = []) {
    
    let iCount = 0;
    
    for(let i = 0; i < arr.length - 1; i++){

        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j] && i < j){
                iCount++;
            }
        }
    
    }
   
    return iCount;
}

inversionCount([8, 4, 2, 1]); // 6


// reference # 1 => https://www.geeksforgeeks.org/counting-inversions/
// Time Complexity: O(n log n)
function inversionMergeSort(arr = [], left, mid, right){

    let leftArr = [];
    for(let i = left; i < mid + 1; i++){
        leftArr.push(arr[i]);
    }

    let rightArr = [];
    for(let i = mid + 1; i < right + 1; i++){
        rightArr.push(arr[i]);
    }

    let i = 0;
    let j = 0;
    let temp = left;
    let swaps = 0;

    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] <= rightArr[j]){
            arr[temp++] = leftArr[i++];
        } else {
            arr[temp++] = rightArr[j++];
            swaps += (mid + 1) - (left + i);
        }
    }
    while(i < leftArr.length){
        arr[temp++] = leftArr[i++];
    }
    while(j < rightArr.length){
        arr[temp++] = rightArr[j++];
    }
    return swaps;


}

function mergeAndCount(arr = [], left, right) {
    let iCount = 0;
    if(left < right){
        let mid = Math.floor((left + right) / 2);

        iCount += mergeAndCount(arr, left, mid);

        iCount += mergeAndCount(arr, mid + 1, right);
    
        iCount += inversionMergeSort(arr, left, mid, right);
    }

    return iCount;
   
}

function out() {
    let arr = new Array(8, 4, 2, 1);
    let arrLen = arr.length;
    let result = mergeAndCount(arr, 0, arrLen - 1);
    let msg = `The numbers of inversions = ${result}`;
    return `${msg}`;
}

out();

