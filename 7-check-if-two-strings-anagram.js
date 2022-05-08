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

    str1 = a.split('').sort().join('');
    str2 = b.split('').sort().join('');

    if(str1 === str2 && aLen === bLen){
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
        
        let str1 = this.a.split('').sort().join('');
        let str2 = this.b.split('').sort().join('');
        
        if(str1 === str2 && aLen === bLen){
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

    let str1 = this.a.split('').sort().join('');
    let str2 = this.b.split('').sort().join('');

    if (str1 === str2 && aLen === bLen){
        return true;
      } else {
        return false;
    }  
}

let act = new checkIfAnagram("act", "tac");
console.log(act.compareStrs());

let sat = new checkIfAnagram("saturday", "daystar");
console.log(sat.compareStrs());