# Subject:
# Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements. 


# Input :  arr[] = [1, 2, 3, 4, 5, 6, 7]
# d = 2
# Output : arr[] = [3, 4, 5, 6, 7, 1, 2] 



# rotate([1, 2, 3, 4, 5, 6, 7], 2);
# rotate([1, 2, 3, 4, 5, 6, 7], 3);

# reference => https://www.geeksforgeeks.org/array-rotation/

def rotate(list, d):
    List = list.index(d)
    new_list = []
    new_list = list[List+1:]+list[0:List+1] 
    print("The original list {} has been rotated by {} elements, therby creating a new list {}".format(list, d, new_list))

rotate([1, 2, 3, 4, 5, 6, 7], 2)
rotate([1, 2, 3, 4, 5, 6, 7], 3)