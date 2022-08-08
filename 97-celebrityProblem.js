// Title: The Celebrity Problem

// Subject:
// A celebrity is a person who is known to all but does not know anyone at 
// a party. If you go to a party of N people, find if there is a celebrity 
// in the party or not.
// A square NxN matrix M[][] is used to represent people at the party such 
// that if an element of row i and column j is set to 1 it means ith person 
// knows jth person. Here M[i][i] will always be 0.
// Note: Follow 0 based indexing.

// Example:
// Input:
// N = 3
// M[][] = {{0 1 0},
//          {0 0 0}, 
//          {0 1 0}}
// Output: 1
// Explanation: 0th and 2nd person both
// know 1. Therefore, 1 is the celebrity. 

// Reference => https://www.geeksforgeeks.org/the-celebrity-problem/

let matrix = [[0, 1, 0],
              [0, 0, 0], 
              [0, 1, 0]];

function pplWhoKnowEachOther(a,b){
    return matrix[a][b];
}

function celebrityProblem(numPeople){

    let inDegree = Array(numPeople).fill(0);
    let outDegree = Array(numPeople).fill(0);
    for(let rowI = 0; rowI < numPeople; rowI++){
        for(let jColumn = 0; jColumn < numPeople; jColumn++){
           let seeWhoKnowsOneAnother = pplWhoKnowEachOther(rowI,jColumn);
           outDegree[rowI] += seeWhoKnowsOneAnother;
           inDegree[jColumn] += seeWhoKnowsOneAnother;
        }

    }

    for(let rowI = 0; rowI < numPeople; rowI++){
       if(inDegree[rowI] == numPeople - 1 && outDegree[rowI] == 0){
         return rowI;
       } 
    }

    return -1;

   
}

let id = celebrityProblem(3);

function out(msg1,msg2){
   msg1 = "There are no celebrities at this party 🎉!";
   msg2 = "There is a very famous celebrity at this party 🎉🎥🎤🎉🎥🎤!";
   if(id == -1){
     return msg1;
   } else {
     return msg2;
   }
}

out();