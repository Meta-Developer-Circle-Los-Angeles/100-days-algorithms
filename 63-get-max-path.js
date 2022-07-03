// Title: Maximum Path Sum in a Binary Tree

// Subject: Given a binary tree, find the maximum path sum. 
// The path may start and end at any node in the tree.
// Example: 

// Example:
// Input: Root of below tree
//        1
//       / \
//      2   3
// Output: 6

// See below diagram for another example.
// 1+2+3

// Implementation:
// For each node there can be four ways that the max path goes through the node: 
// 1. Node only 
// 2. Max path through Left Child + Node 
// 3. Max path through Right Child + Node 
// 4. Max path through Left Child + Node + Max path through Right Child

// The idea is to keep trace of four paths and pick up the max one in the end. 
// An important thing to note is, root of every subtree need to return maximum 
// path sum such that at most one child of root is involved. This is needed for 
// parent function call. In below code, this sum is stored in ‘max_single’ and 
// returned by the recursive function.


// reference #1 => https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/
// reference #2 => https://www.youtube.com/watch?v=6cA_NDtpyz8

// Time cmplexity => 0(n) => number of nodes to traverse
// Space => 0(h) =>  height of tree
// Worst case => h recursive calls
// NOTE: bottom up approach
class Node{
    constructor(item) {
       this.left = null;
       this.right = null;
       this.data = item;
    }
}
   
// Root of the Binary Tree
let rootNode;

// get max path => can only be left or right child node(s), whichever is greatest
function getMaxPath(node){

    // Base Case
    if (node == null)
        return 0;

    // make recursive calls to the left and right subtree
    let leftChildNode = getMaxPath(node.left);
    let rightChildNode = getMaxPath(node.right);

    // get new max path
    let max_single = Math.max(Math.max(leftChildNode, rightChildNode) + node.data,
                              node.data);

    let max_top = Math.max(max_single, leftChildNode + rightChildNode + node.data);

    maxResult = Math.max(maxResult, max_top);

    return max_single;
}

function calculateMaxsum() {
    return calculateMaxSum(rootNode);
}

// Returns maximum path sum in tree with given root
function calculateMaxSum(node) {

    // need min_val because have negative nums in binary tree
    // otherwise may get incorrect outcome
    maxResult = Number.MIN_VALUE;

    // Compute and return result
    getMaxPath(node);
    return maxResult;
}
 
rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);

let stdout = calculateMaxsum();
function getResult(){
    return `The Max Path sum is ${stdout}`;
}
getResult();

// console.log("Max path sum is : " + calculateMaxsum());