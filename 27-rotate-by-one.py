# Subject: Given an array, cyclically rotate the array clockwise by one. 

# Example:
# Input:  arr[] = {1, 2, 3, 4, 5}
# Output: arr[] = {5, 1, 2, 3, 4}

# Reference => https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/


def rotateListByOne(list):
    rotatedList = list[:] = list[-1:] + list[:-1]
    print("{}".format(rotatedList))

rotateListByOne([1, 2, 3, 4, 5])