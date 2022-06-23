// Title: Rearrange positive and negative numbers with constant extra space

// Subject: Given an array of positive and negative numbers, arrange them such that all negative integers appear before all the positive integers in the array without using any additional data structure like hash table, arrays, etc. The order of appearance should be maintained.

// Example:
// Input:  [12 11 -13 -5 6 -7 5 -3 -6]
// Output: [-13 -5 -7 -3 -6 12 11 6 5]

// EX 1:
function reArrangeNeg(arr = []){
    let arrLen = arr.length;
    let temp;
    let j = 0;
    for(let i = 0; i < arrLen; i++){
       if(arr[i] < 0){
          if(i != j){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
            j++;
       }
    }

    return arr;
}

reArrangeNeg([12, 11, -13, -5, 6, -7, 5, -3, -6]);

// EX 2:
function arrSortNeg(arr = []){
    let neg = arr.filter(ar => ar < 0);
    let pos = arr.filter(ar => ar >= 0);
    let newArr = neg.concat(pos);
    return newArr;

}
arrSortNeg([12, 11, -13, -5, 6, -7, 5, -3, -6]); // [-13, -5, -7, -3, -6, 12, 11, 6, 5]

// EX 3:
class ReArrangeNeg{
    constructor(arr){
        this.arr = arr
    }

    sortArr(){
        let arr = this.arr;
        let neg = arr.filter(ar => ar < 0);
        let pos = arr.filter(ar => ar >= 0);
        let newArr = neg.concat(pos);
        return newArr;
    
    }
}

let res = new ReArrangeNeg([12, 11, -13, -5, 6, -7, 5, -3, -6]);
let out = res.sortArr();
out;

function newArr(){
    return `This is the newly sorted arr with negative nums at the beginning of the array: ${out}`;
}

newArr();

// EX 4:
function reArrangeNegProto(arr){
    this.arr = arr
}

reArrangeNegProto.prototype.sortArr = function(){
    let arr = this.arr;
    let neg = arr.filter(ar => ar < 0);
    let pos = arr.filter(ar => ar >= 0);
    let newArr = neg.concat(pos);
    return newArr;
}

let resProto = new reArrangeNegProto([12, 11, -13, -5, 6, -7, 5, -3, -6]);
let outProto = resProto.sortArr();

function newArrProto(){
    return `This is the newly sorted arr with negative nums at the beginning of the array: ${outProto}`;
}

newArrProto();




