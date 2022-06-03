// Subject:
// Given an array, right rotate it by k elements. 

// Example:
// Input: arr[] = {1, 2, 3, 4, 5, 
//                 6, 7, 8, 9, 10}
//           k = 3
// Output: 8 9 10 1 2 3 4 5 6 7

// Input: arr[] = {121, 232, 33, 43 ,5}
//            k = 2
// Output: 43 5 121 232 33


// EX 1:
function rotateByK(arr=[], k){
    
    let arrLen = arr.length;
    let splitArr = arr.splice(arrLen - k);
    for(let i = 0; i < splitArr.length; i++){
        // console.log(i);
        // console.log(splitArr[i]);
        arr.splice(i,0,splitArr[i]);
    }
    return arr;
}

rotateByK([1, 2, 3, 4, 5, 
    6, 7, 8, 9, 10], 3);

rotateByK([121, 232, 33, 43 ,5], 2);

// EX 2:
class RotateByK{
    constructor(arr, k){
        this.arr = arr,
        this.k = k
    }

    rotate(){
        let arr = this.arr;
        let k = this.k;
        let arrLen = arr.length;
        let splitArr = arr.splice(arrLen - k);
        for(let i = 0; i < splitArr.length; i++){
            arr.splice(i,0,splitArr[i]);
        }
        return arr;
    }
}


let rotateBy3 = new RotateByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
let resultOne = rotateBy3.rotate();
resultOne;

let rotateBy2 = new RotateByK([121, 232, 33, 43 ,5], 2);
let resultTwo = rotateBy2.rotate();
resultTwo;


// EX 3:
function rotateByKProto(arr,k){
    this.arr = arr,
    this.k = k
}

rotateByKProto.prototype.rotate = function(){
    let arr = this.arr;
    let k = this.k;
    let arrLen = arr.length;
    let splitArr = arr.splice(arrLen - k);
    for(let i = 0; i < splitArr.length; i++){
        arr.splice(i,0,splitArr[i]);
    }
    return arr;
}

let rotateBy3P = new rotateByKProto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
let resultOneP = rotateBy3P.rotate();
resultOneP;

let rotateBy2P = new rotateByKProto([121, 232, 33, 43 ,5], 2);
let resultTwoP = rotateBy2P.rotate();
resultTwoP;