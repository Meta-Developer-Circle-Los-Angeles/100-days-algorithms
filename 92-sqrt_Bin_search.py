
# Title: Square root of an integer

# Subject:
# Given an integer x, find it’s square root. If x is not a perfect square, then return floor(√x).

# Example:
# Input: x = 4
# Output: 2
# Explanation:  The square root of 4 is 2.

# Input: x = 11
# Output: 3
# Explanation:  The square root of 11 lies in between
# 3 and 4 so floor of the square root is 3.

# Time complexity: O(log n)
def squareRootBinSearch(int):
    if(int == 0 or int == 1):
        return int
    left = 0
    right = int
    while(left <= right):
        mid = (left + right) // 2
        if(mid * mid == int):
            return mid
        if (mid * mid < int):
            left = mid + 1
            result = left
        if (mid * mid > int):
            right = mid - 1
            result = right
    
    return result


squareRootBinSearch(4)
squareRootBinSearch(11)