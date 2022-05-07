// Subject:
// Given two strings a and b consisting of lowercase characters, check whether two given strings are an anagram of each other or not. 
// An anagram of a string is another string that contains the same characters, only the order of characters can be different. 

// Example:
//  input: [“act”, “tac”] 
//  output: true


// EX 1:
function checkIfAnagram(a, b){
    let aLen = a.length;
    let bLen = b.length;

    if (aLen === bLen){
      return true;
    } else {
      return false;
    }  

}

console.log(checkIfAnagram("act", "tac"));
console.log(checkIfAnagram("saturday", "daystar"));
console.log(checkIfAnagram("dog", "god"));

// EX 2:
class CheckIfAnagram{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    compareStrs(){
        let aLen = this.a.length;
        let bLen = this.b.length;
        if (aLen === bLen){
            return true;
          } else {
            return false;
        }  
    }

}

let act = new CheckIfAnagram("act", "tac");
console.log(act.compareStrs());

let sat = new CheckIfAnagram("saturday", "daystar");
console.log(sat.compareStrs());

// EX 3:

function checkIfAnagram(a,b){
    this.a = a;
    this.b = b;
}

checkIfAnagram.prototype.compareStrs = function(){
    let aLen = this.a.length;
    let bLen = this.b.length;
    if (aLen === bLen){
        return true;
      } else {
        return false;
    }  
}

let act2 = new checkIfAnagram("act", "tac");
console.log(act2.compareStrs());

let sat2 = new checkIfAnagram("saturday", "daystar");
console.log(sat2.compareStrs());

let dog2 = new checkIfAnagram("dog", "god");
console.log(dog2.compareStrs());
