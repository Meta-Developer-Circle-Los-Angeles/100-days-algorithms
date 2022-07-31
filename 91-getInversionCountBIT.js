// Title: Count inversions in an array | Set 3 (Using BIT)

// Subject:
// Inversion Count for an array indicates – how far (or close) the array is 
// from being sorted. If the array is already sorted then the inversion count 
// is 0. If the array is sorted in the reverse order that inversion count is 
// the maximum. 

// Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j. For 
// simplicity, we may assume that all elements are unique.

// Example:
// Input: arr[] = {8, 4, 2, 1}
// Output: 6
// Explanation: Given array has six inversions: (8,4), (4,2), (8,2), (8,1), (4,1), (2,1).     

// Input: arr[] = {3, 1, 2}
// Output: 2
// Explanation: Given array has two inversions: (3,1), (3,2).

// Reference #1 => https://tutorialspoint.dev/data-structure/advanced-data-structures/count-inversions-array-set-3-using-bit
// Reference #2 => https://www.geeksforgeeks.org/count-inversions-array-set-3-using-bit/
// reference #3 => https://www.youtube.com/watch?v=CWDQJGaN1gY
// reference #4 => https://github.com/mission-peace/interview/blob/master/src/com/interview/tree/FenwickTree.java
// Fenwick Tree Note(s): zero => dummy node w/ no information
// To get the parent node => flip the rightmost set bit
// ie., => binary representaton of 11 = 1011 => rightmost set bit flipped = 1010 = 10, hence
// 11's parent = 10
// Ex => How to get parent of 7 => 0(1) constant operation:
// 7 = 111 => 2's compliment of 7 => 2's = 000 + 1 (flip all bits + add 1) = 001
// & (and) 111
     //    001
     //    ---
     //    001
// then subtract above value from binary rep of 7:
// 111 - 001 = 6
// 7's parent => 6

// Time complexity 0(log n)

/**
* To get parent
* 1) 2's complement to get minus of index
* 2) AND this with index
* 3) Subtract that from index
*/
function getParent(index){
    return index -= index & (-index);
 }
 /**
 * To get next
 * 1) 2's complement of get minus of index
 * 2) AND this with index
 * 3) Add it to index
 */
 function getNext(index){
    return index += index & (-index);
 }
 
 function getSum(binaryIndexedTree = [], index){
     let sum = 0;
     // Traverse ancestors of BITree[index] 
     while (index > 0) {
        // Add current element of BITree to sum 
        sum += binaryIndexedTree[index];
        // Move index to parent node  
        index = getParent(index); 
     }
 
     return sum;
 }
 
 //update node from index+1 + all remaining nodes
 function updateBit(binaryIndexedTree = [], treeLen, index, value){
     treeLen = binaryIndexedTree.length;
     while(index <= treeLen){
         binaryIndexedTree[index] += value;
         index = getNext(index);
     }
 
 }
 
 
 function getInversionCount(arr = [], arrLen){
     arrLen = arr.length;
     let inversionCount = 0;
     let maxElementInArr = 0;
 
     for(let i = 0; i < arrLen; i++){
         if(maxElementInArr < arr[i]){
             maxElementInArr = arr[i];
         }
     }
     // elements can be directly be 
     // used as index w/ + 1
     // let BIT = maxElementInArr + 1;
     let BIT = Array.from({length: maxElementInArr + 1}, (_, i) => 0);
 
     for(let i = 1; i <= maxElementInArr; i++){
         BIT[i] = 0;
     } 
     // Traverse all elements from right
     for(let i = arrLen - 1; i >= 0; i--){
         // all elenents < arr[i]
         inversionCount += getSum(BIT, arr[i]-1);
         // current element gets added to BIT
         updateBit(BIT, maxElementInArr, arr[i], 1 )
 
     } 
 
     return inversionCount;
 }
 
 
 getInversionCount([8, 4, 2, 1]);