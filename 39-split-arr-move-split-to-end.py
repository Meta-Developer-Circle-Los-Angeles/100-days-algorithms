# Subject:
# There is a given array and split it from a specified position, and move the first part of the array add to the end. 
 
#  Example:
#  Input : arr[] = {12, 10, 5, 6, 52, 36}
#             k = 2
# Output : arr[] = {5, 6, 52, 36, 12, 10}
# Explanation : Split from index 2 and first 
# part {12, 10} add to the end .

# Input : arr[] = {3, 1, 2}
#            k = 1
# Output : arr[] = {1, 2, 3}
# Explanation : Split from index 1 and first
# part add to the end.

def splitList(list, k):
    cList = list.copy()
    splitRight = cList[k:] # [5, 6, 52, 36]
    splitLeft = list[:k] # 12, 10
    res = splitRight + splitLeft 
    print("The list {} has been split from the left at index {}".format(res,k))
    
splitList([12, 10, 5, 6, 52, 36], 2)
splitList([3, 1, 2], 1)