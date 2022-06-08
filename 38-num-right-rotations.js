// Subject: An array consisting of N integers is given. There are several 
// Right Circular Rotations of range[L..R] that we perform. After performing 
// these rotations, we need to find element at a given index.

// Input : arr[] : {1, 2, 3, 4, 5}
//         ranges[] = { {0, 2}, {0, 3} }
//         index : 1
// Output : 3
// Explanation : After first given rotation {0, 2}
//                 arr[] = {3, 1, 2, 4, 5}
//               After second rotation {0, 3} 
//                 arr[] = {4, 3, 1, 2, 5}
// After all rotations we have element 3 at given
// index 1. 

//reference => https://tutorialspoint.dev/data-structure/arrays/find-element-given-index-number-rotations
function rightCircularRotations(arr = [], ranges, numRightRotations, index){
   
   for(let i = numRightRotations - 1; i >= 0; i--){
      let left = ranges[i][0];
      let right = ranges[i][1];

      if(left <= index && right >= index){
          if(index == left){
              index = right;
          } else {
              index--;
          }
      }
   }
   return arr[index];
}

let arr = [1, 2, 3, 4, 5];
let ranges = [[0,2],[0,3]];
let numRightRotations = 2;
let index = 1;
rightCircularRotations(arr, ranges, numRightRotations, index);//3