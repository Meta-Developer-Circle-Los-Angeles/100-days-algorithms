// Title; HeapSort

// Subject: Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.

// What is Binary Heap? 

// Let us first define a Complete Binary Tree. A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible (Source Wikipedia)
// A Binary Heap is a Complete Binary Tree where items are stored in a special order such that the value in a parent node is greater(or smaller) than the values in its two children nodes. The former is called max heap and the latter is called min-heap. The heap can be represented by a binary tree or array.

// Why array based representation for Binary Heap? 

// Since a Binary Heap is a Complete Binary Tree, it can be easily represented as an array and the array-based representation is space-efficient. If the parent node is stored at index I, the left child can be calculated by 2 * I + 1 and the right child by 2 * I + 2 (assuming the indexing starts at 0).

// How to “heapify” a tree?

// The process of reshaping a binary tree into a Heap data structure is known as ‘heapify’. A binary tree is a tree data structure that has two child nodes at max. If a node’s children nodes are ‘heapified’, then only ‘heapify’ process can be applied over that node. A heap should always be a complete binary tree. 

// Starting from a complete binary tree, we can modify it to become a Max-Heap by running a function called ‘heapify’ on all the non-leaf elements of the heap. i.e. ‘heapify’ uses recursion.

// Example:
//         30(0)                 
//        /   \         
// 70(1)   50(2)

// Child (70(1)) is greater than the parent (30(0))

// Swap Child (70(1)) with the parent (30(0))

//         70(0)                 
//        /   \         
//  30(1)   50(2)

// Additional references:
// Reference #1 => https://www.geeksforgeeks.org/heap-sort/
// Reference #2 => https://www.interviewkickstart.com/learn/heap-sort
// Reference #3 => https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php


// top of tree => largest num/value
function heapify(arr, i) {
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    let largestValue = i;

    if (leftChild < arrLen && arr[leftChild] > arr[largestValue]) {
        largestValue = leftChild;
    }

    if (rightChild < arrLen && arr[rightChild] > arr[largestValue]) {
        largestValue = rightChild;
    }

    if (largestValue != i) {
        swap(arr, i, largestValue);
        heapify(arr, largestValue);
    }
}

function swap(arr, index_A, index_B) {
    let temp =arr[index_A];

    arr[index_A] = arr[index_B];
    arr[index_B] = temp;
}

function heapSort(arr) {   
    arrLen = arr.length;

    for (let i = Math.floor(arrLen / 2); i >= 0; i -= 1) {
        heapify(arr, i);
      }

    for (let i = arr.length - 1; i > 0; i--) {
       swap(arr, 0, i);
       arrLen--;
       heapify(arr, 0);
    }
}

function result(arr){
    heapSort(arr);
    return arr;
}
result([4, 10, 3, 5, 1]);