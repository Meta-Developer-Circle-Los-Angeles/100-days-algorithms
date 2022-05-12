// Subject:
// Given an integer n, convert it corresponding roman number of n.
// Various symbols and their values are given below
// Note:- There are a few exceptions for some numbers like 4 in roman is IV,9 in roman is IX, similarly, 40 is XL while 90 is XC. Similarly, 400 is CD while 900 is CM

// Example:
// Input:  5
// Output: V

// Input: 3
// Output: III

// reference => https://algorithms.tutorialhorizon.com/convert-integer-to-roman/

// EX 1;
function convertToRoman(num){
    if(typeof num !== 'number'){
        return false;
    }
    let romanNum = [];
    let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romanLiterals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    
    for(let i=0; i<values.length; i++) {
        while(num >= values[i]) {
            num -= values[i];
            romanNum.push(romanLiterals[i]);
        }
      }
     // return romanNum.toString();
     return romanNum;
 
 }
 
 
console.log(convertToRoman(25));
console.log(convertToRoman(5));
 
// EX 2:
class convertToRoman{
    constructor(num){
        this.num = num;
    }
 
    convert(){
        let romanNum = [];
        let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
         et romanLiterals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
        for(let i=0; i<values.length; i++) {
            while(this.num >= values[i]) {
                this.num -= values[i];
                romanNum.push(romanLiterals[i]);
            }
        }
        return romanNum;
    }
 
}
 
let five = new convertToRoman(5);
console.log(five.convert());
 
let twentyFive = new convertToRoman(25);
console.log(twentyFive.convert());

// Ex 3:

function convertToRomanProto(num){
    this.num = num;
}

convertToRomanProto.prototype.convert = function(){
    let romanNum = [];
    let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romanLiterals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    for(let i=0; i<values.length; i++) {
        while(this.num >= values[i]) {
            this.num -= values[i];
            romanNum.push(romanLiterals[i]);
        }
      }
      return romanNum;
}

let fiveP = new convertToRomanProto(5);
console.log(fiveP.convert());

let twentyFiveP = new convertToRomanProto(25);
console.log(twentyFiveP.convert());
