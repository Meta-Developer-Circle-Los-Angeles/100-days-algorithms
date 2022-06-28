// Title: Shuffle a given array using Fisher–Yates shuffle Algorithm

// Subject: 
// Given an array, write a program to generate a random permutation of array 
// elements. This question is also asked as “shuffle a deck of cards” or “randomize 
// a given array”. Here shuffle means that every permutation of array element 
// should equally likely.

// Example:
// Input: arr[] = {1, 2, 3, 4, 5, 6. 7. 8}
// Output: arr[] = {7, 8, 4, 6, 3, 1, 2, 5}
// The output can be any random permutation of input such that all permutations 
// are equally likely


function shuffle(arr = []){
    
    for(let i = arr.length - 1; i > 0; i--){ 
     let j = Math.floor(Math.random() * (i + 1));
     //swap
     arr[i] = arr[j];
     arr[j] = arr[i];
     console.log(arr[i]);
    }
  
   
  }
  
  
  shuffle([1, 2, 3, 4, 5, 6, 7, 8]);
  