// Title: Square root of an integer

// Subject:
// Given an integer x, find it’s square root. If x is not a perfect square, then return floor(√x).

// Example:
// Input: x = 4
// Output: 2
// Explanation:  The square root of 4 is 2.

// Input: x = 11
// Output: 3
// Explanation:  The square root of 11 lies in between
// 3 and 4 so floor of the square root is 3.


function squareRoot(int){
  let sqrt = Math.sqrt(int);
  let floorSqrt = Math.floor(sqrt);
  return floorSqrt;
}


squareRoot(4);
squareRoot(11);

// Reference => https://www.geeksforgeeks.org/square-root-of-an-integer/
// Time Complexity: O(√ n)
function squareRoot2(int){
    
    if(int == 0 || int == 1){
        return int;
    }
    let numToMultiply = 1;
    let result = 1;
    while(result <= int){
       numToMultiply++;
       result = numToMultiply * numToMultiply;
    }

    return numToMultiply - 1;
}

squareRoot2(4);
squareRoot2(11);

// Time complexity: O(log n)
function squareRootBinSearch(int){
    if(int == 0 || int == 1){
        return int;
    }
    let left = 0;
    let right = int;
    let result;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(mid * mid == int){
            return mid;
        } 
        if (mid * mid < int) {
            left = mid + 1;
            result = left;
        }

        if (mid * mid > int){
            right = mid - 1;
            result = right;
        }
    }
    return result;
}

squareRootBinSearch(4);
squareRootBinSearch(11);