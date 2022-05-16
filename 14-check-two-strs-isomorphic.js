
// Subject:
// Given two strings 'str1' and 'str2', check if these two strings are isomorphic to each other.
// Two strings str1 and str2 are called isomorphic if there is a one to one mapping possible for every character of str1 to every character of str2 while preserving the order.
// Note: All occurrences of every character in ‘str1’ should map to the same character in ‘str2’

// Example:
// Input: str1 = aab, str2 = xxy
// Output: 1
// Explanation: There are two different charactersin aab and xxy, i.e a and b with frequency 2and 1 respectively.

// Input: str1 = aab, str2 = xyz
// Output: 0
// Explanation: There are two different charactersin aab but there are three different charactersin xyz. So there won't be one to one mapping between str1 and str2.



// reference => https://www.tutorialspoint.com/determining-isomorphic-strings-javascript

// EX 1:
const isIsomorphic = (str1 = '', str2 = '') => {

    if (str1.length !== str2.length) {
       return false;
    };
    
    for (let i = 0; i < str1.length; i++) {
       const str1Index = str1.indexOf(str1[i]);
       const str2Index = str2.indexOf(str2[i]);
       if (str2[str1Index] !== str2[i] || str1[str2Index] !== str1[i]) {
          return 0;
       };
    };
    
    return 1;
}

isIsomorphic("aab", "xxy");
isIsomorphic("aab", "xyz");


// EX 2:

class Isomorphic{
    constructor(str1, str2){
        this.str1 = str1,
        this.str2 = str2
    }

    isIsomorphic(){
        let str1 = this.str1;
        let str2 = this.str2;

        if (str1.length !== str2.length) {
            return false;
         };
         
         for (let i = 0; i < str1.length; i++) {
            const str1Index = str1.indexOf(str1[i]);
            const str2Index = str2.indexOf(str2[i]);
            if (str2[str1Index] !== str2[i] || str1[str2Index] !== str1[i]) {
               return 0;
            };
         };
         
         return 1;
    }

}

const strPair1 = new Isomorphic("aab", "xxy");
strPair1.isIsomorphic();

const strPair2 = new Isomorphic("aab", "xyz");
strPair2.isIsomorphic();

// EX 3:

function isIsomorphicProto(str1 = '', str2 = ''){
    this.str1 = str1,
    this.str2 = str2
}

isIsomorphicProto.prototype.checkIsoProto = function(){

    let str1 = this.str1;
    let str2 = this.str2;
     if (str1.length !== str2.length) {
        return false;
     };
     
     for (let i = 0; i < str1.length; i++) {
        const str1Index = str1.indexOf(str1[i]);
        const str2Index = str2.indexOf(str2[i]);
        if (str2[str1Index] !== str2[i] || str1[str2Index] !== str1[i]) {
           return 0;
        };
     };
     
     return 1;
}


const strPairProto1 = new isIsomorphicProto("aab", "xxy");
strPairProto1.checkIsoProto();

const strPairProto2 = new isIsomorphicProto("aab", "xyz");
strPairProto2.checkIsoProto();