# Subject:
# Given an array of size n and multiple values around which we need to 
# left rotate the array. How to quickly print multiple left rotations?

# Example:
# Input : 
# arr[] = {1, 3, 5, 7, 9}
# k1 = 1
# k2 = 3
# k3 = 4
# k4 = 6
# Output : 
# 3 5 7 9 1
# 7 9 1 3 5
# 9 1 3 5 7
# 3 5 7 9 1

# Input : 
# arr[] = {1, 3, 5, 7, 9}
# k1 = 14 
# Output : 
# 9 1 3 5 7
# reference => https://tutorialspoint.dev/data-structure/listays/quickly-find-multiple-left-rotations-of-an-listay

def multLeftRotate(list, listLen, numRotate): 
    # print list after numRotations
    for i in range(numRotate, numRotate + listLen): 
        print(str(list[i % listLen]),
                         end = " ") 
  
# Driver Code 
list = [1, 3, 5, 7, 9] 
listLen = len(list) 
numRotate = 1; 
multLeftRotate(list, listLen, numRotate) 

numRotate = 3; 
multLeftRotate(list, listLen, numRotate) 

numRotate = 4; 
multLeftRotate(list, listLen, numRotate) 

numRotate = 6; 
multLeftRotate(list, listLen, numRotate) 
