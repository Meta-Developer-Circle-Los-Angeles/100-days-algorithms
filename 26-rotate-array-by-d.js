// Subject:
// Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements. 


// Input :  arr[] = [1, 2, 3, 4, 5, 6, 7]
// d = 2
// Output : arr[] = [3, 4, 5, 6, 7, 1, 2] 

// EX 1;

function rotate(arr=[], d){
    const copy1 = [...arr];
    const copy2 = [...arr];

    let cloneSliceOne = copy1.slice(d); //[ 3, 4, 5, 6, 7 ]
    // console.log(cloneSliceOne);
    let clonseSliceTwo = copy2.reverse();
    let res = clonseSliceTwo.slice(copy2.length - d).reverse();
    return cloneSliceOne.concat(res);
    
}

rotate([1, 2, 3, 4, 5, 6, 7], 2);
rotate([1, 2, 3, 4, 5, 6, 7], 3);


// EX 2;
class Rotate {
    constructor(arr=[], d){
      this.arr = arr,
      this.d = d
    }

    cloneSliceRotate(){
      let arr = this.arr;
      let d = this.d;
      const copy1 = [...arr];
      const copy2 = [...arr];

      let cloneSliceOne = copy1.slice(d); //[ 3, 4, 5, 6, 7 ]
      // console.log(cloneSliceOne);
      let clonseSliceTwo = copy2.reverse();
      let res = clonseSliceTwo.slice(copy2.length - d).reverse();
      return cloneSliceOne.concat(res);
    }
}

let rotateByTwo = new Rotate([1, 2, 3, 4, 5, 6, 7], 2);
let resOne = rotateByTwo.cloneSliceRotate();
resOne;

let rotateByThree = new Rotate([1, 2, 3, 4, 5, 6, 7], 3);
let resTwo = rotateByThree.cloneSliceRotate();
resTwo;

// EX 3:

function rotateProto(arr=[], d){
    this.arr = arr,
    this.d = d
}

rotateProto.prototype.cloneSliceRotate = function(){
    let arr = this.arr;
    let d = this.d;
    const copy1 = [...arr];
    const copy2 = [...arr];

    let cloneSliceOne = copy1.slice(d); //[ 3, 4, 5, 6, 7 ]
    // console.log(cloneSliceOne);
    let clonseSliceTwo = copy2.reverse();
    let res = clonseSliceTwo.slice(copy2.length - d).reverse();
    return cloneSliceOne.concat(res);
}

let rotateByTwoProto = new rotateProto([1, 2, 3, 4, 5, 6, 7], 2);
let resOneProto = rotateByTwoProto.cloneSliceRotate();
resOneProto;

let rotateByThreeProto = new rotateProto([1, 2, 3, 4, 5, 6, 7], 3);
let resTwoProto = rotateByThreeProto.cloneSliceRotate();
resTwoProto;