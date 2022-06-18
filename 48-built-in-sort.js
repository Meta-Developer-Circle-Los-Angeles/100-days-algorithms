// Title: Rearrange positive and negative numbers using inbuilt sort function

// Subject: Given an array of positive and negative numbers, arrange them such that all negative integers appear before all the positive integers in the array without using any additional data structure like a hash table, arrays, etc. The order of appearance should be maintained.

// Example:
// Input :  arr[] = [12, 11, -13, -5, 6, -7, 5, -3, -6]
// Output : arr[] = [-13, -5, -7, -3, -6, 12, 11, 6, 5]

// Input :  arr[] = [-12, 11, 0, -5, 6, -7, 5, -3, -6]
// Output : arr[] =  [-12, -5, -7, -3, -6, 0, 11, 6, 5]


// EX 1:
//works, but doesn't use built in sort....
function builtInSort(arr=[]){
    for(let i = 0; i < arr.length; i++){
        let neg = [];
        if(arr[i] < 0){
            neg = arr[i];
            arr[i] = neg;
            console.log(neg);     
        }     
    }

    for(let i = 0; i < arr.length; i++){
        let pos = [];
        if(arr[i] >= 0){
            pos = arr[i];
            arr[i] = pos;
            console.log(pos);
           //console.log(arr[i]);
           }
    }
  }
  


builtInSort([12, 11, -13, -5, 6, -7, 5, -3, -6]);

// EX 2:
function arrSort(arr = []){
    let neg = arr.filter(ar => ar < 0);
    let pos = arr.filter(ar => ar >= 0);
    let newArr = neg.concat(pos);
    return newArr;

}
arrSort([12, 11, -13, -5, 6, -7, 5, -3, -6]); // [-13, -5, -7, -3, -6, 12, 11, 6, 5]
// works...but wrong solution....

// EX 3:
// basic sort
let arr = [12, 11, -13, -5, 6, -7, 5, -3, -6];

function sortNumber(a, b) {
   return a - b;
}

arr.sort(sortNumber); //  [ -13, -7, -6, -5, -3, 5, 6, 11, 12 ]
// sorts, but NOT without re-arranging all numbers!!

// EX 4: sort is not defined!!! 
function main(arr){
    let size = arr.length/arr.length[0];

    for(let i = 0; i < size; i++){
        console.log(arr[i]);
    }

    return function(arr, size){
        let res = (arr, arr + size)
        res.sort();
        return res;
        // return sort(arr, arr + size);
    }
}

let arr = [12, 11, -13, -5, 6, -7, 5, -3, -6];
let size = arr.length/arr.length[0];
let res = main(arr, size);
let out = res();//sort is not defined!!! 
