// Title: Bottom View of a Binary Tree

// Subject: Given a Binary Tree, we need to print the bottom view from left to 
// right. A node x is there in output if x is the bottommost node at its 
// horizontal distance. The horizontal distance of the left child of a node x 
// is equal to a horizontal distance of x minus 1, and that of a right child is 
// the horizontal distance of x plus 1

// Example:
//                       20
//                     /    \
//                   8       22
//                 /   \      \
//               5      3      25
//                     / \      
//                   10    14

// For the above tree, the output should be 5, 10, 3, 14, 25.

// If there are multiple bottom-most nodes for a horizontal distance from the 
// root, then print the later one in the level traversal. For example, in the 
// below diagram, 3 and 4 are both the bottom-most nodes at a horizontal distance 
// of 0, we need to print 4. 

// 				              20
//                     /    \
//                   8       22
//                 /   \    /   \
//               5      3 4     25
//                     / \      
//                   10    14                  

// For the above tree, the output should be 5 10 4 14 25.     


// Reference 1 => https://www.youtube.com/watch?v=ZyWh2v-74QI
// Reference 2=> https://www.geeksforgeeks.org/bottom-view-binary-tree/
 
class Node {
  
  constructor(key) {
    this.data = key; 
    this.zeroRootHorizonal = 1000000; 
    this.left = null; 
    this.right = null;
  }
}

class BinTree {
  // Inherit from parent class
  constructor(node) {
    this.root = node;
  }

  getBottomTreeView() {
    if (this.root == null) return;

    let zeroRootHorizonal = 0;

    let sortedTreeMapOnKeyValue = {};

    let levelOrderQueueStore = [];

    this.root.zeroRootHorizonal = zeroRootHorizonal;
    levelOrderQueueStore.push(this.root);

    while (levelOrderQueueStore.length != 0) {
      let temp = levelOrderQueueStore.shift();

      zeroRootHorizonal = temp.zeroRootHorizonal;

      sortedTreeMapOnKeyValue[zeroRootHorizonal] = temp.data;

      if (temp.left != null) {
        temp.left.zeroRootHorizonal = zeroRootHorizonal - 1;
        levelOrderQueueStore.push(temp.left);
      }

      if (temp.right != null) {
        temp.right.zeroRootHorizonal = zeroRootHorizonal + 1;
        levelOrderQueueStore.push(temp.right);
      }
    }

    for (const [key, value] of Object.entries(sortedTreeMapOnKeyValue).sort(
      (a, b) => a[0] - b[0]
    )) {
      console.log(value + " ");
    }
  }
}

let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
let tree = new BinTree(root);

tree.getBottomTreeView();


