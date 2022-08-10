// Title: Longest Repeating Subsequence


// Subject:
// Given string str, find the length of the longest repeating subsequence such that it can be found twice in the given string.

// The two identified subsequences A and B can use the same ith character from string str if and only if that ith character has different indices in A and B. For example, A = "xax" and B = "xax" then the index of first "x" must be different in the original string for A and B.

// Example:
// Input:
// str = "axxzxy"
// Output: 2
// Explanation:
// The given array with indexes looks like
// a x x z x y 
// 0 1 2 3 4 5

// The longest subsequence is "xx". 
// It appears twice as explained below.

// subsequence A
// x x
// 0 1  <-- index of subsequence A
// ------
// 1 2  <-- index of str 


// subsequence B
// x x
// 0 1  <-- index of subsequence B
// ------
// 2 4  <-- index of str 

// We are able to use character 'x' 
// (at index 2 in str) in both subsequences
// as it appears on index 1 in subsequence A 
// and index 0 in subsequence B.


// reference #1 => https://www.youtube.com/watch?v=ZqG89Z-dKpI
// reference #2 => https://learnersbucket.com/examples/algorithms/longest-repeated-subsequence/
// Time complexity: 0(n2);
function longestRepeatSubsequence(str, i, j) {
            
    if(i == 0 || j == 0){
        return 0;
    } 
    if(str[i -1] == str[j-1] && i != j){
        return longestRepeatSubsequence(str, i -1, j -1) + 1;
     }
    else{   
        return Math.max(longestRepeatSubsequence(str, i, j - 1), longestRepeatSubsequence(str, i - 1, j)); 
    }

}

function out(msg){
    msg = "The longest repeating subsequence is: "
    let str = "axxzxy";
    let str1 = str.length;
    let str2 = str.length;
    let result = longestRepeatSubsequence(str, str1,str2);
    return `${msg}${result}`;
}

out();