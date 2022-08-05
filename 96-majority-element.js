// Title: Majority Element

// Subject:
// Given an array A of N elements. Find the majority element in the array. 
// A majority element in an array A of size N is an element that appears 
// more than N/2 times in the array.

// Example:
// Input:
// N = 3 
// A[] = {1,2,3} 
// Output:
// -1
// Explanation:
// Since, each element in 
// {1,2,3} appears only once so there 
// is no majority element.

// Reference => https://www.geeksforgeeks.org/majority-element/
// Time complexity => O(n2)
// Auxiliary Space: O(1)
function majorityElement(arr = []) {
    let arrLen = arr.length;
    let left = 0;
    let right = arrLen - 1;
    let maxCount = 0;
    let index = -1;
    let mid = Math.floor((left + right) / 2);
    for(let i = 0; i <= arr.length; i++){       
        let count = 0;
        let val1 = arr[i];
        for(let j = 0; j <= arr.length; j++){
            let val2 = arr[j];
            if(val1 == val2){
                count++;
            }
        }
        if(count > maxCount){
            maxCount = count;
            index = i;
        } 

    }
    if(maxCount > mid){
       return arr[index];
    } else {
        return -1;
    }
   
}

majorityElement([1,2,3]); // -1

majorityElement([ 1, 1, 2, 1, 3, 5, 1 ]); // 1

majorityElement([ 4, 4, 2, 4, 3, 5, 4 ]); // 4


// EX 2:
// Reference # 1 => https://www.youtube.com/watch?v=3Ng7KIiLlFE
// Reference # 2 => https://www.geeksforgeeks.org/majority-element/
// Time complexity => 0(nlogn)  => insert n # of elements into bin tree
class binNodeTree{
    constructor(){
        this.data = 0;
        this.count = 0;
        this.left = null;
        this.right = null;
    }
}

let maxCount = 0;

function newBinTreeNode(item) {
    let temp = new binNodeTree();
    temp.data = item;
    temp.count = 1;
    temp.left = temp.right = null;
    return temp;
}

function insertNewNodeIntoBinTree(binTreeNode, data) {
    if(binTreeNode == null){
        if(maxCount == 0){
            maxCount = 1;
        }
        return newBinTreeNode(data);
    }

    if(data < binTreeNode.data){
        binTreeNode.left = insertNewNodeIntoBinTree(binTreeNode.left, data);
    } else if (data > binTreeNode.data){
        binTreeNode.right = insertNewNodeIntoBinTree(binTreeNode.right, data);
    } else {
        binTreeNode.count++;
    }
    maxCount = Math.max(maxCount, binTreeNode.count);
    return binTreeNode;
}

function inOrderTraversalBinSearchTree(root, s){
    if(root !== null){
        inOrderTraversalBinSearchTree(root.left, s);
        if(root.count > (s / 2)){
            console.log(root.data);
        }
        inOrderTraversalBinSearchTree(root.right, s);
    }
}

function out(arr = []){
    let arrLen = arr.length;
    let rootNode = null;
    let result;
    
    for(i = 0; i < arrLen; i++){
       rootNode = insertNewNodeIntoBinTree(rootNode, arr[i]);
    }
    if(maxCount > (arrLen / 2)){
        let maxNum = inOrderTraversalBinSearchTree(rootNode, arrLen);
        maxNum = result;
    } else {
        console.log("There is no majority element");
    }
      return result;
}

out([ 1, 3, 3, 3, 2 ]);


