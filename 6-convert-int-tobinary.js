
// Subject:
// given an Integer, return it's binary representation

// Example:
// Input: 33
// Output: 100001

// Input: 42
//Output: 101010


// EX 1:
let convertToBinary = (num) => {
    return Number(num).toString(2);
 }
 
 convertToBinary(42);
 convertToBinary(33);

 // EX 2:

class NumberToConvert{
    constructor(num){
       this.num = num;
    }

    convertToBinary(){
       return this.num = Number(this.num).toString(2);
    }
}

let intNum1 = new NumberToConvert(42);
console.log(intNum1.convertToBinary());

let intNum2 = new NumberToConvert(33);
console.log(intNum2.convertToBinary());
