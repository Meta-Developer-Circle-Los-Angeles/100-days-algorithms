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

// EX 1:
function splitArr(arr = [], k){
    let cArr = [...arr];
    cArr.splice(k, cArr.length);
    let splitLeft = arr.splice(k);
    let res = splitLeft.concat(cArr);
    return res;
}


splitArr([12, 10, 5, 6, 52, 36], 2);
splitArr([3, 1, 2], 1);


// EX 2:
class SplitArr{
    constructor(arr,k){
        this.arr = arr,
        this.k = k
    }

    addLeftSplitToRight(){
        let arr = this.arr;
        let k = this.k;
        let cArr = [...arr];
        cArr.splice(k, cArr.length);
        let splitLeft = arr.splice(k);
        let res = splitLeft.concat(cArr);
        return res;
    }
}

let arrOne = new SplitArr([12, 10, 5, 6, 52, 36], 2);
let resOne = arrOne.addLeftSplitToRight();
resOne;

let arrTwo = new SplitArr([3, 1, 2], 1);
let resTwo = arrTwo.addLeftSplitToRight();
resTwo;


// EX 3:
function splitArrProto(arr = [], k){
    this.arr = arr,
    this.k = k
}

splitArrProto.prototype.addLeftSplitToRightProto = function(){
    let arr = this.arr;
    let k = this.k;
    let cArr = [...arr];
    cArr.splice(k, cArr.length);
    let splitLeft = arr.splice(k);
    let res = splitLeft.concat(cArr);
    return res;
}

let resOneProto = new splitArrProto([12, 10, 5, 6, 52, 36], 2);
let resultOne = resOneProto.addLeftSplitToRightProto();
resultOne;


let resTwoProto = new splitArrProto([3, 1, 2], 1);
let resultTwo = resTwoProto.addLeftSplitToRightProto();
resultTwo;