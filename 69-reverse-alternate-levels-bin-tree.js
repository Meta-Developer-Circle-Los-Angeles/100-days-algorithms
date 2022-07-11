// Title: Reverse alternate levels of a perfect binary tree

// Subject:
// Given a Perfect Binary Tree, reverse the alternate level nodes of the binary tree. 

// Example:
// Given tree: 
//                a
//             /     \
//            b       c
//          /  \     /  \
//         d    e    f    g
//        / \  / \  / \  / \
//        h  i j  k l  m  n  o 

// Modified tree:
//                a
//             /     \
//            c       b
//          /  \     /  \
//         d    e    f    g
//        / \  / \  / \  / \
//       o  n m  l k  j  i  h 


// reference => https://www.geeksforgeeks.org/reverse-alternate-levels-binary-tree/

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function initialOrder(root1,  root2 , level){

   if (root1 == null || root2 == null){
      return;
   } 
    
   // Swap subtrees if level is even...ie., 2nd & 4th levels in this case
   if (level % 2 == 0) {
       let temp = root1.key;
       root1.key = root2.key;
       root2.key = temp;
   }

   // Recursion for left and right subtrees
   initialOrder(root1.left, root2.right, level + 1);
   initialOrder(root1.right, root2.left, level + 1);
}

function callinitialOrder(root) {
   initialOrder(root.left, root.right, 0);
}

function printInitialAndModifiedTrees(root) {
   if (root == null){
      return;
    }
    printInitialAndModifiedTrees(root.left);
    console.log(root.key);
    printInitialAndModifiedTrees(root.right);
}

function createNewNodeUtilFunc(key) {
    let temp = new Node();
    temp.left = temp.right = null;
    temp.key =  key;
    return temp;
}


let root = createNewNodeUtilFunc('a');
root.left = createNewNodeUtilFunc('b');
root.right = createNewNodeUtilFunc('c');
root.left.left = createNewNodeUtilFunc('d');
root.left.right = createNewNodeUtilFunc('e');
root.right.left = createNewNodeUtilFunc('f');
root.right.right = createNewNodeUtilFunc('g');
root.left.left.left = createNewNodeUtilFunc('h');
root.left.left.right = createNewNodeUtilFunc('i');
root.left.right.left = createNewNodeUtilFunc('j');
root.left.right.right = createNewNodeUtilFunc('k');
root.right.left.left = createNewNodeUtilFunc('l');
root.right.left.right = createNewNodeUtilFunc('m');
root.right.right.left = createNewNodeUtilFunc('n');
root.right.right.right = createNewNodeUtilFunc('o');

function out(){
    let msg1 = "Inorder Traversal of given tree";
    console.log(msg1);
    printInitialAndModifiedTrees(root);
    callinitialOrder(root);
    let msg2 = "Inorder Traversal of modified tree"
    console.log(msg2);
    printInitialAndModifiedTrees(root); 
}

let stdout = out();
stdout;



// Subject:
// Given a Perfect Binary Tree, reverse the alternate level nodes of the binary tree. 

// Example:
// Given tree: 
//                a
//             /     \
//            b       c
//          /  \     /  \
//         d    e    f    g
//        / \  / \  / \  / \
//        h  i j  k l  m  n  o 

// Modified tree:
//                a
//             /     \
//            c       b
//          /  \     /  \
//         d    e    f    g
//        / \  / \  / \  / \
//       o  n m  l k  j  i  h 


// reference => https://www.geeksforgeeks.org/reverse-alternate-levels-binary-tree/

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function initialOrder(root1,  root2 , level){

   if (root1 == null || root2 == null){
      return;
   } 
    
   // Swap subtrees if level is even...ie., 2nd & 4th levels in this case
   if (level % 2 == 0) {
       let temp = root1.key;
       root1.key = root2.key;
       root2.key = temp;
   }

   // Recursion for left and right subtrees
   initialOrder(root1.left, root2.right, level + 1);
   initialOrder(root1.right, root2.left, level + 1);
}

function callinitialOrder(root) {
   initialOrder(root.left, root.right, 0);
}

function printInitialAndModifiedTrees(root) {
   if (root == null){
      return;
    }
    printInitialAndModifiedTrees(root.left);
    console.log(root.key);
    printInitialAndModifiedTrees(root.right);
}

function createNewNodeUtilFunc(key) {
    let temp = new Node();
    temp.left = temp.right = null;
    temp.key =  key;
    return temp;
}


let root = createNewNodeUtilFunc('a');
root.left = createNewNodeUtilFunc('b');
root.right = createNewNodeUtilFunc('c');
root.left.left = createNewNodeUtilFunc('d');
root.left.right = createNewNodeUtilFunc('e');
root.right.left = createNewNodeUtilFunc('f');
root.right.right = createNewNodeUtilFunc('g');
root.left.left.left = createNewNodeUtilFunc('h');
root.left.left.right = createNewNodeUtilFunc('i');
root.left.right.left = createNewNodeUtilFunc('j');
root.left.right.right = createNewNodeUtilFunc('k');
root.right.left.left = createNewNodeUtilFunc('l');
root.right.left.right = createNewNodeUtilFunc('m');
root.right.right.left = createNewNodeUtilFunc('n');
root.right.right.right = createNewNodeUtilFunc('o');

function out(){
    let msg1 = "Inorder Traversal of given tree";
    console.log(msg1);
    printInitialAndModifiedTrees(root);
    callinitialOrder(root);
    let msg2 = "Inorder Traversal of modified tree"
    console.log(msg2);
    printInitialAndModifiedTrees(root); 
}

let stdout = out();
stdout;

