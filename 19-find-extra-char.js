// Subject: Given two strings which are of lengths n and n+1. 
// The second string contains all the character of the first string, 
// but there is one extra character. Your task to find the extra character in the second string.

// Example:
// Input : string strA = "abcd";
//         string strB = "cbdae";
// Output : e
// string B contain all the element there is a one extra character which is e

// Input : string strA = "kxml";
//         string strB = "klxml";
// Output : l
// string B contain all the element there is a one extra character which is l

// Reference => https://www.geeksforgeeks.org/find-one-extra-character-string/
function findExtraChar(str1, str2){
  let res = 0; 

  for(let i = 0; i < str1.length; i++){
    res ^= str1.charCodeAt(i);
  }

  for(let i = 0; i < str2.length; i++){
    res ^= str2.charCodeAt(i);
  }

  return res;
     
}

String.fromCharCode(findExtraChar("abcd", "cbdae"));

String.fromCharCode(findExtraChar("kxml", "klxml"));


class FindExtraChar{
   constructor(str1, str2){
       this.str1 = str1,
       this.str2 = str2
   }

   charLoops(){
       let res = 0; 
       let str1 = this.str1;
       let str2 = this.str2;


       for(let i = 0; i < str1.length; i++){
         res ^= str1.charCodeAt(i);
       }
  
       for(let i = 0; i < str2.length; i++){
         res ^= str2.charCodeAt(i);
       }
  
       return res;
   }
}

const getStrs = new FindExtraChar("abcd", "cbdae");
const compareFirstTwoStrs = getStrs.charLoops(); 
compareFirstTwoStrs; // 101?????

function findExtraCharProto(str1,str2){
    this.str1 = str1,
    this.str2 = str2
}

findExtraCharProto.prototype.findExtraChar = function() {
    let res = 0; 
    let str1 = this.str1;
    let str2 = this.str2;

    for(let i = 0; i < str1.length; i++){
      res ^= str1.charCodeAt(i);
    }
  
    for(let i = 0; i < str2.length; i++){
      res ^= str2.charCodeAt(i);
    }
  
    return res;
}

const getStrsProto = new findExtraCharProto("abcd", "cbdae");
const compareFirstTwoStrsProto = getStrsProto.findExtraChar(); 
compareFirstTwoStrsProto; // 101 ???????????