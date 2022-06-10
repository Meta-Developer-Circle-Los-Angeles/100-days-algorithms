
# Subject:
# Given an array (or string), the task is to reverse the array/string.


# Example:
# Input  : arr[] = {1, 2, 3}
# Output : arr[] = {3, 2, 1}

# Input :  arr[] = {4, 5, 1, 2}
# Output : arr[] = {2, 1, 5, 4}

def reverseList(list):
    listReverse = list.copy()
    listReverse.reverse()
    for i in range(len(listReverse)):
        res = listReverse[i]
        print(res, end = " ")

reverseList([1, 2, 3])


