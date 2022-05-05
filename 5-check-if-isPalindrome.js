// Subject:
// Given a value, write a function that will test to see if the string is a palindrome or not. Return true if it is or false if it’s not.

// A palindrome is a word or phrase that reads the same backward and forward. When palindromes are the length of a sentence, they ignore capitalization, punctuation, and word boundaries.

// Example:
// isPalindrome(“”) // true
// isPalindrome(1010) // false
// isPalindrome(“taco Cat”) // true
// isPalindrome(“hello”) // false

function isPalindrome(str = ""){
    // if parameter value is a #, convert to a string
    if (typeof str !== "string") {
        str = str.toString();
    }
    //if str is empty, return true
    if(!str){
        return true;
    }

    let forwardStr = str.split(" ").join(" ");
    let backwardStr = forwardStr.split(" ").reverse().join(" ");
    let swapWordsBckStr = backwardStr.split(" ").reverse().join(" ");
    let strLen = str.length;

    for(let i = 0; i < strLen/2; i++){
        if(swapWordsBckStr[i] !== str[strLen - 1 - i]){
            return false;
        } else {
            return true;
        }
    };

}

console.log(isPalindrome(""));
console.log(isPalindrome(1010));
console.log(isPalindrome("taco Cat"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("1010"));
console.log(isPalindrome(111));