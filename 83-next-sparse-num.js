// Title: Find Next Sparse Number

// Subject:
// A number is Sparse if there are no two adjacent 1s in its binary representation. 
// For example 5 (binary representation: 101) is sparse, 
// but 6 (binary representation: 110) is not sparse. 
// Given a number x, find the smallest Sparse number which greater than or equal 
// to x.

// Example:
// Input: x = 6
// Output: Next Sparse Number is 8 => 00001000

// Input: x = 4
// Output: Next Sparse Number is 4

// Input: x = 38
// Output: Next Sparse Number is 40

// Input: x = 44
// Output: Next Sparse Number is 64

// Reference => https://www.youtube.com/watch?v=foL8j1EbJYI
// simple solution iterate starting from num => check for next sparse num
// Time complexity => isSparse() => 0(log x) => overall => 0(x log x)
// Space complexity => 0(1) => 0(1)
// function isSparse(num) {
//     let nextSparseNum = 0;
//     // find smallest Sparse number >= num 
//     while(1){
//         if(isSparse(num)){
//             return num;
//         } else {
//             num++;
//         }
//     }

// }

// isSparse(6)


// Efficient Solution:
// Reference #1 => https://www.youtube.com/watch?v=foL8j1EbJYI
// Reference #2 => https://www.geeksforgeeks.org/given-a-number-find-next-sparse-number/

function nextSparseNum(num) {
    // find + store binary representation of num
    // binStore[0] => LSB => least significant bit
    // next bit => binStore[1]
    let binStore = new Array();

    while(num != 0){
        binStore.push(num & 1);
        num >>= 1;
    }

    // add extra bit in case that there is an extra bit in final result
    binStore.push(0);

    binSize = binStore.length;

    let finalPosition = 0;

    // interate from 2md bit next to binStore[0]
    for(let i = 1; i < binSize - 1; i++){
        // if 2 adjacent set bits + next bit => 0
        if (binStore[i] == 1 &&
            binStore[i - 1] == 1 &&
            binStore[i + 1] != 1){
             
           // update mext bit to 1 
            binStore[i + 1] = 1;
            // make all bits to the right of this bit 0
            // until arriving @ the smallest next sparse number
            for(let j = i; j >= finalPosition; j--){
                binStore[j] = 0;
            }
            finalPosition = i + 1;
        }
    }

    let res = 0;
    for(let i = 0; i < binSize; i++){
        res += binStore[i] * (1 << i);
    }
    return res;
}


nextSparseNum(6);