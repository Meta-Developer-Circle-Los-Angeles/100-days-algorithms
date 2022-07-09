// Title: Remove nodes on root to leaf paths of length < K

// Subject: 
// Given a Binary Tree and a number k, remove all nodes that lie only 
// on root to leaf path(s) of length smaller than k. If a node X lies 
// on multiple root-to-leaf paths and if any of the paths has path 
// length >= k, then X is not deleted from Binary Tree. In other 
// words a node is deleted if all paths going through it have lengths 
// smaller than k.

// Consider the following example Binary Tree 

// Example:
//                1
//            /      \
//          2          3
//       /     \         \
//     4         5        6
//   /                   /
//  7                   8 
// Input: Root of above Binary Tree
//        k = 4

// Output: The tree should be changed to following  
//            1
//         /     \
//       2          3
//      /             \
//    4                 6
//  /                  /
// 7                  8
// There are 3 paths 
// i) 1->2->4->7      path length = 4
// ii) 1->2->5        path length = 3
// iii) 1->3->6->8    path length = 4 
// There is only one path " 1->2->5 " of length smaller than 4.  
// The node 5 is the only node that lies only on this path, so 
// node 5 is removed.
// Nodes 2 and 1 are not removed as they are parts of other paths
// of length 4 as well.

// If k is 5 or greater than 5, then whole tree is deleted. 

// If k is 3 or less than 3, then nothing is deleted.

// reference #1 => https://www.youtube.com/watch?v=Gq7sdBJvyR8
// reference #1 => https://www.geeksforgeeks.org/remove-nodes-root-leaf-paths-length-k/
// Time complexity 0(n)
// Space complexity 0(1) constant space
class Node {
    constructor(leaf) {
      this.left = null;
      this.right = null;
      this.data = leaf;
    }
  }

let root;
// level => num of nodes on path 
// => increase level + 1 whenever going left/right
// remove nodes that are have path length < than k
function removePathNodesShorterThanKHelper(node, level, k){
    if (node == null){
        return null;
     }
    node.left = removePathNodesShorterThanKHelper(node.left, level + 1, k);
    node.right = removePathNodesShorterThanKHelper(node.right, level + 1, k);
    // if leaf node has no right/left child node && total path in aggregate < key
    if(node.left == null && node.right == null && level < k){
        return null;
    }
   
    return node;
}


function removePathNodesShorterThanK(node, k){
    return removePathNodesShorterThanKHelper(node, 1, k);
}


function printTreeInorder(node) 
{
    if (node != null) {
        printTreeInorder(node.left); 
        console.log(node.data + " ");
        printTreeInorder(node.right);
        
    }
}
 
let k = 4;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.left.left = new Node(7);
root.right.right = new Node(6);
root.right.right.left = new Node(8);
console.log("This is the original tree:");
printTreeInorder(root);
let res = removePathNodesShorterThanK(root, k);
console.log("This is the modified tree with removed leaf nodes:");
printTreeInorder(res);
