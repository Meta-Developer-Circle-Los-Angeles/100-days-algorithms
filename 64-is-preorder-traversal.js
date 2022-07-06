// Title: Check if a given array can represent Preorder Traversal of Binary Search Tree

// Subject: Given an array of numbers, return true if given array can represent 
// preorder traversal of a Binary Search Tree, else return false. Expected time 
// complexity is O(n).

// Example:
// Input:  pre[] = {2, 4, 3}
// Output: true
// Given array can represent preorder traversal
// of below tree
//     2
//      \
//       4
//      /
//     3

// Input:  pre[] = {2, 4, 1}
// Output: false
// Given array cannot represent preorder traversal
// of a Binary Search Tree.

// Input:  pre[] = {40, 30, 35, 80, 100}
// Output: true
// Given array can represent preorder traversal
// of below tree
//      40
//    /   \
//  30    80 
//   \      \
//   35     100 


// Input:  pre[] = {40, 30, 35, 20, 80, 100}
// Output: false
// Given array cannot represent preorder traversal
// of a Binary Search Tree.

// Reference => https://www.geeksforgeeks.org/check-if-a-given-array-can-represent-preorder-traversal-of-binary-search-tree/
function isPreOrderTraversalBST(arr){
  let arrLen = arr.length;
  // create an empty stack
  let stack = [];
  // lowest possible value for root when root is initialized
  let root = -1000000000;
  // if i/node element is on right side && < current root => false
  for(let i = 0; i < arrLen; i++){
    if(arr[i] < root){
      return false;
    }
    // keep removing elements from the stack while i/node on right && > than stack top
   // => make new root
   while(stack.length !=0 && stack[stack.length - 1] < arr[i]){
     root = stack[stack.length - 1];
     stack.pop();
    }
    stack.push(arr[i]);
 
  }
  return true;
}


isPreOrderTraversalBST([2, 4, 3]); //true
isPreOrderTraversalBST([2, 4, 1]); //false
isPreOrderTraversalBST([40, 30, 35, 80, 100]); //true
isPreOrderTraversalBST([40, 30, 35, 20, 80, 100]); //false