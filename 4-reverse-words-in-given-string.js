
// Subject:
// Reverse words in a given string

// Example:
// Input: i.like.this.program.very.much
// Output: much.very.program.this.like.i

const reverseStr = ((originalStr, newStr) => {
    newStr = originalStr.split(".").join(" ");
    let reversedStr = newStr.split(" ").reverse().join(".");
    return reversedStr;
    
 });
 
console.log(reverseStr("i.like.this.program.very.much"));

// EX 2:
class reversedStr{
    constructor(originalStr, newStr){
        this.originalStr = originalStr;
        this.newStr = newStr;
    }

    reverse(){
        this.newStr = this.originalStr.split(".").join(" ");;
        let reversedStr = this.newStr.split(" ").reverse().join(".");
        return reversedStr;
       }
}

let reverseNewStr = new reversedStr("i.like.this.program.very.much");

console.log(reverseNewStr.reverse());
 