// Title: Print Nodes in Top View of Binary Tree
//
// Subject:
// Top view of a binary tree is the set of nodes visible when the tree is
// viewed from the top. Given a binary tree, print the top view of it.
// The output nodes can be printed in any order.
//
// A node x is there in output if x is the topmost node at its horizontal
// distance. Horizontal distance of left child of a node x is equal to horizontal
// distance of x minus 1, and that of right child is horizontal distance of x plus 1.
//
// Example:
//        1
//     /     \
//    2       3
//   /  \    / \
//  4    5  6   7
// Top view of the above binary tree is
// 4 2 1 3 7
//
//         1
//       /   \
//     2       3
//       \
//         4
//           \
//             5
//              \
//                6
// Top view of the above binary tree is
// 2 1 3 6


// Reference => https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/
class Node {
    constructor(data) {
      this.data = data;
      this.left = this.right = null;
      this.zeroRootHorizontal = 0;
    }
  }


function getTopTreeView(root) {
    if (root == null){
       return;
    }

    let levelOrderQueueStore = [];
    let sortedTreeMapOndataValue = new Map();
    let zeroRootHorizontal = 0;

    root.zeroRootHorizontal = zeroRootHorizontal;
    levelOrderQueueStore.push(root);

    while (levelOrderQueueStore.length != 0) {
       root = levelOrderQueueStore[0];
       zeroRootHorizontal = root.zeroRootHorizontal;
    if(!sortedTreeMapOndataValue.has(zeroRootHorizontal)){
        sortedTreeMapOndataValue.set(zeroRootHorizontal, root.data);
    }
        // if (root.left != null) {
    if (root.left != null) {
        root.left.zeroRootHorizontal = zeroRootHorizontal - 1;
        levelOrderQueueStore.push(root.left);
    }

        // if (root.right != null) {
    if (root.right != null) {
        root.right.zeroRootHorizontal = zeroRootHorizontal + 1;
        levelOrderQueueStore.push(root.right);
    }
    levelOrderQueueStore.shift();
    }

    let arr = Array.from(sortedTreeMapOndataValue);
    arr.sort((a,b) => {
       return a[0]-b[0];
    });
    for(let [key,val] of arr.values()){
       console.log(val);
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

getTopTreeView(root); // 4 2 1 3 7

let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.right = new Node(4);
root2.left.right.right = new Node(5);
root2.left.right.right.right = new Node(6);

getTopTreeView(root2); // 2 1 3 6
