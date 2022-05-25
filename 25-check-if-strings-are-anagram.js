// Suject:
// Write a function to check whether two given strings are anagram of 
// each other or not. An anagram of a string is another string that contains 
// the same characters, only the order of characters can be different. 

// Example: “abcd” and “dabc” are an anagram of each other.

// EX 1:
function isAnagram(str1,str2){

    if(str1.length !== str2.length){
        return false;
    }

    let str1Sort = str1.split("").sort().join(""); 
    let str2Sort = str2.split("").sort().join("");

    if(str1Sort === str2Sort){
        return `${str1} and ${str2} are an anagram of each other!`
    }
}

isAnagram("abcd", "dabc");

// EX 2:

class IsAnagram{
    constructor(str1, str2){
        this.str1 = str1,
        this.str2 = str2
    }

    strSortCheck(){
        let str1 = this.str1
        let str2 = this.str2

        if(str1.length !== str2.length){
            return false;
        }
    
        let str1Sort = str1.split("").sort().join(""); 
        let str2Sort = str2.split("").sort().join("");
    
        if(str1Sort === str2Sort){
            return `${str1} and ${str2} are an anagram of each other!`
        }
    }
}

const checkStrs = new IsAnagram("abcd", "dabc");
let result = checkStrs.strSortCheck();
result;

// EX 3:

function isAnagramProto(str1, str2){
    this.str1 = str1,
    this.str2 = str2
}

isAnagramProto.prototype.strSortCheck = function(){
    let str1 = this.str1
    let str2 = this.str2

    if(str1.length !== str2.length){
        return false;
    }

    let str1Sort = str1.split("").sort().join(""); 
    let str2Sort = str2.split("").sort().join("");

    if(str1Sort === str2Sort){
        return `${str1} and ${str2} are an anagram of each other!`
    }
}

const checkStrsProto = new isAnagramProto("abcd", "dabc");
let resultProto = checkStrsProto.strSortCheck();
resultProto;
