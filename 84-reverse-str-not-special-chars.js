// Title: Reverse a string without affecting special characters

// Subject:
// Given a string, that contains a special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’), reverse the string in a way that special characters are not affected.

// Example:
// Input:   str = "a,b$c"
// Output:  str = "c,b$a"
// Note that $ and , are not moved anywhere.  
// Only subsequence "abc" is reversed

// Input:   str = "Ab,c,de!$"
// Output:  str = "ed,c,bA!$"

// Reference #1 => https://kalkicode.com/reverse-string-without-affecting-special-characters
// Reference #2 => https://www.geeksforgeeks.org/reverse-a-string-without-affecting-special-characters/
const isAlphabet = (char) => {
    if((char >= 'a' && char <= 'z') || 
       (char >= 'A' && char <= 'Z')){
        return true;
    } 
    return false;
}
function swapChars(str,left,right){
    let swapChar="";
    for(let i=0; i < str.length; i++)
    {
        if(i==left){
         swapChar= swapChar+ str[right];
        }else{
            if(i==right){
               swapChar=swapChar+str[left];
            } else {
               swapChar=swapChar+str[i];
            }
        }
    }
    return swapChar;
   }

function reverseChars(str){
    let strLen = str.length;
    let beginIndex = 0;
    let endIndex = strLen - 1;

    while(beginIndex < endIndex){
       if(!isAlphabet(str[beginIndex])){
         beginIndex++;
       } else if(!isAlphabet(str[endIndex])){
         endIndex--;
       } else {
          str = swapChars(str, beginIndex, endIndex);
          beginIndex++;
          endIndex--;
       }
   }
   console.log(str);
}

reverseChars("a,b$c"); // c,b$a

reverseChars("Ab,c,de!$"); // ed,c,bA!$