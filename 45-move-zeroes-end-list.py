# Title: Move all zeroes to end of array

# Subject: Given an array of random numbers, Push all the zero’s of a given array to the 
# end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, 
# it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements 
# should be same. Expected time complexity is O(n) and extra space is O(1).

# Example:
# Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
# Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

# Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
# Output : arr[] = {1, 2, 3, 6, 0, 0, 0};


# reference => https://www.w3resource.com/python-exercises/challenges/1/python-challenges-1-exercise-27.php
def moveAllZeroes(list):
    zeroes = [0 for i in range(list.count(0))]
    newList = [ i for i in list if i != 0]
    newList.extend(zeroes)
    print("All zeroes in the {} have been placed at the end {} ".format(list,newList))
   

moveAllZeroes([1, 2, 0, 4, 3, 0, 5, 0])
moveAllZeroes([1, 2, 0, 0, 0, 3, 6])