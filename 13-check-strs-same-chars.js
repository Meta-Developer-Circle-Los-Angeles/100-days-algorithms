// Subject:Given two strings s1 and s2, check whether s2 is a rotation of s1. 

// Example:
// Input : ABACD, CDABA
// Output : True

// Input : GEEKS, EKSGE
// Output : True

// EX 1:
function isRotation(str1, str2){

    let str1Len = str1.length;
    let str2Len = str2.length;

    let str1Sort = str1.split('').sort().join('');
    let str2Sort = str2.split('').sort().join('');

    if(str1Sort === str2Sort && str1Len === str1Len){
        return true;
    } else {
        return false;
    }
}
isRotation("ABACD", "CDABA");
isRotation("GEEKS", "EKSGE");
isRotation("GEPKS", "EKSGE");

// EX 2:
function isSubStrRotation(str1, str2){

    let str1Sort = str1.split('').sort().join('');
    let str2Sort = str2.split('').sort().join('');

    let str1SortSub = str1Sort.substring(0, str1Sort.length - 1);
    let str2SortSub = str2Sort.substring(0, str2Sort.length - 1);

    if(str1SortSub === str2SortSub){
        return true;
    } else {
        return false;
    }
}
isSubStrRotation("ABACD", "CDABA");
isSubStrRotation("GEEKS", "EKSGE");
isSubStrRotation("GEPKS", "EKSGE");

// EX 3:

class isRotation{
    constructor(str1, str2){
        this.str1 = str1,
        this.str2 = str2
    }

    checkRotation(){
        let str1Len = this.str1.length;
        let str2Len = this.str2.length;
    
        let str1Sort = this.str1.split('').sort().join('');
        let str2Sort = this.str2.split('').sort().join('');
    
        if(str1Sort === str2Sort && str1Len === str1Len){
            return true;
        } else {
            return false;
        }
    }
}

let checkStr1 = new isRotation("ABACD", "CDABA");
let testCheckStr1 = checkStr1.checkRotation();
testCheckStr1

let checkStr2 = new isRotation("GEEKS", "EKSGE");
let testCheckStr2 = checkStr2.checkRotation();
testCheckStr2


let checkStr3 = new isRotation("GEPKS", "EKSGE");
let testCheckStr3 = checkStr3.checkRotation();
testCheckStr3


// EX 4:

function isRotationProto(str1, str2){
    this.str1 = str1,
    this.str2 = str2
}

isRotationProto.prototype.checkRotation = function(){
    let str1Len = this.str1.length;
    let str2Len = this.str2.length;

    let str1Sort = this.str1.split('').sort().join('');
    let str2Sort = this.str2.split('').sort().join('');

    if(str1Sort === str2Sort && str1Len === str1Len){
        return true;
    } else {
        return false;
    }
}

let checkStr1P = new isRotationProto("ABACD", "CDABA");
let testCheckStr1P = checkStr1P.checkRotation();
testCheckStr1P

let checkStr2P = new isRotationProto("GEEKS", "EKSGE");
let testCheckStr2P = checkStr2P.checkRotation();
testCheckStr2P


let checkStr3P = new isRotationProto("GEPKS", "EKSGE");
let testCheckStr3P = checkStr3P.checkRotation();
testCheckStr3P