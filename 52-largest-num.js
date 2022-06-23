// Title: Arrange given numbers to form the biggest number | Set 1

// Subject: 
// Given an array of numbers, arrange them in a way that yields the largest value. For example, if the 
// given numbers are {54, 546, 548, 60}, the arrangement 6054854654 gives the largest value. And if the 
// given numbers are {1, 34, 3, 98, 9, 76, 45, 4}, then the arrangement 998764543431 gives the largest value.

// Example:
// A simple solution that comes to our mind is to sort all numbers in descending order, but simply 
// sorting doesn’t work. For example, 548 is greater than 60, but in output 60 comes before 548. 
// As a second example, 98 is greater than 9, but 9 comes before 98 in output.

// So how do we go about it? The idea is to use any comparison based sorting 
// algorithm. 
// In the used sorting algorithm, instead of using the default comparison, 
// write a comparison function myCompare() and use it to sort numbers.

// For Python, the procedure is explained in largestNumber() function.

// Given two numbers X and Y, how should myCompare() decide which number to put 
// first – we compare two numbers XY (Y appended at the end of X) and YX 
// (X appended at the end of Y). If XY is larger, then X should come before 
// Y in output, else Y should come before. For example, let X and Y be 542 and 
// 60. To compare X and Y, we compare 54260 and 60542. Since 60542 is greater 
// than 54260, we put Y first.


function largestNumber(arr) {
    let msg = "The largest possible number is";

    return function(){
        let lgNum = arr.map(String)
                       .sort((a, b) => (b + a) - (a + b))
                       .join('');

        return `${msg} ${lgNum}`;
    }
  }
  
let num = largestNumber([54, 546, 548, 60]);
let out = num();
out; // 6054854654

let num2 = largestNumber([1, 34, 3, 98, 9, 76, 45, 4]);
let out2 = num2();
out2; // 998764543431