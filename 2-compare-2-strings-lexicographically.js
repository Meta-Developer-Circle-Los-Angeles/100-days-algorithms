// Subject:
// Compare two strings lexicographically

// - if (string1 > string2) it returns a positive value
// - if (string1 == string2) it returns 0
// - if (string1 < string2) it returns a negative value.

stringOne = "This is string one";

stringTwo = "This is string two";

function lex(string1, string2){
    if (string1 > string2){
      return 1;
    } 
    else if (string1 == string2){
      return 0;
    } 
    else{
      return -1;
    } 

}

lex(stringOne, stringTwo);